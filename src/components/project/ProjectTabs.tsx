import { motion } from 'framer-motion'
import type { ProjectCategory } from '../../types/project'

interface Tab {
  id: ProjectCategory
  label: string
}

const TABS: Tab[] = [
  { id: 'ai', label: 'AI Projects' },
  { id: 'software', label: 'Software Projects' },
  { id: 'university', label: 'University Projects' },
]

interface ProjectTabsProps {
  active: ProjectCategory
  onChange: (tab: ProjectCategory) => void
}

export default function ProjectTabs({ active, onChange }: ProjectTabsProps) {
  return (
    <div
      className="flex gap-1 p-1 rounded-[14px] w-fit flex-wrap mb-12"
      style={{ background: 'var(--bg-secondary)' }}
      role="tablist"
      aria-label="Project categories"
    >
      {TABS.map(tab => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={active === tab.id}
          aria-controls={`tabpanel-${tab.id}`}
          onClick={() => onChange(tab.id)}
          className={`relative px-5 py-2.5 rounded-[10px] text-sm font-semibold transition-colors duration-200 whitespace-nowrap ${
            active === tab.id ? 'text-accent' : 'text-secondary hover:text-primary'
          }`}
        >
          {active === tab.id && (
            <motion.span
              layoutId="tab-bg"
              className="absolute inset-0 rounded-[10px] bg-card"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 35 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}
