import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
        <a href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl font-bold text-white group-hover:text-gold transition-colors">
            CPNS Mastery
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#kategori"
            className="text-white/80 hover:text-gold transition-colors text-sm font-medium">
            
            Kategori
          </a>
          <a
            href="#latihan"
            className="text-white/80 hover:text-gold transition-colors text-sm font-medium">
            
            Latihan
          </a>
          <a
            href="#metode"
            className="text-white/80 hover:text-gold transition-colors text-sm font-medium">
            
            Metode
          </a>
          <a
            href="/"
            className="bg-gold hover:bg-gold-hover text-navy-dark px-6 py-2.5 rounded-full font-medium transition-colors">
            
            Mulai
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu">
          
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
          
            <nav className="flex flex-col px-6 py-4 gap-4">
              <a
              href="#kategori"
              className="text-white/80 hover:text-gold py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}>
              
                Kategori
              </a>
              <a
              href="#latihan"
              className="text-white/80 hover:text-gold py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}>
              
                Latihan
              </a>
              <a
              href="#metode"
              className="text-white/80 hover:text-gold py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}>
              
                Metode
              </a>
              <a
              href="/"
              className="bg-gold text-navy-dark px-6 py-3 rounded-full font-medium text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}>
              
                Mulai
              </a>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}