const projects = [
  {
    emoji: '📊',
    gradient: 'linear-gradient(135deg, #7c3aed, #00ff88)',
    tags: ['Next.js', 'NestJS', 'PostgreSQL'],
    name: 'SaaS Analytics Dashboard',
    desc: 'A multi-tenant SaaS platform with real-time analytics, subscription management, and role-based access control. Built with a full-featured REST API backend.',
  },
  {
    emoji: '🛒',
    gradient: 'linear-gradient(135deg, #ff6b35, #fde047)',
    tags: ['React', 'NestJS', 'Redis'],
    name: 'E-Commerce Marketplace',
    desc: 'Full-featured marketplace with vendor management, cart & checkout, order tracking, and Stripe payment integration. Supports 100+ concurrent users.',
  },
  {
    emoji: '🚚',
    gradient: 'linear-gradient(135deg, #0ea5e9, #7c3aed)',
    tags: ['Next.js', 'TypeORM', 'Docker'],
    name: 'Courier Management System',
    desc: 'End-to-end logistics platform with real-time parcel tracking, driver assignment, and automated notifications via SMS and email.',
  },
  {
    emoji: '💬',
    gradient: 'linear-gradient(135deg, #00ff88, #0ea5e9)',
    tags: ['React', 'WebSockets', 'MongoDB'],
    name: 'Real-Time Chat App',
    desc: 'A performant real-time messaging app with rooms, private DMs, file sharing, and read receipts. Uses Socket.IO and JWT authentication.',
  },
  {
    emoji: '📋',
    gradient: 'linear-gradient(135deg, #ec4899, #ff6b35)',
    tags: ['Next.js', 'NestJS', 'PostgreSQL'],
    name: 'Project Management Tool',
    desc: 'Trello-inspired kanban board with team collaboration, task assignment, deadlines, and activity logs. Includes a mobile-responsive design.',
  },
  {
    emoji: '🔐',
    gradient: 'linear-gradient(135deg, #fde047, #00ff88)',
    tags: ['NestJS', 'JWT', 'TypeORM'],
    name: 'Auth Microservice Boilerplate',
    desc: 'Production-ready authentication boilerplate with refresh tokens, email verification, 2FA, and OAuth (Google/GitHub). Open source on GitHub.',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="section-header reveal">
        <span className="section-tag">// 03 — Projects</span>
        <h2 className="section-title">
          Featured <span className="outline">Work</span>
        </h2>
      </div>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card reveal" key={project.name}>
            <div className="project-thumb">
              <div className="project-thumb-bg" style={{ background: project.gradient }} />
              <span style={{ position: 'relative', zIndex: 1 }}>{project.emoji}</span>
            </div>
            <div className="project-body">
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-name">{project.name}</div>
              <p className="project-desc">{project.desc}</p>
              <div className="project-links">
                <a href="#" className="project-link live">
                  ↗ Live Demo
                </a>
                <a href="#" className="project-link">
                  ⌥ GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
