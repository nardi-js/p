import { Link } from 'react-router-dom'

function Certifications() {
  const certifications = [
    {
      id: 'aws-cloud-practitioner',
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Sep 2024',
      description: 'Cloud computing fundamentals and AWS services',
      icon: '☁️'
    },
    {
      id: 'google-data-analytics',
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Google',
      date: 'Aug 2024',
      description: 'Data analysis, visualization, and SQL skills',
      icon: '📊'
    },
    {
      id: 'azure-fundamentals',
      title: 'Microsoft Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      date: 'Jul 2024',
      description: 'Azure cloud services and solutions',
      icon: '⚡'
    },
    {
      id: 'meta-database',
      title: 'Meta Database Engineer',
      issuer: 'Meta',
      date: 'Jun 2024',
      description: 'Database design and optimization',
      icon: '🗄️'
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning Specialization',
      issuer: 'DeepLearning.AI & Stanford',
      date: 'May 2024',
      description: 'ML algorithms and neural networks',
      icon: '🤖'
    },
    {
      id: 'python-data-science',
      title: 'Python for Data Science',
      issuer: 'IBM',
      date: 'Apr 2024',
      description: 'Python programming for data analysis',
      icon: '🐍'
    }
  ]

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-purple-50/30 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-up">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {certifications.map((cert, index) => (
            <Link
              key={cert.id}
              to={`/certifications/${cert.id}`}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-pink-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                <p className="text-purple-600 font-medium mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mb-3">{cert.date}</p>
                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                
                <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  View Details
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </Link>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-16">
          <Link 
            to="/contact"
            className="group relative inline-block px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-300/50 hover:shadow-purple-400/60"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get In Touch
              <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
          
          <Link 
            to="/skills"
            className="group relative inline-block px-10 py-5 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Skills
              <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Certifications
