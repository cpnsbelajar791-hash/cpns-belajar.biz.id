import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CtaLink } from './CtaLink';

const navItems = [
{ label: 'Materi SKD', trackingId: 'nav_materi' },
{ label: 'Simulasi CAT BKN', trackingId: 'nav_simulasi' },
{ label: 'Cara Belajar', trackingId: 'nav_metode' }];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-dark/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <CtaLink trackingId="header_logo" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl font-bold text-white group-hover:text-gold transition-colors">
            CPNS Mastery
          </span>
        </CtaLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi utama">
          {navItems.map((item) =>
          <CtaLink
            key={item.trackingId}
            trackingId={item.trackingId}
            className="text-white/80 hover:text-gold transition-colors text-sm font-medium">

            {item.label}
          </CtaLink>
          )}
          <CtaLink
            trackingId="header_cta"
            className="bg-gold hover:bg-gold-hover text-navy-dark px-6 py-2.5 rounded-full font-medium transition-colors">

            Mulai Latihan
          </CtaLink>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}>

          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          className="absolute top-full left-0 right-0 bg-navy-dark shadow-xl border-t border-white/10 md:hidden">

            <nav className="flex flex-col px-6 py-4 gap-4" aria-label="Navigasi mobile">
              {navItems.map((item) =>
            <CtaLink
              key={item.trackingId}
              trackingId={`${item.trackingId}_mobile`}
              className="text-white/80 hover:text-gold py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}>

                {item.label}
              </CtaLink>
            )}
              <CtaLink
              trackingId="header_cta_mobile"
              className="bg-gold text-navy-dark px-6 py-3 rounded-full font-medium text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}>

                Mulai Latihan
              </CtaLink>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}
