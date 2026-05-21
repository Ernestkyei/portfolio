const About = () => (
  <section className="py-28 px-8 max-w-5xl mx-auto" id="about">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div>
        <div className="section-line">About me</div>
        <h2 className="font-display text-4xl text-white mb-6 leading-snug">
          Engineer who ships<br />working products
        </h2>
        <p className="text-white/50 leading-relaxed mb-4 font-light">
          I'm a full stack software engineer with hands-on experience building production-ready web applications from the ground up. I work across the entire stack — designing scalable REST APIs, implementing real-time features, and crafting clean user interfaces.
        </p>
        <p className="text-white/50 leading-relaxed font-light">
          Comfortable with both JavaScript ecosystems and modern frameworks, I take pride in writing maintainable, well-structured code that solves real problems.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: 'Frontend', value: 'React / Next.js' },
          { label: 'Backend', value: 'Node.js / Express' },
          { label: 'Database', value: 'PostgreSQL / MongoDB' },
          { label: 'Tools', value: 'Git / Docker / Render' },
        ].map(({ label, value }) => (
          <div key={label} className="p-5 rounded-sm card-hover"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-xs text-accent tracking-widest uppercase mb-2">{label}</div>
            <div className="text-white font-medium">{value}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default About