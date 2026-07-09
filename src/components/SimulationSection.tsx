import React from 'react';
import { motion } from 'framer-motion';
import { Timer, CheckCircle2, MessageSquare } from 'lucide-react';
export function SimulationSection() {
  const features = [
  {
    icon: <Timer className="w-6 h-6 text-gold" />,
    text: 'Timer latihan per sesi'
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-gold" />,
    text: 'Indikator progres soal'
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-gold" />,
    text: 'Pembahasan setelah menjawab'
  }];

  return (
    <section id="latihan" className="py-24 bg-cream-warm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-dark mb-6 leading-tight">
              Kerjakan soal dengan ritme ujian sungguhan.
            </h2>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              Membiasakan diri dengan tekanan waktu adalah kunci. Platform kami
              didesain menyerupai antarmuka ujian CAT BKN yang sebenarnya.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) =>
              <li key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-border shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-text-main font-medium text-lg">
                    {feature.text}
                  </span>
                </li>
              )}
            </ul>
          </motion.div>

          <motion.div
            className="relative"
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}>
            
            <div className="aspect-[4/3] bg-white rounded-2xl shadow-lg border border-border overflow-hidden relative">
              {/* Mockup UI */}
              <div className="absolute inset-0 flex flex-col">
                <div className="h-14 border-b border-border bg-cream-surface flex items-center justify-between px-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="font-mono text-navy-dark font-medium bg-cream-warm px-3 py-1 rounded-md border border-border text-sm">
                    01:45:22
                  </div>
                </div>
                <div className="flex-1 p-8 flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-text-muted">
                      Soal No. 14
                    </span>
                    <span className="text-xs font-bold bg-navy-soft text-white px-2 py-1 rounded">
                      TIU
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-cream-warm rounded w-full"></div>
                    <div className="h-4 bg-cream-warm rounded w-5/6"></div>
                    <div className="h-4 bg-cream-warm rounded w-4/6"></div>
                  </div>
                  <div className="space-y-3 mt-4">
                    {[1, 2, 3, 4, 5].map((i) =>
                    <div
                      key={i}
                      className={`h-12 border rounded-lg flex items-center px-4 gap-3 ${i === 2 ? 'border-gold bg-gold/5' : 'border-border'}`}>
                      
                        <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${i === 2 ? 'border-gold' : 'border-border'}`}>
                        
                          {i === 2 &&
                        <div className="w-2.5 h-2.5 rounded-full bg-gold"></div>
                        }
                        </div>
                        <div className="h-3 bg-cream-warm rounded w-1/2"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-navy-soft/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>);

}