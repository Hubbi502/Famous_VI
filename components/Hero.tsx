import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import mascotImg from '../assets/img/IMG_7254.PNG';

const bubbles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 24 + 8,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: Math.random() * 8 + 6,
}));

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: '64px' }}
    >
      {/* Ocean gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #071220 0%, #0a2a50 20%, #0d4a8a 50%, #1565c0 75%, #1e88c8 90%, #2ac4d8 100%)',
        }}
      />

      {/* Sun rays penetrating from ocean surface */}
      <div className="sun-ray" style={{ left: '12%', animationDelay: '0s' }} />
      <div className="sun-ray" style={{ left: '42%', animationDelay: '3s', width: '200px' }} />
      <div className="sun-ray" style={{ left: '78%', animationDelay: '1.5s', width: '130px' }} />

      {/* Animated coral/reef decorations at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none">
        <svg viewBox="0 0 1440 200" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,200 L0,140 Q60,100 120,130 Q180,160 240,120 Q300,80 360,110 Q420,140 480,100 Q540,60 600,90 Q660,120 720,80 Q780,40 840,70 Q900,100 960,60 Q1020,20 1080,50 Q1140,80 1200,50 Q1260,20 1320,60 Q1380,100 1440,80 L1440,200Z"
            fill="rgba(42,196,216,0.12)" />
          <path d="M0,200 L0,160 Q80,120 160,150 Q240,180 320,140 Q400,100 480,130 Q560,160 640,120 Q720,80 800,110 Q880,140 960,100 Q1040,60 1120,90 Q1200,120 1280,90 Q1360,60 1440,100 L1440,200Z"
            fill="rgba(168,85,247,0.14)" />
          {/* Coral shapes */}
          <ellipse cx="100" cy="195" rx="36" ry="20" fill="rgba(251,113,133,0.45)" />
          <ellipse cx="300" cy="198" rx="24" ry="14" fill="rgba(42,196,216,0.35)" />
          <ellipse cx="700" cy="196" rx="30" ry="18" fill="rgba(232,76,30,0.4)" />
          <ellipse cx="1100" cy="197" rx="26" ry="15" fill="rgba(168,85,247,0.4)" />
          <ellipse cx="1350" cy="199" rx="32" ry="18" fill="rgba(251,113,133,0.4)" />
        </svg>
      </div>

      {/* Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="bubble"
            style={{
              width: b.size,
              height: b.size,
              left: `${b.left}%`,
              bottom: '-40px',
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Fish silhouettes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '25%', left: '8%', size: 28, opacity: 0.18, flip: false },
          { top: '40%', left: '85%', size: 20, opacity: 0.14, flip: true },
          { top: '60%', left: '15%', size: 16, opacity: 0.12, flip: false },
          { top: '35%', right: '20%', size: 24, opacity: 0.15, flip: true },
        ].map((f, i) => (
          <svg
            key={i}
            width={f.size * 1.5}
            height={f.size}
            viewBox="0 0 36 24"
            fill="rgba(255,255,255,0.9)"
            style={{ position: 'absolute', top: f.top, left: (f as any).left, right: (f as any).right, opacity: f.opacity, transform: f.flip ? 'scaleX(-1)' : '' }}
          >
            <ellipse cx="20" cy="12" rx="14" ry="8" />
            <path d="M6 12 L0 4 L0 20Z" />
            <ellipse cx="26" cy="10" rx="2" ry="1.5" fill="rgba(7,18,32,0.5)" />
          </svg>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 lg:py-20">
          {/* Left Content */}
          <div
            className="flex flex-col gap-6"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            {/* Theme Tagline Eyebrow */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase"
                style={{
                  background: 'linear-gradient(90deg, rgba(42,196,216,0.22) 0%, rgba(168,85,247,0.22) 100%)',
                  color: '#A5F3FC',
                  border: '1px solid rgba(42,196,216,0.4)',
                  backdropFilter: 'blur(8px)',
                }}>
                <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: '#2AC4D8' }} />
                SMAIT Al-Fityan Boarding School Bogor
              </div>

              <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: 'rgba(232,76,30,0.2)', color: '#FF8A65', border: '1px solid rgba(232,76,30,0.35)' }}>
                ✦ Open: 02 Sep – 10 Okt 2026
              </div>
            </div>

            {/* Logo text & Title */}
            <div>
              <h1 className="font-black leading-none tracking-tight flex items-baseline flex-wrap gap-3" style={{ fontSize: 'clamp(52px, 10vw, 88px)', color: 'white' }}>
                <span>FAM<span style={{ color: 'var(--color-orange)' }}>O</span>US</span>
                <span className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, var(--color-cyan) 0%, var(--color-lilac-light) 100%)' }}>
                  6.0
                </span>
              </h1>
              <p className="text-sm sm:text-base font-semibold mt-3 italic tracking-wide" style={{ color: 'var(--color-sand)', textShadow: '0 2px 12px rgba(0,0,0,0.4)', maxWidth: '480px' }}>
                "Rooted in Legacy, Driven by Excellence"
              </p>
            </div>

            {/* School badge */}
            <div className="flex items-center gap-3 p-3 rounded-xl w-fit"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-md"
                style={{ backgroundColor: 'var(--color-orange)', color: 'white' }}>A</div>
              <div>
                <div className="text-xs font-bold text-white">SMAIT Al-Fityan Boarding School Bogor</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>Kompetisi Pelajar SMP/MTs Se-Pulau Jawa</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-base leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.78)' }}>
              FAMOUS 6.0 adalah ajang kompetisi antarpelajar bergengsi yang hadir sebagai wadah
              mengembangkan potensi, menunjukkan kemampuan, membangun kepercayaan diri, serta
              berkompetisi secara sportif. Diselenggarakan oleh
              <span style={{ color: '#FF8A65', fontWeight: 600 }}> SMAIT Al-Fityan Boarding School Bogor</span>.
            </p>

            {/* Stats */}
            <div className="flex gap-6 flex-wrap">
              {[
                { value: '8', label: 'Cabang Lomba' },
                { value: 'Se-Jawa', label: 'Tingkat' },
                { value: '6.0', label: 'Penyelenggaraan' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-xl font-black" style={{ color: 'var(--color-orange-light)' }}>{stat.value}</span>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf9L5-OeVrr1cqmMCkVdMo5ItTQ1X7t9p6-0Xj8z1uaO_dNuQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, var(--color-orange) 0%, var(--color-orange-dark) 100%)', color: 'white', boxShadow: '0 6px 20px rgba(232,76,30,0.4)' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(232,76,30,0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 20px rgba(232,76,30,0.4)'; }}
              >
                Daftar Sekarang <ArrowRight size={16} />
              </a>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollTo('#about'); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{ border: '1.5px solid rgba(255,255,255,0.25)', color: 'white', backgroundColor: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }}
              >
                Tentang FAMOUS
              </a>
            </div>
          </div>

          {/* Right - Mascot visual */}
          <div
            className="flex justify-center lg:justify-end"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            <div className="relative flex items-center justify-center">
              {/* Glow behind mascot */}
              <div className="absolute w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, rgba(42,196,216,0.25) 0%, transparent 70%)', filter: 'blur(32px)' }} />
              <div className="absolute w-56 h-56 rounded-full" style={{ background: 'radial-gradient(circle, rgba(232,76,30,0.2) 0%, transparent 70%)', filter: 'blur(24px)' }} />

              {/* Mascot container */}
              <div className="relative float-anim flex items-center justify-center" style={{ width: 320, height: 420 }}>
                <img
                  src={mascotImg}
                  alt="FAMOUS VI Mascot"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
                />
              </div>

              {/* Floating badges */}
              <div
                className="absolute top-4 -left-4 px-3 py-2 rounded-xl text-center z-10"
                style={{ background: 'rgba(7,18,32,0.85)', border: '1px solid rgba(232,76,30,0.4)', backdropFilter: 'blur(8px)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
              >
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Hadiah Total</div>
                <div className="text-base font-black" style={{ color: 'var(--color-orange-light)' }}>Puluhan JT</div>
              </div>

              <div
                className="absolute bottom-8 -right-4 px-3 py-2 rounded-xl text-center z-10"
                style={{ background: 'rgba(7,18,32,0.85)', border: '1px solid rgba(42,196,216,0.35)', backdropFilter: 'blur(8px)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
              >
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>8 Cabang</div>
                <div className="text-base font-black" style={{ color: 'var(--color-cyan)' }}>Lomba</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
          <path d="M0,40 Q180,80 360,40 Q540,0 720,40 Q900,80 1080,40 Q1260,0 1440,40 L1440,80 L0,80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
