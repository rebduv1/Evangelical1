# JEFA — Jewish Education Fund of America Website

An informational website explaining the Education Freedom Tax Credit opportunity for Evangelical Christians to support Orthodox Jewish K-12 education.

## Deploy to Vercel (Step-by-Step)

### Option A: Deploy via GitHub (Recommended)

1. **Create a GitHub account** (if you don't have one): https://github.com/signup
2. **Create a new repository**:
   - Go to https://github.com/new
   - Name it `jefa-website`
   - Keep it Public or Private (your choice)
   - Click "Create repository"
3. **Upload the project files**:
   - On the repo page, click "uploading an existing file"
   - Drag and drop ALL the files/folders from this project
   - Click "Commit changes"
4. **Connect to Vercel**:
   - Go to https://vercel.com and sign up with your GitHub account
   - Click "Add New Project"
   - Select your `jefa-website` repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"
5. **Done!** Vercel gives you a URL like `jefa-website.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
npm install -g vercel
cd jefa-site
npm install
vercel
```

Follow the prompts and you'll get a live URL.

### Custom Domain

To use a domain like `jefa.org`:
1. Purchase the domain from Namecheap, Google Domains, etc.
2. In Vercel dashboard → your project → Settings → Domains
3. Add your domain and follow the DNS instructions

## Local Development

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Project Structure

```
jefa-site/
├── public/
│   ├── jefa-logo.webp     ← JEFA seal logo
│   └── favicon.svg         ← Browser tab icon
├── src/
│   ├── App.jsx             ← Main website code (both pages)
│   └── main.jsx            ← React entry point
├── index.html              ← HTML shell
├── package.json            ← Dependencies
├── vite.config.js          ← Build configuration
└── README.md               ← This file
```
