# Akshaya Reddy - Personal Portfolio Website

A modern, premium, and fully responsive personal portfolio website built for a Computer Science Engineering student. Features a dark theme with glassmorphism, smooth animations, and an interactive particle background.

## Features

- **Modern UI/UX**: Dark theme, glassmorphism cards, subtle gradients.
- **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop.
- **Animations**: Built with Framer Motion and React Scroll for smooth scrolling and scroll-reveal effects.
- **Interactive Background**: Animated particles using `react-tsparticles`.
- **Sections**: Hero, About, Skills, Projects, Experience & Achievements, Contact.
- **SEO Friendly**: Semantic HTML and clean structure.

## Tech Stack

- **Framework**: React.js (via Vite)
- **Styling**: Tailwind CSS (v4)
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Typing Effect**: Typewriter Effect
- **Particles**: React tsParticles

## Project Structure

```
├── public/               # Static assets
├── src/
│   ├── assets/           # Images and media
│   ├── components/       # Reusable React components (Navbar, Hero, etc.)
│   ├── data/             # Static data (constants.js)
│   ├── App.jsx           # Main application container
│   ├── index.css         # Global styles & Tailwind configuration
│   └── main.jsx          # Entry point
├── tailwind.config.js    # Tailwind configuration (if applicable)
├── vite.config.js        # Vite configuration
└── package.json          # Project dependencies
```

## Running Locally

1. **Clone the repository** (if applicable) or download the files.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

## Deployment Instructions

### Deploying to GitHub Pages

1. Install `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Update `vite.config.js` to include the base path:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/', // Replace with your repository name
     plugins: [react(), tailwindcss()],
   })
   ```
3. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run the deploy command:
   ```bash
   npm run deploy
   ```

### Deploying to Vercel (Recommended)

Vercel provides the easiest and fastest way to deploy a Vite React app.

1. **Push your code to a GitHub repository**.
2. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click on **"Add New" > "Project"**.
4. Import your newly created GitHub repository.
5. Vercel will automatically detect that it's a Vite project. The default build settings (`npm run build` and `dist` output directory) are perfect.
6. Click **"Deploy"**.
7. Once finished, Vercel will provide you with a live URL (e.g., `https://your-portfolio.vercel.app`).
