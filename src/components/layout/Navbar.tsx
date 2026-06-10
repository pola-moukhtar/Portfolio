import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from '../ui/ThemeToggle'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
  { label: 'About', href: '#about' },
]

interface NavbarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { threshold: 0.35 },
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`sticky top-0 z-50 h-[68px] flex items-center transition-all duration-300 bg-base ${
          scrolled ? 'shadow-sm' : ''
        }`}
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div className="section-container w-full flex items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={() => handleNavClick('#hero')}
            className="font-display font-bold text-xl tracking-tight text-primary"
            whileHover={{ scale: 1.03 }}
          >
            Paula Moukhtar<span className="text-accent">.</span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={e => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-accent bg-accent-light'
                      : 'text-secondary hover:text-primary hover:bg-secondary'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  {link.label}
                </motion.a>
              )
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <motion.button
              className="lg:hidden w-10 h-10 rounded-xl border border-base bg-secondary flex items-center justify-center text-primary"
              onClick={() => setMobileOpen(o => !o)}
              whileTap={{ scale: 0.93 }}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-base pt-[68px] flex flex-col gap-2 px-6 py-6 overflow-y-auto lg:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={e => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-lg font-medium px-4 py-3.5 rounded-xl border border-base text-primary hover:border-accent-mid hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
