import { useParams, Link } from 'react-router-dom'

function ProjectDetail() {
  const { id } = useParams()

  const allProjects = {
    'ecommerce': {
      title: 'E-Commerce Platform',
      subtitle: 'Next-Gen Shopping Experience',
      description: 'A comprehensive e-commerce solution with AI-powered product recommendations, real-time inventory management, and seamless payment integration.',
      image: '🛍️',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Redis'],
      gradient: 'from-purple-400 to-pink-400',
      features: [
        'AI-powered product recommendations',
        'Real-time inventory tracking',
        'Multiple payment gateway integration',
        'Advanced search with filters',
        'Order tracking system',
        'Customer analytics dashboard'
      ],
      results: [
        { label: 'Conversion Rate', value: '+45%' },
        { label: 'Page Load Time', value: '1.2s' },
        { label: 'User Satisfaction', value: '4.8/5' },
        { label: 'Monthly Active Users', value: '50K+' }
      ],
      challenges: 'Scaling the platform to handle Black Friday traffic while maintaining sub-2 second load times.',
      solution: 'Implemented Redis caching, CDN distribution, and microservices architecture for optimal performance.',
      duration: '6 months',
      role: 'Lead Full-Stack Developer',
      team: '8 members',
      year: '2024'
    },
    'design-system': {
      title: 'Design System',
      subtitle: 'Enterprise Component Library',
      description: 'Comprehensive design system with 100+ reusable components, ensuring brand consistency across all enterprise applications.',
      image: '🎨',
      tech: ['React', 'TypeScript', 'Storybook', 'Figma', 'CSS-in-JS'],
      gradient: 'from-indigo-400 to-purple-400',
      features: [
        '100+ reusable components',
        'Dark mode support',
        'Accessibility compliant (WCAG 2.1)',
        'Interactive documentation',
        'Automated testing suite',
        'Figma integration'
      ],
      results: [
        { label: 'Development Speed', value: '+60%' },
        { label: 'Bug Reduction', value: '-40%' },
        { label: 'Design Consistency', value: '98%' },
        { label: 'Adoption Rate', value: '100%' }
      ],
      challenges: 'Creating a flexible system that works across 20+ different applications with varying requirements.',
      solution: 'Built a modular, theme-able architecture with comprehensive documentation and migration guides.',
      duration: '8 months',
      role: 'Lead UI/UX Developer',
      team: '5 members',
      year: '2023'
    },
    'saas-dashboard': {
      title: 'SaaS Dashboard',
      subtitle: 'Real-Time Analytics Platform',
      description: 'Advanced analytics dashboard with real-time data visualization, custom reports, and predictive insights for business intelligence.',
      image: '📊',
      tech: ['Next.js', 'D3.js', 'PostgreSQL', 'WebSocket', 'Docker'],
      gradient: 'from-purple-500 to-indigo-500',
      features: [
        'Real-time data streaming',
        'Custom report builder',
        'Interactive charts & graphs',
        'Data export in multiple formats',
        'Role-based access control',
        'Email alerts & notifications'
      ],
      results: [
        { label: 'Data Processing', value: '10M/day' },
        { label: 'Response Time', value: '<100ms' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Customer Retention', value: '95%' }
      ],
      challenges: 'Processing and visualizing millions of data points in real-time without performance degradation.',
      solution: 'Implemented data aggregation, WebSocket streaming, and optimized D3.js rendering with virtual scrolling.',
      duration: '10 months',
      role: 'Senior Full-Stack Developer',
      team: '12 members',
      year: '2023'
    },
    'mobile-app': {
      title: 'Fitness Tracking App',
      subtitle: 'Your Personal Health Companion',
      description: 'Cross-platform mobile application for tracking fitness activities, nutrition, and wellness goals with social features.',
      image: '💪',
      tech: ['React Native', 'Firebase', 'Redux', 'HealthKit', 'Google Fit'],
      gradient: 'from-pink-400 to-purple-500',
      features: [
        'Activity tracking (steps, calories, distance)',
        'Nutrition logging with barcode scanner',
        'Workout plans & video guides',
        'Social challenges & leaderboards',
        'Wearable device integration',
        'Progress analytics & insights'
      ],
      results: [
        { label: 'Downloads', value: '100K+' },
        { label: 'App Rating', value: '4.7/5' },
        { label: 'Daily Active Users', value: '25K' },
        { label: 'Retention Rate', value: '68%' }
      ],
      challenges: 'Syncing data across multiple platforms and wearable devices while preserving battery life.',
      solution: 'Implemented efficient background sync, local caching, and smart data aggregation algorithms.',
      duration: '12 months',
      role: 'Mobile App Developer',
      team: '6 members',
      year: '2024'
    }
  }

  const project = allProjects[id] || allProjects['ecommerce']

  return (
    <section className="relative min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mb-8 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 mb-12 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6 animate-float">{project.image}</div>
              <h1 className="text-5xl font-bold text-gray-800 mb-4">{project.title}</h1>
              <p className="text-2xl text-purple-600 font-semibold mb-6">{project.subtitle}</p>
              <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span>📅</span> Project Info
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium text-gray-800">{project.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Role:</span>
                    <span className="font-medium text-gray-800">{project.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Team Size:</span>
                    <span className="font-medium text-gray-800">{project.team}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Year:</span>
                    <span className="font-medium text-gray-800">{project.year}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span>🛠️</span> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="text-4xl">✨</span>
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results & Impact */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="text-4xl">📈</span>
            Results & Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-center text-white shadow-xl"
              >
                <div className="text-4xl font-bold mb-2">{result.value}</div>
                <div className="text-purple-100">{result.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              Challenge
            </h2>
            <p className="text-gray-600 leading-relaxed">{project.challenges}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              Solution
            </h2>
            <p className="text-gray-600 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-purple-100 mb-6 text-lg">Let's create something amazing for your next project</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail
