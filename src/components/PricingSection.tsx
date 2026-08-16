import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, RefreshCw, Clock } from 'lucide-react';
import { CtaLink } from './CtaLink';

/**
 * Bagian harga/payment. Seluruh isi kartu (nama, harga, fitur, tombol) diambil
 * live dari /api/pricing — proxy Vercel yang membaca halaman pricing CPNS Mastery.
 * Tidak ada harga/fitur yang di-hardcode di sini: perubahan di sumber otomatis
 * tampil di landing ini.
 */

type PricingFeature = {
  text: string;
  emphasized: boolean;
};

type PricingCard = {
  name: string;
  badge: string;
  recommended: boolean;
  featured: boolean;
  wide: boolean;
  price: string;
  priceUnit: string;
  duration: string;
  description: string;
  features: PricingFeature[];
  excluded: PricingFeature[];
  cta: string;
};

type PricingGroup = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  cards: PricingCard[];
};

type PricingResponse = {
  source: string;
  fetchedAt: string;
  groups: PricingGroup[];
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function PricingCardView({ card, index }: { card: PricingCard; index: number }) {
  const featured = card.featured;
  const base = 'relative rounded-2xl p-8 flex flex-col border transition-all overflow-hidden';
  const surface = featured
    ? 'bg-navy-dark text-white border-transparent shadow-xl md:p-10'
    : 'bg-white border-border shadow-sm hover:shadow-md';

  return (
    <motion.article
      className={`${base} ${surface}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}>
      {featured && (
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-gold/20 rounded-full blur-[90px] pointer-events-none"
          aria-hidden="true"></div>
      )}

      <div className="relative">
        <div className="flex items-center justify-between mb-6 gap-3">
          <span
            className={`inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full ${
              featured ? 'bg-gold/15 text-gold border border-gold/30' : 'bg-cream-warm text-navy-dark border border-border'
            }`}>
            {card.badge}
          </span>
          {card.recommended && (
            <span className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-gold text-navy-dark">
              Favorit
            </span>
          )}
        </div>

        <h3 className={`text-2xl font-serif font-bold mb-3 ${featured ? 'text-white' : 'text-navy-dark'}`}>
          {card.name}
        </h3>
        <p className={`text-sm leading-relaxed mb-6 ${featured ? 'text-white/70' : 'text-text-muted'}`}>
          {card.description}
        </p>

        <div className="flex items-baseline gap-2">
          <span className={`text-3xl md:text-4xl font-bold ${featured ? 'text-white' : 'text-navy-dark'}`}>
            {card.price}
          </span>
          {card.priceUnit && (
            <span className={`text-sm font-medium ${featured ? 'text-white/60' : 'text-text-muted'}`}>
              {card.priceUnit}
            </span>
          )}
        </div>
        <p className={`mt-1 text-xs flex items-center gap-1.5 ${featured ? 'text-white/50' : 'text-text-muted'}`}>
          <Clock className="w-3.5 h-3.5" aria-hidden="true" />
          {card.duration}
        </p>

        <ul className="mt-6 space-y-3 mb-8">
          {card.features.map((feature, i) => (
            <li key={i} className="flex gap-3 items-start">
              <Check
                className="w-5 h-5 mt-0.5 shrink-0 text-gold"
                aria-hidden="true"
              />
              <span
                className={`text-sm leading-relaxed ${
                  feature.emphasized
                    ? featured
                      ? 'text-gold font-semibold'
                      : 'text-navy-dark font-semibold'
                    : featured
                      ? 'text-white/80'
                      : 'text-text-muted'
                }`}>
                {feature.text}
              </span>
            </li>
          ))}
          {card.excluded.map((feature, i) => (
            <li key={`x-${i}`} className="flex gap-3 items-start">
              <X
                className={`w-5 h-5 mt-0.5 shrink-0 ${featured ? 'text-white/40' : 'text-text-muted/60'}`}
                aria-hidden="true"
              />
              <span className={`text-sm leading-relaxed ${featured ? 'text-white/45' : 'text-text-muted/70'}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <CtaLink
          trackingId={`pricing_${slugify(card.name)}`}
          className={`inline-block w-full text-center rounded-full px-6 py-3 font-semibold transition-colors mt-auto ${
            featured
              ? 'bg-gold hover:bg-gold-hover text-navy-dark'
              : 'border-2 border-gold text-navy-dark hover:bg-gold hover:text-navy-dark'
          }`}>
          {card.cta || 'Mulai'}
        </CtaLink>
      </div>
    </motion.article>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-border bg-white p-8 animate-pulse" aria-hidden="true">
      <div className="h-5 w-28 bg-border rounded-full mb-6"></div>
      <div className="h-7 w-40 bg-border rounded mb-3"></div>
      <div className="h-4 w-full bg-border rounded mb-2"></div>
      <div className="h-4 w-3/4 bg-border rounded mb-8"></div>
      <div className="h-9 w-32 bg-border rounded mb-6"></div>
      <div className="space-y-3">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-4 w-full bg-border rounded"></div>
        ))}
      </div>
      <div className="h-11 w-full bg-border rounded-full mt-8"></div>
    </div>
  );
}

export function PricingSection() {
  const [data, setData] = useState<PricingResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/pricing', { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const json = (await response.json()) as PricingResponse;
      if (!json.groups || !json.groups.length) throw new Error('Data kosong');
      setData(json);
    } catch {
      setError('Harga sementara tidak bisa dimuat. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const updatedLabel = data
    ? `Diperbarui ${new Date(data.fetchedAt).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}`
    : '';

  return (
    <section id="harga" className="py-24 bg-cream-warm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-gold">
              Harga live dari database
            </span>
          </div>

          <motion.h2
            className="text-3xl md:text-5xl font-serif font-bold text-navy-dark mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            Bayar Sesuai Kebutuhan Belajarmu
          </motion.h2>
          <motion.p
            className="text-lg text-text-muted leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            Mulai gratis, fokus pada satu topik, atau buka seluruh akses belajar dan
            tryout. Harga dan fitur di bawah tersinkron langsung dari aplikasi, jadi
            selalu yang terbaru.
          </motion.p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-10" aria-live="polite">
          {data && (
            <span className="text-xs text-text-muted flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {updatedLabel}
            </span>
          )}
          <button
            type="button"
            onClick={() => void load()}
            disabled={loading}
            className="text-xs font-semibold text-gold hover:text-gold-hover flex items-center gap-1.5 transition-colors disabled:opacity-50 disabled:cursor-wait"
            aria-label="Muat ulang harga">
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} aria-hidden="true" />
            Muat ulang
          </button>
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" aria-hidden="true">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-12" role="alert">
            <p className="text-text-muted mb-6">{error}</p>
            <button
              type="button"
              onClick={() => void load()}
              className="inline-block bg-gold hover:bg-gold-hover text-navy-dark px-8 py-3 rounded-full font-semibold transition-colors">
              Coba Lagi
            </button>
          </div>
        )}

        {data && (
          <div className="space-y-20">
            {data.groups.map((group) => (
              <div key={group.id || group.title}>
                <div className="text-center max-w-3xl mx-auto mb-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold">
                    {group.kicker}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy-dark mt-3 mb-4">
                    {group.title}
                  </h3>
                  {group.description && (
                    <p className="text-text-muted leading-relaxed">{group.description}</p>
                  )}
                </div>

                <div className={group.cards.length > 1 ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : 'max-w-4xl mx-auto'}>
                  {group.cards.map((card, index) => (
                    <PricingCardView key={card.name} card={card} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
