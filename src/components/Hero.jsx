import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title fade-in-up">
              Hi, I'm <span className="highlight">Nish Chup</span>
            </h1>
            <p className="hero-subtitle fade-in-up">
              Full Stack Developer , Creative Problem Solver , Generative AI Enthusiast [Learner]
            </p>
            <p className="hero-description fade-in-up">
              I craft beautiful, functional web experiences that bring ideas to life. 
              Passionate about AI, clean code, user experience, and continuous learning.

              Aim to build revolutionary AI projects that transform industries and improve lives.
            </p>
            <div className="hero-buttons fade-in-up">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
              <a 
                href="/resume.pdf" 
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-elements">
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
              <div className="floating-element element-3"></div>
              <div className="floating-element element-4"></div>
            </div>
            <div className="hero-avatar">
              <div className="avatar-image">
                <img src="./profile.jpg" alt="Nish Chup - Profile Photo" />
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero