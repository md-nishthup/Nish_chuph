import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Thank you! Your message has been sent successfully.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSubmitMessage('')
      }, 5000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'cap34267@gmail.com',
      link: 'mailto:cap34267@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: 'will be added soon   ',
      link: 'will be added soon'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Brooklyn, New York, USA',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/md-nishthup',
      color: '#333'
    },
    {
      name: 'YouTube Channel',
      icon: '📺',
      url: 'https://www.youtube.com/@Scifinovation-566',
      color: '#ff0000'
    },
    {
      name: 'FB PE Group',
      icon: '�',
      url: 'https://www.facebook.com/share/g/1Cd59Td2FZ/',
      color: '#1877f2'
    },
    {
      name: 'PE Course',
      icon: '📚',
      url: 'https://www.facebook.com/share/g/1BKEkQxSBk/',
      color: '#1877f2'
    },
    {
      name: 'LinkedIn(soon)',
      icon: '�',
      url: 'https://linkedin.com',
      color: '#0077b5'
    },
    {
      name: 'Portfolio',
      icon: '🌐',
      url: 'https://nish_chup.vercel.app',
      color: '#667eea'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title fade-in-up">Get In Touch</h2>
        <p className="contact-subtitle fade-in-up">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro fade-in-up">
              <h3>Let's Work Together</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question, want to start a project, or just want 
                to connect, feel free to reach out!
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link} 
                  className="contact-item fade-in-up"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <div className="contact-label">{info.title}</div>
                    <div className="contact-value">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-links fade-in-up">
              <h4>Follow Me</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form fade-in-up" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="cap34267@gmail.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitMessage && (
                <div className="submit-message">{submitMessage}</div>
              )}
            </form>
          </div>
        </div>

        <footer className="portfolio-footer fade-in-up">
          <div className="footer-content">
            <p>&copy; 2025 .nish_chup. have a good day</p>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Contact