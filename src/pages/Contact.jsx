import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

function Contact() {
  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com/nardi-js', color: 'from-gray-700 to-gray-900' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/nardi-js', color: 'from-blue-600 to-blue-700' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/nardi-js', color: 'from-sky-500 to-blue-600' },
    { name: 'Dribbble', icon: '🎨', url: 'https://dribbble.com/nardi-js', color: 'from-pink-500 to-rose-600' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/naa.dev', color: 'from-purple-600 to-pink-600' },
    { name: 'Email', icon: '✉️', url: 'mailto:700nardi@gmail.com', color: 'from-red-500 to-orange-600' }
  ]

  return (
    <>
      <SEO 
        title="Contact Nardi - Get in Touch | Freelance Developer & Data Scientist"
        description="Connect with Nardi for freelance web development, data science projects, and collaboration opportunities. Available for full stack development, AI integration, and data analysis projects. Reach out via email, LinkedIn, GitHub, Twitter, Instagram, or WhatsApp. Open to internship opportunities and technical consultations."
        keywords="contact nardi, hire developer, freelance developer contact, web development inquiry, data science consultation, collaboration opportunity, developer for hire, project inquiry, tech collaboration, student developer contact"
        canonical="/contact"
        ogType="website"
        ogImage="https://nardilabs.com/contact-preview.jpg"
      />
      <section className="relative min-h-screen flex items-center py-20 bg-gradient-to-br from-purple-50/30 via-white to-pink-50/20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-up">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 animate-slide-up animation-delay-200">
            Have a project in mind? Let's make something amazing.
          </p>

          <form className="space-y-6 animate-fade-in-up animation-delay-400">
            <div className="group">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-white rounded-2xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 group-hover:border-purple-300 focus:shadow-lg focus:shadow-purple-200/50"
              />
            </div>

            <div className="group">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-white rounded-2xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 group-hover:border-purple-300 focus:shadow-lg focus:shadow-purple-200/50"
              />
            </div>

            <div className="group">
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full px-6 py-4 bg-white rounded-2xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 resize-none group-hover:border-purple-300 focus:shadow-lg focus:shadow-purple-200/50"
              />
            </div>

            <button
              type="submit"
              className="group relative w-full py-5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl font-semibold text-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-purple-300/50 hover:shadow-purple-400/60"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Send Message
                <span className="inline-block group-hover:rotate-45 transition-transform duration-300">✉️</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </form>

          <div className="mt-12 text-center animate-fade-in animation-delay-600">
            <p className="text-gray-600 mb-6 text-lg font-medium">Connect with me</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${social.color} flex flex-col items-center justify-center text-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-4`}>
                    <span className="text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <span className="text-xs font-medium opacity-90">{social.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Contact Cards */}
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
              <div className="text-3xl mb-2">📧</div>
              <p className="text-sm text-gray-600 mb-1">Email</p>
              <p className="font-medium text-gray-800 text-sm">700nardi@gmail.com</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
              <div className="text-3xl mb-2">📱</div>
              <p className="text-sm text-gray-600 mb-1">Phone</p>
              <p className="font-medium text-gray-800 text-sm">+60 1113223385</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
              <div className="text-3xl mb-2">📍</div>
              <p className="text-sm text-gray-600 mb-1">Location</p>
              <p className="font-medium text-gray-800 text-sm">Kedah, Malaysia</p>
            </div>
          </div>

          {/* Back to Start */}
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-300/50 hover:shadow-purple-400/60"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span className="relative z-10">Back to Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-sm animate-fade-in">
        © 2025 All rights reserved
      </div>
    </section>
    </>
  )
}

export default Contact
