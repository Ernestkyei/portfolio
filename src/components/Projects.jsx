import messageImg from '../assets/message.png'
import jobbridgeImg from '../assets/jobbride.png'


const projects = [
  {
    type: 'Personal Project',
    title: 'Full-Stack Messaging Platform',
    desc: 'Real-time messaging application with user-facing frontend and full admin dashboard. Features user management, message logs, JWT authentication, and automated password reset via email.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'Express'],
    github: 'https://github.com/Ernestkyei/message-app',
    live: 'https://message-app-rpgx.onrender.com/',
    image: messageImg,
    imageAlt: 'Messaging platform dashboard showing real-time chat interface'
  },
  {
    type: 'Team Project · Live',
    title: 'JobBridge — Job Search Platform',
    desc: 'Job matching platform with job seeker and employer dashboards, advanced search, application tracking, admin moderation panel, and role-based access control. Deployed on Microsoft Azure.',
    tech: ['C# / Blazor', '.NET 9', 'Entity Framework', 'SQLite', 'Azure'],
    github: 'https://github.com/Ernestkyei/jobbridge',
    live: 'https://jobbridge-team06-d5agcya8cka3agd8.northcentralus-01.azurewebsites.net',
    image: jobbridgeImg,
    imageAlt: 'JobBridge job search platform interface showing job listings'
  },
]

const Projects = () => {
  // Handle image loading errors
  const handleImageError = (e) => {
    e.target.src = 'https://placehold.co/600x400/1a1a2e/4a90e2?text=Preview+Coming+Soon'
  }

  return (
    <section className="py-24 px-8 max-w-5xl mx-auto" id="projects">
      <div className="section-line">Projects</div>
      <h2 className="text-4xl text-white mb-12 font-semibold">What I've built</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div 
            key={p.title} 
            className="rounded-sm card-hover flex flex-col bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300"
          >
            {/* Professional Image Section with overlay */}
            <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
              <img 
                src={p.image} 
                alt={p.imageAlt || p.title}
                onError={handleImageError}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              {/* Optional gradient overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              
              {/* Optional: Live badge */}
              {p.live && (
                <div className="absolute top-3 right-3">
                  <span className="bg-green-500/90 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    Live
                  </span>
                </div>
              )}
            </div>
            
            {/* Content */}
            <div className="p-6 flex flex-col gap-4 flex-1">
              <div>
                <div className="text-xs text-blue-400 tracking-widest uppercase mb-2 font-semibold">
                  {p.type}
                </div>
                <h3 className="text-xl text-white font-semibold mb-3">
                  {p.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed font-light line-clamp-3">
                  {p.desc}
                </p>
              </div>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span 
                    key={t} 
                    className="text-xs px-3 py-1 rounded-full text-white/40 bg-white/5 border border-white/10 hover:border-blue-500/30 hover:text-white/70 transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>
              
              {/* Buttons */}
              <div className="flex gap-3 mt-2">
                {p.live && (
                  <a 
                    href={p.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white text-xs font-medium tracking-wide hover:bg-blue-600 hover:shadow-lg transition-all rounded-sm"
                  >
                    <span>🌐</span>
                    Live Demo →
                  </a>
                )}
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-wide text-white/60 hover:text-white transition-all rounded-sm border border-white/20 hover:border-white/40 hover:bg-white/5"
                >
                  <span>📂</span>
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects