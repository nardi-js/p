import { Link } from 'react-router-dom'

function Projects() {
  const projects = [
    {
      id: 'ecommerce',
      title: 'E-Commerce Platform',
      description: 'Modern shopping experience with AI recommendations',
      tech: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-purple-400 to-pink-400',
      icon: '🛍️'
    },
    {
      id: 'design-system',
      title: 'Design System',
      description: 'Comprehensive component library for enterprises',
      tech: ['React', 'Storybook', 'Figma'],
      gradient: 'from-indigo-400 to-purple-400',
      icon: '🎨'
    },
    {
      id: 'saas-dashboard',
      title: 'SaaS Dashboard',
      description: 'Analytics platform with real-time data visualization',
      tech: ['Next.js', 'D3.js', 'PostgreSQL'],
      gradient: 'from-purple-500 to-indigo-500',
      icon: '📊'
    },
    {
      id: 'mobile-app',
      title: 'Fitness Tracking App',
      description: 'Cross-platform fitness tracking application',
      tech: ['React Native', 'Firebase', 'Redux'],
      gradient: 'from-pink-400 to-purple-500',
      icon: '💪'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-up">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="text-5xl ml-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {project.icon}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  View Details
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />
            </Link>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
          <Link
            to="/certifications"
            className="group relative inline-block px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-300/50 hover:shadow-purple-400/60"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Certifications
              <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
          
          <Link
            to="/skills"
            className="group relative inline-block px-10 py-5 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              Back to Skills
              <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
