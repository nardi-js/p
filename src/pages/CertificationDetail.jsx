import { useParams, Link } from 'react-router-dom'

function CertificationDetail() {
  const { id } = useParams()

  const certifications = {
    'aws-cloud-practitioner': {
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
    'google-data-analytics': {
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
      image: '📈'
    },
    'azure-fundamentals': {
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
    'meta-database': {
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
    'machine-learning': {
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
      image: '🧠'
    },
    'python-data-science': {
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
      image: '📊'
    }
  }

  const cert = certifications[id]

  if (!cert) {
    return (
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Certification Not Found</h2>
          <Link to="/certifications" className="text-purple-600 hover:text-purple-700 font-medium">
            ← Back to Certifications
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-purple-50/30 to-white">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Back Button */}
        <Link 
          to="/certifications"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mb-8 group transition-all"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Certifications
        </Link>

        {/* Header */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-8 animate-fade-in">
          <div className="flex items-start gap-6 mb-6">
            <div className="text-6xl md:text-8xl">{cert.icon}</div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                {cert.title}
              </h1>
              <p className="text-xl text-purple-600 font-semibold mb-2">{cert.issuer}</p>
              <p className="text-gray-600 mb-3">{cert.date} • Credential: {cert.credential}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{cert.description}</p>
            </div>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
            {cert.skills.map(skill => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certificate Image Placeholder */}
        <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-12 mb-8 shadow-xl animate-fade-in animation-delay-200">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 text-center">
            <div className="text-9xl mb-6">{cert.image}</div>
            <h3 className="text-2xl font-bold text-white mb-2">Certificate of Completion</h3>
            <p className="text-white/80">Credential ID: {cert.credential}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* What I Learned */}
          <div className="bg-white rounded-3xl p-8 shadow-xl animate-fade-in-up animation-delay-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-3xl">📚</span>
              What I Learned
            </h3>
            <ul className="space-y-3">
              {cert.whatLearned.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-purple-500 text-xl mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects & Applications */}
          <div className="bg-white rounded-3xl p-8 shadow-xl animate-fade-in-up animation-delay-400">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-3xl">🚀</span>
              Applied Projects
            </h3>
            <ul className="space-y-3">
              {cert.projects.map((project, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-pink-500 text-xl mt-0.5">▶</span>
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related Skills */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-8 animate-fade-in-up animation-delay-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="text-3xl">🔗</span>
            Related Skills & Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {cert.relatedSkills.map(skill => (
              <span
                key={skill}
                className="px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 rounded-2xl font-medium border border-purple-200 hover:shadow-lg transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link 
            to="/certifications"
            className="group relative inline-block px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-300/50 hover:shadow-purple-400/60"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Certifications
              <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
          
          <Link 
            to="/contact"
            className="group relative inline-block px-10 py-5 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get In Touch
              <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CertificationDetail
