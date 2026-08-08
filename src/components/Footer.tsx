import { CtaLink } from './CtaLink';
import { PRIVACY_URL, TERMS_URL } from '../config/site';

const navLinks = [
{ label: 'Materi SKD: TWK, TIU, TKP', trackingId: 'footer_materi' },
{ label: 'Simulasi CAT BKN', trackingId: 'footer_simulasi' },
{ label: 'Cara Belajar CPNS', trackingId: 'footer_metode' },
{ label: 'Pertanyaan Umum', trackingId: 'footer_faq' }];

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <CtaLink
              trackingId="footer_logo"
              className="inline-block font-serif text-2xl font-bold text-white mb-4 hover:text-gold transition-colors">

              CPNS Mastery
            </CtaLink>
            <p className="max-w-md text-sm leading-relaxed mb-6">
              Platform latihan soal CPNS untuk persiapan Seleksi Kompetensi
              Dasar: TWK, TIU, dan TKP lengkap dengan pembahasan, plus simulasi
              CAT BKN 110 soal dalam 100 menit. Belajar terarah, progres
              terukur, siap sebelum hari-H.
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <p className="text-white font-medium mb-4">Navigasi</p>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) =>
              <li key={link.trackingId}>
                  <CtaLink
                  trackingId={link.trackingId}
                  className="hover:text-gold transition-colors">

                    {link.label}
                  </CtaLink>
                </li>
              )}
            </ul>
          </nav>

          <nav aria-label="Informasi legal">
            <p className="text-white font-medium mb-4">Legal</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={TERMS_URL} className="hover:text-gold transition-colors">
                  Syarat &amp; Ketentuan
                </a>
              </li>
              <li>
                <a href={PRIVACY_URL} className="hover:text-gold transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <CtaLink
                  trackingId="footer_kontak"
                  className="hover:text-gold transition-colors">

                  Kontak Kami
                </CtaLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            &copy; {new Date().getFullYear()} CPNS Mastery. Hak Cipta
            Dilindungi.
          </p>
          <p>Dibuat untuk pejuang NIP di seluruh Indonesia.</p>
        </div>
      </div>
    </footer>);

}
