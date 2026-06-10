import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import ProjectTabs from '../components/project/ProjectTabs'
import ProjectCard from '../components/project/ProjectCard'
import ProjectModal from '../components/project/ProjectModal'
import { projects } from '../data/projects'
import type { Project, ProjectCategory } from '../types/project'

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('ai')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered = projects.filter(p => p.category === activeTab)

  return (
    <section id="projects" className="py-24 bg-base">
      <div className="section-container">
        {/* Header row with GIF on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
          <SectionTitle
            label="Work"
            title="Featured Projects"
            description="AI systems and software applications built from idea to deployment."
          />
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex justify-end"
          >
            <div
              className="w-full max-w-[360px] aspect-[3/2] rounded-[24px] overflow-hidden"
              style={{ border: '1px solid var(--border)', background: 'var(--bg-secondary)' }}
            >
              {/* Replace with your own project demo GIF */}
              <img
                src="https://media.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif"
                alt="Projects demo animation"
                className="w-full h-full object-cover"
                onError={e => { e.currentTarget.style.display = 'none' }}
              />
            </div>
          </motion.div>
        </div>

        <ProjectTabs active={activeTab} onChange={setActiveTab} />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            role="tabpanel"
            id={`tabpanel-${activeTab}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featured={project.featured}
                  index={i}
                  onClick={() => {
                    const isPlaceholder = (project as Project & { placeholder?: boolean }).placeholder
                    if (!isPlaceholder) setSelectedProject(project)
                  }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
