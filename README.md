# Nardi Portfolio - Production Ready

Professional portfolio website built with React, Vite, Tailwind CSS, and Firebase.

## 🚀 Features

- ⚡ **Fast & Optimized**: Built with Vite for lightning-fast performance
- 🎨 **Modern Design**: Beautiful UI with Tailwind CSS and custom animations
- 📱 **Fully Responsive**: Perfect experience on all devices
- 🔍 **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- 🌸 **Interactive Effects**: Dynamic flower animations (home page only), sparkles, and ripples
- 🔥 **Firebase Integration**: Real-time data for projects, skills, and certifications
- 🎯 **Production Ready**: Optimized build with code splitting and minification

## 📦 Tech Stack

- **Frontend**: React 19, React Router 7
- **Styling**: Tailwind CSS 3
- **Build Tool**: Vite 7
- **Backend**: Firebase (Firestore, Auth)
- **SEO**: React Helmet, Structured Data (JSON-LD)
- **Deployment**: Firebase Hosting / Netlify / Vercel

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Clean build cache
npm run clean
```

## 🌐 Environment Variables

Create `.env.production` file:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 📊 Performance Optimizations

### Code Splitting
- React vendor bundle
- Firebase vendor bundle
- Route-based lazy loading

### Build Optimizations
- Terser minification
- Console.log removal in production
- Tree shaking
- Asset optimization
- No sourcemaps in production

### Runtime Optimizations
- React.memo for expensive components
- useMemo for computed values
- useCallback for event handlers
- Lazy loading for images
- Debounced scroll handlers

## 🎨 Features by Page

### Home Page
- Hero section with animated gradient text
- Dynamic flower animations (mobile-optimized)
- Floating particles background
- CTA buttons with hover effects

### About Page
- Professional stats (GPA, Projects, Certifications, Scholarship)
- Work experience timeline
- Education history
- Skills showcase
- Language proficiency

### Skills Page
- Interactive skill bars
- Category-based filtering
- Animated progress indicators
- Hover effects

### Projects Page
- Category filtering with animations
- Project cards with hover effects
- Fixed-height cards for consistent layout
- Tech stack tags

### Certifications Page
- Grid layout with cards
- Fixed-height for consistent "View Details"
- Certification details with structured data

### Contact Page
- Social media links
- Contact form
- Location information

## 🔍 SEO Features

- **Meta Tags**: Title, description, keywords, author
- **Open Graph**: Facebook/LinkedIn sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: JSON-LD for Person and Website
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawler directives
- **Canonical URLs**: Prevent duplicate content
- **Mobile Optimization**: Mobile-first meta tags

## 📱 Mobile Optimizations

- Reduced flower frequency (2-4s vs 0.5-1.5s on desktop)
- Smaller flower size (30-50px vs 50-90px on desktop)
- Larger center margin to avoid covering text
- Floating navigation with auto-hide on scroll
- Touch-optimized buttons and interactions

## 🚀 Deployment

### Firebase Hosting
```bash
npm run build
firebase deploy
```

### Netlify
```bash
npm run build
# Deploy dist folder
```

### Vercel
```bash
npm run build
# Deploy dist folder
```

## 📈 Analytics Setup

Add Google Analytics tracking ID to `.env.production`:
```env
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

## 🔒 Security

- Environment variables for sensitive data
- Firebase security rules
- HTTPS only
- No exposed API keys in client code

## 📝 License

© 2025 Nardi. All rights reserved.

## 🤝 Contact

- **Email**: 700nardi@gmail.com
- **GitHub**: [nardi-js](https://github.com/nardi-js)
- **LinkedIn**: [nardi-js](https://linkedin.com/in/nardi-js)

---

Built with ❤️ by Nardi
