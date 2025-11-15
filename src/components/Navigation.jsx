import { NavLink } from 'react-router-dom'

function Navigation() {
  const navItems = [
    { path: '/', icon: '🏠', label: 'Home' },
    { path: '/about', icon: '👤', label: 'About' },
    { path: '/skills', icon: '⚡', label: 'Skills' },
    { path: '/projects', icon: '💼', label: 'Projects' },
    { path: '/certifications', icon: '🎓', label: 'Certificates' },
    { path: '/contact', icon: '✉️', label: 'Contact' }
  ]

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

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-lg border-t border-purple-100 shadow-2xl shadow-purple-200/50">
        <div className="flex justify-around items-center px-2 py-2">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-0.5 px-2 py-1.5 rounded-xl transition-all duration-300 min-w-0 ${
                  isActive
                    ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white scale-105 shadow-lg shadow-purple-300/50'
                    : 'text-gray-600 hover:text-purple-600'
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
      </nav>
    </>
  )
}

export default Navigation
