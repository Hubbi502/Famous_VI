import { ArrowRight } from 'lucide-react';
import torchEmblem from '../assets/img/IMG_7270.PNG';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #e0fafa 0%, #b2f0e8 20%, #42c8c0 50%, #1a9db5 75%, #0e7a9a 100%)' }}>

      {/* Shallow water ambient light */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.5) 0%, transparent 60%)', pointerEvents: 'none' }} />

      {/* Small tropical fish */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {[
          { top: '20%', left: '5%', size: 24, color: '#FF8A65', flip: false },
          { top: '55%', left: '88%', size: 18, color: '#FFD54F', flip: true },
          { top: '35%', left: '78%', size: 20, color: '#4FC3F7', flip: true },
          { top: '70%', left: '12%', size: 15, color: '#F48FB1', flip: false },
        ].map((f, i) => (
          <svg key={i} width={f.size * 1.8} height={f.size} viewBox="0 0 36 20" style={{ position: 'absolute', top: f.top, left: f.left, opacity: 0.55, transform: f.flip ? 'scaleX(-1)' : '' }}>
            <ellipse cx="20" cy="10" rx="13" ry="7" fill={f.color} />
            <path d="M7 10 L0 3 L0 17Z" fill={f.color} opacity="0.8" />
            <ellipse cx="25" cy="8" rx="2" ry="1.5" fill="rgba(0,0,0,0.4)" />
          </svg>
        ))}
      </div>

      {/* Coral reef bottom separator → to mid ocean */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, pointerEvents: 'none', zIndex: 1 }}>
        <svg viewBox="0 0 1440 80" style={{ width: '100%', display: 'block' }} preserveAspectRatio="none">
          <path d="M0,80 L0,40 Q200,10 400,30 Q600,50 800,20 Q1000,-5 1200,18 Q1320,30 1440,15 L1440,80Z" fill="#0e7a9a" />
          <ellipse cx="80" cy="78" rx="28" ry="14" fill="rgba(251,113,133,0.4)" />
          <ellipse cx="280" cy="79" rx="18" ry="9" fill="rgba(42,196,216,0.35)" />
          <ellipse cx="600" cy="78" rx="22" ry="11" fill="rgba(232,76,30,0.35)" />
          <ellipse cx="960" cy="79" rx="20" ry="10" fill="rgba(168,85,247,0.35)" />
          <ellipse cx="1280" cy="78" rx="24" ry="12" fill="rgba(251,113,133,0.35)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Logo visual */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div
                className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl flex items-center justify-center relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #071220 0%, #0d4a8a 50%, #1565c0 100%)',
                  boxShadow: '0 24px 64px rgba(11,23,48,0.28)',
                }}
              >
                {/* Bubble decorations */}
                {[
                  { size: 80, top: '10%', left: '10%', opacity: 0.07 },
                  { size: 50, top: '60%', left: '65%', opacity: 0.08 },
                  { size: 36, top: '15%', left: '70%', opacity: 0.06 },
                  { size: 24, top: '75%', left: '15%', opacity: 0.07 },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full"
                    style={{ width: b.size, height: b.size, top: b.top, left: b.left, border: '2px solid rgba(255,255,255,0.4)', opacity: b.opacity * 10 }}
                  />
                ))}

                {/* Center content */}
                <div className="relative flex flex-col items-center gap-4 z-10">
                  <FamousEmblem />
                  <div className="text-center">
                    <div className="text-3xl font-black text-white tracking-tight">
                    FAM<span style={{ color: 'var(--color-orange)' }}>O</span>US
                  </div>
                  <div className="text-xl font-black" style={{ color: 'var(--color-cyan)' }}>6.0</div>
                  <div className="text-xs mt-1 font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>SMAIT Al-Fityan Bogor</div>
                  </div>
                </div>

                {/* Corner stars */}
                <div className="absolute top-5 right-5 text-xl" style={{ color: 'var(--color-orange)', opacity: 0.5 }}>✦</div>
                <div className="absolute bottom-5 left-5 text-sm" style={{ color: 'var(--color-cyan)', opacity: 0.4 }}>✧</div>
              </div>

              {/* Floating stats */}
              <div
                className="absolute -top-5 -right-5 px-3 py-2 rounded-xl text-center"
                style={{ backgroundColor: 'var(--color-white)', border: '2px solid var(--color-border)', boxShadow: '0 6px 20px rgba(0,0,0,0.1)' }}
              >
                  <div className="text-xs font-medium" style={{ color: 'var(--color-muted)' }}>Cabang Lomba</div>
                  <div className="text-2xl font-black" style={{ color: 'var(--color-orange)' }}>8</div>
              </div>
              <div
                className="absolute -bottom-5 -left-5 px-3 py-2 rounded-xl text-center"
                style={{ backgroundColor: 'var(--color-white)', border: '2px solid var(--color-border)', boxShadow: '0 6px 20px rgba(0,0,0,0.1)' }}
              >
                <div className="text-xs font-medium" style={{ color: 'var(--color-muted)' }}>Penyelenggaraan</div>
                <div className="text-2xl font-black" style={{ color: 'var(--color-blue)' }}>6.0</div>
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <span
              className="inline-flex w-fit items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black tracking-widest uppercase cloud-badge-cyan poster-shadow-cyan"
              style={{ color: '#0284c7' }}
            >
              ✦ Tentang FAMOUS 6.0
            </span>

            <h2 className="poster-font text-4xl sm:text-5xl font-black leading-tight" style={{ color: '#0369a1' }}>
              Apa itu{' '}
              <span className="text-stroke-white text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #E84C1E 0%, #C43A10 100%)' }}>
                FAMOUS 6.0?
              </span>
            </h2>

            <p className="text-base leading-relaxed font-medium" style={{ color: '#0f172a' }}>
              <strong style={{ color: '#0369a1' }}>FAMOUS 6.0</strong> merupakan ajang kompetisi antarpelajar yang diselenggarakan oleh
              <strong> SMAIT Al-Fityan Boarding School Bogor</strong>. FAMOUS hadir sebagai wadah bagi pelajar untuk
              mengembangkan potensi, menunjukkan kemampuan, membangun kepercayaan diri, serta berkompetisi secara sportif.
            </p>
            <p className="text-base leading-relaxed font-medium" style={{ color: '#0f172a' }}>
              Memasuki penyelenggaraan ke-6, FAMOUS 6.0 mengangkat tema
              <em style={{ color: '#0284c7', fontStyle: 'italic', fontWeight: 700 }}> "Rooted in Legacy, Driven by Excellence"</em>,
              yang menggambarkan semangat untuk tetap berpegang pada nilai dan pencapaian yang telah dibangun sebelumnya,
              sekaligus terus berkembang dan memberikan yang terbaik.
            </p>

            <div className="flex flex-col gap-3 mt-1">
              {[
                'Kompetisi multi-cabang Se-Pulau Jawa tingkat SMP/MTs sederajat',
                '8 cabang lomba: MHQ, Khitobah, Speech, Storytelling, LKBB, Futsal, Archery & Poster Digital',
                'Diselenggarakan di SMAIT Al-Fityan Boarding School Bogor',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-black mt-0.5"
                    style={{ backgroundColor: '#E84C1E', color: 'white' }}
                  >
                    ✓
                  </span>
                  <span className="text-sm font-semibold" style={{ color: '#0f172a' }}>{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf9L5-OeVrr1cqmMCkVdMo5ItTQ1X7t9p6-0Xj8z1uaO_dNuQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, var(--color-orange) 0%, var(--color-orange-dark) 100%)', color: 'white', boxShadow: '0 4px 16px rgba(232,76,30,0.3)' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
              >
                Daftar Sekarang <ArrowRight size={16} />
              </a>
              <a
                href="#timeline"
                onClick={(e) => { e.preventDefault(); document.querySelector('#timeline')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{ border: '1.5px solid var(--color-border)', color: 'var(--color-navy)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-orange)'; e.currentTarget.style.color = 'var(--color-orange)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-navy)'; }}
              >
                Lihat Timeline
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FamousEmblem() {
  return (
    <div className="w-24 h-28 flex items-center justify-center">
      <img
        src={torchEmblem}
        alt="FAMOUS VI Official Torch Emblem"
        className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
