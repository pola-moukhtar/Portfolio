import { motion } from 'framer-motion'
import { FiExternalLink, FiArrowRight } from 'react-icons/fi'
import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project & { placeholder?: boolean }
  featured?: boolean
  onClick: () => void
  index: number
}

export default function ProjectCard({ project, featured, onClick, index }: ProjectCardProps) {
  const isPlaceholder = (project as Project & { placeholder?: boolean }).placeholder

  if (isPlaceholder) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="card rounded-2xl overflow-hidden border-dashed cursor-default"
      >
        <div className="h-48 bg-secondary flex items-center justify-center">
          <span className="text-5xl opacity-30">{project.emoji}</span>
        </div>
        <div className="p-6">
          <div className="flex gap-2 mb-3">
            <span className="chip opacity-50">Coming Soon</span>
          </div>
          <h3 className="text-base font-bold text-secondary mb-2">{project.name}</h3>
          <p className="text-sm text-secondary">{project.description}</p>
        </div>
      </motion.div>
    )
  }

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -4 }}
        onClick={onClick}
        className="card col-span-full grid md:grid-cols-2 cursor-pointer group"
        tabIndex={0}
        role="button"
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onClick()}
        aria-label={`View ${project.name} project`}
      >
        {/* Image side */}
        <div className="relative h-56 md:h-auto bg-secondary flex items-center justify-center overflow-hidden rounded-tl-2xl rounded-bl-none rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl">
          <div className="absolute inset-0 flex items-center justify-center text-[120px] opacity-5 select-none">
            {project.emoji}
          </div>
          <span className="text-6xl relative z-10">{project.emoji}</span>
          <span className="absolute top-3 right-3 bg-accent text-white text-[11px] font-bold px-2.5 py-1 rounded-full tracking-wide">
            FEATURED
          </span>
        </div>

        {/* Content side */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.chips.map(chip => (
              <span key={chip} className="chip">{chip}</span>
            ))}
          </div>
          <h3 className="font-display text-2xl font-bold text-primary mb-3">{project.name}</h3>
          <p className="text-base text-secondary leading-relaxed mb-5">{project.description}</p>
          {project.metrics && (
            <div className="flex gap-6 flex-wrap mb-6">
              {project.metrics.map(m => (
                <div key={m.label}>
                  <div className="text-xl font-bold text-accent font-display">{m.value}</div>
                  <div className="text-xs text-secondary">{m.label}</div>
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
            View details <FiArrowRight size={15} />
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="card rounded-2xl overflow-hidden cursor-pointer group"
      tabIndex={0}
      role="button"
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onClick()}
      aria-label={`View ${project.name} project`}
    >
      <div className="relative h-48 bg-secondary flex items-center justify-center" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="absolute inset-0 flex items-center justify-center text-[100px] opacity-5 select-none">
          {project.emoji}
        </div>
        <span className="text-5xl relative z-10">{project.emoji}</span>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.chips.slice(0, 3).map(chip => (
            <span key={chip} className="chip">{chip}</span>
          ))}
        </div>
        <h3 className="font-display text-[17px] font-bold text-primary mb-2">{project.name}</h3>
        <p className="text-sm text-secondary leading-relaxed mb-4">{project.description}</p>
        {project.metrics && (
          <div className="flex gap-4 mb-4">
            {project.metrics.slice(0, 2).map(m => (
              <div key={m.label}>
                <div className="text-lg font-bold text-accent font-display">{m.value}</div>
                <div className="text-[11px] text-secondary">{m.label}</div>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all">
            View details <FiArrowRight size={14} />
          </span>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="text-secondary hover:text-accent transition-colors"
              aria-label="GitHub repository"
            >
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
