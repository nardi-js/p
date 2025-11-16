# 🔥 Firebase Backend Setup Guide

## Step 1: Firebase Console Setup

### Enable Authentication
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: **nardi-simple-portfolio**
3. Navigate to **Authentication** → **Sign-in method**
4. Enable **Email/Password** provider
5. Click **Users** tab → **Add user**
6. Email: `700nardi@gmail.com`
7. Set a strong password (remember this!)

### Enable Firestore Database
1. Navigate to **Firestore Database**
2. Click **Create database**
3. Select **Start in production mode** (we'll adjust rules later)
4. Choose location: `asia-southeast1` (closest to Malaysia/Indonesia)
5. Click **Enable**

### Set Firestore Security Rules
1. In Firestore Database, click **Rules** tab
2. Replace the rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to everyone for portfolio data
    match /{collection}/{document=**} {
      allow read: if collection in ['skills', 'projects', 'certifications'];
    }
    
    // Only authenticated users can write
    match /skills/{skillId} {
      allow write: if request.auth != null;
    }
    
    match /projects/{projectId} {
      allow write: if request.auth != null;
    }
    
    match /certifications/{certId} {
      allow write: if request.auth != null;
    }
  }
}
```

3. Click **Publish**

## Step 2: Run the Application

```bash
npm run dev
```

## Step 3: Initial Data Migration

1. Open browser to `http://localhost:5173/admin/login`
2. Login with:
   - Email: `700nardi@gmail.com`
   - Password: (the one you set in Firebase Console)
3. Click **Migrate Data** button in the dashboard
4. Wait for confirmation message
5. Check each tab (Skills, Projects, Certifications) to verify data

## Step 4: Update Frontend Pages to Use Firestore

The frontend pages still use hardcoded data. After migration, we need to update:
- `src/pages/Skills.jsx` - fetch from Firestore
- `src/pages/Projects.jsx` - fetch from Firestore
- `src/pages/ProjectDetail.jsx` - fetch from Firestore
- `src/pages/Certifications.jsx` - fetch from Firestore
- `src/pages/CertificationDetail.jsx` - fetch from Firestore

## Admin Panel Features

### Skills Management
- ✅ Add new skills with name, level (0-100), and gradient color
- ✅ Edit existing skills
- ✅ Delete skills
- 📋 Fields: name, level, gradient (Tailwind classes)

### Projects Management
- ✅ Add new projects with full details
- ✅ Edit existing projects
- ✅ Delete projects
- 📋 Fields: id, title, description, tech (comma-separated), gradient, icon (emoji), category (web/data), github URL, liveDemo URL (optional)

### Certifications Management
- ✅ Add new certifications
- ✅ Edit existing certifications
- ✅ Delete certifications
- 📋 Fields: id, title, issuer, date, description, icon (emoji)

## Security Notes

⚠️ **Important:** Currently only ONE user (700nardi@gmail.com) can access the admin panel. If you need to add more admins:

1. Firebase Console → Authentication → Users → Add user
2. Share the admin login URL: `https://yourdomain.com/admin/login`

## Firestore Collections Structure

### `skills` collection
```json
{
  "name": "Python",
  "level": 90,
  "color": "from-blue-400 to-blue-600"
}
```

### `projects` collection
```json
{
  "id": "project-slug",
  "title": "Project Title",
  "description": "Description",
  "tech": ["React", "Node.js"],
  "gradient": "from-purple-400 to-pink-400",
  "icon": "🚀",
  "category": "web",
  "github": "https://github.com/...",
  "liveDemo": "https://..."
}
```

### `certifications` collection
```json
{
  "id": "cert-slug",
  "title": "Certificate Title",
  "issuer": "Issuer Name",
  "date": "Sep 2024",
  "description": "Description",
  "icon": "🎓"
}
```

## Next Steps

After migration is complete, you can:
1. ✅ Manage all content through admin dashboard
2. ✅ Add/Edit/Delete skills, projects, certifications
3. ⏳ Update frontend pages to fetch from Firestore (currently still hardcoded)
4. ⏳ Add more detailed fields to ProjectDetail and CertificationDetail in Firestore

## Troubleshooting

### Can't login?
- Check if Email/Password auth is enabled in Firebase Console
- Verify user was created with correct email
- Check browser console for errors

### Migration button doesn't work?
- Check browser console for Firestore errors
- Verify Firestore is enabled in Firebase Console
- Check Firestore rules allow authenticated writes

### Data not showing?
- Refresh the page after migration
- Check Firestore console to verify data was added
- Look for errors in browser console

## Admin Access
- Login URL: `http://localhost:5173/admin/login` (dev) or `https://yourdomain.com/admin/login` (production)
- Email: `700nardi@gmail.com`
- Password: (set in Firebase Console)
