import { useEffect } from 'react';
import { faqs } from '../data/faq';
import { SITE_URL } from '../config/site';

/**
 * Menyuntikkan schema FAQPage dari array `faqs` yang sama dengan yang dirender
 * FAQSection, sehingga teks di structured data selalu identik dengan teks di
 * halaman — syarat wajib Google untuk rich result FAQ.
 */
export function FaqJsonLd() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      inLanguage: 'id-ID',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
