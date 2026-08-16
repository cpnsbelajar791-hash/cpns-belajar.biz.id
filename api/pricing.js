/**
 * Vercel serverless function — proxy harga "live" dari halaman pricing CPNS Mastery.
 *
 * Landing page (cpns-belajar.biz.id) membaca endpoint ini sehingga perubahan harga,
 * fitur, maupun kartu paket di sumber otomatis ikut tampil — tidak ada data yang
 * di-hardcode di sisi landing.
 *
 * Sumber: https://cpns-pricing-landing.vercel.app/ (harga dirender server-side dari
 * database aplikasi, tanpa JSON API publik — diverifikasi 16 Agu 2026, semua
 * endpoint /api/* mengembalikan 404).
 */

const SOURCE_URL = 'https://cpns-pricing-landing.vercel.app/';

// Cache 5 menit di CDN Vercel, lalu boleh pakai versi lama sambil ambil yang baru.
const CACHE_CONTROL = 'public, s-maxage=300, stale-while-revalidate=600';

function decodeEntities(value) {
  return value
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function extract(pattern, html) {
  const match = html.match(pattern);
  return match ? decodeEntities(match[1]) : '';
}

/** Parse satu <article class="plan-card ..."> menjadi objek kartu paket. */
function parseArticle(articleHtml) {
  const classes = (articleHtml.match(/<article class="plan-card([^"]*)"/) || [])[1] || '';
  const priceRow = (articleHtml.match(/<div class="price-row">([\s\S]*?)<\/div>/) || [])[1] || '';
  const featuresHtml = (articleHtml.match(/<ul class="feature-list">([\s\S]*?)<\/ul>/) || [])[1] || '';
  const ctaMatch = articleHtml.match(/<a class="cta[^"]*"[^>]*>([\s\S]*?)<span/);

  const features = [];
  const excluded = [];
  const items = featuresHtml.match(/<li class="(included|excluded)">([\s\S]*?)<\/li>/g) || [];

  for (const item of items) {
    const state = /<li class="(included|excluded)">/.exec(item)[1];
    const span = item.match(
      /<span class="feature-mark"[^>]*>[\s\S]*?<\/span><span([^>]*)>([\s\S]*?)<\/span>/
    );
    if (!span) continue;
    const entry = {
      text: decodeEntities(span[2]),
      emphasized: span[1].includes('emphasized')
    };
    if (state === 'included') features.push(entry);
    else excluded.push(entry);
  }

  return {
    name: extract(/<h3>([\s\S]*?)<\/h3>/, articleHtml),
    badge: extract(/<span class="badge">([\s\S]*?)<\/span>/, articleHtml),
    recommended: /class="recommended"/.test(articleHtml),
    featured: classes.includes('featured'),
    wide: classes.includes('wide'),
    price: extract(/<strong>([\s\S]*?)<\/strong>/, priceRow),
    priceUnit: extract(/<span>([\s\S]*?)<\/span>/, priceRow),
    duration: extract(/<div class="duration">([\s\S]*?)<\/div>/, articleHtml),
    description: extract(/<p class="plan-description">([\s\S]*?)<\/p>/, articleHtml),
    features,
    excluded,
    cta: ctaMatch ? decodeEntities(ctaMatch[1]) : ''
  };
}

/** Parse seluruh halaman pricing menjadi daftar grup (section) + kartu paket. */
export function parsePricingHtml(html) {
  const groups = [];
  const sectionPattern = /<section class="section shell([^"]*)"(?: id="([^"]*)")?[^>]*>([\s\S]*?)<\/section>/g;
  let sectionMatch;

  while ((sectionMatch = sectionPattern.exec(html))) {
    const body = sectionMatch[3];
    if (!body.includes('plan-card')) continue;

    const heading = (body.match(/<div class="section-heading[^"]*">([\s\S]*?)<\/div>/) || [])[1] || '';
    const cards = [];
    const articlePattern = /<article class="plan-card[^"]*"[^>]*>[\s\S]*?<\/article>/g;
    let articleMatch;

    while ((articleMatch = articlePattern.exec(body))) {
      cards.push(parseArticle(articleMatch[0]));
    }

    groups.push({
      id: sectionMatch[2] || '',
      kicker: extract(/<span class="kicker">([\s\S]*?)<\/span>/, heading),
      title: extract(/<h2>([\s\S]*?)<\/h2>/, heading),
      description: extract(/<p>([\s\S]*?)<\/p>/, heading),
      cards
    });
  }

  return groups;
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const response = await fetch(SOURCE_URL, {
      headers: { 'user-agent': 'cpns-belajar-landing-bizid/1.0' }
    });
    if (!response.ok) throw new Error(`Sumber mengembalikan status ${response.status}`);

    const html = await response.text();
    const groups = parsePricingHtml(html);
    if (!groups.length) throw new Error('Tidak ditemukan kartu paket di halaman sumber');

    res.setHeader('Cache-Control', CACHE_CONTROL);
    res.status(200).json({
      source: SOURCE_URL,
      fetchedAt: new Date().toISOString(),
      groups
    });
  } catch (error) {
    res.status(502).json({
      error: 'Gagal mengambil data harga dari sumber',
      detail: String((error && error.message) || error)
    });
  }
}
