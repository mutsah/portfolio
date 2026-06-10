import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="section-header reveal">
        <span className="section-tag">// 04 — Contact</span>
        <h2 className="section-title">
          Let&apos;s <span className="outline">Work</span>
        </h2>
      </div>
      <div className="contact-grid">
        <div className="reveal">
          <p className="contact-intro">
            I&apos;m currently{' '}
            <strong style={{ color: 'var(--accent)' }}>available for remote freelance work</strong>{' '}
            and long-term contracts. Whether you have a project in mind or just want to connect —
            my inbox is always open.
          </p>
          <div className="contact-links">
            <a href="mailto:taringamutsah@gmail.com" className="contact-link">
              <div className="contact-link-icon">✉️</div>
              <div className="contact-link-info">
                <div className="contact-link-label">Email</div>
                <div className="contact-link-val">taringamutsah@gmail.com</div>
              </div>
              <span className="contact-arrow">›</span>
            </a>
            <a
              href="https://linkedin.com/in/mutsahtaringa"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-link-icon">💼</div>
              <div className="contact-link-info">
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-val">linkedin.com/in/mutsahtaringa</div>
              </div>
              <span className="contact-arrow">›</span>
            </a>
            <a
              href="https://github.com/mutsahtaringa"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-link-icon">🐙</div>
              <div className="contact-link-info">
                <div className="contact-link-label">GitHub</div>
                <div className="contact-link-val">github.com/mutsahtaringa</div>
              </div>
              <span className="contact-arrow">›</span>
            </a>
            <a
              href="https://upwork.com/freelancers/mutsahtaringa"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-link-icon">💬</div>
              <div className="contact-link-info">
                <div className="contact-link-label">Upwork</div>
                <div className="contact-link-val">upwork.com/freelancers/mutsahtaringa</div>
              </div>
              <span className="contact-arrow">›</span>
            </a>
          </div>
        </div>
        <div className="reveal">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
