# Vercel Deployment Guide

## Issue Fixed

**Error:** `Permission denied` on `/vercel/path0/node_modules/.bin/vite`

**Solution:**
1. Created `vercel.json` with proper configuration
2. Added `.vercelignore` to exclude unnecessary files
3. Configured proper build settings

## Deployment Steps

### Option 1: Via Vercel CLI

```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

### Option 2: Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-detect Vite framework
4. Deploy!

## Configuration Files

### vercel.json
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- Includes SPA rewrites for React Router

### Build Settings on Vercel

If manual configuration is needed:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node Version**: 18.x or higher

## Environment Variables

No environment variables required for basic deployment.

## Post-Deployment

### Verify
- Home page: `https://your-domain.vercel.app/`
- Voice AI: `https://your-domain.vercel.app/voice-ai`

### Custom Domain
Add your custom domain in Vercel project settings.

## Troubleshooting

### Permission Denied Error
✅ **Fixed** - Updated vercel.json with proper configuration

### Build Fails
```bash
# Test build locally first
npm run build

# If successful locally, issue is with Vercel config
# Check vercel.json settings
```

### Routes Not Working
✅ **Fixed** - Added rewrite rules in vercel.json for SPA routing

### Dependencies Not Installing
- Check package.json is valid
- Ensure all dependencies are in package.json (not just devDependencies)

## Build Output

Expected build:
- CSS: ~34 KB (gzipped: ~6.5 KB)
- JS: ~221 KB (gzipped: ~68 KB)
- Total: ~255 KB

## Performance

The site is optimized with:
- Tailwind CSS (purged unused styles)
- Vite code splitting
- Optimized images (when added)
- Minimal dependencies

## Notes

- **React Router**: Configured with rewrites for client-side routing
- **Tailwind v4**: Uses latest @tailwindcss/postcss plugin
- **Type: module**: ES modules configured in package.json

---

**Status**: ✅ Ready for Deployment
**Framework**: Vite + React 18
**Build Tool**: Vite 7.2.2
**Styling**: Tailwind CSS v4

