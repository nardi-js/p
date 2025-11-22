import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Navigation() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollTimeout, setScrollTimeout] = useState(null)

  const navItems = [
    { path: '/', icon: '🏠', label: 'Home' },
    { path: '/about', icon: '👤', label: 'About' },
    { path: '/skills', icon: '⚡', label: 'Skills' },
    { path: '/projects', icon: '💼', label: 'Projects' },
    { path: '/certifications', icon: '🎓', label: 'Certificates' },
    { path: '/contact', icon: '✉️', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show navigation when scrolling
      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        setIsVisible(true)
        setLastScrollY(currentScrollY)
      }

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }

      // Hide navigation after 2 seconds of no scrolling
      const timeout = setTimeout(() => {
        setIsVisible(false)
      }, 2000)

      setScrollTimeout(timeout)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [lastScrollY, scrollTimeout])

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <div className="bg-white/80 backdrop-blur-lg rounded-full shadow-2xl shadow-purple-200/50 p-4 space-y-6 border border-purple-100">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative group w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500 transform ${
                  isActive
                    ? 'bg-gradient-to-br from-purple-500 to-purple-600 scale-110 shadow-lg shadow-purple-300/50'
                    : 'hover:bg-purple-50 hover:scale-125'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`text-2xl transition-all duration-500 ${
                    isActive ? 'scale-125' : 'group-hover:scale-125 group-hover:rotate-12'
                  }`}>
                    {item.icon}
                  </span>
                  
                  <div className="absolute left-full ml-6 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2 whitespace-nowrap pointer-events-none shadow-xl">
                    <span className="text-sm font-medium">{item.label}</span>
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-purple-600" />
                  </div>

                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-20" />
                  </div>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Mobile Floating Navigation */}
      <nav className={`fixed left-4 right-4 bottom-6 z-40 md:hidden transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl shadow-purple-300/50 border border-purple-100 px-3 py-3">
          <div className="flex justify-around items-center">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center gap-0.5 px-2 py-1.5 rounded-xl transition-all duration-300 min-w-0 ${
                    isActive
                      ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white scale-105 shadow-lg shadow-purple-300/50'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`text-xl transition-all duration-300 ${
                      isActive ? 'scale-110 animate-bounce-subtle' : ''
                    }`}>
                      {item.icon}
                    </span>
                    <span className={`text-[10px] font-medium transition-all duration-300 whitespace-nowrap ${
                      isActive ? 'text-white' : 'text-gray-600'
                    }`}>
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation
