# Elvis HomePage
[HomePage Link](https://elvis594.github.io/pages/)

# GitHub Personal Page

A modern, responsive personal page built with React, Next.js, and TypeScript. Perfect for showcasing your GitHub profile and projects.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, Next.js 14, and TypeScript
- **Static Site Generation**: Optimized for GitHub Pages deployment
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Dark Theme**: GitHub-inspired dark theme with modern aesthetics
- **Multiple Pages**: Home, About, Projects, and Contact pages with routing
- **SEO Optimized**: Proper meta tags and structured content

## 📁 Project Structure

```
pages/
├── components/          # Reusable React components
│   └── Layout.tsx      # Main layout with navigation
├── pages/              # Next.js pages (file-based routing)
│   ├── _app.tsx        # App wrapper
│   ├── _document.tsx   # HTML document structure
│   ├── index.tsx       # Home page (Hello World)
│   ├── about.tsx       # About page
│   ├── projects.tsx    # Projects showcase
│   └── contact.tsx     # Contact information
├── styles/             # CSS styles
│   └── globals.css     # Global styles
├── next.config.js      # Next.js configuration
├── package.json        # Dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run export` - Export static files for deployment
- `npm run lint` - Run ESLint

## 🚀 Deployment

### GitHub Pages

1. Build and export the static files:
   ```bash
   npm run export
   ```

2. The static files will be generated in the `out/` directory
3. Deploy the contents of the `out/` directory to your GitHub Pages repository

### Other Platforms

This project can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit the content in each page file (`pages/*.tsx`)
2. **Styling**: Modify `styles/globals.css` for visual changes
3. **Navigation**: Update the navigation links in `components/Layout.tsx`
4. **Projects**: Add your projects in `pages/projects.tsx`
5. **Contact Info**: Update your contact information in `pages/contact.tsx`

### Adding New Pages

1. Create a new `.tsx` file in the `pages/` directory
2. Add the route to the navigation in `components/Layout.tsx`
3. Follow the existing page structure for consistency

## 📱 Responsive Design

The site is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones

## 🎯 SEO Features

- Proper HTML structure
- Meta tags for each page
- Semantic HTML elements
- Optimized for search engines

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you have suggestions for improvements, please open an issue or submit a pull request.

---

**Happy coding!** 🚀
