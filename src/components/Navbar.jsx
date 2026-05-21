const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
    style={{ background: 'linear-gradient(to bottom, rgba(4,13,26,0.95), transparent)', backdropFilter: 'blur(8px)' }}>
    <span className="font-display text-white text-lg tracking-widest">EK</span>
    <div className="hidden md:flex items-center gap-8">
      {['About','Skills','Projects','Education'].map(s => (
        <a key={s} href={`#${s.toLowerCase()}`} className="nav-link">{s}</a>
      ))}
    </div>
    <a href="mailto:kyeiernest86@email.com"
      className="text-xs tracking-widest uppercase px-5 py-2.5 border border-accent/40 text-accent hover:bg-accent hover:text-white transition-all duration-300 rounded-sm">
      Contact
    </a>
  </nav>
)
export default Navbar
