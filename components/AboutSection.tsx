export default function AboutSection() {
  return (
    <section id="about">
      <div className="section-header reveal">
        <span className="section-tag">// 01 — About</span>
        <h2 className="section-title">
          Who I <span className="outline">Am</span>
        </h2>
      </div>
      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            Hey! I&apos;m <strong>Mutsah Taringa</strong>, a Full Stack Developer with a passion for
            building clean, scalable web applications. I love turning complex problems into simple,
            beautiful, and intuitive solutions.
          </p>
          <p>
            I specialize in the modern JavaScript ecosystem — from crafting pixel-perfect UIs with{' '}
            <strong>Next.js and React</strong> to building robust, secure backend APIs with{' '}
            <strong>NestJS and PostgreSQL</strong>.
          </p>

          <div className="about-details">
            <div className="about-detail">
              <span className="about-detail-label">Location</span>
              <span className="about-detail-val">Harare, Zimbabwe 🇿🇼</span>
            </div>
            <div className="about-detail">
              <span className="about-detail-label">Focus</span>
              <span className="about-detail-val">Full Stack</span>
            </div>
          </div>
        </div>

        <div className="about-card reveal">
          <div className="about-card-title">// Experience &amp; Education</div>
          <div className="about-items">
            <div className="about-item">
              <div className="about-item-icon">📜</div>
              <div className="about-item-info">
                <h4>AWS Cloud Practitioner</h4>
                <p>Amazon Web Services · 2026</p>
              </div>
            </div>
            <div className="about-item">
              <div className="about-item-icon">💼</div>
              <div className="about-item-info">
                <h4>Full Stack Developer</h4>
                <p>Employed · 2022 – Present</p>
              </div>
            </div>
            <div className="about-item">
              <div className="about-item-icon">🎓</div>
              <div className="about-item-info">
                <h4>BSc Computer Science</h4>
                <p>University of Zimbabwe · 2017 – 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
