const Footer = () => (
  <footer className="py-12 px-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-display text-white/30 text-sm">Ernest Kyei · Software Engineer</span>
      <div className="flex items-center gap-6">
        <a href="https://github.com/Ernestkyei" target="_blank" rel="noreferrer"
          className="text-xs tracking-widest uppercase text-white/30 hover:text-accent transition-colors">GitHub</a>
        <a href="mailto:your@email.com"
          className="text-xs tracking-widest uppercase text-white/30 hover:text-accent transition-colors">Email</a>
      </div>
    </div>
  </footer>
)
export default Footer
