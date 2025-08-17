import Layout from '../components/Layout'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>GitHub Personal Page</title>
        <meta name="description" content="Welcome to my personal GitHub page" />
      </Head>
      
      <div className="hero">
        <h1>Hello World! 👋</h1>
        <p>Welcome to my personal GitHub page built with React, Next.js</p>
      </div>

      <div className="card">
        <h2>About This Project</h2>
        <p>
          This is a static personal page built with modern web technologies:
        </p>
        <ul style={{ marginTop: '1rem', paddingLeft: '2rem', color: '#8b949e' }}>
          <li>⚛️ React 18 for component-based UI</li>
          <li>🚀 Next.js 14 for static site generation</li>
          <li>📱 Responsive design with modern CSS</li>
          <li>🎨 GitHub-inspired dark theme</li>
          <li>📄 Multiple pages with routing support</li>
        </ul>
      </div>

      <div className="card">
        <h2>Getting Started</h2>
        <p>
          Navigate through the different pages using the navigation bar above. 
          Each page demonstrates different aspects of the site structure and routing capabilities.
        </p>
      </div>
    </Layout>
  )
}