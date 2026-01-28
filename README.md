# 3D Portfolio Website

A modern, interactive 3D portfolio website built with React, TypeScript, and Three.js. This portfolio showcases my work, experience, and skills with stunning 3D animations and smooth user interactions.

## ✨ Features

- **3D Interactive Elements**: Immersive 3D models and animations using Three.js
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Contact Form**: Integrated contact form using EmailJS
- **Spotify Integration**: Optional Spotify playlist embedding
- **Modern UI/UX**: Clean and modern design with Tailwind CSS
- **Performance Optimized**: Built with Vite for fast development and optimized builds

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### Additional Libraries
- **EmailJS** - Contact form email service
- **React Router DOM** - Routing
- **React Parallax Tilt** - 3D tilt effects
- **React Vertical Timeline** - Experience timeline component
- **Maath** - Math utilities for 3D

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-v2
```

2. Install dependencies:
```bash
npm install
```

3. Configure your settings:
   - Update `src/constants/config.ts` with your personal information
   - Set up EmailJS service (if using contact form)
   - Add your Spotify playlist ID (optional)

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
portfolio-v2/
├── public/                 # Static assets
│   ├── desktop_pc/        # 3D model assets
│   ├── planet/            # 3D model assets
│   └── ANKIT_THAPA.pdf    # Resume
├── src/
│   ├── assets/            # Images and static files
│   │   ├── company/       # Company logos
│   │   └── tech/          # Technology icons
│   ├── components/        # React components
│   │   ├── atoms/         # Basic components (Header)
│   │   ├── canvas/        # 3D components (Ball, Computers, Earth, Stars)
│   │   ├── layout/        # Layout components (Navbar, Loader)
│   │   └── sections/      # Page sections
│   ├── constants/         # Configuration files
│   ├── hoc/               # Higher-order components
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.cjs
```

## ⚙️ Configuration

Edit `src/constants/config.ts` to customize:

- Personal information (name, email)
- Section content (about, experience, works, etc.)
- Contact form labels
- Spotify playlist ID (optional)

## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run ts:check` - Type check TypeScript

## 🎨 Customization

### Adding Your Own 3D Models

1. Place your GLTF/GLB files in the `public/` directory
2. Import and use them in the canvas components
3. Update the model paths in your components

### Styling

The project uses Tailwind CSS. Customize colors and styles in:
- `tailwind.config.cjs` - Tailwind configuration
- `src/globals.css` - Global styles
- `src/constants/styles.ts` - Theme constants

## 📄 License

See the [LICENSE](LICENSE) file for details.

## 👤 Author

**Ankit Thapa**
- Email: ankit.thapa10121998@gmail.com
- Portfolio: www.ankitthapa.in

---

Built with ❤️ using React, TypeScript, and Three.js
