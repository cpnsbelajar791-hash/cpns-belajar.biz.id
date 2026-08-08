/**
 * Satu sumber kebenaran untuk seluruh URL & identitas situs.
 * Ubah di sini kalau domain/route berpindah — komponen lain tidak perlu disentuh.
 */

/** Domain kanonik landing page (dipakai untuk canonical, OG, sitemap). */
export const SITE_URL = 'https://cpns-belajar.biz.id';

export const SITE_NAME = 'CPNS Mastery';

/**
 * Tujuan seluruh tombol & link aksi di landing page ini.
 * Semua CTA, menu navigasi, dan link footer diarahkan ke sini.
 */
export const LOGIN_URL = 'https://ayo.cpns-belajar.my.id/login';

/**
 * Halaman legal — dikecualikan dari redirect ke LOGIN_URL.
 *
 * CATATAN: kedua route ini masih mengembalikan 404 di aplikasi
 * (diverifikasi 8 Agustus 2026). Buat halamannya di app Next.js,
 * atau arahkan konstanta ini ke halaman lokal.
 */
export const PRIVACY_URL = 'https://ayo.cpns-belajar.my.id/privacy-policy';
export const TERMS_URL = 'https://ayo.cpns-belajar.my.id/term-agreement';

/** Kunci localStorage untuk menyimpan persetujuan cookie. */
export const COOKIE_CONSENT_KEY = 'cpns-mastery-cookie-consent';
