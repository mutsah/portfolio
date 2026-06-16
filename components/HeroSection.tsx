import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-tag">// Full Stack Developer</div>
          <h1 className="hero-name">
            Mutsah
            <br />
            <span className="line2">Taringa</span>
          </h1>
          <div className="hero-role">
            <span className="hero-role-text">Building scalable web applications</span>
            <div className="hero-role-line" />
          </div>
          <p className="hero-bio">
            Full Stack Developer specializing in <strong>NestJS</strong>, <strong>Next.js</strong>, and{' '}
            <strong>PostgreSQL</strong>. I build fast, clean, production-ready applications for startups
            and businesses worldwide.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              Get in Touch
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-val">
                3<span>+</span>
              </div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-val">
                20<span>+</span>
              </div>
              <div className="hero-stat-label">Projects Built</div>
            </div>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <Image
            src="/image.png"
            alt="Mutsah Taringa"
            width={420}
            height={520}
            className="hero-photo"
            priority
          />
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  );
}
