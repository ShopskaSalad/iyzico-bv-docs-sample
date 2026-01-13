# Deployment Guide

This guide will help you deploy your Docusaurus documentation site to a free hosting service.

## Option 1: Vercel (Recommended - Easiest)

### Steps:

1. **Install Vercel CLI** (optional, you can also use the web interface):
   ```bash
   npm install -g vercel
   ```

2. **Deploy from command line**:
   ```bash
   vercel
   ```
   Follow the prompts. It will ask you to:
   - Link to an existing project or create a new one
   - Confirm settings (just press Enter for defaults)

3. **Or deploy via GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Docusaurus and configure it
   - Click "Deploy"

4. **Your site will be live at**: `https://your-project-name.vercel.app`

### Benefits:
- ✅ Free SSL certificate
- ✅ Automatic deployments on git push
- ✅ Custom domain support
- ✅ Fast CDN
- ✅ Zero configuration needed

---

## Option 2: Netlify

### Steps:

1. **Install Netlify CLI** (optional):
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy from command line**:
   ```bash
   npm run build
   netlify deploy --prod
   ```
   Follow the prompts to authenticate and deploy.

3. **Or deploy via GitHub**:
   - Push your code to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Click "Deploy site"

4. **Your site will be live at**: `https://your-project-name.netlify.app`

### Benefits:
- ✅ Free SSL certificate
- ✅ Automatic deployments
- ✅ Custom domain support
- ✅ Form handling (if needed)
- ✅ Already configured with `netlify.toml`

---

## Option 3: GitHub Pages

### Steps:

1. **Update `docusaurus.config.js`**:
   ```javascript
   url: 'https://your-username.github.io',
   baseUrl: '/betaDocsBV/', // Your repository name
   ```

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to `package.json`**:
   ```json
   "scripts": {
     "deploy": "docusaurus deploy"
   }
   ```

4. **Deploy**:
   ```bash
   GIT_USER=your-username npm run deploy
   ```

5. **Your site will be live at**: `https://your-username.github.io/betaDocsBV/`

---

## Option 4: Cloudflare Pages

### Steps:

1. Push your code to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Navigate to "Pages" → "Create a project"
4. Connect your GitHub repository
5. Build settings:
   - Framework preset: Docusaurus
   - Build command: `npm run build`
   - Build output directory: `build`
6. Click "Save and Deploy"

### Benefits:
- ✅ Very fast CDN
- ✅ Free SSL
- ✅ Unlimited bandwidth
- ✅ Custom domains

---

## Quick Start (Recommended: Vercel)

### If you have a GitHub account:

1. **Initialize git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a GitHub repository**:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it (e.g., `betaDocsBV`)
   - Don't initialize with README
   - Click "Create repository"

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/your-username/betaDocsBV.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site is live! 🎉

---

## Important Notes

- Make sure your `package.json` has all dependencies listed
- The build process will run `npm install` and `npm run build`
- Your site will be automatically rebuilt when you push changes to GitHub
- All services offer free SSL certificates
- You can add a custom domain later if needed

---

## Troubleshooting

### Build fails:
- Check that all dependencies are in `package.json`
- Make sure `node_modules` is in `.gitignore`
- Verify your `docusaurus.config.js` is correct

### 404 errors:
- Check your `baseUrl` in `docusaurus.config.js`
- For GitHub Pages, make sure `baseUrl` matches your repository name

### Swagger UI not loading:
- Make sure `openapi.yaml` is in the `static` folder
- Check browser console for errors

---

## Recommended: Vercel

**Why Vercel?**
- Easiest setup (just connect GitHub)
- Fastest deployment (usually < 2 minutes)
- Best developer experience
- Automatic HTTPS
- Free tier is very generous

**Quick deploy command** (if you have Vercel CLI):
```bash
vercel --prod
```
