import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  return user ? children : <Navigate to="/admin/login" />
}

export default ProtectedRoute
