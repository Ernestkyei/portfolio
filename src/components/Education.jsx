const Education = () => (
  <section className="py-24 px-8 max-w-5xl mx-auto" id="education">
    <div className="section-line">Education</div>
    <h2 className="font-display text-4xl text-white mb-12">Academic background</h2>
    <div className="flex flex-col gap-6">

      {/* Brigham Young University */}
      <div className="flex gap-6 items-start p-7 rounded-sm"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderLeft: '2px solid #4A90D9' }}>
        <div className="w-12 h-12 flex items-center justify-center rounded-sm flex-shrink-0"
          style={{ background: 'rgba(74,144,217,0.1)', border: '1px solid rgba(74,144,217,0.2)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A90D9" strokeWidth="1.5">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
          </svg>
        </div>
        <div>
          <div className="text-white font-medium text-lg mb-1">Brigham Young University - Idaho</div>
          <div className="text-white/50 text-sm mb-2">BSc Software Development</div>
          <div className="text-accent text-xs tracking-widest uppercase">2023 — 2026</div>
        </div>
      </div>

      {/* University of Energy and Natural Resource */}
      <div className="flex gap-6 items-start p-7 rounded-sm"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderLeft: '2px solid #4A90D9' }}>
        <div className="w-12 h-12 flex items-center justify-center rounded-sm flex-shrink-0"
          style={{ background: 'rgba(74,144,217,0.1)', border: '1px solid rgba(74,144,217,0.2)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A90D9" strokeWidth="1.5">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
          </svg>
        </div>
        <div>
          <div className="text-white font-medium text-lg mb-1">University of Energy and Natural Resources</div>
          <div className="text-white/50 text-sm mb-2">BSc Computer Science</div>
          <div className="text-accent text-xs tracking-widest uppercase">2020 — 2024</div>
        </div>
      </div>

      {/* IMPC College of Technology */}
      <div className="flex gap-6 items-start p-7 rounded-sm"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderLeft: '2px solid #4A90D9' }}>
        <div className="w-12 h-12 flex items-center justify-center rounded-sm flex-shrink-0"
          style={{ background: 'rgba(74,144,217,0.1)', border: '1px solid rgba(74,144,217,0.2)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A90D9" strokeWidth="1.5">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
          </svg>
        </div>
        <div>
          <div className="text-white font-medium text-lg mb-1">IMPC College of Technology</div>
          <div className="text-white/50 text-sm mb-2">Diploma in Database Technology</div>
          <div className="text-accent text-xs tracking-widest uppercase">2015 — 2017</div>
        </div>
      </div>

    </div>
  </section>
)
export default Education