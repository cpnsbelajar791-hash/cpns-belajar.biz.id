import React from 'react';
import { motion } from 'framer-motion';
import { ListOrdered, Target, Lightbulb } from 'lucide-react';
export function LearningMethodSection() {
  const methods = [
  {
    icon: <ListOrdered className="w-6 h-6 text-navy-dark" />,
    title: 'Materi berurutan',
    description:
    'Tidak perlu bingung mulai dari mana. Kurikulum disusun sistematis dari dasar hingga tingkat lanjut.'
  },
  {
    icon: <Target className="w-6 h-6 text-navy-dark" />,
    title: 'Target nilai yang jelas',
    description:
    'Setiap sesi latihan memiliki passing grade yang harus dicapai untuk memastikan kesiapanmu.'
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-navy-dark" />,
    title: 'Pembahasan yang tajam',
    description:
    'Bukan sekadar kunci jawaban. Pahami logika di balik setiap soal dengan penjelasan komprehensif.'
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
            
            Belajar lebih terarah. Urutannya jelas.
          </motion.h2>
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
            
              <div className="w-24 h-24 rounded-full bg-white border-4 border-cream-surface shadow-md flex items-center justify-center mb-6 relative z-10">
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