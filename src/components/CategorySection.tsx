import { motion } from 'framer-motion';
import { Flag, Brain, Users } from 'lucide-react';
export function CategorySection() {
  const categories = [
  {
    id: 'twk',
    title: 'TWK',
    subtitle: 'Tes Wawasan Kebangsaan',
    meta: '30 soal · ambang batas 65',
    description:
    'Pilar negara, Pancasila, UUD 1945, bela negara, integritas, sampai Bahasa Indonesia. Materinya luas tapi polanya berulang — begitu hafal polanya, ini justru materi paling cepat diamankan.',
    icon: <Flag className="w-8 h-8 text-navy-dark" />
  },
  {
    id: 'tiu',
    title: 'TIU',
    subtitle: 'Tes Intelegensia Umum',
    meta: '35 soal · ambang batas 80',
    description:
    'Verbal (analogi, silogisme, penalaran analitis), numerik (deret angka, aritmetika, soal cerita), dan figural. Ambang batasnya paling tinggi dan paling sering menjegal — latihan berulang wajib di sini.',
    icon: <Brain className="w-8 h-8 text-navy-dark" />
  },
  {
    id: 'tkp',
    title: 'TKP',
    subtitle: 'Tes Karakteristik Pribadi',
    meta: '45 soal · ambang batas 166',
    description:
    'Pelayanan publik, jejaring kerja, sosial budaya, teknologi informasi, dan profesionalisme. Tidak ada jawaban salah, tapi tiap opsi bernilai 1–5. Kenali pola opsi bernilai 5 dan skormu naik drastis.',
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

            Kuasai 3 Materi yang Menentukan Lolos atau Tidaknya Kamu
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

            Ketiga nilai harus lewat ambang batas sekaligus. Nilai TIU 100 tidak
            bisa menutup TWK yang kurang 5 poin — jadi tidak ada materi yang
            boleh ditinggal.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) =>
          <motion.article
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

              <div className="w-16 h-16 rounded-2xl bg-cream-warm flex items-center justify-center mb-6" aria-hidden="true">
                {category.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy-dark mb-1">
                {category.title}
              </h3>
              <p className="text-gold font-medium">{category.subtitle}</p>
              <p className="text-text-muted text-sm font-medium mb-4">
                {category.meta}
              </p>
              <p className="text-text-muted leading-relaxed">
                {category.description}
              </p>
            </motion.article>
          )}
        </div>
      </div>
    </section>);

}
