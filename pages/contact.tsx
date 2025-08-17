import Layout from '../components/Layout'
import Head from 'next/head'

export default function Contact() {
  const contactMethods = [
    {
      platform: "GitHub",
      icon: "🐙",
      description: "Check out my repositories and contributions",
      link: "https://github.com/yourusername"
    },
    {
      platform: "LinkedIn",
      icon: "💼",
      description: "Connect with me professionally",
      link: "https://linkedin.com/in/yourprofile"
    },
    {
      platform: "Email",
      icon: "📧",
      description: "Send me a direct message",
      link: "mailto:your.email@example.com"
    },
    {
      platform: "Twitter",
      icon: "🐦",
      description: "Follow my tech journey and thoughts",
      link: "https://twitter.com/yourusername"
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Contact - GitHub Personal Page</title>
        <meta name="description" content="Get in touch with me" />
      </Head>
      
      <div className="hero">
        <h1>Get In Touch 📬</h1>
        <p>I'd love to hear from you! Let's connect and collaborate</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        {contactMethods.map((method, index) => (
          <div key={index} className="card" style={{ textAlign: 'center', transition: 'transform 0.2s', cursor: 'pointer' }}
               onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
               onClick={() => window.open(method.link, '_blank')}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{method.icon}</div>
            <h2 style={{ marginBottom: '0.5rem' }}>{method.platform}</h2>
            <p style={{ color: '#8b949e' }}>{method.description}</p>
          </div>
        ))}
      </div>

      <div className="card">
        <h2>Let's Work Together</h2>
        <p style={{ marginBottom: '1rem' }}>
          I'm always interested in new opportunities, whether it's:
        </p>
        <ul style={{ color: '#8b949e', paddingLeft: '2rem', lineHeight: '1.8' }}>
          <li>🚀 Exciting web development projects</li>
          <li>🤝 Open source collaborations</li>
          <li>💡 Innovative startup ideas</li>
          <li>📚 Knowledge sharing and mentoring</li>
          <li>🎯 Freelance opportunities</li>
        </ul>
      </div>

      <div className="card">
        <h2>Response Time</h2>
        <p>
          I typically respond to messages within 24-48 hours. For urgent matters, 
          LinkedIn or email would be the fastest way to reach me.
        </p>
      </div>
    </Layout>
  )
}