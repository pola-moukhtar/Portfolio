import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.93 }}
      className="w-10 h-10 rounded-xl border border-base bg-secondary flex items-center justify-center text-lg transition-colors duration-200 hover:border-accent hover:bg-accent-light"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 30, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="text-primary"
      >
        {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
      </motion.span>
    </motion.button>
  )
}
