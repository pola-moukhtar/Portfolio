import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import { certificates } from '../data/certificates'

export default function Education() {
  return (
    <section id="education" className="py-24" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <SectionTitle
          label="Learning"
          title="Education & Certifications"
          description="Academic foundations backed by industry certifications."
        />

        {/* University card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card p-8 flex items-start gap-5 mb-12 max-w-2xl"
        >
          <div
            className="w-13 h-13 min-w-[52px] rounded-2xl flex items-center justify-center text-2xl"
            style={{ background: 'var(--accent-light)', border: '1px solid var(--accent-mid)' }}
          >
            🎓
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-primary mb-2">Benha University</h3>
            <p className="text-sm text-secondary leading-relaxed">
              Faculty of Computer Science and Artificial Intelligence
              <br />
              B.Sc. Computer Science &amp; AI
            </p>
            <span
              className="inline-block mt-3 text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: 'var(--accent-light)',
                color: 'var(--accent)',
                border: '1px solid var(--accent-mid)',
              }}
            >
              Expected Graduation: 2027
            </span>
          </div>
        </motion.div>

        {/* Certs */}
        <h3 className="font-display text-lg font-bold text-primary mb-6">Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -2 }}
              className="card p-5 flex items-center gap-4 cursor-pointer"
              tabIndex={0}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: 'var(--accent-light)', border: '1px solid var(--accent-mid)' }}
              >
                {cert.emoji}
              </div>
              <div>
                <p className="text-sm font-bold text-primary leading-tight">{cert.name}</p>
                <p className="text-xs text-secondary mt-0.5">{cert.organization}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
