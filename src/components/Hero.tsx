import { motion } from 'framer-motion';
import { CtaLink } from './CtaLink';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-navy-dark overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}>

            <span className="inline-block py-1 px-3 rounded-full bg-navy-soft border border-white/10 text-gold text-sm font-medium mb-6 tracking-wide">
              Persiapan SKD CPNS 2026
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}>

            Latihan Soal CPNS 2026 <br className="hidden md:block" />
            <span className="text-gold">Lengkap dengan Pembahasan</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}>

            Kerjakan soal TWK, TIU, dan TKP dalam simulasi CAT BKN 110 soal /
            100 menit. Skor keluar begitu selesai, lengkap dengan pembahasan
            tiap nomor — kamu langsung tahu materi mana yang masih bocor.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.3
            }}>

            <CtaLink
              trackingId="hero_primary"
              className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-navy-dark px-8 py-4 rounded-full font-medium transition-colors text-lg">

              Mulai Latihan Sekarang
            </CtaLink>
            <CtaLink
              trackingId="hero_secondary"
              className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 rounded-full font-medium transition-colors text-lg">

              Lihat Materi SKD
            </CtaLink>
          </motion.div>

          <motion.p
            className="text-white/40 text-sm mt-6"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.6,
              delay: 0.45
            }}>

            Langsung jalan di browser HP — tanpa install aplikasi.
          </motion.p>
        </div>
      </div>
    </section>);

}
