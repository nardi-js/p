import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { db } from '../firebase/config'
import { collection, query, where, getDocs } from 'firebase/firestore'
import SEO from '../components/SEO'

function ProjectDetail() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProject = async () => {
      try {
        const projectsRef = collection(db, 'projects')
        const q = query(projectsRef, where('id', '==', id))
        const querySnapshot = await getDocs(q)
        
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0]
          setProject({
            firestoreId: doc.id, // Save Firestore document ID
            ...doc.data()
          })
        }
      } catch (error) {
        console.error('Error loading project:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProject()
  }, [id])

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project...</p>
        </div>
      </section>
    )
  }

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h2>
          <Link to="/projects" className="text-purple-600 hover:text-purple-700 font-medium">
            ← Back to Projects
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <SEO 
        title={`${project.title} - Project Detail | Nardi Portfolio`}
        description={project.subtitle ? `${project.subtitle}. ${project.description}` : project.description}
        keywords={`${project.title}, ${project.tech?.join(', ')}, project, portfolio, ${project.category}`}
        canonical={`/projects/${id}`}
        ogType="article"
        ogImage={project.image || '/og-image.jpg'}
      />
      <section className="min-h-screen py-12 md:py-20 bg-gradient-to-br from-purple-50/30 to-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mb-6 md:mb-8 group transition-all text-sm md:text-base"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Projects
        </Link>

        <div className={`bg-gradient-to-r ${project.gradient} rounded-2xl md:rounded-3xl p-6 md:p-12 mb-6 md:mb-8 shadow-xl animate-fade-in`}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-6 text-center md:text-left">
            <div className="text-5xl md:text-8xl">{project.image}</div>
            <div className="flex-1 text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{project.title}</h1>
              {project.subtitle && <p className="text-base md:text-xl opacity-90">{project.subtitle}</p>}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 mb-6 justify-center md:justify-start">
            {(Array.isArray(project.tech) ? project.tech : []).map(tech => (
              <span key={tech} className="px-3 md:px-4 py-1.5 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm md:text-base">
                {tech}
              </span>
            ))}
          </div>

          {/* GitHub and Live Demo Buttons */}
          <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-4 pt-4 border-t border-white/20">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 text-sm md:text-base w-full md:w-auto"
              >
                <span className="text-lg md:text-xl">⚡</span>
                View on GitHub
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            )}
            
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 text-sm md:text-base w-full md:w-auto"
              >
                <span className="text-lg md:text-xl">🌐</span>
                Live Demo
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl mb-6 md:mb-8 animate-fade-in animation-delay-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Overview</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">{project.description}</p>
          
          {(project.duration || project.role || project.team || project.year) && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
              {project.duration && (
                <div>
                  <p className="text-xs md:text-sm text-gray-500 mb-1">Duration</p>
                  <p className="font-semibold text-purple-600 text-sm md:text-base">{project.duration}</p>
                </div>
              )}
              {project.role && (
                <div>
                  <p className="text-xs md:text-sm text-gray-500 mb-1">Role</p>
                  <p className="font-semibold text-purple-600 text-sm md:text-base">{project.role}</p>
                </div>
              )}
              {project.team && (
                <div>
                  <p className="text-xs md:text-sm text-gray-500 mb-1">Team Size</p>
                  <p className="font-semibold text-purple-600 text-sm md:text-base">{project.team}</p>
                </div>
              )}
              {project.year && (
                <div>
                  <p className="text-xs md:text-sm text-gray-500 mb-1">Year</p>
                  <p className="font-semibold text-purple-600 text-sm md:text-base">{project.year}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {(project.features || project.results) && (
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            {project.features && Array.isArray(project.features) && project.features.length > 0 && (
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl animate-fade-in-up animation-delay-300">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                  <span className="text-2xl md:text-3xl">✨</span>
                  Key Features
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 md:gap-3 text-gray-700 text-sm md:text-base">
                      <span className="text-purple-500 text-lg md:text-xl mt-0.5 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.results && Array.isArray(project.results) && project.results.length > 0 && (
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl animate-fade-in-up animation-delay-400">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                  <span className="text-2xl md:text-3xl">📊</span>
                  Results & Impact
                </h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {project.results.map((result, i) => (
                    <div key={i} className="text-center p-3 md:p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl md:rounded-2xl">
                      <p className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">{result.value}</p>
                      <p className="text-xs md:text-sm text-gray-600">{result.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {(project.challenges || project.solution) && (
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl mb-6 md:mb-8 animate-fade-in-up animation-delay-500">
            {project.challenges && (
              <>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                  <span className="text-2xl md:text-3xl">🎯</span>
                  Challenge
                </h3>
                <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{project.challenges}</p>
              </>
            )}
            
            {project.solution && (
              <>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                  <span className="text-2xl md:text-3xl">💡</span>
                  Solution
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">{project.solution}</p>
              </>
            )}
          </div>
        )}

        <div className="flex justify-center">
          <Link
            to="/projects"
            className="group inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-base md:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full md:w-auto max-w-xs md:max-w-none"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            View All Projects
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default ProjectDetail
