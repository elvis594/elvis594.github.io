import Layout from '../components/Layout'
import Head from 'next/head'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - GitHub Personal Page</title>
        <meta name="description" content="About me and this project" />
      </Head>
      
      <div className="hero">
        <h1>About Me 🚀</h1>
        <p>Learn more about me and my journey in software development</p>
      </div>

      <div className="card">
        <h2>Who Am I?</h2>
        <p>
          I'm a passionate developer who loves creating amazing web experiences. 
          This personal page showcases my skills in modern web development technologies 
          including React, Next.js, and TypeScript.
        </p>
      </div>

      <div className="card">
        <h2>Skills & Technologies</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div>
            <h3 style={{ color: '#58a6ff', marginBottom: '0.5rem' }}>Frontend</h3>
            <ul style={{ color: '#8b949e', paddingLeft: '1rem' }}>
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>HTML5 & CSS3</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#58a6ff', marginBottom: '0.5rem' }}>Tools</h3>
            <ul style={{ color: '#8b949e', paddingLeft: '1rem' }}>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Node.js</li>
              <li>Package Managers</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Contact Information</h2>
        <p>
          Feel free to reach out to me through GitHub or other social platforms. 
          I'm always interested in collaborating on exciting projects!
        </p>
      </div>
    </Layout>
  )
}