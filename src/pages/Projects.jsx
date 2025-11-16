import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { db } from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore'
import SEO from '../components/SEO'

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectsSnapshot = await getDocs(collection(db, 'projects'))
        const projectsData = projectsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setProjects(projectsData)
      } catch (error) {
        console.error('Error loading projects:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🚀' },
    { id: 'web', label: 'Web Development', icon: '💻' },
    { id: 'data', label: 'Data Science', icon: '📊' }
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  if (loading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </section>
    )
  }

  return (
    <>
      <SEO 
        title="Projects - Nardi Portfolio | Full Stack & Data Science Projects"
        description="Browse my portfolio of Full Stack Development and Data Science projects. Featuring web applications, mobile apps, machine learning models, and data analysis dashboards."
        keywords="portfolio projects, full stack projects, data science projects, react projects, python projects, machine learning projects"
        canonical="/projects"
        ogType="website"
      />
      <section className="relative min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-up">
          Featured Projects
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 shadow-md'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
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
                    {project.image || project.icon}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {(Array.isArray(project.tech) ? project.tech : []).map(tech => (
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
    </>
  )
}

export default Projects
