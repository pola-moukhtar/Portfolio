import type { SkillCategory } from '../types/project'

export const skillCategories: SkillCategory[] = [
  {
    id: 'ml',
    title: 'Machine Learning',
    emoji: '🧠',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'NLP', 'CNN', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    id: 'se',
    title: 'Software Engineering',
    emoji: '⚙️',
    skills: ['C#', '.NET', 'MVC', 'REST APIs', 'Design Patterns'],
  },
  {
    id: 'languages',
    title: 'Languages',
    emoji: '💻',
    skills: ['Python', 'C++', 'C#', 'Java', 'JavaScript', 'SQL'],
  },
  {
    id: 'databases',
    title: 'Databases',
    emoji: '🗄️',
    skills: ['SQL Server', 'MySQL'],
  },
  {
    id: 'tools',
    title: 'Tools',
    emoji: '🛠️',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Jupyter', 'Streamlit'],
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    emoji: '🧩',
    skills: ['Search Algorithms', 'Minimax', 'Alpha-Beta Pruning', 'Optimization Techniques'],
  },
]
