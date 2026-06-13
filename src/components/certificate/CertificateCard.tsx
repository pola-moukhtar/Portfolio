import { motion } from 'framer-motion'
import type { Certificate } from '../../types/project'

interface CertificateCardProps {
  certificate: Certificate
  index: number
  onClick: () => void
}

export default function CertificateCard({
  certificate,
  index,
  onClick,
}: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ y: -2 }}
      onClick={onClick}
      className="card p-5 flex items-center gap-4 cursor-pointer"
      tabIndex={0}
      role="button"
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onClick()}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
        style={{
          background: 'var(--accent-light)',
          border: '1px solid var(--accent-mid)',
        }}
      >
        {certificate.emoji}
      </div>

      <div>
        <p className="text-sm font-bold text-primary leading-tight">
          {certificate.name}
        </p>

        <p className="text-xs text-secondary mt-0.5">
          {certificate.organization}
        </p>
      </div>
    </motion.div>
  )
}