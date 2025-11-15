import { useState, useEffect } from 'react'

function PageWrapper({ children }) {
  const [ripples, setRipples] = useState([])
  const [sparkles, setSparkles] = useState([])
  const [flowers, setFlowers] = useState([])
  
  const [particles] = useState(() =>
    Array.from({ length: 30 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.3 + 0.1
    }))
  )

  const [animatedParticles, setAnimatedParticles] = useState(particles)

  // Animate floating particles
  useEffect(() => {
    const animate = () => {
      setAnimatedParticles(prev => prev.map(p => ({
        ...p,
        x: (p.x + p.speedX + window.innerWidth) % window.innerWidth,
        y: (p.y + p.speedY + window.innerHeight) % window.innerHeight
      })))
    }

    const interval = setInterval(animate, 50)
    return () => clearInterval(interval)
  }, [])

  // Auto-generate random blooming flowers
  useEffect(() => {
    const generateFlower = () => {
      const newFlower = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: 0,
        opacity: 1,
        rotation: Math.random() * 360,
        petalColor: Math.random() > 0.5 ? 'bg-purple-400' : 'bg-pink-400',
        size: 40 + Math.random() * 30 // Random size between 40-70px
      }
      
      setFlowers(prev => [...prev, newFlower])

      // Remove after bloom animation
      setTimeout(() => {
        setFlowers(prev => prev.filter(f => f.id !== newFlower.id))
      }, 3000)
    }

    // Generate flowers every 1-3 seconds randomly
    const scheduleNextFlower = () => {
      const delay = 1000 + Math.random() * 2000
      setTimeout(() => {
        generateFlower()
        scheduleNextFlower()
      }, delay)
    }

    scheduleNextFlower()
  }, [])

  // Animate flowers blooming and fading
  useEffect(() => {
    const animateFlowers = setInterval(() => {
      setFlowers(prev => prev.map(f => ({
        ...f,
        scale: f.scale < 1 ? Math.min(f.scale + 0.03, 1) : f.scale,
        opacity: f.scale >= 0.8 ? Math.max(f.opacity - 0.01, 0) : f.opacity,
        rotation: f.rotation + 0.5
      })))
    }, 30)

    return () => clearInterval(animateFlowers)
  }, [])

  // Click ripple effect
  useEffect(() => {
    const handleClick = (e) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        scale: 0
      }
      
      setRipples(prev => [...prev, newRipple])

      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id))
      }, 1000)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  // Animate ripples
  useEffect(() => {
    const animateRipples = setInterval(() => {
      setRipples(prev => prev.map(r => ({
        ...r,
        scale: Math.min(r.scale + 0.15, 3)
      })))
    }, 30)

    return () => clearInterval(animateRipples)
  }, [])

  // Sparkle effects on mousemove and click
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (Math.random() > 0.92) {
        createSparkle(e.clientX, e.clientY)
      }
    }

    const handleClick = (e) => {
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12
        const distance = 30 + Math.random() * 20
        setTimeout(() => {
          createSparkle(
            e.clientX + Math.cos(angle) * distance,
            e.clientY + Math.sin(angle) * distance
          )
        }, i * 20)
      }
    }

    const createSparkle = (x, y) => {
      const newSparkle = {
        id: Date.now() + Math.random(),
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        size: 3 + Math.random() * 4,
        opacity: 1
      }
      
      setSparkles(prev => [...prev, newSparkle])

      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== newSparkle.id))
      }, 800)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
    }
  }, [])

  // Animate sparkles
  useEffect(() => {
    const animateSparkles = setInterval(() => {
      setSparkles(prev => prev.map(s => ({
        ...s,
        y: s.y - 1,
        opacity: Math.max(s.opacity - 0.03, 0)
      })))
    }, 30)

    return () => clearInterval(animateSparkles)
  }, [])

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Floating Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {animatedParticles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-300"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              transition: 'all 0.05s linear'
            }}
          />
        ))}
      </div>

      {/* Random Blooming Flowers */}
      {flowers.map(flower => (
        <div
          key={flower.id}
          className="fixed pointer-events-none z-10"
          style={{
            left: `${flower.x}px`,
            top: `${flower.y}px`,
            transform: `translate(-50%, -50%) scale(${flower.scale}) rotate(${flower.rotation}deg)`,
            opacity: flower.opacity,
            transition: 'all 0.1s ease-out'
          }}
        >
          {/* Flower petals */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`absolute ${flower.petalColor} rounded-full`}
              style={{
                width: `${flower.size * 0.6}px`,
                height: `${flower.size}px`,
                transform: `rotate(${(360 / 8) * i}deg) translateY(-${flower.size * 0.4}px)`,
                transformOrigin: 'center bottom'
              }}
            />
          ))}
          {/* Flower center */}
          </div>
      ))}

      {/* Click Ripple Effect */}
      {ripples.map(ripple => (
        <div key={ripple.id} className="fixed pointer-events-none z-40">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="absolute border-2 border-purple-400 rounded-full"
              style={{
                left: `${ripple.x}px`,
                top: `${ripple.y}px`,
                width: `${80 + i * 20}px`,
                height: `${80 + i * 20}px`,
                transform: `translate(-50%, -50%) scale(${ripple.scale})`,
                opacity: Math.max(0, 0.6 - ripple.scale * 0.3 - i * 0.1),
                transition: 'all 0.03s ease-out'
              }}
            />
          ))}
        </div>
      ))}

      {/* Sparkle Effect */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="fixed pointer-events-none z-50 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            opacity: sparkle.opacity,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${sparkle.size * 2}px rgba(168, 85, 247, 0.6)`
          }}
        />
      ))}

      {children}
    </div>
  )
}

export default PageWrapper
