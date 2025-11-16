import { db } from './firebase/config'
import { collection, addDoc } from 'firebase/firestore'

// Initial data from your portfolio
const initialSkills = [
  { name: 'Python', level: 90, color: 'from-blue-400 to-blue-600' },
  { name: 'Machine Learning', level: 85, color: 'from-purple-400 to-purple-600' },
  { name: 'Data Analysis', level: 88, color: 'from-green-400 to-green-600' },
  { name: 'SQL', level: 82, color: 'from-yellow-400 to-yellow-600' },
  { name: 'React', level: 80, color: 'from-pink-400 to-pink-600' },
  { name: 'TensorFlow', level: 78, color: 'from-red-400 to-red-600' }
]

const initialProjects = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    subtitle: 'Next-Gen Shopping Experience',
    description: 'A comprehensive e-commerce solution with AI-powered product recommendations, real-time inventory management, and seamless payment integration.',
    image: '🛍️',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Redis'],
    gradient: 'from-purple-400 to-pink-400',
    category: 'web',
    github: 'https://github.com/nardi-js/ecommerce-platform',
    liveDemo: 'https://ecommerce-demo.netlify.app',
    features: [
      'AI-powered product recommendations',
      'Real-time inventory tracking',
      'Multiple payment gateway integration',
      'Advanced search with filters',
      'Order tracking system',
      'Customer analytics dashboard'
    ],
    results: [
      { label: 'Conversion Rate', value: '+45%' },
      { label: 'Page Load Time', value: '1.2s' },
      { label: 'User Satisfaction', value: '4.8/5' },
      { label: 'Monthly Active Users', value: '50K+' }
    ],
    challenges: 'Scaling the platform to handle Black Friday traffic while maintaining sub-2 second load times.',
    solution: 'Implemented Redis caching, CDN distribution, and microservices architecture for optimal performance.',
    duration: '6 months',
    role: 'Lead Full-Stack Developer',
    team: '8 members',
    year: '2024'
  },
  {
    id: 'design-system',
    title: 'Design System',
    subtitle: 'Enterprise Component Library',
    description: 'Comprehensive design system with 100+ reusable components, ensuring brand consistency across all enterprise applications.',
    image: '🎨',
    tech: ['React', 'TypeScript', 'Storybook', 'Figma', 'CSS-in-JS'],
    gradient: 'from-indigo-400 to-purple-400',
    category: 'web',
    github: 'https://github.com/nardi-js/design-system',
    liveDemo: 'https://design-system-docs.netlify.app',
    features: [
      '100+ reusable components',
      'Dark mode support',
      'Accessibility compliant (WCAG 2.1)',
      'Interactive documentation',
      'Automated testing suite',
      'Figma integration'
    ],
    results: [
      { label: 'Development Speed', value: '+60%' },
      { label: 'Bug Reduction', value: '-40%' },
      { label: 'Design Consistency', value: '98%' },
      { label: 'Adoption Rate', value: '100%' }
    ],
    challenges: 'Creating a flexible system that works across 20+ different applications with varying requirements.',
    solution: 'Built a modular, theme-able architecture with comprehensive documentation and migration guides.',
    duration: '8 months',
    role: 'Lead UI/UX Developer',
    team: '5 members',
    year: '2023'
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    subtitle: 'Real-Time Analytics Platform',
    description: 'Advanced analytics dashboard with real-time data visualization, custom reports, and predictive insights for business intelligence.',
    image: '📊',
    tech: ['Next.js', 'D3.js', 'PostgreSQL', 'WebSocket', 'Docker'],
    gradient: 'from-purple-500 to-indigo-500',
    category: 'web',
    github: 'https://github.com/nardi-js/saas-dashboard',
    liveDemo: '',
    features: [
      'Real-time data streaming',
      'Custom report builder',
      'Interactive charts & graphs',
      'Data export in multiple formats',
      'Role-based access control',
      'Email alerts & notifications'
    ],
    results: [
      { label: 'Data Processing', value: '10M/day' },
      { label: 'Response Time', value: '<100ms' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Customer Retention', value: '95%' }
    ],
    challenges: 'Processing and visualizing millions of data points in real-time without performance degradation.',
    solution: 'Implemented data aggregation, WebSocket streaming, and optimized D3.js rendering with virtual scrolling.',
    duration: '10 months',
    role: 'Senior Full-Stack Developer',
    team: '12 members',
    year: '2023'
  },
  {
    id: 'mobile-app',
    title: 'Fitness Tracking App',
    subtitle: 'Your Personal Health Companion',
    description: 'Cross-platform mobile application for tracking fitness activities, nutrition, and wellness goals with social features.',
    image: '💪',
    tech: ['React Native', 'Firebase', 'Redux', 'HealthKit', 'Google Fit'],
    gradient: 'from-pink-400 to-purple-500',
    category: 'web',
    github: 'https://github.com/nardi-js/fitness-app',
    liveDemo: 'https://fitness-tracker-demo.netlify.app',
    features: [
      'Activity tracking (steps, calories, distance)',
      'Nutrition logging with barcode scanner',
      'Workout plans & video tutorials',
      'Social features & challenges',
      'Progress analytics & insights',
      'Wearable device integration'
    ],
    results: [
      { label: 'Downloads', value: '100K+' },
      { label: 'Daily Active Users', value: '25K' },
      { label: 'App Store Rating', value: '4.7/5' },
      { label: 'User Engagement', value: '85%' }
    ],
    challenges: 'Syncing data across iOS, Android, and multiple wearable devices while maintaining battery efficiency.',
    solution: 'Implemented efficient background sync, local-first architecture, and optimized battery usage.',
    duration: '12 months',
    role: 'Mobile Lead Developer',
    team: '6 members',
    year: '2024'
  },
  {
    id: 'customer-churn',
    title: 'Customer Churn Prediction',
    subtitle: 'Machine Learning Model for Retention',
    description: 'Predictive model using machine learning algorithms to identify customers at risk of churning, enabling proactive retention strategies.',
    image: '📉',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
    gradient: 'from-blue-400 to-indigo-500',
    category: 'data',
    github: 'https://github.com/nardi-js/customer-churn-prediction',
    liveDemo: '',
    features: [
      'Data preprocessing and feature engineering',
      'Multiple ML algorithms comparison (Random Forest, XGBoost, Logistic Regression)',
      'Hyperparameter tuning with GridSearchCV',
      'Feature importance analysis',
      'ROC curve and confusion matrix visualization',
      'Model deployment pipeline'
    ],
    results: [
      { label: 'Model Accuracy', value: '89%' },
      { label: 'Precision', value: '87%' },
      { label: 'Recall', value: '85%' },
      { label: 'F1 Score', value: '86%' }
    ],
    challenges: 'Handling imbalanced dataset where only 20% of customers actually churned.',
    solution: 'Applied SMOTE for oversampling, used class weights, and ensemble methods to improve minority class prediction.',
    duration: '2 months',
    role: 'Data Scientist',
    team: 'Solo project',
    year: '2024'
  },
  {
    id: 'sales-dashboard',
    title: 'Sales Analytics Dashboard',
    subtitle: 'Interactive Business Intelligence Tool',
    description: 'Comprehensive dashboard analyzing sales performance, trends, and customer behavior with interactive visualizations.',
    image: '📈',
    tech: ['Python', 'Tableau', 'SQL', 'Pandas', 'Plotly'],
    gradient: 'from-green-400 to-blue-500',
    category: 'data',
    github: 'https://github.com/nardi-js/sales-analytics-dashboard',
    liveDemo: '',
    features: [
      'ETL pipeline for data extraction from multiple sources',
      'Sales trend analysis and forecasting',
      'Customer segmentation and RFM analysis',
      'Product performance metrics',
      'Interactive Tableau dashboards',
      'Automated reporting system'
    ],
    results: [
      { label: 'Data Sources Integrated', value: '5' },
      { label: 'Reports Generated', value: '20+' },
      { label: 'Decision Making Speed', value: '+70%' },
      { label: 'Revenue Insights', value: '$500K saved' }
    ],
    challenges: 'Integrating data from different systems with inconsistent formats and missing values.',
    solution: 'Built robust ETL pipeline with data validation, error handling, and standardization processes.',
    duration: '3 months',
    role: 'Data Analyst',
    team: '2 members',
    year: '2024'
  },
  {
    id: 'sentiment-analysis',
    title: 'Social Media Sentiment Analysis',
    subtitle: 'NLP for Brand Monitoring',
    description: 'Natural Language Processing system analyzing social media sentiment to track brand perception and customer feedback.',
    image: '💬',
    tech: ['Python', 'NLTK', 'TensorFlow', 'Twitter API', 'Flask'],
    gradient: 'from-purple-400 to-blue-500',
    category: 'data',
    github: 'https://github.com/nardi-js/sentiment-analysis',
    liveDemo: '',
    features: [
      'Real-time social media data collection',
      'Text preprocessing and cleaning',
      'Sentiment classification (Positive, Negative, Neutral)',
      'Entity recognition and topic modeling',
      'Trend analysis and visualization',
      'REST API for model deployment'
    ],
    results: [
      { label: 'Classification Accuracy', value: '92%' },
      { label: 'Posts Analyzed', value: '1M+' },
      { label: 'Response Time', value: '<50ms' },
      { label: 'Languages Supported', value: '3' }
    ],
    challenges: 'Handling sarcasm, emojis, and informal language in social media posts.',
    solution: 'Used BERT-based models, emoji embeddings, and context-aware tokenization for better accuracy.',
    duration: '4 months',
    role: 'NLP Engineer',
    team: 'Solo project',
    year: '2023'
  },
  {
    id: 'recommendation-system',
    title: 'Movie Recommendation System',
    subtitle: 'Collaborative Filtering Engine',
    description: 'Personalized movie recommendation system using collaborative filtering and content-based approaches.',
    image: '🎬',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Surprise', 'Streamlit'],
    gradient: 'from-pink-400 to-purple-400',
    category: 'data',
    github: 'https://github.com/nardi-js/movie-recommendation-system',
    liveDemo: '',
    features: [
      'User-based collaborative filtering',
      'Item-based collaborative filtering',
      'Content-based recommendations',
      'Hybrid recommendation approach',
      'Cold start problem handling',
      'Interactive web interface with Streamlit'
    ],
    results: [
      { label: 'Recommendation Accuracy', value: '88%' },
      { label: 'Movies Database', value: '10K+' },
      { label: 'User Ratings', value: '1M+' },
      { label: 'RMSE Score', value: '0.85' }
    ],
    challenges: 'Providing accurate recommendations for new users with limited rating history (cold start).',
    solution: 'Implemented hybrid approach combining content features with collaborative data and popularity fallback.',
    duration: '3 months',
    role: 'ML Engineer',
    team: 'Solo project',
    year: '2023'
  }
]

