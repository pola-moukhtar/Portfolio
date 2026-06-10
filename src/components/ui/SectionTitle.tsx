import { motion } from 'framer-motion'

interface SectionTitleProps {
  label: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionTitle({ label, title, description, centered = false }: SectionTitleProps) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block text-xs font-bold tracking-[3px] uppercase text-accent mb-3"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display text-[clamp(28px,4vw,42px)] font-bold tracking-tight text-primary leading-tight mb-4"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[17px] text-secondary leading-relaxed max-w-xl"
          style={centered ? { margin: '0 auto' } : {}}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
