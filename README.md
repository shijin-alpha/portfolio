# Shijin Thomas - Portfolio Website

A clean, professional portfolio website built with React and Vite, showcasing my work as a Full-Stack Developer.

## 🚀 Features

- **Modern Design**: Dark theme with clean typography and subtle animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Vite for fast loading and optimal performance
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Built With

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Inter & JetBrains Mono** - Professional typography

## 📦 Installation & Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd shijin-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview the production build:
```bash
npm run preview
```

## 🚀 Deployment

This project is optimized for deployment on Render with multiple configuration options:

### Option 1: Automatic (render.yaml)
The repository includes a `render.yaml` file for automatic deployment:
1. Connect your GitHub repository to Render
2. Render will automatically detect and use the configuration
3. Build command: `chmod +x build.sh && ./build.sh`
4. Publish directory: `dist`

### Option 2: Manual Configuration
1. Create a new Static Site on Render
2. Connect your GitHub repository
3. Set build command: `npm install && npx vite build`
4. Set publish directory: `dist`

### Option 3: Simple Configuration
Use the `render-simple.yaml` file if you prefer a simpler setup without the build script.

**Note:** The build uses `npx vite build` to avoid permission issues on deployment platforms.

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills showcase
│   ├── Projects.jsx    # Projects portfolio
│   └── Contact.jsx     # Contact information
├── App.jsx             # Main app component
├── main.jsx           # React entry point
└── index.css          # Global styles
```

## 🎨 Customization

The portfolio is built with modularity in mind. Key areas to customize:

- **Personal Information**: Update content in each component
- **Projects**: Modify the projects array in `Projects.jsx`
- **Skills**: Update skill categories in `Skills.jsx`
- **Styling**: Customize colors and animations in Tailwind config
- **Content**: All text content is easily editable in component files

## 📱 Sections

1. **Hero** - Full-screen introduction with name and tagline
2. **About** - Professional background and expertise areas
3. **Skills** - Technical skills organized by category
4. **Projects** - Showcase of real projects with detailed descriptions
5. **Contact** - Professional contact information and links

## 🔧 Performance Features

- Optimized bundle size with Vite
- Lazy loading and code splitting ready
- Responsive images and assets
- Smooth scrolling navigation
- Efficient animation rendering

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Shijin Thomas