import React from 'react';
import { motion } from 'framer-motion';
export function FinalCTA() {
  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight"
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5
          }}>
          
          Bangun kebiasaan latihan sebelum hari seleksi.
        </motion.h2>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5,
            delay: 0.2
          }}>
          
          <a
            href="/"
            className="inline-block bg-gold hover:bg-gold-hover text-navy-dark px-10 py-4 rounded-full font-bold transition-colors text-lg shadow-lg shadow-gold/20">
            
            Buka Latihan
          </a>
        </motion.div>
      </div>
    </section>);

}