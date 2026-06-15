import ContactForm from './ContactForm';

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
            Whether you have a project in mind or just want to connect — my
            inbox is always open.
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
              href="https://www.linkedin.com/in/mutsa-taringa-b8857723b/"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-link-icon">💼</div>
              <div className="contact-link-info">
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-val">linkedin.com/in/mutsa-taringa-b8857723b</div>
              </div>
              <span className="contact-arrow">›</span>
            </a>
            <a href="tel:+263785094296" className="contact-link">
              <div className="contact-link-icon">📞</div>
              <div className="contact-link-info">
                <div className="contact-link-label">Phone</div>
                <div className="contact-link-val">+263 785 094 296</div>
              </div>
              <span className="contact-arrow">›</span>
            </a>
            <a
              href="https://github.com/mutsah"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-link-icon">🐙</div>
              <div className="contact-link-info">
                <div className="contact-link-label">GitHub</div>
                <div className="contact-link-val">github.com/mutsah</div>
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
  );
}