const initialCertifications = [
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'September 2024',
    icon: '☁️',
    credential: 'CLF-C02',
    description: 'Comprehensive understanding of AWS Cloud fundamentals, services, and best practices for cloud computing.',
    skills: ['AWS Services', 'Cloud Computing', 'Security', 'Pricing Models', 'Architecture'],
    whatLearned: [
      'Understanding of AWS Cloud concepts and value proposition',
      'AWS security and compliance fundamentals',
      'Core AWS services including compute, network, database, and storage',
      'AWS pricing, account structures, and billing',
      'AWS Cloud architecture and design principles'
    ],
    projects: [
      'Deployed scalable web applications on AWS EC2',
      'Configured S3 buckets for static website hosting',
      'Implemented IAM policies for secure access control'
    ],
    relatedSkills: ['Cloud Architecture', 'DevOps', 'Infrastructure as Code', 'Cost Optimization'],
    image: '🎓'
  },
  {
    id: 'google-data-analytics',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    date: 'August 2024',
    icon: '📊',
    credential: 'Professional Certificate',
    description: 'Comprehensive data analytics program covering data cleaning, analysis, visualization, and SQL.',
    skills: ['Data Analysis', 'SQL', 'R Programming', 'Tableau', 'Data Visualization'],
    whatLearned: [
      'Data cleaning and preparation techniques',
      'SQL for data extraction and manipulation',
      'Data visualization using Tableau and R',
      'Statistical analysis and hypothesis testing',
      'Creating compelling data stories and presentations'
    ],
    projects: [
      'Analyzed bike-share usage patterns for business insights',
      'Created interactive Tableau dashboards for sales data',
      'Performed cohort analysis on customer retention'
    ],
    relatedSkills: ['Python', 'Excel', 'Statistics', 'Business Intelligence', 'Data Mining'],
    image: '�'
  },
  {
    id: 'azure-fundamentals',
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: 'July 2024',
    icon: '⚡',
    credential: 'AZ-900',
    description: 'Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.',
    skills: ['Azure Services', 'Cloud Concepts', 'Security', 'Compliance', 'Pricing'],
    whatLearned: [
      'Core Azure services and solutions',
      'Azure pricing and support models',
      'Cloud concepts and deployment models',
      'Security, privacy, and compliance in Azure',
      'Azure governance and management tools'
    ],
    projects: [
      'Created Azure virtual machines for development',
      'Configured Azure Storage accounts',
      'Implemented Azure Active Directory for authentication'
    ],
    relatedSkills: ['Cloud Computing', 'PowerShell', 'Azure CLI', 'Networking', 'Security'],
    image: '☁️'
  },
  {
    id: 'meta-database',
    title: 'Meta Database Engineer',
    issuer: 'Meta',
    date: 'June 2024',
    icon: '🗄️',
    credential: 'Professional Certificate',
    description: 'Advanced database engineering skills including MySQL, Python, and database optimization.',
    skills: ['MySQL', 'Database Design', 'SQL Optimization', 'Python', 'Data Modeling'],
    whatLearned: [
      'Advanced SQL queries and optimization',
      'Database design and normalization',
      'Stored procedures and triggers',
      'Python for database operations',
      'Database performance tuning and indexing'
    ],
    projects: [
      'Designed normalized database schema for e-commerce',
      'Optimized slow queries reducing execution time by 60%',
      'Created automated backup and recovery procedures'
    ],
    relatedSkills: ['PostgreSQL', 'MongoDB', 'Data Warehousing', 'ETL', 'Database Administration'],
    image: '💾'
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI & Stanford',
    date: 'May 2024',
    icon: '🤖',
    credential: 'Specialization Certificate',
    description: 'Comprehensive machine learning course covering supervised and unsupervised learning, neural networks, and best practices.',
    skills: ['Machine Learning', 'Neural Networks', 'Python', 'TensorFlow', 'Deep Learning'],
    whatLearned: [
      'Supervised learning algorithms (regression, classification)',
      'Unsupervised learning (clustering, anomaly detection)',
      'Neural networks and deep learning fundamentals',
      'Best practices for ML project development',
      'Model evaluation and hyperparameter tuning'
    ],
    projects: [
      'Built house price prediction model with 92% accuracy',
      'Created image classifier using neural networks',
      'Implemented recommendation system using collaborative filtering'
    ],
    relatedSkills: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Keras', 'Data Science'],
    image: '�'
  },
  {
    id: 'python-data-science',
    title: 'Python for Data Science',
    issuer: 'IBM',
    date: 'April 2024',
    icon: '🐍',
    credential: 'Professional Certificate',
    description: 'Python programming fundamentals for data science, including libraries like NumPy, Pandas, and Matplotlib.',
    skills: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Data Analysis'],
    whatLearned: [
      'Python programming fundamentals',
      'Data manipulation with Pandas',
      'Numerical computing with NumPy',
      'Data visualization with Matplotlib and Seaborn',
      'Web scraping and API integration'
    ],
    projects: [
      'Analyzed COVID-19 data trends and visualizations',
      'Built stock price analysis dashboard',
      'Created automated data pipeline for ETL processes'
    ],
    relatedSkills: ['Jupyter', 'Statistics', 'Data Cleaning', 'API Integration', 'Web Scraping'],
    image: '�'
  }
]

export async function migrateData() {
  try {
    console.log('Starting data migration...')

    // Migrate Skills
    console.log('Migrating skills...')
    for (const skill of initialSkills) {
      await addDoc(collection(db, 'skills'), skill)
    }

    // Migrate Projects
    console.log('Migrating projects...')
    for (const project of initialProjects) {
      await addDoc(collection(db, 'projects'), project)
    }

    // Migrate Certifications
    console.log('Migrating certifications...')
    for (const cert of initialCertifications) {
      await addDoc(collection(db, 'certifications'), cert)
    }

    console.log('Data migration completed successfully!')
    return { success: true, message: 'Data migration completed!' }
  } catch (error) {
    console.error('Error during migration:', error)
    return { success: false, error: error.message }
  }
}
