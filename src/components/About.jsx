import './About.css'

const About = () => {
  const stats = [
    { number: '5', label: 'Projects Completed' },
    { number: 'learner', label: 'Years Experience' },
    { number: '20+', label: 'course member ' },
    { number: '10k+', label: 'group member ' },
    { number: '100%', label: 'Success Rate' }
  ]

  const highlights = [
    {
      icon: '🚀',
      title: 'Performance Focused',
      description: 'I build fast, optimized applications that provide exceptional user experiences.'
    },
    {
      icon: '💡',
      title: 'Problem Solver',
      description: 'I love tackling complex challenges and finding elegant, efficient solutions.'
    },
    {
      icon: '🎨',
      title: 'Design Minded',
      description: 'I create beautiful, intuitive interfaces that users love to interact with.'
    },
    {
      icon: '📱',
      title: 'Fast and Self-Learner',
      description: 'I quickly adapt to new technologies and frameworks, ensuring I stay at the forefront of the industry.'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title fade-in-up">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro fade-in-up">
              <p style={{color: "wheat"}}>
                 I am a passionate learner dream to bring a revolution by creating and using AI. I have experience in creating 
                 full stack website with less knowledge. currently learning AI and web3 so that i can use brain powered with AI 
                 to build revolutionary projects that transform industries and improve lives.
              </p>
              <p style={{color: "wheat"}}>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing my knowledge 
                with the developer community. I believe in continuous learning 
                and staying up-to-date with the latest industry trends.
              </p>
            </div>
            
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item fade-in-up">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-highlights">
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-card fade-in-up">
                  <div className="highlight-icon">{highlight.icon}</div>
                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About