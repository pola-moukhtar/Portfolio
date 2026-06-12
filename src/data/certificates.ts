import type { Certificate } from '../types/project'
import depi from '../assets/certificates/DEPI_DATASCIENCE.jpeg'
import iti from '../assets/certificates/ITI.jpg'
import cloud from '../assets/certificates/POLA_NTI_ClOUD.jpg'
import huawie from '../assets/certificates/pola_AI_NTI.jpg'
import nti_ai from '../assets/certificates/pola_AI_NTI.jpg'

export const certificates: Certificate[] = [
  {
    id: 'depi',
    name: 'DEPI Data Science',
    organization: 'Digital Egypt Pioneers Initiative',
    emoji: '🏅',
    image: depi,
    date: '2025',
    description:'Comprehensive training program covering machine learning, data analysis, visualization, and model deployment.',
    skills: ['Python','Machine Learning','Pandas','Scikit-Learn','Data Visualization'],
  },
  {
    id: 'huawei-hcia',
    name: 'HCIA-AI Certification',
    organization: 'Huawei',
    emoji: '🏅',
    image: huawie
  },
  {
    id: 'nti-hcia',
    name: 'HCIA-AI Certification',
    organization: 'NTI',
    emoji: '🏅',
    image: nti_ai
  },
  {
    id: 'nti-cloud',
    name: 'Cloud Computing',
    organization: 'NTI',
    emoji: '🏅',
    image: cloud
  },
  {
    id: 'iti-web',
    name: 'Web Development Intro',
    organization: 'ITI Summer Training',
    emoji: '🏅',
    image: iti
  },
]
