import { useState } from 'react'

function Contact() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="section container contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">Let’s connect and create something great together!</p>
      <div className="contact-grid single">
        <div className="form-card">
          <button
            type="button"
            className={`accordion-header ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="email-panel"
          >
            <span className={`chevron ${isOpen ? 'rotate' : ''}`} aria-hidden>▸</span>
            <span className="accordion-title">Email Me</span>
          </button>

          <form
            id="email-panel"
            className={`contact-form accordion-panel ${isOpen ? 'show' : ''}`}
            action="https://formsubmit.co/rappah-elzion.bauyon@cvsu.edu.ph"
            method="POST"
            aria-hidden={!isOpen}
          >
            <input type="hidden" name="_subject" value="New message from portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://example.com/thanks" />
          <div className="form-group">
            <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" placeholder="Enter your name" aria-label="Your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" placeholder="Enter your email" aria-label="Your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" placeholder="Type your message..." rows={6} aria-label="Your message" required></textarea>
          </div>
          <button type="submit" className="btn contact-submit">
            <span className="send-icon" aria-hidden>📨</span>
            <span>Send</span>
          </button>
          </form>

          <div className="social-row">
            <a className="social-btn" href="https://github.com/RapphaEl04" target="_blank" rel="noreferrer">
              <span className="social-ico" aria-hidden></span>
              <span>GitHub</span>
            </a>
            <a className="social-btn" href="https://www.facebook.com/raphael.zion.1" target="_blank" rel="noreferrer">
              <span className="social-ico" aria-hidden></span>
              <span>Facebook</span>
            </a>
            <a className="social-btn" href="https://www.wattpad.com/user/HideOnYou04" target="_blank" rel="noreferrer">
              <span className="social-ico" aria-hidden></span>
              <span>Wattpad</span>
            </a>
           
            <a className="social-btn" href="https://www.instagram.com/rappah_3l?igsh=MWhsdWhvdWo4bzVmYg==" target="_blank" rel="noreferrer">
              <span className="social-ico" aria-hidden></span>
              <span>Instagram</span>
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact


