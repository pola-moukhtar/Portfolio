export type ProjectCategory = 'ai' | 'software' | 'university'

export interface ProjectMetric {
  value: string
  label: string
}

export interface Project {
  id: string
  name: string
  category: ProjectCategory
  featured?: boolean
  emoji: string
  chips: string[]
  description: string
  overview: string
  architecture?: string
  challenges?: string
  lessons?: string
  metrics?: ProjectMetric[]
  githubUrl?: string
  demoUrl?: string
}

export interface SkillCategory {
  id: string
  title: string
  emoji: string
  skills: string[]
}

export interface Experience {
  id: string
  role: string
  company: string
  location: string
  duration: string
  type: string
  description: string
  technologies: string[]
}

export interface Certificate {
  id: string
  name: string
  organization: string
  emoji: string
}

export interface Service {
  id: string
  title: string
  emoji: string
  description: string
}

export interface AboutChapter {
  id: string
  number: string
  label: string
  title: string
  body: string[]
  tags: string[]
}
