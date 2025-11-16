import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { db } from '../firebase/config'
import { collection, query, where, getDocs } from 'firebase/firestore'
import SEO from '../components/SEO'

function CertificationDetail() {
  const { id } = useParams()
  const [cert, setCert] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCertification = async () => {
      try {
        const certsRef = collection(db, 'certifications')
        const q = query(certsRef, where('id', '==', id))
        const querySnapshot = await getDocs(q)
        
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0]
          setCert({
            firestoreId: doc.id, // Save Firestore document ID
            ...doc.data()
          })
        }
      } catch (error) {
        console.error('Error loading certification:', error)
      } finally {
        setLoading(false)
      }
    }

    loadCertification()
  }, [id])

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading certification...</p>
        </div>
      </section>
    )
  }

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
    <>
      <SEO 
        title={`${cert.title} - Certification | Nardi Portfolio`}
        description={`${cert.description} Issued by ${cert.issuer}. ${cert.skills?.join(', ')}.`}
        keywords={`${cert.title}, ${cert.issuer}, ${cert.skills?.join(', ')}, certification, professional certificate`}
        canonical={`/certifications/${id}`}
        ogType="article"
        ogImage={cert.image || '/og-image.jpg'}
      />
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
              <p className="text-gray-600 mb-3">{cert.date}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{cert.description}</p>
            </div>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
            {cert.skills?.map(skill => (
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
            <h3 className="text-2xl font-bold text-white mb-6">Certificate of Completion</h3>
            
            {/* Verify Certificate Button */}
            {cert.credential && (
              <a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                View Credential
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* What I Learned */}
          {cert.whatLearned && cert.whatLearned.length > 0 && (
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
          )}

          {/* Projects & Applications */}
          {cert.projects && cert.projects.length > 0 && (
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
          )}
        </div>

        {/* Related Skills */}
        {cert.relatedSkills && cert.relatedSkills.length > 0 && (
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
        )}

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
    </>
  )
}

export default CertificationDetail
