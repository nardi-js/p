import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-white to-pink-50/20" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-block animate-float">
            <h1 className="text-7xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Nardi
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-gray-600 font-light tracking-wide animate-slide-up animation-delay-200">
            Developer & Data Science Student
          </p>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto animate-slide-up animation-delay-400">
            Building simple, functional tech solutions • AI-assisted developer • Fast learner • Consistent worker
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
            <Link 
              to="/projects"
              className="group relative inline-block px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-300/50 hover:shadow-purple-400/60 animate-slide-up animation-delay-600"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
            
            <Link 
              to="/about"
              className="group relative inline-block px-10 py-5 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl animate-slide-up animation-delay-700"
            >
              <span className="relative z-10 flex items-center gap-2">
                Learn About Me
                <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-1000" />
    </section>
  )
}

export default Home
