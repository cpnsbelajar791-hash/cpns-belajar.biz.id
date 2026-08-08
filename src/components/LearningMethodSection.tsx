import { motion } from 'framer-motion';
import { ListOrdered, Target, Lightbulb } from 'lucide-react';
export function LearningMethodSection() {
  const methods = [
  {
    icon: <ListOrdered className="w-6 h-6 text-navy-dark" />,
    title: '1. Ikuti urutan materinya',
    description:
    'Kurikulum sudah disusun dari dasar ke tingkat lanjut. Kamu tinggal jalan — tidak perlu lagi menebak-nebak hari ini sebaiknya belajar apa.'
  },
  {
    icon: <Target className="w-6 h-6 text-navy-dark" />,
    title: '2. Kejar target tiap sesi',
    description:
    'Setiap sesi latihan punya target nilai yang mengacu pada ambang batas SKD. Progresmu jadi terukur, bukan sekadar merasa sudah belajar.'
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-navy-dark" />,
    title: '3. Bedah pembahasannya',
    description:
    'Salah saat latihan itu wajar — yang penting kamu paham kenapa salah. Di titik inilah nilai biasanya naik paling cepat.'
  }];

  return (
    <section id="metode" className="py-24 bg-cream-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-navy-dark mb-6"
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

            Belajar CPNS Tanpa Bingung Mulai dari Mana
          </motion.h2>
          <motion.p
            className="text-lg text-text-muted leading-relaxed"
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
              delay: 0.1
            }}>

            Tiga langkah yang bisa kamu ulang tiap hari, bahkan di sela jam
            kerja atau kuliah.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-border -z-10"></div>

          {methods.map((method, index) =>
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
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
              delay: index * 0.2
            }}>

              <div className="w-24 h-24 rounded-full bg-white border-4 border-cream-surface shadow-md flex items-center justify-center mb-6 relative z-10" aria-hidden="true">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-dark mb-3">
                {method.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {method.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
