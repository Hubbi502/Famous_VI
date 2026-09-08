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
      {/* ── BEACH / SURFACE background ── */}
      {/* Sky gradient - bright daylight */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #87CEEB 0%, #B0E8FF 25%, #E0F8FF 45%, #A8E8D8 60%, #5DC8B8 75%, #2AA8A0 85%, #1A8A90 100%)' }} />

      {/* Sun */}
      <div style={{ position: 'absolute', top: '8%', right: '15%', width: '90px', height: '90px', borderRadius: '50%', background: 'radial-gradient(circle, #FFF9C4 0%, #FFE082 40%, #FFB300 70%, transparent 100%)', boxShadow: '0 0 60px 20px rgba(255,200,50,0.35), 0 0 120px 50px rgba(255,200,50,0.15)', zIndex: 1 }} />

      {/* Sun rays */}
      {[0,45,90,135,180,225,270,315].map((deg, i) => (
        <div key={i} style={{ position: 'absolute', top: 'calc(8% + 45px)', right: 'calc(15% + 45px)', width: '2px', height: '55px', background: 'linear-gradient(to bottom, rgba(255,220,50,0.6), transparent)', transformOrigin: '50% 0%', transform: `rotate(${deg}deg) translateY(-70px)`, zIndex: 1 }} />
      ))}

      {/* Clouds */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', zIndex: 1 }}>
        <div style={{ width: '120px', height: '40px', borderRadius: '40px', background: 'rgba(255,255,255,0.85)', position: 'relative', boxShadow: '0 4px 20px rgba(255,255,255,0.4)' }}>
          <div style={{ position: 'absolute', top: '-20px', left: '20px', width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)' }} />
          <div style={{ position: 'absolute', top: '-12px', left: '55px', width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.85)' }} />
        </div>
      </div>
      <div style={{ position: 'absolute', top: '6%', left: '35%', zIndex: 1, opacity: 0.75 }}>
        <div style={{ width: '90px', height: '30px', borderRadius: '30px', background: 'rgba(255,255,255,0.8)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-15px', left: '15px', width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.85)' }} />
          <div style={{ position: 'absolute', top: '-10px', left: '42px', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.8)' }} />
        </div>
      </div>

      {/* ── Sandy beach shore & rooted palm trees ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 3 }}>
        <svg viewBox="0 0 1440 220" className="w-full h-auto" preserveAspectRatio="none" style={{ display: 'block', minHeight: '160px' }}>
          <defs>
            <linearGradient id="sandGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
            <linearGradient id="sandGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#facc15" />
            </linearGradient>
          </defs>

          {/* Background Sand Dunes */}
          <path d="M0,220 L0,80 Q250,30 500,70 Q750,110 1000,50 Q1250,-10 1440,40 L1440,220Z" fill="url(#sandGradient1)" opacity="0.9" />
          <path d="M0,220 L0,110 Q200,75 450,105 Q700,135 950,85 Q1200,35 1440,90 L1440,220Z" fill="url(#sandGradient2)" />

          {/* Left Palm Tree - rooted on sand dune */}
          <g transform="translate(10, 20)">
            <path d="M50,160 Q45,100 65,30" stroke="#78350f" strokeWidth="12" fill="none" strokeLinecap="round" />
            <path d="M50,160 Q45,100 65,30" stroke="#92400e" strokeWidth="8" fill="none" strokeLinecap="round" />
            {/* Coconuts */}
            <circle cx="62" cy="38" r="6" fill="#451a03" />
            <circle cx="68" cy="36" r="5.5" fill="#78350f" />
            {/* Fronds */}
            <ellipse cx="65" cy="28" rx="55" ry="18" fill="#15803d" transform="rotate(-30 65 28)" />
            <ellipse cx="65" cy="28" rx="50" ry="16" fill="#16a34a" transform="rotate(15 65 28)" />
            <ellipse cx="65" cy="28" rx="48" ry="15" fill="#22c55e" transform="rotate(-55 65 28)" />
            <ellipse cx="65" cy="28" rx="45" ry="14" fill="#4ade80" transform="rotate(45 65 28)" />
            <ellipse cx="65" cy="28" rx="40" ry="12" fill="#86efac" transform="rotate(-10 65 28)" />
          </g>

          {/* Right Palm Tree - rooted on sand dune */}
          <g transform="translate(1330, 10)">
            <path d="M40,170 Q50,105 30,35" stroke="#78350f" strokeWidth="11" fill="none" strokeLinecap="round" />
            <path d="M40,170 Q50,105 30,35" stroke="#92400e" strokeWidth="7" fill="none" strokeLinecap="round" />
            {/* Coconuts */}
            <circle cx="28" cy="42" r="6" fill="#451a03" />
            <circle cx="34" cy="40" r="5" fill="#78350f" />
            {/* Fronds */}
            <ellipse cx="30" cy="32" rx="50" ry="16" fill="#15803d" transform="rotate(25 30 32)" />
            <ellipse cx="30" cy="32" rx="46" ry="14" fill="#16a34a" transform="rotate(-20 30 32)" />
            <ellipse cx="30" cy="32" rx="42" ry="13" fill="#22c55e" transform="rotate(50 30 32)" />
            <ellipse cx="30" cy="32" rx="38" ry="12" fill="#4ade80" transform="rotate(-45 30 32)" />
          </g>

          {/* Shoreline water waves crashing on sand */}
          <path d="M0,150 Q200,130 400,145 Q600,160 800,135 Q1000,110 1200,130 Q1320,145 1440,130 L1440,220 L0,220Z" fill="#38bdf8" opacity="0.8" />
          <path d="M0,170 Q180,155 360,165 Q540,175 720,155 Q900,135 1080,150 Q1260,165 1440,150 L1440,220 L0,220Z" fill="#0284c7" opacity="0.6" />
          {/* Wave Foam */}
          <path d="M0,148 Q150,135 300,142 Q450,150 600,138 Q750,126 900,135 Q1050,144 1200,132 Q1350,120 1440,128" stroke="#ffffff" strokeWidth="4" fill="none" opacity="0.85" strokeLinecap="round" />

          {/* Pebbles & Shells on beach */}
          <ellipse cx="250" cy="180" rx="9" ry="5" fill="#fef08a" opacity="0.9" />
          <ellipse cx="550" cy="175" rx="7" ry="4" fill="#f472b6" opacity="0.9" />
          <ellipse cx="880" cy="182" rx="10" ry="5" fill="#ffffff" opacity="0.85" />
          <ellipse cx="1180" cy="178" rx="8" ry="4" fill="#38bdf8" opacity="0.9" />
        </svg>
      </div>

      {/* Shallow water shimmer */}
      <div style={{ position: 'absolute', bottom: '15%', left: 0, right: 0, height: '60px', background: 'linear-gradient(0deg, rgba(90,210,230,0.4) 0%, transparent 100%)', zIndex: 2 }} />

      {/* Seagulls */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        {[
          { top: '18%', left: '22%', size: 22 },
          { top: '14%', left: '30%', size: 16 },
          { top: '22%', left: '60%', size: 18 },
          { top: '12%', left: '68%', size: 14 },
        ].map((s, i) => (
          <svg key={i} width={s.size * 2} height={s.size} viewBox="0 0 40 20" style={{ position: 'absolute', top: s.top, left: s.left, opacity: 0.55 }}>
            <path d="M20,10 Q10,2 0,8" stroke="#1a5276" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M20,10 Q30,2 40,8" stroke="#1a5276" strokeWidth="2" fill="none" strokeLinecap="round" />
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
                  background: 'rgba(255,255,255,0.65)',
                  color: '#0d4a8a',
                  border: '1px solid rgba(13,74,138,0.3)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                }}>
                <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: '#0d8a90' }} />
                SMAIT Al-Fityan Boarding School Bogor
              </div>

              <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: 'rgba(232,76,30,0.18)', color: '#c0392b', border: '1px solid rgba(232,76,30,0.35)', backdropFilter: 'blur(6px)', background: 'rgba(255,255,255,0.6)' }}>
                ✦ Open: 02 Sep – 10 Okt 2026
              </div>
            </div>

            {/* Logo text & Title */}
            <div>
              <h1 className="poster-font font-black leading-tight tracking-tight flex items-baseline flex-wrap gap-3" style={{ fontSize: 'clamp(52px, 9vw, 84px)', color: '#0284c7', textShadow: '0 4px 18px rgba(2,132,199,0.3)' }}>
                <span className="text-stroke-white" style={{ background: 'linear-gradient(180deg, #38bdf8 0%, #0284c7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  FAM<span style={{ color: '#E84C1E', WebkitTextFillColor: '#E84C1E' }}>O</span>US
                </span>
                <span className="text-4xl sm:text-6xl font-black text-stroke-white text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)' }}>
                  6.0
                </span>
              </h1>
              <p className="poster-font text-lg sm:text-xl font-bold mt-2 tracking-wide" style={{ color: '#0369a1', maxWidth: '520px' }}>
                ✨ "Rooted in Legacy, Driven by Excellence"
              </p>
            </div>

            {/* School badge */}
            <div className="cloud-badge-cyan flex items-center gap-3 p-3.5 w-fit poster-shadow-cyan">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black shadow-md"
                style={{ backgroundColor: '#E84C1E', color: 'white' }}>A</div>
              <div>
                <div className="poster-font text-xs font-bold" style={{ color: '#0369a1' }}>SMAIT Al-Fityan Boarding School Bogor</div>
                <div className="text-xs font-medium" style={{ color: '#0284c7' }}>Kompetisi Pelajar SMP/MTs Se-Pulau Jawa</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-base leading-relaxed max-w-lg font-medium" style={{ color: '#0f172a' }}>
              FAMOUS 6.0 adalah ajang kompetisi antarpelajar bergengsi yang hadir sebagai wadah
              mengembangkan potensi, menunjukkan kemampuan, membangun kepercayaan diri, serta
              berkompetisi secara sportif.
            </p>

            {/* Stats */}
            <div className="flex gap-6 flex-wrap">
              {[
                { value: '8 Cabang', label: 'Lomba' },
                { value: 'Se-Jawa', label: 'Tingkat' },
                { value: 'Ke-6', label: 'Penyelenggaraan' },
              ].map((stat) => (
                <div key={stat.label} className="cloud-badge-purple px-4 py-2 text-center poster-shadow-purple">
                  <span className="poster-font text-lg font-black block" style={{ color: '#6b21a8' }}>{stat.value}</span>
                  <span className="text-xs font-bold" style={{ color: '#7e22ce' }}>{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="#competitions"
                onClick={(e) => { e.preventDefault(); scrollTo('#competitions'); }}
                className="poster-font inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-black text-base transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #E84C1E 0%, #C43A10 100%)', color: 'white', boxShadow: '0 8px 24px rgba(232,76,30,0.45)', border: '2px solid #ffffff' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(232,76,30,0.6)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(232,76,30,0.45)'; }}
              >
                Jelajahi Lomba <ArrowRight size={18} />
              </a>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollTo('#about'); }}
                className="poster-font inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-base transition-all duration-200 cloud-badge-pink poster-shadow-pink"
                style={{ color: '#9d174d' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
              >
                Tentang FAMOUS
              </a>
            </div>
          </div>

          {/* Right - Mascot visual & Clam Shell */}
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
              <div className="absolute w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.3) 0%, transparent 70%)', filter: 'blur(36px)' }} />
              <div className="absolute w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.25) 0%, transparent 70%)', filter: 'blur(30px)' }} />

              {/* Mascot container */}
              <div className="relative float-anim flex items-center justify-center" style={{ width: 340, height: 440 }}>
                <img
                  src={mascotImg}
                  alt="FAMOUS VI Mascot"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                />
              </div>

              {/* Poster 1 Clam Shell with Glowing Pearl on Beach Sand */}
              <div className="absolute bottom-2 -left-6 z-20 pointer-events-none float-anim" style={{ animationDelay: '1.5s' }}>
                <svg width="90" height="75" viewBox="0 0 100 85">
                  {/* Clam outer shell */}
                  <path d="M10,65 Q50,90 90,65 Q95,40 50,30 Q5,40 10,65Z" fill="url(#clamGradient)" stroke="#be185d" strokeWidth="2.5" />
                  {/* Inner pink shell ridges */}
                  <path d="M20,60 Q50,78 80,60" fill="none" stroke="#f472b6" strokeWidth="2" />
                  <path d="M30,55 Q50,70 70,55" fill="none" stroke="#f472b6" strokeWidth="2" />
                  {/* Pearl */}
                  <circle cx="50" cy="52" r="14" fill="url(#pearlGradient)" filter="drop-shadow(0 0 12px #fff)" />
                  <circle cx="45" cy="47" r="4" fill="#ffffff" opacity="0.9" />
                  <defs>
                    <linearGradient id="clamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fce7f3" />
                      <stop offset="50%" stopColor="#f472b6" />
                      <stop offset="100%" stopColor="#9d174d" />
                    </linearGradient>
                    <radialGradient id="pearlGradient" cx="35%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="60%" stopColor="#fef08a" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              {/* Floating Cloud Badges (Poster 1 style) */}
              <div
                className="cloud-badge-pink absolute top-4 -left-4 px-4 py-2.5 text-center z-10 poster-shadow-pink"
              >
                <div className="text-xs font-bold" style={{ color: '#be185d' }}>Hadiah Total</div>
                <div className="poster-font text-lg font-black" style={{ color: '#9d174d' }}>Puluhan Juta</div>
              </div>

              <div
                className="cloud-badge-cyan absolute bottom-10 -right-4 px-4 py-2.5 text-center z-10 poster-shadow-cyan"
              >
                <div className="text-xs font-bold" style={{ color: '#0369a1' }}>02 Sep - 10 Okt</div>
                <div className="poster-font text-base font-black" style={{ color: '#0284c7' }}>Pendaftaran</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave — transition to shallow water (About) */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 4 }}>
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
          <path d="M0,40 Q180,80 360,40 Q540,0 720,40 Q900,80 1080,40 Q1260,0 1440,40 L1440,80 L0,80Z" fill="#e0fafa" />
        </svg>
      </div>
    </section>
  );
}
