const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="about">
    <div className="absolute inset-0" style={{
      background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(74,144,217,0.12) 0%, transparent 70%)',
    }} />
    <div className="absolute inset-0 opacity-5"
      style={{ backgroundImage: 'linear-gradient(rgba(74,144,217,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,217,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

    <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
      <p className="animate-fade-up delay-100 text-xs tracking-[4px] uppercase text-accent mb-6"> Full Stack Software Engineer</p>

      <h1 className="animate-fade-up delay-200 font-display text-6xl md:text-8xl font-medium text-white mb-6 leading-tight">
        Ernest<br />
        <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Kyei</span>
      </h1>

      <p className="animate-fade-up delay-300 text-base text-white/50 max-w-xl mx-auto leading-relaxed mb-10 font-light">
        Full Stack Software Engineer building scalable web applications — from real-time backends to clean, responsive frontends.
      </p>

      <div className="animate-fade-up delay-400 flex items-center justify-center gap-6 flex-wrap">
        <a href="https://github.com/Ernestkyei" target="_blank" rel="noreferrer"
          className="flex items-center gap-2 px-7 py-3 bg-accent text-white text-sm tracking-wide hover:bg-accent-dark transition-all duration-300 rounded-sm">
          View GitHub
        </a>
        <a href="#projects"
          className="flex items-center gap-2 px-7 py-3 border border-white/20 text-white/70 text-sm tracking-wide hover:border-white/50 hover:text-white transition-all duration-300 rounded-sm">
          See Projects
        </a>
      </div>

      <div className="animate-fade-up delay-500 flex items-center justify-center gap-12 mt-20 pt-10 border-t border-white/5">
        {[['2', 'Projects Built'], ['Full', 'Stack'], ['Live', 'Deployment']].map(([n, l]) => (
          <div key={l} className="text-center">
            <div className="font-display text-3xl text-white mb-1">{n}</div>
            <div className="text-xs text-white/40 tracking-widest uppercase">{l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
export default Hero
