import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiExternalLink } from 'react-icons/fi'
import type { Project } from '../../types/project'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = project ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[2000] flex items-start justify-center p-6 overflow-y-auto"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={e => e.target === e.currentTarget && onClose()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-base w-full max-w-3xl rounded-3xl my-auto"
            style={{ border: '1px solid var(--border)' }}
          >
            {/* Header */}
            <div
             className=" top-0 bg-base z-10 px-8 pt-7 pb-5 rounded-t-3xl"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
             
              <h1 id="modal-title" className="font-display text-2xl font-bold text-primary pr-10">
                {project.name }
              </h1>
           
              <div className="flex flex-wrap gap-2 mb-1">
                {project.chips.map(chip => (
                  <span key={chip} className="chip">{chip}</span>
                ))}
              </div>
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-9 h-9 rounded-xl flex items-center justify-center text-secondary hover:text-primary transition-colors"
                style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
                aria-label="Close modal"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="px-8 py-8 flex flex-col gap-8">

            {/* Cover Image */}
            {project.coverImage && (
              <div
                className="overflow-hidden rounded-2xl"
                style={{ border: '1px solid var(--border)' }}
              >
                <img
                  src={project.coverImage}
                  alt={`${project.name} cover`}
                  className="w-full aspect-video object-cover"
                />
              </div>
            )}

              {/* Overview */}
              <Section title="Overview">
                <p className="text-[15px] text-secondary leading-[1.75]">{project.overview}</p>
              </Section>


              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <Section title="Key Metrics">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {project.metrics.map(m => (
                      <div
                        key={m.label}
                        className="rounded-2xl p-4"
                        style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
                      >
                        <div className="text-2xl font-bold text-accent font-display mb-1">{m.value}</div>
                        <div className="text-xs text-secondary">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              {/* Architecture */}
              {project.architecture && (
                <Section title="Architecture">
                  <p className="text-[15px] text-secondary leading-[1.75]">{project.architecture}</p>
                </Section>
              )}

              {/* Challenges */}
              {project.challenges && (
                <Section title="Challenges">
                  <p className="text-[15px] text-secondary leading-[1.75]">{project.challenges}</p>
                </Section>
              )}

              {/* Lessons */}
              {project.lessons && (
                <Section title="Lessons Learned">
                  <p className="text-[15px] text-secondary leading-[1.75]">{project.lessons}</p>
                </Section>
              )}

              {/* Technologies */}
              <Section title="Technologies">
                <div className="flex flex-wrap gap-2">
                  {project.chips.map(chip => (
                    <span
                      key={chip}
                      className="text-sm font-medium px-3.5 py-1.5 rounded-xl text-primary"
                      style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </Section>

             {/* Links */}
            {(project.githubUrl || project.demoUrl || project.Linkedinpost) && (
              <div className="flex flex-wrap gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-primary hover:text-accent hover:border-accent-mid transition-colors"
                    style={{ border: '1.5px solid var(--border)' }}
                  >
                    <FiExternalLink size={15} />
                    View on GitHub
                  </a>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-primary hover:text-accent hover:border-accent-mid transition-colors"
                    style={{ border: '1.5px solid var(--border)' }}
                  >
                    <FiExternalLink size={15} />
                    Deployment
                  </a>
                )}

                {project.Linkedinpost && (
                  <a
                    href={project.Linkedinpost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-primary hover:text-accent hover:border-accent-mid transition-colors"
                    style={{ border: '1.5px solid var(--border)' }}
                  >
                    <FiExternalLink size={15} />
                    LinkedIn Post
                  </a>
                )}
              </div>
            )}



              {/* VideoUrl */}
              {project.videoUrl && (
              <Section title="Demo Video">
                <iframe
                  src={project.videoUrl}
                  className="w-full aspect-video rounded-xl"
                  allowFullScreen
                />
              </Section>
            )}


              {/* Screenshots */}
              {project.screenshots && (
                <Section title="Screenshots">
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.screenshots.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${project.name}-${index}`}
                        className="rounded-xl border"
                      />
                    ))}
                  </div>
                </Section>
              )}


            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-bold tracking-[1.5px] uppercase text-accent mb-3.5">{title}</p>
      {children}
    </div>
  )
}
