import type { Project } from '../types/project'
import plantVideo from '../assets/videos/plant-demo.mp4'
import banner_plant from '../assets/images/banner plant.png'
export const projects: Project[] = [
  {
    id: 'plant',
    name: 'Plant Disease Classification',
    category: 'ai',
    featured: true,
    emoji: '🌿',
    coverImage: banner_plant,
    chips: ['Python', 'TensorFlow', 'Keras', 'MobileNetV2', 'Streamlit'],
    description:
      'Deep learning solution for plant disease detection across 38 classes using transfer learning. Deployed as a live Streamlit app.',
    overview:
      'A deep learning pipeline for classifying plant diseases from leaf images. The model uses transfer learning with MobileNetV2, fine-tuned on the PlantVillage dataset across 38 disease categories. A live Streamlit application allows users to upload leaf photos and get instant diagnoses.',
    architecture:
      'MobileNetV2 backbone (pre-trained on ImageNet) with custom classification head. Global Average Pooling → Dense layers with Dropout regularization → Softmax. Binary Cross-Entropy loss with Adam optimizer.',
    challenges:
      'Handling class imbalance across 38 categories, ensuring generalization across different lighting conditions and leaf orientations.',
    lessons:
      'Transfer learning dramatically reduces training time while achieving high accuracy. Data augmentation is critical for real-world robustness.',
    metrics: [
      { value: '95.05%', label: 'Test Accuracy' },
      { value: '38', label: 'Disease Classes' },
      { value: 'Streamlit', label: 'Deployment' },
    ],
    videoUrl: plantVideo,
    githubUrl: 'https://github.com/pola-moukhtar/Plant-Disease-Classification.git',
    demoUrl: 'https://plant-disease-classification-nn.streamlit.app',
    Linkedinpost: 'https://www.linkedin.com/posts/bavly-hany-445385305_datascience-machinelearning-deeplearning-activity-7462282178136047616-oqHO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjZe-cBDVdSHGFTvZkFoKzLYDvITfiZ0Yw',

  },
  {
    id: 'nids',
    name: 'Network Intrusion Detection System',
    category: 'ai',
    emoji: '🛡️',
    chips: ['Python', 'Random Forest', 'Scikit-Learn', 'CICIDS-2017'],
    description:
      'ML-based IDS trained on CICIDS-2017 with 2.8M+ records, rare attack detection and feature importance analysis.',
    overview:
      'A machine learning IDS trained on the CICIDS-2017 dataset containing over 2.8 million network traffic records. The system classifies normal traffic vs various attack types including DDoS, PortScan, and brute-force attacks.',
    architecture:
      'Feature engineering pipeline on raw network flow data. Random Forest classifier with hyperparameter tuning via GridSearchCV. Feature importance analysis to identify key traffic indicators.',
    challenges:
      'Handling extreme class imbalance with rare attack types, processing 2.8M+ records efficiently, avoiding false positives in production.',
    lessons:
      'Proper sampling strategies for imbalanced datasets are essential for rare event detection. Feature selection significantly impacts both accuracy and inference speed.',
    metrics: [
      { value: '2.8M+', label: 'Records' },
      { value: 'Random Forest', label: 'Best Model' },
      { value: 'High', label: 'Rare Attack Detection' },
    ],
    githubUrl: 'https://github.com/baasse/GRADUATION-PROJECT-IN-DEPI',
  },
  {
    id: 'nids-dash',
    name: 'NIDS Real-Time Dashboard',
    category: 'ai',
    emoji: '📊',
    chips: ['Streamlit', 'Plotly', 'Python', 'Threading'],
    description:
      'Real-time monitoring dashboard for intrusion detection with live visualizations and alert management.',
    overview:
      'A real-time monitoring dashboard that visualizes network intrusion detection results live. Uses threading for concurrent data ingestion and Plotly for interactive charts showing traffic patterns and alerts.',
    architecture:
      'Streamlit frontend with background threads handling data simulation. Plotly charts update in real-time using Streamlit\'s rerun mechanism. Modular design separates detection logic from visualization.',
    challenges:
      'Managing concurrency between detection threads and UI updates without blocking. Keeping charts performant with continuously updating data.',
    lessons:
      'Streamlit\'s session state and threading require careful synchronization. Background tasks improve UX by keeping the interface responsive.',
    metrics: [
      { value: 'Real-Time', label: 'Processing' },
      { value: 'Plotly', label: 'Visualizations' },
      { value: 'Threaded', label: 'Architecture' },
    ],
    githubUrl: 'https://github.com/pola-moukhtar/NIDS_Streamlit_Deployment',
  },
  {
    id: 'resume',
    name: 'Resume Category Predictor',
    category: 'ai',
    emoji: '📄',
    chips: ['Python', 'NLP', 'TF-IDF', 'Streamlit', 'Scikit-Learn'],
    description:
      'Resume classification system using NLP pipelines and multiple ML models to categorize job applications.',
    overview:
      'An NLP pipeline that reads resumes and automatically classifies them into job categories. Compares multiple ML classifiers with TF-IDF vectorization to find the best-performing approach.',
    architecture:
      'Text preprocessing (lowercasing, stopword removal, lemmatization) → TF-IDF vectorization → Multiple classifier comparison (SVM, Naive Bayes, Logistic Regression, Random Forest). Streamlit UI for live predictions.',
    challenges:
      'Handling diverse resume formats and writing styles. Balancing vocabulary size in TF-IDF with model performance.',
    lessons:
      'Text cleaning quality directly impacts model performance. Multiple model comparison is essential — no single algorithm wins every NLP task.',
    metrics: [
      { value: 'NLP', label: 'Pipeline' },
      { value: 'TF-IDF', label: 'Vectorization' },
      { value: 'Multi-Model', label: 'Comparison' },
    ],
  },
  {
    id: 'connect4',
    name: 'Connect 4 AI Agent',
    category: 'ai',
    emoji: '🎮',
    chips: ['Python', 'Pygame', 'Minimax', 'Alpha-Beta Pruning'],
    description:
      'AI agent using Minimax with Alpha-Beta Pruning to play Connect 4 at a competitive level.',
    overview:
      'An intelligent Connect 4 agent that uses the Minimax algorithm with Alpha-Beta Pruning to make optimal moves. The agent can look multiple moves ahead and adjusts difficulty by changing search depth.',
    architecture:
      'Minimax tree search with Alpha-Beta Pruning to eliminate branches that cannot affect the outcome. Heuristic evaluation function scores board positions based on piece clustering and winning threats. Configurable search depth for difficulty levels.',
    challenges:
      'Designing an accurate heuristic evaluation function. Managing search depth to balance performance and play quality.',
    lessons:
      'Alpha-Beta Pruning can reduce search space dramatically — sometimes by 50% or more — enabling deeper lookahead within the same time budget.',
    metrics: [
      { value: 'Minimax', label: 'Algorithm' },
      { value: 'α-β Pruning', label: 'Optimization' },
      { value: 'Pygame', label: 'UI Framework' },
    ],
    githubUrl: 'https://github.com/pola-moukhtar/AI_Projec',
  },
  {
    id: 'churn',
    name: 'Customer Churn Prediction',
    category: 'ai',
    emoji: '📈',
    chips: ['TensorFlow', 'Scikit-Learn', 'MindSpore', 'Huawei HCIA-AI'],
    description:
      'Churn prediction comparing 7 ML models, built during Huawei HCIA-AI certification program.',
    overview:
      'A customer churn prediction project completed as part of the Huawei HCIA-AI certification. Compares 7 different machine learning models to identify the best approach for predicting customer attrition.',
    architecture:
      'Data cleaning and feature encoding pipeline → 7 model comparison including Logistic Regression, Decision Tree, Random Forest, SVM, Neural Network (TF), Gradient Boosting, and MindSpore NN. ROC-AUC comparison.',
    challenges:
      'Evaluating models fairly across different hyperparameter spaces. Handling missing values and categorical features consistently.',
    lessons:
      'No single model always wins — the best choice depends on data characteristics, interpretability needs, and performance requirements.',
    metrics: [
      { value: '7', label: 'Models Compared' },
      { value: 'TF + MindSpore', label: 'Frameworks' },
      { value: 'Certified', label: 'Huawei HCIA-AI' },
    ],
    githubUrl: 'https://github.com/pola-moukhtar/HUAWEI-HCIA-proj',
  },
  // Software
  {
    id: 'hotel',
    name: 'Hotel Management System',
    category: 'software',
    emoji: '🏨',
    chips: ['C#', '.NET', 'SQL Server', 'Bootstrap', 'REST APIs', 'JavaScript'],
    description:
      'Full-stack hotel management platform with reservations, billing, and admin panel — developed during MCV internship.',
    overview:
      'A full-stack hotel management platform developed during the MCV internship. Handles room reservations, guest management, billing, and admin operations through a clean web interface.',
    architecture:
      'ASP.NET MVC architecture with REST API layer. SQL Server database with normalized schema for guests, rooms, reservations, and billing. Bootstrap responsive frontend with vanilla JS for dynamic interactions.',
    challenges:
      'Designing a normalized database schema that handles complex reservation logic (check-in, check-out, overlapping dates).',
    lessons:
      'Real-world projects require more attention to edge cases than academic work. Code review culture significantly improves code quality.',
    metrics: [
      { value: 'Full-Stack', label: 'Architecture' },
      { value: 'REST', label: 'API Design' },
      { value: 'MCV', label: 'Internship Project' },
    ],
    githubUrl: 'https://github.com/Steven-Nagy-788/Full_Stack_hotel_Reg',
  },
  {
    id: 'library',
    name: 'Library Management System',
    category: 'software',
    emoji: '📚',
    chips: ['Java', 'Swing', 'JDBC', 'MySQL'],
    description:
      'Desktop application using layered architecture for managing books and borrowing operations.',
    overview:
      'A desktop Java application for managing a library\'s book catalog, member registrations, and borrowing/return operations. Built with a layered architecture separating UI, business logic, and data access.',
    architecture:
      'Presentation layer (Java Swing) → Business Logic layer → Data Access layer (JDBC) → MySQL. Clean separation of concerns with interfaces for each layer.',
    challenges:
      'Managing JDBC connection pooling efficiently. Keeping Swing UI responsive during database operations.',
    lessons:
      'Layered architecture makes the codebase significantly easier to maintain and test. JDBC is verbose but gives full control over queries.',
    metrics: [
      { value: 'Java Swing', label: 'UI Framework' },
      { value: 'Layered', label: 'Architecture' },
      { value: 'MySQL', label: 'Database' },
    ],
    githubUrl: 'https://github.com/pola-moukhtar/Library_Management_System',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Prototype',
    category: 'software',
    emoji: '🛒',
    chips: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Front-end e-commerce prototype with product listings, cart, and checkout built during ITI training.',
    overview:
      'A front-end e-commerce prototype built during ITI summer training. Features a product catalog, dynamic cart, and simulated checkout flow — all without a backend.',
    architecture:
      'HTML5 semantic structure, CSS Grid and Flexbox responsive layout, vanilla JavaScript for cart state management and DOM manipulation.',
    challenges:
      'Managing cart state across page navigation without a backend. Ensuring responsive design works across all device sizes.',
    lessons:
      'Mastering fundamentals before moving to frameworks builds a much stronger understanding of how web apps actually work.',
    metrics: [
      { value: 'Vanilla JS', label: 'No Frameworks' },
      { value: 'Responsive', label: 'Mobile-First' },
      { value: 'ITI', label: 'Training Project' },
    ],
    githubUrl: 'https://github.com/pola-moukhtar/E-Commerce-Prototype',
  },
  // University
  {
    id: 'clock',
    name: 'Hardware Digital Clock',
    category: 'university',
    emoji: '⏱️',
    chips: ['555 Timer', 'Binary Counters', 'Decoders', '7-Segment Displays'],
    description:
      'Hardware clock using 555 timers, binary counters, decoders, and seven-segment displays — no microcontroller.',
    overview:
      'A hardware digital clock built from discrete components: a 555 timer generates the clock signal, binary counter ICs count seconds/minutes/hours, BCD-to-7-segment decoders convert values, and seven-segment displays show the time.',
    architecture:
      '555 astable oscillator (1Hz) → CD4017 decade counters for seconds → minutes → hours → BCD-to-7-segment decoders (7447) → common-anode 7-segment displays. Reset logic for 60-second and 24-hour rollover.',
    challenges:
      'Timing accuracy of the 555 circuit. Managing propagation delays across multiple counter stages. Layout routing to minimize noise.',
    lessons:
      'Understanding digital logic at the gate level gives deep insight into how higher-level abstractions work. Debugging hardware is fundamentally different from software.',
    metrics: [
      { value: '555 Timer', label: 'Clock Source' },
      { value: '6 Digits', label: 'Display' },
      { value: 'Hardware', label: 'No Microcontroller' },
    ],
  },
  {
    id: 'sys-analysis',
    name: 'System Analysis Project',
    category: 'university',
    emoji: '🔬',
    chips: [],
    description: 'Details coming soon.',
    overview: 'Details will be added when the project is complete.',
    placeholder: true,
  } as Project & { placeholder: boolean },
  {
    id: 'se-project',
    name: 'Software Engineering Project',
    category: 'university',
    emoji: '🏗️',
    chips: [],
    description: 'Details coming soon.',
    overview: 'Details will be added when the project is complete.',
    placeholder: true,
  } as Project & { placeholder: boolean },
]
