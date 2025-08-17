import Layout from '../components/Layout'
import Head from 'next/head'

export default function Projects() {
  const projects = [
    {
      title: "GitHub Personal Page",
      description: "A static personal page built with React, Next.js, and TypeScript. Features responsive design and modern UI components.",
      tech: ["React", "Next.js", "TypeScript", "CSS3"],
      status: "Active"
    },
    {
      title: "Web Application Dashboard",
      description: "A comprehensive dashboard for managing web applications with real-time data visualization and user management.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      status: "In Development"
    },
    {
      title: "Mobile-First E-commerce",
      description: "A responsive e-commerce platform optimized for mobile devices with seamless checkout experience.",
      tech: ["Next.js", "Stripe API", "Tailwind CSS", "PostgreSQL"],
      status: "Planning"
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Projects - GitHub Personal Page</title>
        <meta name="description" content="My development projects and portfolio" />
      </Head>
      
      <div className="hero">
        <h1>My Projects 💻</h1>
        <p>A showcase of my development work and ongoing projects</p>
      </div>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <h2>{project.title}</h2>
              <span style={{ 
                padding: '0.25rem 0.75rem', 
                borderRadius: '12px', 
                fontSize: '0.875rem',
                backgroundColor: project.status === 'Active' ? '#238636' : project.status === 'In Development' ? '#1f6feb' : '#6f42c1',
                color: 'white'
              }}>
                {project.status}
              </span>
            </div>
            <p style={{ marginBottom: '1rem' }}>{project.description}</p>
            <div>
              <h3 style={{ color: '#58a6ff', marginBottom: '0.5rem', fontSize: '1rem' }}>Technologies Used:</h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} style={{
                    padding: '0.25rem 0.5rem',
                    backgroundColor: '#21262d',
                    border: '1px solid #30363d',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    color: '#8b949e'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <h2>Want to Collaborate?</h2>
        <p>
          I'm always open to new opportunities and interesting projects. 
          If you have an idea or want to work together, feel free to reach out!
        </p>
      </div>
    </Layout>
  )
}