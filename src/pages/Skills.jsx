import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { db } from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore'
import SEO from '../components/SEO'

function Skills() {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const skillsSnapshot = await getDocs(collection(db, 'skills'))
        const skillsData = skillsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setSkills(skillsData)
      } catch (error) {
        console.error('Error loading skills:', error)
      } finally {
        setLoading(false)
      }
    }

    loadSkills()
  }, [])

  if (loading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading skills...</p>
        </div>
      </section>
    )
  }

  return (
    <>
      <SEO 
        title="Technical Skills & Expertise - Nardi Portfolio | Full Stack & Data Science Capabilities"
        description="Explore Nardi's comprehensive technical skill set: Expert in React, Python, JavaScript, Node.js, TensorFlow, and modern web technologies. Proficient in full stack development, data science, machine learning, cloud computing (AWS, Azure, Google Cloud), database management, and AI integration. View detailed proficiency levels and project applications."
        keywords="technical skills, programming languages, react expert, python developer, javascript, node.js, full stack skills, data science tools, machine learning frameworks, tensorflow, pandas, numpy, tailwind css, cloud computing, aws, azure, database skills, mongodb, postgresql, git, docker, api development"
        canonical="/skills"
        ogType="website"
        ogImage="https://nardilabs.com/skills-preview.jpg"
      />
      <section className="relative min-h-screen py-20 bg-gradient-to-br from-purple-50/30 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-up">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-pink-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{skill.name}</h3>
                
                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse-subtle`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                
                <div className="mt-3 text-right">
                  <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {skill.level}%
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-16">
          <Link 
            to="/projects"
            className="group relative inline-block px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-300/50 hover:shadow-purple-400/60"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Projects
              <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
          
          <Link 
            to="/about"
            className="group relative inline-block px-10 py-5 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              About Me
              <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default Skills
