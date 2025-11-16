import { useEffect } from 'react'

function SEO({ 
  title = 'Nardi - Full Stack Developer & Data Scientist Portfolio',
  description = 'Full Stack Developer and Data Scientist specializing in React, Node.js, Python, Machine Learning, and Cloud Technologies. Browse my projects and certifications.',
  keywords = 'full stack developer, data scientist, react developer, node.js, python, machine learning, portfolio, web development, data science',
  ogImage = '/og-image.jpg',
  ogType = 'website',
  canonical = ''
}) {
  const siteUrl = 'https://nardi-portfolio.com' // Update dengan URL production Anda
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl

  useEffect(() => {
    // Update title
    document.title = title

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Primary Meta Tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('author', 'Nardi')
    updateMetaTag('robots', 'index, follow')

    // Open Graph
    updateMetaTag('og:type', ogType, true)
    updateMetaTag('og:url', fullUrl, true)
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', `${siteUrl}${ogImage}`, true)
    updateMetaTag('og:site_name', 'Nardi Portfolio', true)

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image', true)
    updateMetaTag('twitter:url', fullUrl, true)
    updateMetaTag('twitter:title', title, true)
    updateMetaTag('twitter:description', description, true)
    updateMetaTag('twitter:image', `${siteUrl}${ogImage}`, true)

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', fullUrl)

    // Structured Data
    let structuredData = document.querySelector('script[type="application/ld+json"]')
    if (!structuredData) {
      structuredData = document.createElement('script')
      structuredData.setAttribute('type', 'application/ld+json')
      document.head.appendChild(structuredData)
    }
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Nardi",
      "url": siteUrl,
      "jobTitle": "Full Stack Developer & Data Scientist",
      "description": description,
      "sameAs": [
        "https://github.com/nardi-js",
        "https://linkedin.com/in/nardi",
      ]
    })
  }, [title, description, keywords, ogImage, ogType, canonical, fullUrl, siteUrl])

  return null
}

export default SEO
