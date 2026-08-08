import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { COOKIE_CONSENT_KEY, PRIVACY_URL } from '../config/site';
import { denyAnalyticsConsent, grantAnalyticsConsent } from '../lib/analytics';

/** localStorage bisa melempar error di mode privat — semua akses dibungkus. */
function readConsent(): string | null {
  try {
    return localStorage.getItem(COOKIE_CONSENT_KEY);
  } catch {
    return null;
  }
}

function saveConsent(value: 'granted' | 'denied') {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
  } catch {
    /* Persetujuan tidak bisa disimpan; banner akan muncul lagi di kunjungan berikutnya. */
  }
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hanya tampil kalau pengunjung belum pernah memilih.
    if (readConsent() === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    saveConsent('granted');
    grantAnalyticsConsent();
    setIsVisible(false);
  };

  const handleDecline = () => {
    saveConsent('denied');
    denyAnalyticsConsent();
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible &&
      <motion.div
        role="dialog"
        aria-live="polite"
        aria-label="Pemberitahuan penggunaan cookie"
        initial={{
          opacity: 0,
          y: 24
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          y: 24
        }}
        transition={{
          duration: 0.35
        }}
        className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6">

          <div className="max-w-4xl mx-auto bg-navy-dark border border-white/10 rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 rounded-full bg-navy-soft border border-white/10 flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5 text-gold" aria-hidden="true" />
              </div>
              <p className="text-sm text-white/75 leading-relaxed">
                Kami memakai cookie untuk menyimpan progres latihanmu dan
                memahami bagian mana dari situs ini yang paling membantu.
                Selengkapnya di{' '}
                <a
                href={PRIVACY_URL}
                className="text-gold underline underline-offset-2 hover:text-gold-hover transition-colors">

                  Kebijakan Privasi
                </a>
                .
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
              type="button"
              onClick={handleDecline}
              className="px-4 py-2.5 text-sm font-medium text-white/60 hover:text-white transition-colors">

                Tolak
              </button>
              <button
              type="button"
              onClick={handleAccept}
              className="bg-gold hover:bg-gold-hover text-navy-dark px-7 py-2.5 rounded-full text-sm font-semibold transition-colors">

                OK, Saya Setuju
              </button>
            </div>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}
