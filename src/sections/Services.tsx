import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import { services } from '../data/experience'

export default function Services() {
  return (
    <section id="services" className="py-24 bg-base">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 items-start">

          {/* Left — service cards */}
          <div>
            <SectionTitle
              label="Offering"
              title="Services"
              description="End-to-end solutions from data analysis to deployed applications."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className={`card p-7 text-center ${
                    // Last card spans full width only when it would be alone on its row
                    services.length % 2 !== 0 && i === services.length - 1
                      ? 'sm:col-span-2'
                      : ''
                  }`}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                    style={{ background: 'var(--accent-light)', border: '1px solid var(--accent-mid)' }}
                  >
                    {svc.emoji}
                  </div>
                  <h3 className="font-display text-[15px] font-bold text-primary mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">{svc.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — GIF, sticky so it stays centred while cards scroll */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block lg:sticky lg:top-24"
          >
            <div
              id="svc-gif-wrap"
              className="w-full aspect-[4/3] rounded-[28px] overflow-hidden"
              style={{ border: '1px solid var(--border)', background: 'var(--bg-secondary)' }}
            >
              {/* ↓ Replace src with your own GIF from src/assets/gifs/ */}
              <img
                src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif"
                alt="Services animation"
                className="w-full h-full object-cover"
                onError={e => {
                  const wrap = document.getElementById('svc-gif-wrap')
                  if (wrap) wrap.style.display = 'none'
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
