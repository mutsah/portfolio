const skillGroups = [
  {
    title: 'Frontend',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    skills: ['NestJS', 'Node.js', 'REST APIs', 'JWT Auth', 'GraphQL'],
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'TypeORM', 'MongoDB', 'Redis', 'Prisma'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Git/GitHub', 'Railway', 'Vercel', 'Linux'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="section-header reveal">
        <span className="section-tag">// 02 — Skills</span>
        <h2 className="section-title">
          Tech <span className="outline">Stack</span>
        </h2>
      </div>
      <div className="skills-groups">
        {skillGroups.map(group => (
          <div className="skill-group reveal" key={group.title}>
            <div className="skill-group-title">{group.title}</div>
            <div className="skill-tags">
              {group.skills.map(skill => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
