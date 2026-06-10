import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer
      className="py-10 bg-base"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="section-container flex items-center justify-between flex-wrap gap-4">
        <p className="text-sm text-secondary">
          Designed and Developed by{' '}
          <span className="font-semibold text-primary">Pola Mokhtar</span>{' '}
          &copy; {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/pola-moukhtar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-secondary font-medium hover:text-accent transition-colors"
          >
            <FiGithub size={16} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/pola-moukhtar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-secondary font-medium hover:text-accent transition-colors"
          >
            <FiLinkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
