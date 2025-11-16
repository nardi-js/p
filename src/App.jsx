import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import PageWrapper from './components/PageWrapper'
import ScrollToTop from './components/ScrollToTop'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Certifications from './pages/Certifications'
import CertificationDetail from './pages/CertificationDetail'
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Admin Routes (without PageWrapper) */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />

        {/* Regular Portfolio Routes */}
        <Route path="/*" element={
          <PageWrapper>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/certifications/:id" element={<CertificationDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageWrapper>
        } />
      </Routes>
    </Router>
  )
}

export default App
