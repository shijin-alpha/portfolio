# Deployment Guide

## Render Deployment

### Option 1: Using render.yaml (Recommended)
1. Connect your GitHub repository to Render
2. Render will automatically detect the `render.yaml` file
3. The build will run automatically

### Option 2: Manual Configuration
If you prefer manual setup:

1. **Create a new Static Site on Render**
2. **Connect your GitHub repository**
3. **Configure build settings:**
   - **Build Command:** `npm install && npx vite build`
   - **Publish Directory:** `dist`
   - **Node Version:** 18 (specified in .nvmrc)

### Option 3: Using the build script
If you encounter permission issues, use:
- **Build Command:** `chmod +x build.sh && ./build.sh`

## Environment Variables
No environment variables are required for this static site.

## Build Output
- The build creates optimized files in the `dist/` directory
- CSS: ~16KB (3.5KB gzipped)
- JS: ~266KB (84KB gzipped)
- HTML: ~1KB

## Troubleshooting

### Permission Denied Error
If you get "vite: Permission denied":
- Use `npx vite build` instead of `vite build`
- Or use the provided `build.sh` script

### Build Fails
1. Ensure Node.js version 18+ is being used
2. Clear cache: `npm ci` instead of `npm install`
3. Check that all dependencies are properly installed

### Performance
- The site is optimized for fast loading
- All assets are minified and compressed
- Uses modern build tools (Vite) for optimal performance

## Custom Domain
After deployment, you can add a custom domain in the Render dashboard under Settings > Custom Domains.

## SSL Certificate
Render provides free SSL certificates automatically for all deployments.