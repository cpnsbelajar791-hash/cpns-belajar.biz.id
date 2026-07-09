import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Brain, Users } from 'lucide-react';
export function CategorySection() {
  const categories = [
  {
    id: 'twk',
    title: 'TWK',
    subtitle: 'Tes Wawasan Kebangsaan',
    description:
    'Kuasai materi pilar negara, nasionalisme, integritas, dan bela negara dengan soal-soal yang ter-update sesuai kisi-kisi terbaru.',
    icon: <Flag className="w-8 h-8 text-navy-dark" />
  },
  {
    id: 'tiu',
    title: 'TIU',
    subtitle: 'Tes Intelegensia Umum',
    description:
    'Tingkatkan kecepatan dan ketepatan dalam menjawab soal verbal, numerik, dan figural melalui latihan berulang.',
    icon: <Brain className="w-8 h-8 text-navy-dark" />
  },
  {
    id: 'tkp',
    title: 'TKP',
    subtitle: 'Tes Karakteristik Pribadi',
    description:
    'Pahami pola jawaban dengan skor tertinggi (5) untuk berbagai situasi pelayanan publik, jejaring kerja, dan profesionalisme.',
    icon: <Users className="w-8 h-8 text-navy-dark" />
  }];

  return (
    <section id="kategori" className="py-24 bg-cream-surface">
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
            
            Pilih area latihan yang paling menentukan skor.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) =>
          <motion.div
            key={category.id}
            className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
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
              delay: index * 0.1
            }}>
            
              <div className="w-16 h-16 rounded-2xl bg-cream-warm flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy-dark mb-1">
                {category.title}
              </h3>
              <p className="text-gold font-medium mb-4">{category.subtitle}</p>
              <p className="text-text-muted leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}