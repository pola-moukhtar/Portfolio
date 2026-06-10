import type { Experience, Service, AboutChapter } from '../types/project'

export const experiences: Experience[] = [
  {
    id: 'mcv',
    role: 'Software Developer Intern',
    company: 'MCV',
    location: 'Cairo, Egypt',
    duration: 'August 2025 – September 2025',
    type: 'Internship',
    description:
      'Developed a full-stack Hotel Management System using modern .NET architecture. Built REST APIs, integrated SQL Server for data persistence, and designed the Bootstrap frontend. Worked in a professional team environment following industry development practices.',
    technologies: ['C#', '.NET', 'SQL Server', 'Bootstrap', 'JavaScript', 'REST APIs'],
  },
]

export const services: Service[] = [
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    emoji: '🔍',
    description: 'Exploring datasets to surface insights and patterns that drive informed decisions.',
  },
  {
    id: 'data-science',
    title: 'Data Science',
    emoji: '📊',
    description: 'End-to-end data science pipelines from collection and cleaning to visualization and reporting.',
  },
  {
    id: 'ml-solutions',
    title: 'ML Solutions',
    emoji: '🤖',
    description: 'Training, evaluating, and deploying machine learning models tailored to your problem.',
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    emoji: '🖥️',
    description: 'Clean, responsive interfaces using modern HTML, CSS, JavaScript and component libraries.',
  },
  {
    id: 'backend',
    title: 'Backend Development',
    emoji: '⚙️',
    description: 'Robust APIs and server-side logic with .NET, Python, and database integration.',
  },
]

export const aboutChapters: AboutChapter[] = [
  {
    id: 'scout',
    number: '01',
    label: 'The Scout',
    title: 'I learned leadership\nunder the stars.',
    body: [
      'Before I wrote a single line of code, I was a scout captain. AKS taught me how to lead a team when things get hard, how to make decisions under pressure, and how to show up for people who count on you.',
      'That same instinct — look after your team, plan ahead, leave things better than you found them — carries directly into how I work on software today.',
    ],
    tags: ['AKS Scouting Captain', 'Team Leadership', 'Event Organization', 'Mentoring', 'Teaching'],
  },
  {
    id: 'competitor',
    number: '02',
    label: 'The Competitor',
    title: 'I play to win.\nOn and off the pitch.',
    body: [
      'Competition is in my DNA. On the football field it\'s about reading the play before it happens — anticipating, positioning, executing under pressure. In League of Legends, it\'s macro strategy, adapting in real time, and staying calm when everything\'s on the line.',
      'And then there\'s competitive programming. FCAI ACPC sharpened my ability to think algorithmically under time constraints — the same muscle you use when debugging a model at 2am before a deadline.',
    ],
    tags: ['Football', 'League of Legends', 'FCAI ACPC', 'Competitive Problem Solving'],
  },
  {
    id: 'builder',
    number: '03',
    label: 'The Builder',
    title: 'I build things\nbigger than myself.',
    body: [
      'Some of my most important work has never been deployed to production. IEEE, NASA Space Apps, El-Fit volunteer work — these spaces taught me that the best builders don\'t just write code. They create environments where other people can grow.',
      'NASA Space Apps was one of those rare 48-hour windows where a random team of people tries to solve real space-related problems with whatever they know. The problem-framing, the pivot moments, the 3am energy — I\'d do it again tomorrow.',
    ],
    tags: ['IEEE', 'NASA Space Apps', 'El-Fit Volunteer', 'Community Building'],
  },
  {
    id: 'human',
    number: '04',
    label: 'The Human',
    title: 'When I close the laptop,\nI actually close it.',
    body: [
      'Rest isn\'t laziness — it\'s maintenance. A good movie resets my brain better than any productivity hack. Sitcoms taught me comedic timing (which turns out is useful for debugging sessions too).',
      'The people who build the most interesting things tend to have the richest inner lives. I try to stay curious about everything — not just code — because the best ideas almost never come from staring at a screen.',
    ],
    tags: ['Movies', 'Sitcoms', 'Gaming', 'TV Shows'],
  },
]
