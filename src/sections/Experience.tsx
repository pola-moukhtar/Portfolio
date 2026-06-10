import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* Left — GIF (sticky so it stays in view as timeline grows) */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block lg:sticky lg:top-24"
          >
            <div
              id="exp-gif-wrap"
              className="w-full aspect-[4/3] rounded-[28px] overflow-hidden"
              style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
            >
              {/* ↓ Replace src with your own GIF from src/assets/gifs/ */}
              <img
                src="https://media.giphy.com/media/Dh5q0sShxgp13DwrvG/giphy.gif"
                alt="Developer working animation"
                className="w-full h-full object-cover"
                onError={e => {
                  const wrap = document.getElementById('exp-gif-wrap')
                  if (wrap) wrap.style.display = 'none'
                }}
              />
            </div>
          </motion.div>

          {/* Right — full timeline, scrolls independently */}
          <div>
            <SectionTitle
              label="Career"
              title="Experience"
              description="Hands-on work applying engineering skills in real environments."
            />

            <div className="relative pl-10">
              {/* Vertical line — grows with all entries automatically */}
              <div
                className="absolute left-3.5 top-0 bottom-0 w-px"
                style={{ background: 'var(--border)' }}
              />

              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative mb-10 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[29px] top-1 w-4 h-4 rounded-full"
                    style={{
                      background: 'var(--accent)',
                      border: '3px solid var(--bg-secondary)',
                      boxShadow: '0 0 0 3px var(--accent-mid)',
                    }}
                  />

                  <p className="text-xs font-semibold text-accent mb-2 tracking-wide">
                    {exp.duration}
                  </p>

                  <div className="card p-7">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                      <div>
                        <h3 className="font-display text-lg font-bold text-primary">{exp.role}</h3>
                        <p className="text-sm text-secondary mt-1">
                          {exp.company} — {exp.location}
                        </p>
                      </div>
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                        style={{
                          background: 'var(--accent-light)',
                          color: 'var(--accent)',
                          border: '1px solid var(--accent-mid)',
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="ttech">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
