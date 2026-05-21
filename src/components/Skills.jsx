const skillGroups = [
  {
    category: 'Front-End',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Next.js'],
  },
  {
    category: 'Back-End',
    skills: ['Node.js', 'Express.js', 'Laravel', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Other Skills',
    skills: [
      'Responsive Web Design',
      'RESTful APIs',
      'Git / GitHub',
      'Problem-Solving',
      'UI/UX Design',
      'Test-Driven Development',
      'Collaboration',
      'Project Management',
      'DevOps & Deployment',
    ],
  },
]

const Skills = () => (
  <section className="py-24 px-8 max-w-5xl mx-auto" id="skills">
    <div className="section-line">Technical Skills</div>
    <h2 className="font-display text-4xl text-white mb-12">What I work with</h2>
    <div className="flex flex-col gap-10">
      {skillGroups.map(group => (
        <div key={group.category}>
          <div className="text-accent text-xs tracking-widest uppercase mb-4">{group.category}</div>
          <div className="flex flex-wrap gap-3">
            {group.skills.map(skill => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Skills