import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiMail, FiInstagram, FiDownload, FiExternalLink } from 'react-icons/fi'
import SectionTitle from '../components/ui/SectionTitle'

const LINKS = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'pola-moukhtar',
    href: 'https://linkedin.com/in/pola-moukhtar',
    icon: <FiLinkedin size={22} />,
  },
  {
    id: 'github',
    name: 'GitHub',
    handle: 'pola-moukhtar',
    href: 'https://github.com/pola-moukhtar',
    icon: <FiGithub size={22} />,
  },
  {
    id: 'email',
    name: 'Email',
    handle: 'pola@example.com',
    href: 'mailto:pola@example.com',
    icon: <FiMail size={22} />,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@pola',
    href: 'https://instagram.com',
    icon: <FiInstagram size={22} />,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-base">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionTitle
              label="Get In Touch"
              title="Let's Connect"
              description="Open to opportunities, collaborations, and interesting conversations about ML and software engineering."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target={link.id !== 'email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="card p-5 flex items-center gap-4"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent-light)', border: '1px solid var(--accent-mid)', color: 'var(--accent)' }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">{link.name}</p>
                    <p className="text-xs text-secondary mt-0.5">{link.handle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right — CTAs */}
          <div className="flex flex-col gap-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -2 }}
              onClick={() => alert('CV download coming soon!')}
              className="card p-7 text-left w-full group"
            >
              <div className="flex items-center gap-2 font-display text-base font-bold text-primary mb-2">
                <FiDownload size={17} className="text-accent" />
                Download CV
              </div>
              <p className="text-sm text-secondary">Get my full resume with all experience and certifications</p>
            </motion.button>

            <motion.a
              href="https://linkedin.com/in/pola-moukhtar"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="card p-7 text-left w-full"
            >
              <div className="flex items-center gap-2 font-display text-base font-bold text-primary mb-2">
                <FiExternalLink size={17} className="text-accent" />
                Open LinkedIn ↗
              </div>
              <p className="text-sm text-secondary">Connect and explore my professional profile</p>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
