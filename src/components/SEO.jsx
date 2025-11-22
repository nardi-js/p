import React from 'react'
import { Helmet } from 'react-helmet'

export default function SEO({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogType = 'website',
  ogImage = 'https://nardilabs.com/og-image.jpg',
  author = 'Nardi',
  publishedTime,
  modifiedTime
}) {
  const siteUrl = 'https://nardilabs.com'
  const defaultTitle = 'Nardi - Full Stack Developer & Data Scientist Portfolio | AI-Assisted Development'
  const pageTitle = title || defaultTitle
  const pageDescription = description || 'Professional portfolio of Nardi, a Full Stack Developer and Data Science student specializing in modern web development, AI integration, Python, React, and cloud technologies. View projects, certifications, and get in touch.'
  const pageKeywords = keywords || 'nardi portfolio, full stack developer, data scientist, web developer, react developer, python developer, ai developer, machine learning, data analysis, portfolio website, computer science student, albukhary university, freelance developer, malaysia developer, indonesian developer'
  const pageCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl
  const pageImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`

  // Structured Data for Person/Professional
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nardi",
    "url": siteUrl,
    "image": pageImage,
    "sameAs": [
      "https://github.com/nardi",
      "https://linkedin.com/in/nardi"
    ],
    "jobTitle": "Full Stack Developer & Data Science Student",
    "worksFor": {
      "@type": "EducationalOrganization",
      "name": "Albukhary International University"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Albukhary International University"
    },
    "knowsAbout": [
      "Web Development",
      "Data Science",
      "Machine Learning",
      "Python",
      "React",
      "JavaScript",
      "Full Stack Development",
      "AI Integration"
    ],
    "description": pageDescription
  }

  // Website structured data
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nardi Portfolio",
    "url": siteUrl,
    "description": pageDescription,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={pageCanonical} />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="en" />
      <meta name="language" content="English" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#9333ea" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Nardi Portfolio" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      <meta property="article:author" content={author} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageCanonical} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:creator" content="@nardi" />
      <meta name="twitter:site" content="@nardi" />
      
      {/* Additional SEO */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="geo.region" content="MY" />
      <meta name="geo.placename" content="Alor Setar, Kedah" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="referrer" content="origin-when-cross-origin" />
      
      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteData)}
      </script>
    </Helmet>
  )
}
