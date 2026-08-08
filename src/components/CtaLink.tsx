import React from 'react';
import { LOGIN_URL } from '../config/site';
import { trackEvent } from '../lib/analytics';

type CtaLinkProps = {
  /** Tujuan link. Default: halaman login aplikasi. */
  href?: string;
  /** Penanda posisi tombol untuk pelaporan Google Analytics, mis. "hero_primary". */
  trackingId: string;
  className?: string;
  children: React.ReactNode;
  /** Aksi tambahan saat diklik, mis. menutup menu mobile. */
  onClick?: () => void;
  'aria-label'?: string;
};

/**
 * Satu-satunya jalur keluar landing page ini: seluruh tombol & link aksi
 * mengarah ke LOGIN_URL sekaligus tercatat sebagai event di Google Analytics.
 */
export function CtaLink({
  href = LOGIN_URL,
  trackingId,
  className,
  children,
  onClick,
  ...rest
}: CtaLinkProps) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        trackEvent('cta_click', {
          cta_location: trackingId,
          link_url: href
        });
        onClick?.();
      }}
      {...rest}>
      {children}
    </a>);

}
