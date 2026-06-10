import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-14">
          <SectionTitle
            label="Expertise"
            title="Technical Skills"
            description="From model training to full-stack deployment — a versatile toolkit for building intelligent systems."
          />

          {/* GIF — only shown when it actually loads */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex justify-end"
          >
            <GifOrNothing />
          </motion.div>
        </div>

        {/* Full-width 3-col skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(37,99,235,0.08)' }}
              className="card p-6"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-[22px] flex-shrink-0"
                  style={{ background: 'var(--accent-light)', border: '1px solid var(--accent-mid)' }}
                >
                  {cat.emoji}
                </div>
                <span className="text-[15px] font-bold text-primary">{cat.title}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.06 }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Renders the GIF if it loads; renders nothing (zero space) if it fails */
function GifOrNothing() {
  return (
    <div
      className="w-full max-w-[400px] aspect-[4/3] rounded-[28px] overflow-hidden"
      style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
    >
      {/* ↓ Replace src with your own GIF from src/assets/gifs/ */}
      <img
        src="https://media.giphy.com/media/LaVp0AyqR5bGsC5Cbm/giphy.gif"
        alt="Skills animation"
        className="w-full h-full object-cover"
        onError={e => {
          const wrap = e.currentTarget.closest('div') as HTMLElement | null
          if (wrap) {
            wrap.style.display = 'none'
          }
        }}
      />
    </div>
  )
}
