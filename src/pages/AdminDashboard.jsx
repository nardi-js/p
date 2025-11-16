import { useState, useEffect } from 'react'
import { auth, db } from '../firebase/config'
import { signOut } from 'firebase/auth'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { migrateData } from '../migrateData'

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('skills')
  const [loading, setLoading] = useState(false)
  const [migrating, setMigrating] = useState(false)
  const navigate = useNavigate()

  // Skills State
  const [skills, setSkills] = useState([])
  const [skillForm, setSkillForm] = useState({ name: '', level: 90, color: 'from-purple-400 to-purple-600' })
  const [editingSkill, setEditingSkill] = useState(null)

  // Projects State
  const [projects, setProjects] = useState([])
  const [projectForm, setProjectForm] = useState({
    id: '',
    title: '',
    subtitle: '',
    description: '',
    image: '',
    tech: [],
    gradient: 'from-purple-400 to-pink-400',
    icon: '🚀',
    category: 'web',
    github: '',
    liveDemo: '',
    features: [],
    results: [],
    challenges: '',
    solution: '',
    duration: '',
    role: '',
    team: '',
    year: ''
  })
  const [editingProject, setEditingProject] = useState(null)

  // Certifications State
  const [certifications, setCertifications] = useState([])
  const [certForm, setCertForm] = useState({
    id: '',
    title: '',
    issuer: '',
    date: '',
    description: '',
    icon: '🎓',
    credential: '',
    skills: [],
    whatLearned: [],
    projects: [],
    relatedSkills: [],
    image: '🎓'
  })
  const [editingCert, setEditingCert] = useState(null)

  const loadData = async () => {
    setLoading(true)
    try {
      // Load Skills
      const skillsSnapshot = await getDocs(collection(db, 'skills'))
      setSkills(skillsSnapshot.docs.map(doc => ({ 
        firestoreId: doc.id, // Firestore document ID for operations
        ...doc.data() // Includes custom 'id' field
      })))

      // Load Projects
      const projectsSnapshot = await getDocs(collection(db, 'projects'))
      setProjects(projectsSnapshot.docs.map(doc => ({ 
        firestoreId: doc.id, // Firestore document ID for operations
        ...doc.data() // Includes custom 'id' field
      })))

      // Load Certifications
      const certsSnapshot = await getDocs(collection(db, 'certifications'))
      setCertifications(certsSnapshot.docs.map(doc => ({ 
        firestoreId: doc.id, // Firestore document ID for operations
        ...doc.data() // Includes custom 'id' field
      })))
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const checkAuth = () => {
      if (!auth.currentUser) {
        navigate('/admin/login')
      }
    }
    
    checkAuth()
    loadData()
  }, [navigate])

  const handleLogout = async () => {
    await signOut(auth)
    navigate('/admin/login')
  }

  const handleMigration = async () => {
    if (confirm('This will add all initial data to Firestore. Continue?')) {
      setMigrating(true)
      const result = await migrateData()
      if (result.success) {
        alert('Data migrated successfully!')
        loadData()
      } else {
        alert('Migration failed: ' + result.error)
      }
      setMigrating(false)
    }
  }

  // Skills Functions
  const addSkill = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'skills'), skillForm)
      setSkillForm({ name: '', level: 90, color: 'from-purple-400 to-purple-600' })
      loadData()
    } catch (error) {
      console.error('Error adding skill:', error)
    }
  }

  const updateSkill = async (e) => {
    e.preventDefault()
    try {
      await updateDoc(doc(db, 'skills', editingSkill), skillForm)
      setEditingSkill(null)
      setSkillForm({ name: '', level: 90, color: 'from-purple-400 to-purple-600' })
      loadData()
    } catch (error) {
      console.error('Error updating skill:', error)
    }
  }

  const deleteSkill = async (id) => {
    if (confirm('Delete this skill?')) {
      await deleteDoc(doc(db, 'skills', id))
      loadData()
    }
  }

  // Projects Functions
  const addProject = async (e) => {
    e.preventDefault()
    try {
      const projectData = {
        ...projectForm,
        tech: typeof projectForm.tech === 'string' ? projectForm.tech.split(',').map(t => t.trim()) : projectForm.tech,
        features: typeof projectForm.features === 'string' ? projectForm.features.split('\n').filter(f => f.trim()) : projectForm.features,
        results: typeof projectForm.results === 'string' ? projectForm.results.split('\n').filter(r => r.trim()).map(r => {
          const [label, value] = r.split(':').map(s => s.trim())
          return { label, value }
        }) : projectForm.results
      }
      await addDoc(collection(db, 'projects'), projectData)
      setProjectForm({
        id: '',
        title: '',
        subtitle: '',
        description: '',
        image: '',
        tech: [],
        gradient: 'from-purple-400 to-pink-400',
        icon: '🚀',
        category: 'web',
        github: '',
        liveDemo: '',
        features: [],
        results: [],
        challenges: '',
        solution: '',
        duration: '',
        role: '',
        team: '',
        year: ''
      })
      loadData()
    } catch (error) {
      console.error('Error adding project:', error)
    }
  }

  const updateProject = async (e) => {
    e.preventDefault()
    try {
      const projectData = {
        ...projectForm,
        tech: typeof projectForm.tech === 'string' ? projectForm.tech.split(',').map(t => t.trim()) : projectForm.tech,
        features: typeof projectForm.features === 'string' ? projectForm.features.split('\n').filter(f => f.trim()) : projectForm.features,
        results: typeof projectForm.results === 'string' ? projectForm.results.split('\n').filter(r => r.trim()).map(r => {
          const [label, value] = r.split(':').map(s => s.trim())
          return { label, value }
        }) : projectForm.results
      }
      await updateDoc(doc(db, 'projects', editingProject), projectData)
      setEditingProject(null)
      setProjectForm({
        id: '',
        title: '',
        subtitle: '',
        description: '',
        image: '',
        tech: [],
        gradient: 'from-purple-400 to-pink-400',
        icon: '🚀',
        category: 'web',
        github: '',
        liveDemo: '',
        features: [],
        results: [],
        challenges: '',
        solution: '',
        duration: '',
        role: '',
        team: '',
        year: ''
      })
      loadData()
    } catch (error) {
      console.error('Error updating project:', error)
    }
  }

  const deleteProject = async (id) => {
    if (confirm('Delete this project?')) {
      await deleteDoc(doc(db, 'projects', id))
      loadData()
    }
  }

  // Certifications Functions
  const addCert = async (e) => {
    e.preventDefault()
    try {
      const certData = {
        ...certForm,
        skills: typeof certForm.skills === 'string' ? certForm.skills.split(',').map(s => s.trim()) : certForm.skills,
        whatLearned: typeof certForm.whatLearned === 'string' ? certForm.whatLearned.split('\n').filter(w => w.trim()) : certForm.whatLearned,
        projects: typeof certForm.projects === 'string' ? certForm.projects.split('\n').filter(p => p.trim()) : certForm.projects,
        relatedSkills: typeof certForm.relatedSkills === 'string' ? certForm.relatedSkills.split(',').map(s => s.trim()) : certForm.relatedSkills
      }
      await addDoc(collection(db, 'certifications'), certData)
      setCertForm({
        id: '',
        title: '',
        issuer: '',
        date: '',
        description: '',
        icon: '🎓',
        credential: '',
        skills: [],
        whatLearned: [],
        projects: [],
        relatedSkills: [],
        image: '🎓'
      })
      loadData()
    } catch (error) {
      console.error('Error adding certification:', error)
    }
  }

  const updateCert = async (e) => {
    e.preventDefault()
    try {
      const certData = {
        ...certForm,
        skills: typeof certForm.skills === 'string' ? certForm.skills.split(',').map(s => s.trim()) : certForm.skills,
        whatLearned: typeof certForm.whatLearned === 'string' ? certForm.whatLearned.split('\n').filter(w => w.trim()) : certForm.whatLearned,
        projects: typeof certForm.projects === 'string' ? certForm.projects.split('\n').filter(p => p.trim()) : certForm.projects,
        relatedSkills: typeof certForm.relatedSkills === 'string' ? certForm.relatedSkills.split(',').map(s => s.trim()) : certForm.relatedSkills
      }
      await updateDoc(doc(db, 'certifications', editingCert), certData)
      setEditingCert(null)
      setCertForm({
        id: '',
        title: '',
        issuer: '',
        date: '',
        description: '',
        icon: '🎓',
        credential: '',
        skills: [],
        whatLearned: [],
        projects: [],
        relatedSkills: [],
        image: '🎓'
      })
      loadData()
    } catch (error) {
      console.error('Error updating certification:', error)
    }
  }

  const deleteCert = async (id) => {
    if (confirm('Delete this certification?')) {
      await deleteDoc(doc(db, 'certifications', id))
      loadData()
    }
  }

  return (
    <section className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Manage your portfolio content</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleMigration}
                disabled={migrating}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all disabled:opacity-50"
              >
                {migrating ? 'Migrating...' : 'Migrate Data'}
              </button>
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="flex border-b overflow-x-auto">
            {[
              { id: 'skills', label: 'Skills', icon: '⚡' },
              { id: 'projects', label: 'Projects', icon: '💼' },
              { id: 'certifications', label: 'Certifications', icon: '🎓' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading...</p>
            </div>
          ) : (
            <>
              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Manage Skills</h2>
                  
                  {/* Add/Edit Form */}
                  <form onSubmit={editingSkill ? updateSkill : addSkill} className="mb-8 p-6 bg-gray-50 rounded-xl">
                    <h3 className="text-lg font-semibold mb-4">{editingSkill ? 'Edit' : 'Add New'} Skill</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <input
                        type="text"
                        placeholder="Skill Name"
                        value={skillForm.name}
                        onChange={(e) => setSkillForm({...skillForm, name: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                        required
                      />
                      <input
                        type="number"
                        placeholder="Level (0-100)"
                        value={skillForm.level}
                        onChange={(e) => setSkillForm({...skillForm, level: parseInt(e.target.value)})}
                        className="px-4 py-2 border rounded-lg"
                        min="0"
                        max="100"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Gradient (e.g., from-purple-400 to-pink-400)"
                        value={skillForm.color}
                        onChange={(e) => setSkillForm({...skillForm, color: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                        required
                      />
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button type="submit" className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                        {editingSkill ? 'Update' : 'Add'} Skill
                      </button>
                      {editingSkill && (
                        <button
                          type="button"
                          onClick={() => {
                            setEditingSkill(null)
                            setSkillForm({ name: '', level: 90, color: 'from-purple-400 to-purple-600' })
                          }}
                          className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </form>

                  {/* Skills List */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skills.map(skill => (
                      <div key={skill.id} className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{skill.name}</h3>
                          <span className="text-sm text-purple-600">{skill.level}%</span>
                        </div>
                        <div className={`h-2 bg-gradient-to-r ${skill.color} rounded-full mb-3`}></div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setEditingSkill(skill.firestoreId)
                              setSkillForm(skill)
                            }}
                            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteSkill(skill.firestoreId)}
                            className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects Tab */}
              {activeTab === 'projects' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Manage Projects</h2>
                  
                  {/* Add/Edit Form */}
                  <form onSubmit={editingProject ? updateProject : addProject} className="mb-8 p-6 bg-gray-50 rounded-xl">
                    <h3 className="text-lg font-semibold mb-4">{editingProject ? 'Edit' : 'Add New'} Project</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Project ID (e.g., my-project)"
                        value={projectForm.id}
                        onChange={(e) => setProjectForm({...projectForm, id: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Title"
                        value={projectForm.title}
                        onChange={(e) => setProjectForm({...projectForm, title: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                        required
                      />
                      <textarea
                        placeholder="Description"
                        value={projectForm.description}
                        onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
                        className="px-4 py-2 border rounded-lg md:col-span-2"
                        rows="3"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Tech (comma separated)"
                        value={typeof projectForm.tech === 'string' ? projectForm.tech : projectForm.tech.join(', ')}
                        onChange={(e) => setProjectForm({...projectForm, tech: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Gradient"
                        value={projectForm.gradient}
                        onChange={(e) => setProjectForm({...projectForm, gradient: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Icon (emoji)"
                        value={projectForm.icon}
                        onChange={(e) => setProjectForm({...projectForm, icon: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                        required
                      />
                      <select
                        value={projectForm.category}
                        onChange={(e) => setProjectForm({...projectForm, category: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                        required
                      >
                        <option value="web">Web Development</option>
                        <option value="data">Data Science</option>
                      </select>
                      <input
                        type="url"
                        placeholder="GitHub URL"
                        value={projectForm.github}
                        onChange={(e) => setProjectForm({...projectForm, github: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                        required
                      />
                      <input
                        type="url"
                        placeholder="Live Demo URL (optional)"
                        value={projectForm.liveDemo}
                        onChange={(e) => setProjectForm({...projectForm, liveDemo: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                      />
                      
                      {/* Additional Detail Fields */}
                      <input
                        type="text"
                        placeholder="Subtitle (optional)"
                        value={projectForm.subtitle}
                        onChange={(e) => setProjectForm({...projectForm, subtitle: e.target.value})}
                        className="px-4 py-2 border rounded-lg md:col-span-2"
                      />
                      <input
                        type="text"
                        placeholder="Image URL (optional)"
                        value={projectForm.image}
                        onChange={(e) => setProjectForm({...projectForm, image: e.target.value})}
                        className="px-4 py-2 border rounded-lg md:col-span-2"
                      />
                      <textarea
                        placeholder="Features (one per line, optional)"
                        value={typeof projectForm.features === 'string' ? projectForm.features : projectForm.features.join('\n')}
                        onChange={(e) => setProjectForm({...projectForm, features: e.target.value})}
                        className="px-4 py-2 border rounded-lg md:col-span-2"
                        rows="4"
                      />
                      <textarea
                        placeholder="Results (format: Label: Value, one per line, optional)"
                        value={typeof projectForm.results === 'string' ? projectForm.results : projectForm.results.map(r => `${r.label}: ${r.value}`).join('\n')}
                        onChange={(e) => setProjectForm({...projectForm, results: e.target.value})}
                        className="px-4 py-2 border rounded-lg md:col-span-2"
                        rows="3"
                      />
                      <textarea
                        placeholder="Challenges (optional)"
                        value={projectForm.challenges}
                        onChange={(e) => setProjectForm({...projectForm, challenges: e.target.value})}
                        className="px-4 py-2 border rounded-lg md:col-span-2"
                        rows="2"
                      />
                      <textarea
                        placeholder="Solution (optional)"
                        value={projectForm.solution}
                        onChange={(e) => setProjectForm({...projectForm, solution: e.target.value})}
                        className="px-4 py-2 border rounded-lg md:col-span-2"
                        rows="2"
                      />
                      <input
                        type="text"
                        placeholder="Duration (e.g., 3 months)"
                        value={projectForm.duration}
                        onChange={(e) => setProjectForm({...projectForm, duration: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="Role (e.g., Full Stack Developer)"
                        value={projectForm.role}
                        onChange={(e) => setProjectForm({...projectForm, role: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="Team Size (e.g., 4 developers)"
                        value={projectForm.team}
                        onChange={(e) => setProjectForm({...projectForm, team: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="Year (e.g., 2024)"
                        value={projectForm.year}
                        onChange={(e) => setProjectForm({...projectForm, year: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                      />
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button type="submit" className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                        {editingProject ? 'Update' : 'Add'} Project
                      </button>
                      {editingProject && (
                        <button
                          type="button"
                          onClick={() => {
                            setEditingProject(null)
                            setProjectForm({
                              id: '',
                              title: '',
                              subtitle: '',
                              description: '',
                              image: '',
                              tech: [],
                              gradient: 'from-purple-400 to-pink-400',
                              icon: '🚀',
                              category: 'web',
                              github: '',
                              liveDemo: '',
                              features: [],
                              results: [],
                              challenges: '',
                              solution: '',
                              duration: '',
                              role: '',
                              team: '',
                              year: ''
                            })
                          }}
                          className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </form>

                  {/* Projects List */}
                  <div className="space-y-4">
                    {projects.map(project => (
                      <div key={project.id} className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="flex items-start gap-4">
                          <span className="text-4xl">{project.icon}</span>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-bold text-lg">{project.title}</h3>
                                <p className="text-gray-600 text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {(Array.isArray(project.tech) ? project.tech : []).map(tech => (
                                    <span key={tech} className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                                <div className="mt-2 text-sm">
                                  <span className={`px-2 py-1 rounded text-white ${project.category === 'web' ? 'bg-blue-500' : 'bg-green-500'}`}>
                                    {project.category === 'web' ? 'Web Development' : 'Data Science'}
                                  </span>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <button
                                  onClick={() => {
                                    setEditingProject(project.firestoreId)
                                    setProjectForm({
                                      ...project,
                                      tech: Array.isArray(project.tech) ? project.tech.join(', ') : project.tech,
                                      features: Array.isArray(project.features) ? project.features.join('\n') : (project.features || ''),
                                      results: Array.isArray(project.results) ? project.results.map(r => `${r.label}: ${r.value}`).join('\n') : (project.results || ''),
                                      subtitle: project.subtitle || '',
                                      image: project.image || '',
                                      challenges: project.challenges || '',
                                      solution: project.solution || '',
                                      duration: project.duration || '',
                                      role: project.role || '',
                                      team: project.team || '',
                                      year: project.year || ''
                                    })
                                  }}
                                  className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => deleteProject(project.firestoreId)}
                                  className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications Tab */}
              {activeTab === 'certifications' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Manage Certifications</h2>
                  
                  {/* Add/Edit Form */}
                  <form onSubmit={editingCert ? updateCert : addCert} className="mb-8 p-6 bg-gray-50 rounded-xl">
                    <h3 className="text-lg font-semibold mb-4">{editingCert ? 'Edit' : 'Add New'} Certification</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Certificate ID (e.g., aws-cloud)"
                        value={certForm.id}
                        onChange={(e) => setCertForm({...certForm, id: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Title"
                        value={certForm.title}
                        onChange={(e) => setCertForm({...certForm, title: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Issuer"
                        value={certForm.issuer}
                        onChange={(e) => setCertForm({...certForm, issuer: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Date (e.g., Sep 2024)"
                        value={certForm.date}
                        onChange={(e) => setCertForm({...certForm, date: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                        required
                      />
                      <textarea
                        placeholder="Description"
                        value={certForm.description}
                        onChange={(e) => setCertForm({...certForm, description: e.target.value})}
                        className="px-4 py-2 border rounded-lg md:col-span-2"
                        rows="3"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Icon (emoji)"
                        value={certForm.icon}
                        onChange={(e) => setCertForm({...certForm, icon: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                        required
                      />
                      
                      {/* Additional Detail Fields */}
                      <input
                        type="url"
                        placeholder="Credential URL - e.g. https://www.coursera.org/account/accomplishments/... (optional)"
                        value={certForm.credential}
                        onChange={(e) => setCertForm({...certForm, credential: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="Image URL (optional)"
                        value={certForm.image}
                        onChange={(e) => setCertForm({...certForm, image: e.target.value})}
                        className="px-4 py-2 border rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="Skills (comma separated, optional)"
                        value={typeof certForm.skills === 'string' ? certForm.skills : certForm.skills.join(', ')}
                        onChange={(e) => setCertForm({...certForm, skills: e.target.value})}
                        className="px-4 py-2 border rounded-lg md:col-span-2"
                      />
                      <textarea
                        placeholder="What I Learned (one per line, optional)"
                        value={typeof certForm.whatLearned === 'string' ? certForm.whatLearned : certForm.whatLearned.join('\n')}
                        onChange={(e) => setCertForm({...certForm, whatLearned: e.target.value})}
                        className="px-4 py-2 border rounded-lg md:col-span-2"
                        rows="4"
                      />
                      <textarea
                        placeholder="Applied Projects (one per line, optional)"
                        value={typeof certForm.projects === 'string' ? certForm.projects : certForm.projects.join('\n')}
                        onChange={(e) => setCertForm({...certForm, projects: e.target.value})}
                        className="px-4 py-2 border rounded-lg md:col-span-2"
                        rows="3"
                      />
                      <input
                        type="text"
                        placeholder="Related Skills (comma separated, optional)"
                        value={typeof certForm.relatedSkills === 'string' ? certForm.relatedSkills : certForm.relatedSkills.join(', ')}
                        onChange={(e) => setCertForm({...certForm, relatedSkills: e.target.value})}
                        className="px-4 py-2 border rounded-lg md:col-span-2"
                      />
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button type="submit" className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                        {editingCert ? 'Update' : 'Add'} Certification
                      </button>
                      {editingCert && (
                        <button
                          type="button"
                          onClick={() => {
                            setEditingCert(null)
                            setCertForm({
                              id: '',
                              title: '',
                              issuer: '',
                              date: '',
                              description: '',
                              icon: '🎓',
                              credential: '',
                              skills: [],
                              whatLearned: [],
                              projects: [],
                              relatedSkills: [],
                              image: '🎓'
                            })
                          }}
                          className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </form>

                  {/* Certifications List */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certifications.map(cert => (
                      <div key={cert.id} className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <span className="text-4xl block mb-2">{cert.icon}</span>
                        <h3 className="font-bold">{cert.title}</h3>
                        <p className="text-purple-600 text-sm">{cert.issuer}</p>
                        <p className="text-gray-500 text-xs">{cert.date}</p>
                        <p className="text-gray-600 text-sm mt-2">{cert.description}</p>
                        <div className="flex gap-2 mt-3">
                          <button
                            onClick={() => {
                              setEditingCert(cert.firestoreId)
                              setCertForm({
                                ...cert,
                                skills: Array.isArray(cert.skills) ? cert.skills.join(', ') : (cert.skills || ''),
                                whatLearned: Array.isArray(cert.whatLearned) ? cert.whatLearned.join('\n') : (cert.whatLearned || ''),
                                projects: Array.isArray(cert.projects) ? cert.projects.join('\n') : (cert.projects || ''),
                                relatedSkills: Array.isArray(cert.relatedSkills) ? cert.relatedSkills.join(', ') : (cert.relatedSkills || ''),
                                credential: cert.credential || '',
                                image: cert.image || ''
                              })
                            }}
                            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteCert(cert.firestoreId)}
                            className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default AdminDashboard
