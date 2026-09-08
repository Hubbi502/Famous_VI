import { Instagram, Sparkles, Handshake } from 'lucide-react';
import { Bubble, Jellyfish } from './MarineBiota';

const sponsors = [
  {
    id: 1,
    name: 'Bank Syariah Indonesia (BSI)',
    shortName: 'BSI',
    src: '/assets/img/sponsor/IMG_6558.JPG.jpeg',
    category: 'Official Sponsor',
  },
  {
    id: 2,
    name: 'Penerbit Intan Pariwara',
    shortName: 'Intan Pariwara',
    src: '/assets/img/sponsor/IMG_6559.JPG.jpeg',
    category: 'Official Partner',
  },
  {
    id: 3,
    name: 'Grafindo Media Pratama',
    shortName: 'Grafindo',
    src: '/assets/img/sponsor/IMG_6560.JPG.jpeg',
    category: 'Official Partner',
  },
];

export default function Sponsor() {
  return (
    <section
      id="sponsor"
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #04000f 0%, #060117 50%, #04000f 100%)',
      }}
    >
      {/* ── Ambient Deep Ocean Lighting & Bubbles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Soft Radial Glows */}
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, rgba(168,85,247,0.05) 50%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        <div
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(232,76,30,0.08) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Floating Jellyfish */}
        <div className="anim-jelly hidden md:block" style={{ position: 'absolute', top: '20%', right: '5%', opacity: 0.6, animationDuration: '8s' }}>
          <Jellyfish size={40} color="rgba(168,85,247,0.7)" glowColor="#38bdf8" />
        </div>

        {/* Ambient Bubbles */}
        {[
          { left: '12%', delay: '0.2s', size: 8 },
          { left: '35%', delay: '1.5s', size: 10 },
          { left: '65%', delay: '0.8s', size: 7 },
          { left: '88%', delay: '2.0s', size: 9 },
        ].map((b, i) => (
          <div
            key={i}
            className="anim-bubble-rise"
            style={{
              position: 'absolute',
              bottom: '10px',
              left: b.left,
              animationDelay: b.delay,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          >
            <Bubble size={b.size} />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span
              className="poster-font inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase cloud-badge-cyan poster-shadow-cyan"
              style={{ color: '#0284c7' }}
            >
              <Sparkles size={13} /> Sponsor & Media Partner
            </span>
          </div>

          <h2 className="poster-font text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Didukung Oleh{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #FF8A50 0%, #FFD166 100%)' }}
            >
              Mitra Terbaik
            </span>
          </h2>

          <p className="poster-font mt-3 text-sm sm:text-base max-w-lg mx-auto font-medium text-white/80">
            Terima kasih atas kolaborasi dan dukungan para sponsor serta media partner yang turut menyukseskan FAMOUS 6.0
          </p>
        </div>

        {/* Sponsor Cards Grid */}
        <div className="flex flex-wrap items-stretch justify-center gap-5 sm:gap-7 max-w-4xl mx-auto">
          {sponsors.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col items-center p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl transition-all duration-300 w-48 sm:w-60"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(232, 76, 30, 0.3), 0 0 0 1.5px rgba(232, 76, 30, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.12)';
              }}
            >
              {/* Category pill */}
              <div className="mb-2">
                <span
                  className="poster-font text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider"
                  style={{
                    backgroundColor: 'rgba(56, 189, 248, 0.15)',
                    color: '#38bdf8',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                  }}
                >
                  {item.category}
                </span>
              </div>

              {/* Logo stage */}
              <div
                className="w-full h-24 sm:h-28 rounded-xl bg-white flex items-center justify-center p-2.5 shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Name caption */}
              <div className="mt-2.5 text-center px-1">
                <p className="poster-font text-xs sm:text-sm font-bold text-white leading-tight">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA Callout */}
        <div className="mt-12 text-center">
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-6 py-3.5 rounded-2xl max-w-xl mx-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(232,76,30,0.15) 0%, rgba(147,51,234,0.12) 100%)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium">
              <Handshake size={18} className="text-orange-400 flex-shrink-0" />
              <span>Ingin berkolaborasi sebagai Sponsor atau Media Partner?</span>
            </div>
            <a
              href="https://www.instagram.com/famous.absb/"
              target="_blank"
              rel="noopener noreferrer"
              className="poster-font inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold text-white transition-all duration-200 flex-shrink-0 shadow-md"
              style={{
                backgroundColor: 'var(--color-orange)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-orange-dark)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-orange)')}
            >
              <Instagram size={13} />
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
