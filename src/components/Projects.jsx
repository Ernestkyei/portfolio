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
    github: 'https://github.com/Ernestkyei/server',
    live: 'https://client-0eyf.onrender.com',
    image: databundleImg,
    imageAlt: 'DataBundle marketplace showing mobile data bundles for MTN, Vodafone, AirtelTigo, and Glo'
  },
  {
    type: 'Personal Project · Live',
    title: 'MentorPath – Self-Paced Mentoring Platform',
    desc: 'Complete self-paced mentoring platform where users learn through structured modules with dedicated mentor avatars. Features user authentication, video player with pictorial tutor, module completion tracking, streak counter, and milestone achievements.',
    github: 'https://github.com/Ernestkyei/mentorship-frontend',
    live: 'https://mentorship-frontend-e05o.onrender.com',
    image: mentorpathImg,
    imageAlt: 'MentorPath platform showing course player with mentor avatar'
  },
  {
    type: 'Personal Project · Live',
    title: 'Tracking System – Package Delivery Tracker',
    desc: 'Package delivery tracking system where customers scan QR codes on their packages to confirm delivery. Real-time updates sync to the system instantly. Includes driver portal for delivery management and admin dashboard for monitoring all deliveries and ensuring secure transactions.',
    github: 'https://github.com/Ernestkyei?tab=repositories',
    live: 'https://swifttrack-jlib.onrender.com',
    image: trackImg,
    imageAlt: 'Package delivery tracking system with QR code scanning'
  },
  {
    type: 'Personal Project',
    title: 'Full-Stack Messaging Platform',
    desc: 'Real-time messaging application with user-facing frontend and full admin dashboard. Features user management, message logs, JWT authentication, and automated password reset via email.',
    github: 'https://github.com/Ernestkyei/message-app',
    live: 'https://message-app-rpgx.onrender.com/',
    image: messageImg,
    imageAlt: 'Messaging platform dashboard showing real-time chat interface'
  },
  {
    type: 'Team Project · Live',
    title: 'JobBridge — Job Search Platform',
    desc: 'Job matching platform with job seeker and employer dashboards, advanced search, application tracking, admin moderation panel, and role-based access control. Deployed on Microsoft Azure.',
    github: 'https://github.com/Ernestkyei/jobbridge',
    live: 'https://jobbridge-team06-d5agcya8cka3agd8.northcentralus-01.azurewebsites.net',
    image: jobbridgeImg,
    imageAlt: 'JobBridge job search platform interface showing job listings'
  },
]

const Projects = () => {
  const [setHoveredIndex] = useState(null)

  const handleImageError = (e) => {
    e.target.src = 'https://placehold.co/600x400/1a1a2e/4a90e2?text=Preview+Coming+Soon'
  }

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="projects">
      <div className="mb-10">
        <span className="text-blue-400 text-sm tracking-widest uppercase font-medium">Projects</span>
        <h2 className="text-3xl text-white mt-2 font-semibold">
          What I've built
          <span className="block text-sm text-white/40 font-light mt-1">
            {projects.length} projects and counting
          </span>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, index) => (
          <motion.div 
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-44 bg-gray-800 overflow-hidden">
              <img 
                src={p.image} 
                alt={p.imageAlt || p.title}
                onError={handleImageError}
                className="object-cover w-full h-full"
              />
              {p.live && (
                <span className="absolute top-2 right-2 bg-green-500/90 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                  Live
                </span>
              )}
            </div>
            
            {/* Content */}
            <div className="p-4">
              <span className="text-xs text-blue-400 tracking-wider uppercase font-medium">
                {p.type}
              </span>
              <h3 className="text-white font-semibold mt-1.5 mb-2 text-lg">
                {p.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-3 line-clamp-3">
                {p.desc}
              </p>
              
              {/* Buttons */}
              <div className="flex gap-2">
                {p.live && (
                  <a 
                    href={p.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sm px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sm px-3 py-1.5 border border-white/20 text-white/60 hover:text-white hover:border-white/40 rounded transition-all"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* View all link */}
      <div className="text-center mt-10">
        <a 
          href="https://github.com/Ernestkyei" 
          target="_blank" 
          rel="noreferrer"
          className="text-white/40 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
        >
          View all projects on GitHub →
        </a>
      </div>
    </section>
  )
}

export default Projects