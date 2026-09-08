import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28" style={{ backgroundColor: 'var(--color-white)' }}>
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
                    <div className="text-xl font-black" style={{ color: 'var(--color-cyan)' }}>VI</div>
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
                <div className="text-xs font-medium" style={{ color: 'var(--color-muted)' }}>Tahun</div>
                <div className="text-2xl font-black" style={{ color: 'var(--color-blue)' }}>2026</div>
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <span
              className="inline-flex w-fit items-center gap-1.5 text-xs font-bold tracking-widest uppercase"
              style={{ color: 'var(--color-orange)' }}
            >
              <span className="w-5 h-0.5 rounded" style={{ backgroundColor: 'var(--color-orange)' }} />
              Tentang FAMOUS VI
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: 'var(--color-navy)' }}>
              Apa itu{' '}
              <span style={{ color: 'var(--color-orange)' }}>FAMOUS VI?</span>
            </h2>

            <p className="text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              <strong style={{ color: 'var(--color-navy)' }}>FAMOUS VI</strong> (Festival Al-Fityan Multi Open Sport) adalah ajang kompetisi bergengsi
              antar sekolah tingkat <strong>SMP/MTs sederajat Se-Pulau Jawa</strong> yang diselenggarakan oleh
              SMAIT Al-Fityan Boarding School Bogor.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              Hadir untuk keenam kalinya, FAMOUS VI menghadirkan 8 cabang lomba mulai dari olahraga
              hingga akademik dan seni. Kompetisi ini bertujuan menjadi wadah pengembangan bakat,
              kreativitas, dan sportivitas generasi muda berprestasi.
            </p>

            <div className="flex flex-col gap-3 mt-1">
              {[
                'Kompetisi multi-cabang Se-Pulau Jawa tingkat SMP/MTs',
                'Hadiah puluhan juta rupiah untuk para juara',
                'Diselenggarakan di SMAIT Al-Fityan Bogor',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{ backgroundColor: 'rgba(232,76,30,0.12)', color: 'var(--color-orange)' }}
                  >
                    ✓
                  </span>
                  <span className="text-sm" style={{ color: 'var(--color-text)' }}>{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="#competitions"
                onClick={(e) => { e.preventDefault(); document.querySelector('#competitions')?.scrollIntoView({ behavior: 'smooth' }); }}
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
    <svg width="80" height="90" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="FAMOUS emblem">
      {/* Key shaft */}
      <rect x="35" y="45" width="10" height="38" rx="5" fill="#1E6FBF" />
      <rect x="30" y="70" width="8" height="10" rx="2" fill="#3B8FDF" />
      <rect x="42" y="62" width="8" height="10" rx="2" fill="#3B8FDF" />

      {/* Key head - flame/eye shape */}
      <path d="M40 8 C25 12 15 22 18 35 C21 46 32 50 40 50 C48 50 59 46 62 35 C65 22 55 12 40 8Z"
        fill="white" opacity="0.9" />
      <path d="M40 8 C25 12 15 22 18 35 C21 46 32 50 40 50 C48 50 59 46 62 35 C65 22 55 12 40 8Z"
        fill="url(#emblemGrad)" opacity="0.8" />

      {/* Flame top */}
      <path d="M18 20 C5 5 25 -2 40 8 C25 6 10 15 18 20Z" fill="var(--color-orange)" />
      <path d="M62 20 C75 5 55 -2 40 8 C55 6 70 15 62 20Z" fill="var(--color-orange)" />
      <path d="M10 18 C2 4 30 -6 42 6 C28 2 8 12 10 18Z" fill="#FF6B3D" opacity="0.7" />
      <path d="M70 18 C78 4 50 -6 38 6 C52 2 72 12 70 18Z" fill="#FF6B3D" opacity="0.7" />

      {/* Eye iris */}
      <ellipse cx="40" cy="32" rx="12" ry="14" fill="#0d4a8a" />
      <ellipse cx="40" cy="32" rx="7" ry="9" fill="#1E6FBF" />
      <ellipse cx="40" cy="32" rx="4" ry="5" fill="#071220" />
      <ellipse cx="38" cy="30" rx="1.5" ry="2" fill="white" opacity="0.8" />

      {/* Green leaf accent */}
      <path d="M28 28 C22 20 28 14 35 22 C30 24 28 28 28 28Z" fill="#4CAF50" opacity="0.75" />

      <defs>
        <linearGradient id="emblemGrad" x1="18" y1="8" x2="62" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(42,196,216,0.3)" />
          <stop offset="100%" stopColor="rgba(30,111,191,0.3)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
