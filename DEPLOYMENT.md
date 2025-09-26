# 🚀 GitHub Pages Deployment Guide

## Step-by-Step Deployment Instructions

### 1. Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New Repository" (green button)
3. Repository name: `your-portfolio` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. **DON'T** initialize with README (we already have one)
6. Click "Create Repository"

### 2. Update Configuration
Before pushing, update these files with your actual GitHub username:

#### Update `package.json`:
```json
"homepage": "https://md-nishthup.github.io/nish_chup",
```

#### Update `vite.config.js`:
```javascript
base: '/REPOSITORY-NAME/',
```

### 3. Push to GitHub
```bash
# Add remote origin (replace with your actual GitHub repo URL)
git remote add origin https://md-nishthup.github.io/nish_chuph

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Deploy to GitHub Pages
```bash
# This will build and deploy automatically
npm run deploy
```

### 5. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in left sidebar
4. Source: "Deploy from a branch"
5. Branch: Select "gh-pages"
6. Folder: "/ (root)"
7. Click "Save"

### 6. Access Your Portfolio
Your portfolio will be live at:
```
https://YOURUSERNAME.github.io/REPOSITORY-NAME
```

## 🔄 Future Updates

To update your portfolio:
1. Make changes to your code
2. Commit changes:
   ```bash
   git add .
   git commit -m "Update: describe your changes"
   git push
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```

## ⚠️ Important Notes

1. **Replace placeholders**: 
   - Change `YOURUSERNAME` to your GitHub username
   - Change `REPOSITORY-NAME` to your repository name
   - Update email and personal info in all components

2. **First deployment**: May take 5-10 minutes to go live

3. **Custom Domain** (optional):
   - Add a `CNAME` file in the `public` folder with your domain
   - Configure DNS with your domain provider

## 🛠️ Troubleshooting

- **404 errors**: Check that `base` path in `vite.config.js` matches repo name
- **Images not loading**: Ensure images are in `public` folder, not `src`
- **Deploy failed**: Check that gh-pages branch exists and GitHub Pages is enabled

## 📱 Test Before Deployment

Always test locally first:
```bash
npm run dev
```

Visit http://localhost:5173 to preview your portfolio.

---

**Your portfolio is now ready for the world! 🌟**