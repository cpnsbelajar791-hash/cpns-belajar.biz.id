import { motion } from 'framer-motion';
import { BookOpen, Clock, Laptop } from 'lucide-react';
export function Stats() {
  const stats = [
  {
    icon: <BookOpen className="w-6 h-6 text-gold" />,
    text: '3 materi SKD: TWK, TIU, TKP'
  },
  {
    icon: <Clock className="w-6 h-6 text-gold" />,
    text: '110 soal dalam 100 menit'
  },
  {
    icon: <Laptop className="w-6 h-6 text-gold" />,
    text: 'Latihan dari HP, kapan saja'
  }];

  return (
    <section className="bg-navy-soft py-12 border-b border-white/5" aria-label="Ringkasan format SKD">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) =>
          <motion.div
            key={index}
            className={`flex items-center justify-center gap-4 ${index !== 0 ? 'pt-8 md:pt-0' : ''}`}
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

              <div className="w-12 h-12 rounded-full bg-navy-dark flex items-center justify-center border border-white/5 shrink-0" aria-hidden="true">
                {stat.icon}
              </div>
              <p className="text-white/90 font-medium text-lg">{stat.text}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
