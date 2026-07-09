import React from 'react';
export function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a
              href="/"
              className="inline-block font-serif text-2xl font-bold text-white mb-4">
              
              CPNS Mastery
            </a>
            <p className="max-w-md text-sm leading-relaxed mb-6">
              Platform persiapan seleksi CPNS SKD premium. Belajar lebih
              terarah, bangun strategi, kecepatan, dan konsistensi menuju nilai
              aman.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Navigasi</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#kategori"
                  className="hover:text-gold transition-colors">
                  
                  Kategori Latihan
                </a>
              </li>
              <li>
                <a
                  href="#latihan"
                  className="hover:text-gold transition-colors">
                  
                  Simulasi SKD
                </a>
              </li>
              <li>
                <a href="#metode" className="hover:text-gold transition-colors">
                  Metode Belajar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-gold transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gold transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gold transition-colors">
                  Kontak Kami
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            &copy; {new Date().getFullYear()} CPNS Mastery. Hak Cipta
            Dilindungi.
          </p>
          <p>Dibuat untuk pejuang NIP.</p>
        </div>
      </div>
    </footer>);

}