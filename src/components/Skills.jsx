import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Programming',
      icon: '💻',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      skills: [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'JavaScript', level: 76, icon: '⚡' },
        { name: 'HTML', level: 90, icon: '🌐' },
        { name: 'CSS', level: 70, icon: '🎨' },
        { name: 'C', level: 70, icon: '🔣' }
      ]
    },
    {
      title: 'AI & Data Science',
      icon: '🤖',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      skills: [
        { name: 'Prompt Engineering', level: 90, icon: '🎯' },
        { name: 'Generative AI Usage', level: 78, icon: '✨' },
        { name: 'GUI Python', level: 78, icon: '🖥️' }
      ]
    },
    {
      title: 'Creative & Technical',
      icon: '🎮',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      skills: [
        { name: 'Graphics Design', level: 50, icon: '🎨' },
        { name: 'Video Editing', level: 50, icon: '🎬' },
        { name: 'Game Development', level: 30, icon: '🎮' },
        { name: 'MS Office', level: 85, icon: '📊' }
      ]
    }
  ]

  const learningSkills = [
    { name: 'NumPy', category: 'Data Science', icon: '📊' },
    { name: 'Pandas', category: 'Data Analysis', icon: '🐼' },
    { name: 'Machine Learning', category: 'AI/ML', icon: '🧠' },
    { name: 'Deep Learning', category: 'AI/ML', icon: '🔥' },
    { name: 'Generative AI', category: 'AI/ML', icon: '🤖' },
    { name: 'Data Analysis', category: 'Data Science', icon: '📈' },
    { name: 'Arduino & Robotics', category: 'Hardware', icon: '🤖' },
    { name: 'Animation', category: 'Creative', icon: '🎬' }
  ]

  const academicSubjects = [
    { name: 'Calculus', icon: '∫', level: 85 },
    { name: 'Linear Algebra', icon: '📐', level: 80 },
    { name: 'Statistics', icon: '📊', level: 88 },
    { name: 'Probability', icon: '🎲', level: 82 },
    { name: 'Psychology', icon: '🧠', level: 75 },
    { name: 'Physics C', icon: '⚛️', level: 78 }
  ]

  const projects = [
    {
      title: 'ChatterLITE',
      type: 'In Development',
      period: '2024 - Present',
      description: 'Slick, lightweight messaging platform built with React.js and Firebase for real-time 1-on-1 chats.',
      technologies: ['React.js', 'Firebase', 'Google Auth', 'Real-time DB'],
      features: [
        'Google Sign-In authentication',
        'User sidebar with chat selection',
        'Real-time messaging system',
        'Mood-based chat themes',
        'Future: Audio/video calls integration'
      ],
      status: 'active'
    },
    {
      title: 'AI Store',
      type: 'Concept Development',
      period: '2024 - Present',
      description: 'All-in-one AI platform - An AI Wikipedia and app store combined.',
      technologies: ['Web Development', 'AI APIs', 'Database'],
      features: [
        'Comprehensive AI tool directory',
        'AI Wikipedia functionality',
        'Tool recommendations',
        'User reviews and ratings'
      ],
      status: 'planning'
    },
    {
      title: 'YouTube Channel - Scifinovation',
      type: 'Content Creation',
      period: '2023 - Present',
      description: 'Educational content on AI, programming, and technology innovations.',
      technologies: ['Video Production', 'Content Strategy'],
      features: [
        'AI tutorials and explanations',
        'Programming guides',
        'Tech innovation discussions',
        'Educational content creation'
      ],
      status: 'active',
      link: 'https://www.youtube.com/@Scifinovation-566'
    }
  ]

  const communities = [
    {
      name: 'FB Prompt Engineering Practice Group',
      role: 'Creator/Admin',
      description: 'Community for practicing and sharing prompt engineering techniques',
      link: 'https://www.facebook.com/share/g/1Cd59Td2FZ/',
      icon: '🎯'
    },
    {
      name: 'Prompt Engineering Course',
      role: 'Course Creator',
      description: 'Teaching advanced prompt engineering techniques',
      link: 'https://www.facebook.com/share/g/1BKEkQxSBk/',
      icon: '📚'
    },
    {
      name: 'AI Revolutionary Army Club',
      role: 'Founder',
      description: 'Upcoming community for AI enthusiasts and developers',
      status: 'Coming Soon',
      icon: '🚀'
    },
    {
      name: 'Python for Absolute Beginners',
      role: 'Course Developer',
      description: 'Comprehensive Python course for complete beginners',
      status: 'In Development',
      icon: '🐍'
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title fade-in-up">Skills & Experience</h2>
        
        <div className="skills-content">
          {/* Core Skills */}
          <div className="skills-section">
            <h3 className="subsection-title fade-in-up">💪 Core Skills</h3>
            <div className="skills-grid">
              {skillCategories.map((category, index) => (
                <div key={index} className="skill-category modern fade-in-up" style={{ '--category-gradient': category.gradient }}>
                  <div className="category-header">
                    <div className="category-icon-modern">{category.icon}</div>
                    <h4 className="category-title">{category.title}</h4>
                  </div>
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item modern">
                        <div className="skill-icon">{skill.icon}</div>
                        <div className="skill-content">
                          <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                          </div>
                          <div className="skill-bar modern">
                            <div 
                              className="skill-progress modern" 
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Skills */}
          <div className="learning-section">
            <h3 className="subsection-title fade-in-up">🚀 Currently Learning</h3>
            <div className="learning-grid">
              {learningSkills.map((skill, index) => (
                <div key={index} className="learning-item fade-in-up">
                  <div className="learning-icon">{skill.icon}</div>
                  <div className="learning-content">
                    <h5 className="learning-name">{skill.name}</h5>
                    <span className="learning-category">{skill.category}</span>
                  </div>
                  <div className="learning-status">
                    <div className="pulse-dot"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Background */}
          <div className="academic-section">
            <h3 className="subsection-title fade-in-up">📚 Academic Foundation</h3>
            <div className="academic-grid">
              {academicSubjects.map((subject, index) => (
                <div key={index} className="academic-item fade-in-up">
                  <div className="academic-icon">{subject.icon}</div>
                  <div className="academic-content">
                    <span className="academic-name">{subject.name}</span>
                    <div className="academic-progress">
                      <div className="academic-bar">
                        <div 
                          className="academic-fill" 
                          style={{ width: `${subject.level}%` }}
                        ></div>
                      </div>
                      <span className="academic-percentage">{subject.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects & Communities Section */}
        <div className="projects-communities-section">
          <h3 className="subsection-title fade-in-up">🔥 Active Projects & Communities</h3>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className={`project-card ${project.status} fade-in-up`}>
                <div className="project-status-badge">
                  <span className={`status-dot ${project.status}`}></span>
                  {project.type}
                </div>
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-stack">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-features">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="communities-grid">
            {communities.map((community, index) => (
              <div key={index} className="community-card fade-in-up">
                <div className="community-icon">{community.icon}</div>
                <div className="community-content">
                  <h5 className="community-name">{community.name}</h5>
                  <span className="community-role">{community.role}</span>
                  <p className="community-description">{community.description}</p>
                  {community.link ? (
                    <a href={community.link} target="_blank" rel="noopener noreferrer" className="community-link">
                      Visit Community →
                    </a>
                  ) : (
                    <span className="community-status">{community.status}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills