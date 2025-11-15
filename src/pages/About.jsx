import { Link } from 'react-router-dom'

function About() {
  const experiences = [
    { 
      title: 'Freelance Developer & Data Analyst',
      company: 'Self-Employed',
      period: '2024 - Present',
      description: 'Building functional websites, fixing front-end issues, setting up portfolios, and performing data analysis using Python. Combining AI tools with hands-on coding to deliver fast, practical solutions.'
    },
    { 
      title: 'Technical Assistant & Lab Support',
      company: 'SMK TKJ Indonesia',
      period: '2020 - 2022',
      description: 'Assisted with printer repair, PC maintenance, WiFi troubleshooting, lab setup, and technical support during school activities. Handled networking configuration and hardware troubleshooting.'
    },
    { 
      title: 'Internship (PKL) - Technical & Web Development',
      company: 'School Foundation',
      period: '2021',
      description: 'Handled technical tasks including printing, proposals, documentation, and simple web development (HTML/CSS/JS) for internal projects.'
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Computer Science (Honours)',
      institution: 'Albukhary International University, Malaysia',
      year: '2023 - 2026 (Expected)',
      gpa: 'Full Scholarship',
      specialization: 'Data Science',
      notes: 'Industrial Training: March 2026'
    },
    {
      degree: 'Vocational High School - Computer Network Engineering (TKJ)',
      institution: 'SMK Indonesia',
      year: '2019 - 2022',
      gpa: 'Top 2 Graduate',
      specialization: 'Networking & IT Support'
    }
  ]

  const certifications = [
    'Google Cybersecurity Professional Certificate (8 courses)',
    'Alibaba Cloud ACA Certification',
    'Advanced Node.js (Udemy)',
    'Machine Learning & Data Science (Udemy)',
    'Git & GitHub Version Control',
    'Python & JavaScript Fundamentals'
  ]

  const languages = [
    { name: 'Bahasa Indonesia', level: 'Native' },
    { name: 'English', level: 'Intermediate' },
    { name: 'Japanese', level: 'Beginner' },
    { name: 'Chinese Mandarin', level: 'Beginner' }
  ]

  const dataProjects = [
    'Data cleaning & transformation with Pandas',
    'CSV analysis & visualization',
    'Exploratory Data Analysis (EDA)',
    'Jupyter Notebook workflow',
    'Basic machine learning models'
  ]

  return (
    <section className="relative min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Developer & Data Enthusiast | Building Simple, Functional Tech Solutions
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 mb-12 shadow-xl animate-slide-up">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="relative group mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-30 blur-xl" />
              <div className="relative w-48 h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
                  👨‍💻
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Nardi</h3>
                <p className="text-xl text-purple-600 font-semibold mb-4">Developer & Data Science Student</p>
                <p className="text-gray-600 leading-relaxed">
                  Hi! I'm Nardi — a freelance developer and data enthusiast who builds simple, functional tech solutions. 
                  I help people fix websites, set up portfolios, and analyze data using Python. I combine AI tools with 
                  real coding to deliver fast results. Still early in my journey, but I'm a consistent learner who values 
                  clarity, honesty, and continuous growth.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all">
                  <div className="text-3xl font-bold text-purple-600">21</div>
                  <div className="text-sm text-gray-600">Years Old</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all">
                  <div className="text-3xl font-bold text-purple-600">2026</div>
                  <div className="text-sm text-gray-600">Graduation</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all">
                  <div className="text-3xl font-bold text-purple-600">🎓</div>
                  <div className="text-sm text-gray-600">Full Scholar</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all">
                  <div className="text-3xl font-bold text-purple-600">🇮🇩</div>
                  <div className="text-sm text-gray-600">Indonesian</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Education Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Work Experience */}
          <div className="bg-white rounded-3xl p-8 shadow-xl animate-slide-right">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-3xl">💼</span>
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-purple-200 hover:border-purple-400 transition-colors">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500" />
                  <h4 className="font-semibold text-lg text-gray-800">{exp.title}</h4>
                  <p className="text-purple-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                  <p className="text-gray-600 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-3xl p-8 shadow-xl animate-slide-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-3xl">🎓</span>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-purple-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500" />
                  <h4 className="font-semibold text-lg text-gray-800">{edu.degree}</h4>
                  <p className="text-purple-600 font-medium">{edu.institution}</p>
                  <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
                  {edu.specialization && (
                    <p className="text-gray-600"><span className="font-medium">Specialization:</span> {edu.specialization}</p>
                  )}
                  <p className="text-gray-600 font-medium">{edu.gpa}</p>
                  {edu.notes && (
                    <p className="text-sm text-purple-600 mt-1">{edu.notes}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="text-2xl">📜</span>
                Certifications
              </h4>
              <div className="space-y-2">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                    <span className="text-purple-500">✓</span>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Data Science Focus */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-3xl">📊</span>
              Data Science Focus
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Specializing in data analysis and machine learning as part of my Computer Science degree. 
              Experienced in using Python for data cleaning, transformation, visualization, and basic ML models. 
              Comfortable working with datasets and creating insights through exploratory data analysis.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dataProjects.map((project, i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-gray-700 text-sm font-medium">{project}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-3xl">🌍</span>
              Languages
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {languages.map((lang, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{lang.name}</span>
                    <span className="text-sm text-purple-600">{lang.level}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      style={{ 
                        width: lang.level === 'Native' ? '100%' : 
                               lang.level === 'Intermediate' ? '70%' : '40%' 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Status */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-center text-white shadow-xl mb-8">
          <h3 className="text-2xl font-bold mb-3">📍 Current Status</h3>
          <p className="text-purple-100 mb-4 text-lg">
            Final-year Computer Science student in Malaysia 🇲🇾 • Industrial Training: March 2026 • 
            Available for freelance projects & internship opportunities
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">Full Scholarship Student</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">Fast Learner</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">AI-Assisted Developer</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">Problem Solver</span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            to="/skills"
            className="group relative inline-block px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-300/50 hover:shadow-purple-400/60"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Skills
              <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
          
          <Link
            to="/"
            className="group relative inline-block px-10 py-5 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              Back to Home
              <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About
