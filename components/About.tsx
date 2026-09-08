import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <span
              className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold tracking-widest uppercase"
              style={{ color: 'var(--color-cyan)' }}
            >
              <span
                className="w-5 h-0.5 rounded"
                style={{ backgroundColor: 'var(--color-cyan)' }}
              />
              Tentang
            </span>

            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight"
              style={{ color: 'var(--color-navy)' }}
            >
              Apa itu{' '}
              <span style={{ color: 'var(--color-cyan)' }}>SITEFEST?</span>
            </h2>

            <p className="text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              Merupakan Festival yang megah untuk bidang Ilmu untuk memotivasi, meningkatkan dan
              mengembangkan kemampuan para generasi muda di masa depan dengan berbasis teknologi.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              SITEFEST diharapkan menjadi momentum harapan untuk mengembangkan diri dan soft skill
              di bidang teknologi untuk mengasah kreativitas para kompetitor generasi yang mampu
              memanfaatkan teknologi di masa depan.
            </p>

            {/* Feature points */}
            <div className="flex flex-col gap-3 mt-2">
              {[
                'Kompetisi tingkat nasional dari SMA/SMK & Perguruan Tinggi',
                'Diselenggarakan oleh Primakara University, Bali',
                'Ajang kreativitas & inovasi berbasis teknologi',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{ backgroundColor: 'rgba(32,199,215,0.15)', color: 'var(--color-cyan)' }}
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{ backgroundColor: 'var(--color-navy)', color: 'white' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0d2050'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-navy)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Daftar Sekarang <ArrowRight size={16} />
              </a>
              <a
                href="#timeline"
                onClick={(e) => { e.preventDefault(); document.querySelector('#timeline')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{ border: '1.5px solid var(--color-border)', color: 'var(--color-navy)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-cyan)'; e.currentTarget.style.color = 'var(--color-cyan)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-navy)'; }}
              >
                Lihat Timeline
              </a>
            </div>
          </div>

          {/* Right - Logo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main logo container */}
              <div
                className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl flex items-center justify-center relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-blue) 100%)',
                  boxShadow: '0 24px 64px rgba(11, 23, 48, 0.25)',
                }}
              >
                {/* Decorative rings */}
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{ border: '1px solid rgba(32,199,215,0.2)' }}
                />
                <div
                  className="absolute w-56 h-56 rounded-full"
                  style={{ border: '1px dashed rgba(32,199,215,0.15)' }}
                />
                <div
                  className="absolute w-40 h-40 rounded-full"
                  style={{ border: '1px dashed rgba(32,199,215,0.1)' }}
                />

                {/* Center Logo */}
                <div className="relative flex flex-col items-center gap-3">
                  <SitefestIconLogo />
                  <div className="text-center">
                    <div className="text-2xl font-black text-white tracking-tight">SITEFEST</div>
                    <div className="text-lg font-bold" style={{ color: 'var(--color-cyan)' }}>5.0</div>
                    <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Primakara University</div>
                  </div>
                </div>

                {/* Corner decorations */}
                <div
                  className="absolute top-4 right-4 text-lg"
                  style={{ color: 'var(--color-cyan)', opacity: 0.5 }}
                >✦</div>
                <div
                  className="absolute bottom-4 left-4 text-sm"
                  style={{ color: 'var(--color-cyan)', opacity: 0.3 }}
                >✧</div>
              </div>

              {/* Floating stats */}
              <div
                className="absolute -top-4 -right-4 px-3 py-2 rounded-xl text-center"
                style={{ backgroundColor: 'var(--color-white)', border: '1.5px solid var(--color-border)', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
              >
                <div className="text-xs font-medium" style={{ color: 'var(--color-muted)' }}>Kompetisi</div>
                <div className="text-xl font-bold" style={{ color: 'var(--color-navy)' }}>4+</div>
              </div>
              <div
                className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl text-center"
                style={{ backgroundColor: 'var(--color-white)', border: '1.5px solid var(--color-border)', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
              >
                <div className="text-xs font-medium" style={{ color: 'var(--color-muted)' }}>Nasional</div>
                <div className="text-xl font-bold" style={{ color: 'var(--color-cyan)' }}>2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SitefestIconLogo() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SITEFEST Logo">
      <rect width="72" height="72" rx="20" fill="#20C7D7" />
      <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Inter, sans-serif" fontSize="42" fontWeight="900" fill="#0B1730">S</text>
    </svg>
  );
}
