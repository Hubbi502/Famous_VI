import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone } from 'lucide-react';
import {
  Jellyfish,
  AnglerFish,
  Seahorse,
  ClownFish,
  Bubble,
} from './MarineBiota';

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter / X', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

const footerLinks = {
  navigasi: [
    { label: 'Beranda', href: '#home' },
    { label: 'Tentang FAMOUS VI', href: '#about' },
    { label: 'Cabang Lomba', href: '#competitions' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'FAQ', href: '#faq' },
  ],
  lomba: [
    { label: 'Futsal', href: '#competitions' },
    { label: 'LKBB', href: '#competitions' },
    { label: 'Archery Putri', href: '#competitions' },
    { label: 'Speech', href: '#competitions' },
    { label: 'Story Telling', href: '#competitions' },
    { label: 'MHQ', href: '#competitions' },
    { label: 'Poster Digital', href: '#competitions' },
    { label: 'Khitobah', href: '#competitions' },
  ],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'linear-gradient(180deg, #04000f 0%, #060216 35%, #08031d 70%, #040112 100%)', position: 'relative', overflow: 'hidden' }}>

      {/* ── Deep Ocean Subtle Bioluminescent Light & Water Ambience ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        
        {/* Soft atmospheric light beams (Deep sea caustics / god rays) */}
        <div
          className="absolute top-0 left-1/4 w-[320px] h-[600px] opacity-20 transform -rotate-12 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(56,189,248,0.35) 0%, rgba(14,116,144,0.18) 50%, transparent 100%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute top-0 right-1/4 w-[280px] h-[550px] opacity-15 transform rotate-12 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(168,85,247,0.3) 0%, rgba(99,102,241,0.12) 50%, transparent 100%)',
            filter: 'blur(35px)',
          }}
        />

        {/* Ambient Bioluminescent Deep Glows illuminating the water layers */}
        <div
          className="absolute bottom-28 left-1/6 w-[450px] h-[250px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, rgba(147,51,234,0.08) 50%, transparent 75%)', filter: 'blur(55px)' }}
        />
        <div
          className="absolute bottom-24 right-1/6 w-[420px] h-[230px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(126,34,206,0.06) 50%, transparent 75%)', filter: 'blur(50px)' }}
        />
        <div
          className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[600px] h-[180px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.16) 0%, transparent 70%)', filter: 'blur(45px)' }}
        />

        {/* Bioluminescent Jellyfish cruising in mid water */}
        <div className="anim-jelly" style={{ position: 'absolute', top: '5%', left: '4%', animationDuration: '7s', opacity: 0.85 }}>
          <Jellyfish size={46} color="rgba(139,92,246,0.85)" glowColor="#38bdf8" />
        </div>
        <div className="anim-jelly" style={{ position: 'absolute', top: '15%', left: '13%', animationDuration: '9s', animationDelay: '3s', opacity: 0.7 }}>
          <Jellyfish size={34} color="rgba(56,189,248,0.8)" glowColor="#c084fc" />
        </div>

        {/* Deep Abyssal Angler Fish with glowing lure */}
        <div className="anim-jelly" style={{ position: 'absolute', top: '16%', right: '5%', animationDuration: '11s', animationDelay: '1s', opacity: 0.85 }}>
          <AnglerFish size={54} />
        </div>

        {/* Seahorse bobbing near reef ridge */}
        <div className="anim-jelly" style={{ position: 'absolute', top: '44%', left: '3%', animationDuration: '5.5s', opacity: 0.85 }}>
          <Seahorse size={42} />
        </div>

        {/* Little fish swimming across the water column */}
        <div className="anim-swim-right" style={{ position: 'absolute', top: '54%', left: 0, animationDuration: '28s', opacity: 0.75 }}>
          <ClownFish size={28} />
        </div>

        {/* Rising bioluminescent bubbles */}
        {[
          { left: '10%', delay: '0s',   size: 11 },
          { left: '25%', delay: '1.4s', size: 8  },
          { left: '46%', delay: '0.6s', size: 13 },
          { left: '68%', delay: '2.1s', size: 9  },
          { left: '84%', delay: '0.9s', size: 11 },
          { left: '95%', delay: '1.7s', size: 7  },
        ].map((b, i) => (
          <div key={i} className="anim-bubble-rise" style={{ position: 'absolute', bottom: '260px', left: b.left, animationDelay: b.delay, animationDuration: `${3.5 + i * 0.5}s` }}>
            <Bubble size={b.size} />
          </div>
        ))}
      </div>

      {/* Top transition wave */}
      <div className="w-full overflow-hidden" style={{ marginTop: '-1px', position: 'relative', zIndex: 1 }}>
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
          <path d="M0,0 Q360,60 720,20 Q1080,-20 1440,40 L1440,0Z" fill="#04000f" />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
              className="inline-flex items-center gap-2"
              aria-label="FAMOUS VI"
            >
              <FooterKeyIcon />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black text-white tracking-tight">
                  FAM<span style={{ color: 'var(--color-orange)' }}>O</span>US
                </span>
                <span className="text-xs font-bold tracking-wider" style={{ color: 'var(--color-cyan)' }}>VI · 2026</span>
              </div>
            </a>
            <p className="text-xs leading-relaxed text-white/75 font-medium">
              Festival Al-Fityan Multi Open Sport — kompetisi bergengsi Se-Pulau Jawa.
            </p>
            <div className="flex gap-2 mt-1">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(232,76,30,0.25)'; e.currentTarget.style.color = 'var(--color-orange-light)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigasi */}
          <FooterColumn title="Navigasi" links={footerLinks.navigasi} scrollTo={scrollTo} />

          {/* Lomba */}
          <FooterColumn title="Cabang Lomba" links={footerLinks.lomba} scrollTo={scrollTo} />

          {/* Kontak + CTA */}
          <div className="flex flex-col gap-3">
            <h3 className="poster-font text-sm font-black text-white">Kontak Panitia</h3>
            <div className="flex flex-col gap-2">
              {[
                { name: 'Diza', phone: '081343059590' },
                { name: 'Hendra', phone: '081400842090' },
                { name: 'Ustadz Ahad', phone: '08212134290' },
              ].map((cp) => (
                <a
                  key={cp.name}
                  href={`tel:${cp.phone}`}
                  className="flex items-center gap-2 text-xs text-white/80 font-medium transition-colors duration-150"
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-orange-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                >
                  <Phone size={11} className="text-orange-400 flex-shrink-0" />
                  <span>{cp.phone} <span className="text-white/50">({cp.name})</span></span>
                </a>
              ))}
              <div className="flex items-start gap-2 text-xs text-white/70 font-medium mt-1">
                <MapPin size={11} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>SMAIT Al-Fityan Boarding School, Bogor</span>
              </div>
            </div>
            {/* CTA */}
            <div className="mt-1 p-3 rounded-xl" style={{ backgroundColor: 'rgba(232,76,30,0.16)', border: '1px solid rgba(232,76,30,0.35)' }}>
              <div className="poster-font text-xs font-black text-white mb-0.5">02 Sep – 10 Okt 2026</div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf9L5-OeVrr1cqmMCkVdMo5ItTQ1X7t9p6-0Xj8z1uaO_dNuQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="poster-font inline-block mt-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-200"
                style={{ backgroundColor: 'var(--color-orange)', color: 'white' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-orange-dark)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-orange)')}
              >
                Daftar Sekarang →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── REALISTIC MULTI-TIERED OCEAN FLOOR & REEF TOPOGRAPHY ── */}
      {/* Real Ocean Depth: Mesopelagic (top) -> Bathyal Seamount & Shelf (middle) -> Abyssal Benthic Floor (bottom) */}
      <div className="relative w-full overflow-hidden pointer-events-none" style={{ marginTop: '10px' }}>
        <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none" style={{ display: 'block', minHeight: '220px' }}>
          <defs>
            {/* Gradients for Multi-layered Ocean Terraces */}
            <linearGradient id="deepRidge1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a0f3d" />
              <stop offset="60%" stopColor="#100826" />
              <stop offset="100%" stopColor="#070214" />
            </linearGradient>
            <linearGradient id="deepRidge2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e1147" />
              <stop offset="50%" stopColor="#12092c" />
              <stop offset="100%" stopColor="#050110" />
            </linearGradient>
            <linearGradient id="foreRidge3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#251458" />
              <stop offset="45%" stopColor="#150a33" />
              <stop offset="100%" stopColor="#03000a" />
            </linearGradient>
            <linearGradient id="benthicFloor" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#160c38" />
              <stop offset="100%" stopColor="#020008" />
            </linearGradient>

            {/* Glowing illuminated crest edges */}
            <linearGradient id="crestGlowBack" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="30%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#ec4899" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="crestGlowMid" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.45" />
            </linearGradient>
            <linearGradient id="crestGlowFore" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#c084fc" stopOpacity="0.45" />
              <stop offset="80%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
            </linearGradient>

            {/* Coral gradients */}
            <linearGradient id="clamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fce7f3" />
              <stop offset="45%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#be185d" />
            </linearGradient>
            <radialGradient id="pearlShimmer" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="55%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#f59e0b" />
            </radialGradient>
            <linearGradient id="stagPinkGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
            <linearGradient id="stagCyanGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <radialGradient id="brainCoralGrad" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fbcfe8" />
              <stop offset="45%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#4c1d95" />
            </radialGradient>
            <radialGradient id="brainCoralBlueGrad" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#c7d2fe" />
              <stop offset="45%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </radialGradient>
            <linearGradient id="tubeSpongeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0369a1" />
              <stop offset="40%" stopColor="#38bdf8" />
              <stop offset="80%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#082f49" />
            </linearGradient>
            <linearGradient id="tubeSpongePurple" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6b21a8" />
              <stop offset="40%" stopColor="#c084fc" />
              <stop offset="80%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#3b0764" />
            </linearGradient>
          </defs>

          {/* ══════════════════════════════════════════════════════════════
              LAYER 1: DISTANT HIGH SEAMOUNT & CONTINENTAL SHELF (Y: 50–120)
              ══════════════════════════════════════════════════════════════ */}
          <path d="M0,320 L0,105 Q160,55 360,85 Q560,115 760,65 Q960,25 1160,70 Q1300,95 1440,65 L1440,320Z" fill="url(#deepRidge1)" />
          <path d="M0,105 Q160,55 360,85 Q560,115 760,65 Q960,25 1160,70 Q1300,95 1440,65" stroke="url(#crestGlowBack)" strokeWidth="2.5" fill="none" opacity="0.75" />

          {/* Background Corals perched high on seamount ridge (Layer 1) */}
          {/* Far Left High Kelp Bed */}
          <g transform="translate(45, 20)">
            <path d="M15,90 Q5,65 15,40 Q25,18 10,0" stroke="#14532d" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.6" />
            <path d="M25,90 Q35,68 22,42 Q12,20 22,0" stroke="#166534" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.5" />
          </g>
          {/* Distant Sea Fan on high peak (x=240, y=70) */}
          <g transform="translate(225, 10)">
            <path d="M35,65 L35,45" stroke="#7c2d12" strokeWidth="4" strokeLinecap="round" />
            <path d="M35,45 Q12,30 4,12 Q35,0 66,12 Q58,30 35,45 Z" fill="#f97316" opacity="0.3" />
            <path d="M35,45 Q20,28 10,12 M35,45 Q28,22 24,5 M35,45 Q35,20 35,3 M35,45 Q42,22 46,5 M35,45 Q50,28 60,12" stroke="#f97316" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.75" />
          </g>
          {/* Distant Glowing Coral Tree on center-left peak (x=520, y=85) */}
          <g transform="translate(510, 30)">
            <path d="M25,60 L25,32 M25,44 L40,24 M25,38 L10,22 M25,30 L32,12 M25,28 L16,10" stroke="#a855f7" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.7" />
            <circle cx="40" cy="24" r="3" fill="#38bdf8" filter="drop-shadow(0 0 4px #38bdf8)" />
            <circle cx="10" cy="22" r="3" fill="#38bdf8" filter="drop-shadow(0 0 4px #38bdf8)" />
            <circle cx="32" cy="12" r="3" fill="#38bdf8" filter="drop-shadow(0 0 4px #38bdf8)" />
            <circle cx="16" cy="10" r="3" fill="#38bdf8" filter="drop-shadow(0 0 4px #38bdf8)" />
          </g>
          {/* Distant Sea Fan on high right peak (x=980, y=40) */}
          <g transform="translate(970, -10)">
            <path d="M35,60 L35,42" stroke="#7c2d12" strokeWidth="4" strokeLinecap="round" />
            <path d="M35,42 Q10,28 3,10 Q35,-2 67,10 Q60,28 35,42 Z" fill="#ec4899" opacity="0.3" />
            <path d="M35,42 Q20,26 10,10 M35,42 Q28,20 24,3 M35,42 Q35,18 35,2 M35,42 Q42,20 46,3 M35,42 Q50,26 60,10" stroke="#ec4899" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.8" />
          </g>
          {/* Far Right Kelp Forest */}
          <g transform="translate(1360, -5)">
            <path d="M20,80 Q32,55 18,32 Q6,12 18,-8" stroke="#15803d" strokeWidth="5.5" fill="none" strokeLinecap="round" opacity="0.6" />
            <path d="M30,80 Q18,58 30,35 Q40,15 28,-5" stroke="#166534" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.5" />
          </g>


          {/* ══════════════════════════════════════════════════════════════
              LAYER 2: MIDGROUND ROCKY TERRACES & REEF SLOPES (Y: 90–190)
              ══════════════════════════════════════════════════════════════ */}
          <path d="M0,320 L0,145 Q150,90 350,135 Q550,175 740,120 Q930,70 1140,125 Q1290,150 1440,115 L1440,320Z" fill="url(#deepRidge2)" />
          <path d="M0,145 Q150,90 350,135 Q550,175 740,120 Q930,70 1140,125 Q1290,150 1440,115" stroke="url(#crestGlowMid)" strokeWidth="2.2" fill="none" opacity="0.8" />

          {/* Midground Corals & Formations rooted on rocky terrace slopes */}
          
          {/* Left Midground: Tall Purple/Cyan Tube Sponges on slope (x=130, y=105) */}
          <g transform="translate(110, 45)">
            <rect x="4" y="25" width="12" height="42" rx="6" fill="url(#tubeSpongePurple)" />
            <ellipse cx="10" cy="25" rx="6" ry="3.5" fill="#3b0764" stroke="#c084fc" strokeWidth="1.5" />
            <rect x="18" y="10" width="15" height="58" rx="7.5" fill="url(#tubeSpongePurple)" />
            <ellipse cx="25.5" cy="10" rx="7.5" ry="4" fill="#3b0764" stroke="#c084fc" strokeWidth="1.8" />
            <circle cx="25.5" cy="4" r="2.5" fill="#ffffff" filter="drop-shadow(0 0 4px #c084fc)" />
            <rect x="35" y="20" width="13" height="48" rx="6.5" fill="url(#tubeSpongePurple)" />
            <ellipse cx="41.5" cy="20" rx="6.5" ry="3.5" fill="#3b0764" stroke="#c084fc" strokeWidth="1.5" />
          </g>

          {/* Left-Center Midground: Staghorn Coral on rocky mound (x=380, y=140) */}
          <g transform="translate(350, 75)">
            <path d="M35,70 L35,38 M35,50 L52,30 M35,42 L18,25 M35,34 L44,14 M35,30 L24,10" stroke="url(#stagCyanGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M52,30 L60,18 M18,25 L10,15 M44,14 L50,4 M24,10 L18,2" stroke="url(#stagCyanGrad)" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            {[
              { cx: 60, cy: 18 }, { cx: 10, cy: 15 }, { cx: 50, cy: 4 }, { cx: 18, cy: 2 }, { cx: 35, cy: 22 },
            ].map((p, i) => (
              <circle key={i} cx={p.cx} cy={p.cy} r="3.5" fill="#38bdf8" filter="drop-shadow(0 0 4px #38bdf8)" />
            ))}
          </g>

          {/* Center Midground: Blue Brain Coral on rocky shelf (x=680, y=130) */}
          <g transform="translate(640, 85)">
            <path d="M8 42 Q4 18 24 8 Q36 2 48 8 Q68 18 64 42 Q36 52 8 42 Z" fill="url(#brainCoralBlueGrad)" stroke="#1e1b4b" strokeWidth="1.8" />
            <path d="M18 34 Q24 28 20 20 Q28 14 36 20 Q44 26 38 34" stroke="#c7d2fe" strokeWidth="2.4" strokeLinecap="round" fill="none" opacity="0.85" />
            <path d="M28 40 Q36 34 32 26 Q40 22 48 28 Q54 34 50 40" stroke="#c7d2fe" strokeWidth="2.4" strokeLinecap="round" fill="none" opacity="0.85" />
            <path d="M16 24 Q12 14 22 12 Q28 16 36 10 Q44 14 52 12" stroke="#c7d2fe" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.75" />
          </g>

          {/* Right-Center Midground: Sunken Weathered Anchor half-wedged in shelf rock (x=880, y=95) */}
          <g transform="translate(850, 40)">
            <circle cx="24" cy="9" r="6" stroke="#64748b" strokeWidth="3" fill="none" />
            <line x1="8" y1="18" x2="40" y2="18" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
            <circle cx="8" cy="18" r="2.5" fill="#94a3b8" />
            <circle cx="40" cy="18" r="2.5" fill="#94a3b8" />
            <line x1="24" y1="12" x2="24" y2="54" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
            <path d="M6 40 Q24 60 42 40" stroke="#334155" strokeWidth="5.5" strokeLinecap="round" fill="none" />
            <polygon points="6,40 3,32 11,37" fill="#475569" />
            <polygon points="42,40 45,32 37,37" fill="#475569" />
            {/* Clinging kelp */}
            <path d="M22 30 Q16 22 23 15" stroke="#22c55e" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <path d="M26 46 Q32 40 28 34" stroke="#16a34a" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          </g>

          {/* Right Midground: Staghorn & Sea Anemone on slope (x=1200, y=140) */}
          <g transform="translate(1170, 75)">
            <path d="M35,70 L35,38 M35,50 L52,30 M35,42 L18,25 M35,34 L44,14 M35,30 L24,10" stroke="url(#stagPinkGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M52,30 L60,18 M18,25 L10,15 M44,14 L50,4 M24,10 L18,2" stroke="url(#stagPinkGrad)" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            {[
              { cx: 60, cy: 18 }, { cx: 10, cy: 15 }, { cx: 50, cy: 4 }, { cx: 18, cy: 2 }, { cx: 35, cy: 22 },
            ].map((p, i) => (
              <circle key={i} cx={p.cx} cy={p.cy} r="3.5" fill="#fef08a" filter="drop-shadow(0 0 4px #fef08a)" />
            ))}
          </g>


          {/* ══════════════════════════════════════════════════════════════
              LAYER 3: FOREGROUND BENTHIC REEF & DEEP OCEAN BED (Y: 150–260)
              ══════════════════════════════════════════════════════════════ */}
          <path d="M0,320 L0,185 Q200,135 440,175 Q680,215 900,165 Q1120,120 1300,170 Q1380,185 1440,165 L1440,320Z" fill="url(#foreRidge3)" />
          <path d="M0,185 Q200,135 440,175 Q680,215 900,165 Q1120,120 1300,170 Q1380,185 1440,165" stroke="url(#crestGlowFore)" strokeWidth="2" fill="none" opacity="0.8" />

          {/* Sandy Abyssal Trench Valley Floor Base */}
          <path d="M0,320 L0,230 Q300,195 620,235 Q940,265 1240,225 L1440,245 L1440,320Z" fill="url(#benthicFloor)" />

          {/* Foreground Rich Coral Features nestled on the ocean floor */}

          {/* Far Left Foreground: Brain Coral & Starfish (x=60, y=190) */}
          <g transform="translate(45, 140)">
            <path d="M8 44 Q4 20 24 10 Q36 4 48 10 Q68 20 64 44 Q36 54 8 44 Z" fill="url(#brainCoralGrad)" stroke="#4c1d95" strokeWidth="2" />
            <path d="M18 36 Q24 30 20 22 Q28 16 36 22 Q44 28 38 36" stroke="#fbcfe8" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.85" />
            <path d="M28 42 Q36 36 32 28 Q40 24 48 30 Q54 36 50 42" stroke="#fbcfe8" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.85" />
            {/* Orange Starfish resting on sloped rock face */}
            <g transform="translate(60, 25) rotate(-20)">
              <path d="M12 2 Q14 8 16 9 Q22 9 23 11 Q18 15 17 16 Q20 22 17 24 Q12 20 10 20 Q6 24 5 22 Q7 16 4 13 Q8 11 9 9 Q10 8 12 2 Z" fill="#f97316" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
              <circle cx="12" cy="12" r="2" fill="#fff" opacity="0.8" />
            </g>
          </g>

          {/* Left-Center Foreground: Sea Anemone & Coral Bush (x=270, y=165) */}
          <g transform="translate(250, 125)">
            {/* Anemone */}
            <path d="M16 45 Q24 38 32 45 L30 38 Q24 35 18 38 Z" fill="#9f1239" />
            {[
              { d: 'M24,42 Q8,26 5,10', tip: [5, 10] },
              { d: 'M24,42 Q14,22 11,5', tip: [11, 5] },
              { d: 'M24,42 Q19,18 19,2', tip: [19, 2] },
              { d: 'M24,42 Q24,16 26,0', tip: [26, 0] },
              { d: 'M24,42 Q30,17 34,2', tip: [34, 2] },
              { d: 'M24,42 Q36,20 40,6', tip: [40, 6] },
              { d: 'M24,42 Q41,26 44,12', tip: [44, 12] },
            ].map((t, i) => (
              <g key={i}>
                <path d={t.d} stroke="#06b6d4" strokeWidth="3.8" strokeLinecap="round" fill="none" />
                <circle cx={t.tip[0]} cy={t.tip[1]} r="2.8" fill="#fef08a" filter="drop-shadow(0 0 3px rgba(255,255,255,0.9))" />
              </g>
            ))}
            {/* Coral Branch beside anemone */}
            <g transform="translate(42, 5)">
              <path d="M15 45 L15 25 M15 35 L26 20 M15 30 L6 18 M15 24 L22 10 M15 22 L8 8" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" fill="none" />
              <circle cx="26" cy="20" r="2.5" fill="#f43f5e" />
              <circle cx="6" cy="18" r="2.5" fill="#f43f5e" />
              <circle cx="22" cy="10" r="2.5" fill="#f43f5e" />
              <circle cx="8" cy="8" r="2.5" fill="#f43f5e" />
            </g>
          </g>

          {/* CENTERPIECE: RADIANT GIANT CLAM & PEARL IN SEABED TRENCH (x=720, y=210) */}
          <g transform="translate(670, 155)">
            {/* Pearl Glow Aura in seabed hollow */}
            <ellipse cx="50" cy="55" rx="40" ry="25" fill="#fef08a" opacity="0.25" filter="blur(15px)" />
            {/* Giant Clam Shell */}
            <path d="M10,55 Q50,82 90,55 Q95,28 50,18 Q5,28 10,55Z" fill="url(#clamGrad)" stroke="#9d174d" strokeWidth="2.5" />
            {/* Inner Ridges */}
            <path d="M22,50 Q50,70 78,50" fill="none" stroke="#fbcfe8" strokeWidth="2" />
            <path d="M32,44 Q50,60 68,44" fill="none" stroke="#fbcfe8" strokeWidth="2" />
            {/* Shimmering Pearl */}
            <circle cx="50" cy="42" r="14" fill="url(#pearlShimmer)" filter="drop-shadow(0 0 12px rgba(255,255,255,0.95))" />
            <circle cx="45" cy="37" r="4.2" fill="#ffffff" opacity="0.9" />
            {/* Little Crab resting near pearl */}
            <g transform="translate(95, 38)">
              <ellipse cx="14" cy="12" rx="8" ry="5.5" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.2" />
              <line x1="10" y1="7" x2="10" y2="3" stroke="#b91c1c" strokeWidth="1.5" />
              <circle cx="10" cy="3" r="1.5" fill="#fff" />
              <circle cx="10" cy="3" r="0.7" fill="#000" />
              <line x1="18" y1="7" x2="18" y2="3" stroke="#b91c1c" strokeWidth="1.5" />
              <circle cx="18" cy="3" r="1.5" fill="#fff" />
              <circle cx="18" cy="3" r="0.7" fill="#000" />
              <path d="M8 10 Q2 6 4 2 Q8 2 9 8" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.2" />
              <path d="M20 10 Q26 6 24 2 Q20 2 19 8" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.2" />
            </g>
          </g>

          {/* Right-Center Foreground: Cyan Tube Sponge Cluster (x=1020, y=170) */}
          <g transform="translate(980, 115)">
            <rect x="6" y="28" width="14" height="46" rx="7" fill="url(#tubeSpongeGrad)" />
            <ellipse cx="13" cy="28" rx="7" ry="4" fill="#082f49" stroke="#38bdf8" strokeWidth="1.8" />
            <rect x="22" y="10" width="17" height="64" rx="8.5" fill="url(#tubeSpongeGrad)" />
            <ellipse cx="30.5" cy="10" rx="8.5" ry="4.5" fill="#082f49" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="30.5" cy="4" r="2.5" fill="rgba(255,255,255,0.9)" filter="drop-shadow(0 0 5px #38bdf8)" />
            <rect x="41" y="22" width="13" height="52" rx="6.5" fill="url(#tubeSpongeGrad)" />
            <ellipse cx="47.5" cy="22" rx="6.5" ry="3.5" fill="#082f49" stroke="#38bdf8" strokeWidth="1.8" />
          </g>

          {/* Far Right Foreground: Sea Anemone & Golden Starfish (x=1320, y=185) */}
          <g transform="translate(1280, 135)">
            <path d="M16 45 Q24 38 32 45 L30 38 Q24 35 18 38 Z" fill="#581c87" />
            {[
              { d: 'M24,42 Q8,26 5,10', tip: [5, 10] },
              { d: 'M24,42 Q14,22 11,5', tip: [11, 5] },
              { d: 'M24,42 Q19,18 19,2', tip: [19, 2] },
              { d: 'M24,42 Q24,16 26,0', tip: [26, 0] },
              { d: 'M24,42 Q30,17 34,2', tip: [34, 2] },
              { d: 'M24,42 Q36,20 40,6', tip: [40, 6] },
              { d: 'M24,42 Q41,26 44,12', tip: [44, 12] },
            ].map((t, i) => (
              <g key={i}>
                <path d={t.d} stroke="#c084fc" strokeWidth="3.8" strokeLinecap="round" fill="none" />
                <circle cx={t.tip[0]} cy={t.tip[1]} r="2.8" fill="#38bdf8" filter="drop-shadow(0 0 3px #38bdf8)" />
              </g>
            ))}
            {/* Golden Starfish resting on the floor slope */}
            <g transform="translate(48, 20) rotate(15)">
              <path d="M12 2 Q14 8 16 9 Q22 9 23 11 Q18 15 17 16 Q20 22 17 24 Q12 20 10 20 Q6 24 5 22 Q7 16 4 13 Q8 11 9 9 Q10 8 12 2 Z" fill="#f59e0b" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
              <circle cx="12" cy="12" r="2" fill="#fff" opacity="0.8" />
            </g>
          </g>

          {/* Bioluminescent floating plankton spores along the ocean depth */}
          {[
            { cx: 80, cy: 90, r: 2.5, color: '#38bdf8' },
            { cx: 180, cy: 135, r: 3, color: '#c084fc' },
            { cx: 310, cy: 110, r: 2, color: '#f472b6' },
            { cx: 460, cy: 160, r: 3.5, color: '#38bdf8' },
            { cx: 590, cy: 95, r: 2, color: '#a855f7' },
            { cx: 730, cy: 130, r: 3, color: '#fef08a' },
            { cx: 820, cy: 75, r: 2.5, color: '#38bdf8' },
            { cx: 940, cy: 150, r: 3, color: '#34d399' },
            { cx: 1080, cy: 105, r: 3.5, color: '#38bdf8' },
            { cx: 1220, cy: 165, r: 2, color: '#c084fc' },
            { cx: 1360, cy: 120, r: 3, color: '#38bdf8' },
            { cx: 1410, cy: 175, r: 2, color: '#f472b6' },
          ].map((s, i) => (
            <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill={s.color} filter="drop-shadow(0 0 6px currentColor)" opacity="0.85" />
          ))}
        </svg>
      </div>

      {/* Copyright Bar */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.45)' }}>
            © FAMOUS 6.0 2026. All rights reserved.
          </p>
          <p className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.4)' }}>
            SMAIT Al-Fityan Boarding School Bogor
          </p>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
  scrollTo: (href: string) => void;
}

function FooterColumn({ title, links, scrollTo }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="poster-font text-sm font-black text-white">{title}</h3>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => {
              if (link.href.startsWith('#')) {
                e.preventDefault();
                scrollTo(link.href);
              }
            }}
            className="text-xs text-white/75 transition-colors duration-150 font-medium"
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-orange-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function FooterKeyIcon() {
  return (
    <svg width="28" height="32" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 2 C10 2 5 7 7 13 C9 18 14 20 16 20 L16 34 L12 34 L12 36 L20 36 L20 34 L18 34 L18 28 L20 28 L20 26 L18 26 L18 20 C20 20 26 17 25 11 C24 5 22 2 16 2Z" fill="#1E6FBF" />
      <path d="M14 4 C9 5 7 10 9 15 C11 19 15 20 16 20 C17 20 21 18 22 13 C23 8 20 4 14 4Z" fill="#3B8FDF" />
      <ellipse cx="14" cy="11" rx="4" ry="5" fill="white" opacity="0.85" />
      <path d="M13 8 Q15 6 17 9 Q16 13 13 13 Q11 11 13 8Z" fill="#071220" opacity="0.7" />
      <path d="M6 4 C10 1 18 0 22 4 C26 7 27 12 25 11" stroke="var(--color-orange)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}
