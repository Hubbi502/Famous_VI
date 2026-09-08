import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

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

      {/* Animated coral/reef decorations at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none">
        <svg viewBox="0 0 1440 200" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,200 L0,140 Q60,100 120,130 Q180,160 240,120 Q300,80 360,110 Q420,140 480,100 Q540,60 600,90 Q660,120 720,80 Q780,40 840,70 Q900,100 960,60 Q1020,20 1080,50 Q1140,80 1200,50 Q1260,20 1320,60 Q1380,100 1440,80 L1440,200Z"
            fill="rgba(42,196,216,0.08)" />
          <path d="M0,200 L0,160 Q80,120 160,150 Q240,180 320,140 Q400,100 480,130 Q560,160 640,120 Q720,80 800,110 Q880,140 960,100 Q1040,60 1120,90 Q1200,120 1280,90 Q1360,60 1440,100 L1440,200Z"
            fill="rgba(30,111,191,0.15)" />
          {/* Coral shapes */}
          <ellipse cx="100" cy="195" rx="30" ry="18" fill="rgba(232,76,30,0.35)" />
          <ellipse cx="300" cy="198" rx="20" ry="12" fill="rgba(232,76,30,0.25)" />
          <ellipse cx="700" cy="196" rx="25" ry="15" fill="rgba(232,76,30,0.3)" />
          <ellipse cx="1100" cy="197" rx="22" ry="13" fill="rgba(232,76,30,0.25)" />
          <ellipse cx="1350" cy="199" rx="28" ry="16" fill="rgba(232,76,30,0.3)" />
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
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase"
                style={{ backgroundColor: 'rgba(232,76,30,0.2)', color: '#FF8A65', border: '1px solid rgba(232,76,30,0.4)' }}>
                ✦ Open Registration: 02 Sep – 10 Okt 2026
              </div>
            </div>

            {/* Logo text */}
            <div>
              <h1 className="font-black leading-none tracking-tight" style={{ fontSize: 'clamp(52px, 10vw, 88px)', color: 'white' }}>
                FAM<span style={{ color: 'var(--color-orange)' }}>O</span>US
              </h1>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="text-4xl font-black" style={{ color: 'var(--color-cyan)' }}>VI</span>
                <span className="text-base font-semibold" style={{ color: 'rgba(255,255,255,0.5)' }}>· 2026</span>
              </div>
            </div>

            {/* School badge */}
            <div className="flex items-center gap-3 p-3 rounded-xl w-fit"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: 'var(--color-orange)', color: 'white' }}>A</div>
              <div>
                <div className="text-xs font-bold text-white">SMAIT Al-Fityan Bogor</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Tingkat SMP/MTs Se-Pulau Jawa</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-base leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Festival lomba antar sekolah tingkat SMP/MTs Se-Pulau Jawa yang diselenggarakan oleh
              <span style={{ color: '#FF8A65', fontWeight: 600 }}> SMAIT Al-Fityan Bogor</span>.
              Dapatkan hadiah senilai puluhan juta rupiah dan buktikan kemampuan terbaikmu!
            </p>

            {/* Stats */}
            <div className="flex gap-6 flex-wrap">
              {[
                { value: '8', label: 'Cabang Lomba' },
                { value: 'Puluhan JT', label: 'Total Hadiah' },
                { value: 'Se-Jawa', label: 'Tingkat' },
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
                href="#competitions"
                onClick={(e) => { e.preventDefault(); scrollTo('#competitions'); }}
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
                Pelajari Lebih
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
              <div className="relative float-anim" style={{ width: 280, height: 340 }}>
                <MascotIllustration />
              </div>

              {/* Floating badges */}
              <div
                className="absolute top-4 -left-4 px-3 py-2 rounded-xl text-center"
                style={{ background: 'rgba(7,18,32,0.85)', border: '1px solid rgba(232,76,30,0.4)', backdropFilter: 'blur(8px)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
              >
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Hadiah Total</div>
                <div className="text-base font-black" style={{ color: 'var(--color-orange-light)' }}>Puluhan JT</div>
              </div>

              <div
                className="absolute bottom-12 -right-4 px-3 py-2 rounded-xl text-center"
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

function MascotIllustration() {
  return (
    <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg" width="280" height="340" aria-label="FAMOUS VI Mascot - Fox karakter">
      {/* Body */}
      <ellipse cx="140" cy="210" rx="55" ry="70" fill="#E8905A" />
      {/* Belly */}
      <ellipse cx="140" cy="220" rx="32" ry="45" fill="#FDDBC8" />

      {/* Jacket / Uniform */}
      <path d="M95,190 Q100,175 140,170 Q180,175 185,190 L192,260 Q160,270 140,268 Q120,270 88,260Z" fill="#9DB8D8" />
      <path d="M118,170 L140,200 L162,170 L155,168 L140,185 L125,168Z" fill="white" />
      {/* Belt */}
      <rect x="95" y="238" width="90" height="10" rx="5" fill="#2A3A50" />
      <rect x="132" y="235" width="16" height="16" rx="4" fill="#4A5A70" />

      {/* Sash diagonal */}
      <path d="M110,175 L160,260" stroke="#2A3A50" strokeWidth="7" strokeLinecap="round" opacity="0.7" />

      {/* Left arm */}
      <ellipse cx="88" cy="215" rx="18" ry="40" fill="#E8905A" transform="rotate(-15 88 215)" />
      {/* Right arm - raised */}
      <ellipse cx="192" cy="185" rx="18" ry="42" fill="#9DB8D8" transform="rotate(30 192 185)" />
      <ellipse cx="200" cy="155" rx="15" ry="16" fill="#E8905A" />

      {/* Head */}
      <ellipse cx="140" cy="115" rx="58" ry="55" fill="#E8905A" />
      {/* Face / muzzle */}
      <ellipse cx="140" cy="130" rx="34" ry="26" fill="#FDDBC8" />

      {/* Ears */}
      <path d="M98,78 L82,42 L118,65Z" fill="#E8905A" />
      <path d="M99,77 L87,52 L113,67Z" fill="#FF9999" opacity="0.7" />
      <path d="M182,78 L198,42 L162,65Z" fill="#E8905A" />
      <path d="M181,77 L193,52 L167,67Z" fill="#FF9999" opacity="0.7" />

      {/* Eyes */}
      <circle cx="124" cy="118" r="7" fill="#2A1A0A" />
      <circle cx="156" cy="118" r="7" fill="#2A1A0A" />
      <circle cx="126" cy="116" r="2.5" fill="white" />
      <circle cx="158" cy="116" r="2.5" fill="white" />

      {/* Nose */}
      <ellipse cx="140" cy="130" rx="5" ry="4" fill="#CC6666" />

      {/* Mouth */}
      <path d="M132,136 Q140,143 148,136" stroke="#CC6666" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Hat */}
      <ellipse cx="148" cy="70" rx="42" ry="10" fill="#3A3A55" />
      <rect x="120" y="26" width="56" height="46" rx="8" fill="#4A4A70" />
      <rect x="122" y="28" width="52" height="6" rx="3" fill="#5A5A88" />
      {/* Hat feather */}
      <path d="M168,26 Q185,10 198,20 Q188,28 178,30Z" fill="white" opacity="0.85" />
      <path d="M170,24 Q188,5 200,18" stroke="#9DB8D8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Hat badge */}
      <circle cx="148" cy="48" rx="7" ry="7" fill="#2A3A8A" stroke="#6080C8" strokeWidth="1" />
      <text x="148" y="52" textAnchor="middle" fontSize="8" fontWeight="900" fill="white" fontFamily="Inter,sans-serif">F</text>

      {/* Epaulette */}
      <ellipse cx="102" cy="180" rx="12" ry="6" fill="#C8A040" transform="rotate(-15 102 180)" />

      {/* Legs */}
      <rect x="112" y="264" width="24" height="40" rx="10" fill="#9DB8D8" />
      <rect x="144" y="264" width="24" height="40" rx="10" fill="#9DB8D8" />
      {/* Boots */}
      <rect x="110" y="292" width="28" height="18" rx="8" fill="#2A3A50" />
      <rect x="142" y="292" width="28" height="18" rx="8" fill="#2A3A50" />

      {/* Tail */}
      <path d="M190,240 Q220,220 225,250 Q230,280 200,275 Q185,268 185,255Z" fill="#E8905A" />
      <path d="M200,265 Q215,258 218,270 Q212,278 203,274Z" fill="white" opacity="0.6" />

      {/* Chest badge F */}
      <circle cx="130" cy="192" r="8" fill="#1E6FBF" stroke="white" strokeWidth="1.5" />
      <text x="130" y="196" textAnchor="middle" fontSize="9" fontWeight="900" fill="white" fontFamily="Inter,sans-serif">F</text>

      {/* Shine on hat */}
      <ellipse cx="135" cy="37" rx="10" ry="4" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}
