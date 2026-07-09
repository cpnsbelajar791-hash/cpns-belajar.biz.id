import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
export function FAQSection() {
  const faqs = [
  {
    question: 'Apa itu CPNS Mastery?',
    answer:
    'CPNS Mastery adalah platform pembelajaran khusus yang dirancang untuk membantu calon peserta seleksi CPNS mempersiapkan diri menghadapi Seleksi Kompetensi Dasar (SKD) dengan materi yang terarah dan simulasi yang realistis.'
  },
  {
    question: 'Apakah tersedia TWK, TIU, dan TKP?',
    answer:
    'Ya, kami menyediakan latihan komprehensif untuk ketiga sub-tes SKD: Tes Wawasan Kebangsaan (TWK), Tes Intelegensia Umum (TIU), dan Tes Karakteristik Pribadi (TKP) sesuai dengan proporsi soal aslinya.'
  },
  {
    question: 'Apakah ada pembahasan?',
    answer:
    'Tentu. Setiap soal dilengkapi dengan pembahasan mendalam dan rasionalisasi jawaban yang tajam, sehingga Anda tidak hanya tahu jawaban yang benar, tetapi juga memahami konsep di baliknya.'
  },
  {
    question: 'Apakah bisa digunakan untuk belajar mandiri?',
    answer:
    'Sangat bisa. Platform ini didesain khusus untuk mendukung pembelajaran mandiri dengan akses 24/7, kurikulum yang terstruktur, dan pelacakan progres yang jelas.'
  },
  {
    question: 'Apakah ini cocok untuk pemula?',
    answer:
    'Ya, materi disusun berurutan dari tingkat dasar hingga lanjutan. Kami juga menyediakan panduan strategi pengerjaan soal yang sangat membantu bagi pemula yang baru pertama kali mengikuti seleksi CPNS.'
  }];

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-24 bg-cream-warm">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-navy-dark mb-4"
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
            
            Pertanyaan yang sering diajukan
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) =>
          <motion.div
            key={index}
            className="bg-white border border-border rounded-xl overflow-hidden"
            initial={{
              opacity: 0,
              y: 10
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.1
            }}>
            
              <button
              className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}>
              
                <span className="font-medium text-navy-dark text-lg pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                className={`w-5 h-5 text-text-muted transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} />
              
              </button>

              <AnimatePresence>
                {openIndex === index &&
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0
                }}
                animate={{
                  height: 'auto',
                  opacity: 1
                }}
                exit={{
                  height: 0,
                  opacity: 0
                }}
                transition={{
                  duration: 0.3
                }}>
                
                    <div className="px-6 pb-5 text-text-muted leading-relaxed border-t border-border/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
              }
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}