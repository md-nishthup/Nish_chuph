import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Visa counter',
      description: 'A full stack F4 catagory visa issuance analysis web application.',
      tech: ['html', 'css', 'javascript'],
      image: './Visa counter.png',
      liveLink: 'https://visacounter.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'HSC Examination Cracker',
      description: 'A exam routine and exam tracker website with study planner, progress tracker, study tools and resources',
      tech: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
      image: './HSC Examination Cracker.jpg',
      liveLink: 'https://hsc-creacker-by-nischup.netlify.app/',
      featured: true
    },
    {
      id: 3,
      title: 'IGM certification exam website',
      description: 'A comprehensive platform for IGM certification exam preparation, offering practice tests, study materials, and performance tracking.',
      tech: ['JavaScript', 'React', 'Node.js', 'Express'],
      image: './IGM certification exam website.jpg',
      liveLink: 'https://igm-certification-test.vercel.app/',
      featured: false
    },
    {
      id: 4,
      title: 'very basic image generator (incomplete)',
      description: 'A simple image generator application that allows users to create and customize images using basic shapes and colors.',
      tech: ['html', 'Express', 'css', 'pollination api'],
      image: './very basic image generator (incomplete).jpg',
      liveLink: 'https://image-gen-for-goribs.vercel.app/',
      featured: true
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title fade-in-up">Featured Projects</h2>
        
        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className={`project-card featured fade-in-up ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-screenshot" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} className="project-btn" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                    <a href={project.githubLink} className="project-btn" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title fade-in-up">Other Projects</h3>
        
        <div className="other-projects">
          {otherProjects.map((project, index) => (
            <div key={project.id} className="project-card small fade-in-up">
              <div className="project-header">
                <div className="project-icon-small">
                  <img src={project.image} alt={project.title} className="project-small-image" />
                </div>
                <div className="project-links-small">
                  <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    🔗
                  </a>
                  <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    📁
                  </a>
                </div>
              </div>
              <h4 className="project-title-small">{project.title}</h4>
              <p className="project-description-small">{project.description}</p>
              <div className="project-tech-small">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag-small">{tech}</span>
                ))}
                {project.tech.length > 3 && <span className="tech-more">+{project.tech.length - 3}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects