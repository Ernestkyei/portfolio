import { useState } from 'react';
import { motion } from 'framer-motion';
import messageImg from '../assets/message.png'
import jobbridgeImg from '../assets/jobbride.png'
import mentorpathImg from '../assets/mentorpath.png'
import databundleImg from '../assets/databundle.png'
import trackImg from '../assets/track.png'

const projects = [
  {
    type: 'Personal Project · Live',
    title: 'DataBundle Marketplace – E-Commerce Platform',
    desc: 'Full-stack e-commerce platform for purchasing mobile data bundles across MTN, Vodafone, AirtelTigo, and Glo in Ghana. Features user authentication, Paystack payment integration, real-time stock management, and instant data delivery. Admin dashboard for managing bundles, orders, and users.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Paystack', 'Tailwind CSS', 'Render'],
    github: 'https://github.com/Ernestkyei/server',
    live: 'https://client-0eyf.onrender.com',
    image: databundleImg,
    imageAlt: 'DataBundle marketplace showing mobile data bundles for MTN, Vodafone, AirtelTigo, and Glo',
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    type: 'Personal Project · Live',
    title: 'MentorPath – Self-Paced Mentoring Platform',
    desc: 'Complete self-paced mentoring platform where users learn through structured modules with dedicated mentor avatars. Features user authentication, video player with pictorial tutor, module completion tracking, streak counter, and milestone achievements.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Zustand', 'React Router'],
    github: 'https://github.com/Ernestkyei/mentorship-frontend',
    live: 'https://mentorship-frontend-e05o.onrender.com',
    image: mentorpathImg,
    imageAlt: 'MentorPath platform showing course player with mentor avatar',
    color: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    type: 'Personal Project · Live',
    title: 'Tracking System – Package Delivery Tracker',
    desc: 'Package delivery tracking system where customers scan QR codes on their packages to confirm delivery. Real-time updates sync to the system instantly. Includes driver portal for delivery management and admin dashboard for monitoring all deliveries and ensuring secure transactions.',
    tech: ['React', 'Leaflet', 'Socket.io', 'Node.js', 'MongoDB', 'Express', 'QR Code', 'JWT'],
    github: 'https://github.com/Ernestkyei?tab=repositories',
    live: 'https://swifttrack-jlib.onrender.com',
    image: trackImg,
    imageAlt: 'Package delivery tracking system with QR code scanning',
    color: 'from-amber-500/20 to-orange-500/20'
  },
  {
    type: 'Personal Project',
    title: 'Full-Stack Messaging Platform',
    desc: 'Real-time messaging application with user-facing frontend and full admin dashboard. Features user management, message logs, JWT authentication, and automated password reset via email.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'Express'],
    github: 'https://github.com/Ernestkyei/message-app',
    live: 'https://message-app-rpgx.onrender.com/',
    image: messageImg,
    imageAlt: 'Messaging platform dashboard showing real-time chat interface',
    color: 'from-rose-500/20 to-pink-500/20'
  },
  {
    type: 'Team Project · Live',
    title: 'JobBridge — Job Search Platform',
    desc: 'Job matching platform with job seeker and employer dashboards, advanced search, application tracking, admin moderation panel, and role-based access control. Deployed on Microsoft Azure.',
    tech: ['C# / Blazor', '.NET 9', 'Entity Framework', 'SQLite', 'Azure'],
    github: 'https://github.com/Ernestkyei/jobbridge',
    live: 'https://jobbridge-team06-d5agcya8cka3agd8.northcentralus-01.azurewebsites.net',
    image: jobbridgeImg,
    imageAlt: 'JobBridge job search platform interface showing job listings',
    color: 'from-violet-500/20 to-indigo-500/20'
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
}

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Handle image loading errors
  const handleImageError = (e) => {
    e.target.src = 'https://placehold.co/600x400/1a1a2e/4a90e2?text=Preview+Coming+Soon'
  }

  return (
    <motion.section 
      className="py-24 px-8 max-w-5xl mx-auto"
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div 
        className="section-line"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.div>
      
      <motion.h2 
        className="text-4xl text-white mb-12 font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        What I've built
        <span className="block text-sm text-white/40 font-light mt-2">
          {projects.length} projects and counting
        </span>
      </motion.h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, index) => (
          <motion.div 
            key={p.title} 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative rounded-sm bg-white/5 border border-white/10 overflow-hidden cursor-pointer group"
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)`
            }}
          >
            {/* Glow effect on hover */}
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 0%, ${p.color || 'from-blue-500/20 to-purple-500/20'}, transparent 70%)`
              }}
            />
            
            {/* Border gradient on hover */}
            <motion.div 
              className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                border: '1px solid transparent',
                backgroundImage: `linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3))`,
                mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'source-out'
              }}
            />
            
            {/* Image container with shimmer effect */}
            <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
              <motion.img 
                src={p.image} 
                alt={p.imageAlt || p.title}
                onError={handleImageError}
                className="object-cover w-full h-full"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
              
              {/* Shimmer overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {p.live && (
                <motion.div 
                  className="absolute top-3 right-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="bg-green-500/90 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                    </span>
                    Live
                  </span>
                </motion.div>
              )}
            </div>
            
            <div className="p-5 flex flex-col gap-3 flex-1 relative z-10">
              <div>
                <motion.div 
                  className="text-xs text-blue-400 tracking-widest uppercase mb-2 font-semibold flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <span>{p.type}</span>
                  {hoveredIndex === index && (
                    <motion.span 
                      className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1]
                      }}
                      transition={{ 
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.div>
                
                <motion.h3 
                  className="text-lg text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300"
                >
                  {p.title}
                </motion.h3>
                
                <motion.p 
                  className="text-white/50 text-sm leading-relaxed font-light line-clamp-3"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {p.desc}
                </motion.p>
              </div>
              
              {/* Tech tags with stagger animation */}
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t, techIndex) => (
                  <motion.span 
                    key={t} 
                    className="text-xs px-2.5 py-1 rounded-full text-white/50 bg-white/5 border border-white/10 hover:border-blue-500/40 hover:text-white/80 transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * techIndex }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'rgba(59,130,246,0.1)',
                      borderColor: 'rgba(59,130,246,0.3)'
                    }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
              
              {/* Buttons with hover animations */}
              <div className="flex gap-2 mt-2">
                {p.live && (
                  <motion.a 
                    href={p.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 bg-blue-500 text-white text-xs font-medium tracking-wide hover:bg-blue-600 transition-all rounded-sm relative overflow-hidden group/btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative z-10">🌐</span>
                    <span className="relative z-10">Live Demo →</span>
                  </motion.a>
                )}
                <motion.a 
                  href={p.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium tracking-wide text-white/60 hover:text-white transition-all rounded-sm border border-white/20 hover:border-white/40 hover:bg-white/5"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>📂</span>
                  GitHub →
                </motion.a>
              </div>
            </div>
            
            {/* Progress indicator for scrolling */}
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
              initial={{ width: '0%' }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </div>
      
      {/* View all projects link */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a 
          href="https://github.com/Ernestkyei" 
          target="_blank" 
          rel="noreferrer"
          className="text-white/40 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
        >
          View all projects on GitHub
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </motion.div>
    </motion.section>
  )
}

export default Projects