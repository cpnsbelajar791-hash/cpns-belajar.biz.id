/** Helper tipis di atas gtag.js yang sudah dipasang dari index.html. */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Kirim event custom ke Google Analytics. Aman dipanggil walau gtag diblokir adblocker. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  window.gtag?.('event', name, params);
}

/** Aktifkan penyimpanan analytics setelah pengunjung menyetujui cookie (Consent Mode v2). */
export function grantAnalyticsConsent() {
  window.gtag?.('consent', 'update', {
    analytics_storage: 'granted'
  });
}

/** Pertahankan status denied secara eksplisit ketika pengunjung menolak cookie. */
export function denyAnalyticsConsent() {
  window.gtag?.('consent', 'update', {
    analytics_storage: 'denied'
  });
}
