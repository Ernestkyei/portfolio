const projects = [
  {
    type: 'Personal Project',
    title: 'Full-Stack Messaging Platform',
    desc: 'Real-time messaging application with user-facing frontend and full admin dashboard. Features user management, message logs, JWT authentication, and automated password reset via email.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'Express'],
    github: 'https://github.com/Ernestkyei/message-app',
    live: null,
  },
  {
    type: 'Team Project · Live',
    title: 'JobBridge — Job Search Platform',
    desc: 'Job matching platform with job seeker and employer dashboards, advanced search, application tracking, admin moderation panel, and role-based access control. Deployed on Microsoft Azure.',
    tech: ['C# / Blazor', '.NET 9', 'Entity Framework', 'SQLite', 'Azure'],
    github: 'https://github.com/Ernestkyei/jobbridge',
    live: 'https://jobbridge-team06-d5agcya8cka3agd8.northcentralus-01.azurewebsites.net',
  },
]

const Projects = () => (
  <section className="py-24 px-8 max-w-5xl mx-auto" id="projects">
    <div className="section-line">Projects</div>
    <h2 className="font-display text-4xl text-white mb-12">What I've built</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p) => (
        <div key={p.title} className="rounded-sm card-hover flex flex-col"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="p-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(74,144,217,0.05)' }}>
            <div className="text-xs text-accent tracking-widest uppercase mb-2">{p.type}</div>
            <h3 className="font-display text-xl text-white">{p.title}</h3>
          </div>
          <div className="p-6 flex flex-col gap-5 flex-1">
            <p className="text-white/50 text-sm leading-relaxed font-light">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map(t => (
                <span key={t} className="text-xs px-3 py-1 rounded-sm text-white/40"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>{t}</span>
              ))}
            </div>
            <div className="flex gap-3 mt-auto pt-2">
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-xs tracking-wide hover:bg-accent-dark transition-all rounded-sm">
                  Live Demo →
                </a>
              )}
              <a href={p.github} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 text-xs tracking-wide text-white/60 hover:text-white transition-all rounded-sm"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                GitHub →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)
export default Projects
