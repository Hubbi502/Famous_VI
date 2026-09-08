import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone } from 'lucide-react';
import {
  Crab,
  Starfish,
  Seaweed,
  Jellyfish,
  AnglerFish,
  Seahorse,
  CoralBranch,
  Bubble,
  ClownFish,
  StaghornCoral,
  BrainCoral,
  TubeSponges,
  SeaAnemone,
  SeaFan,
  SunkenAnchor,
  GiantClam,
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
    <footer style={{ background: 'linear-gradient(180deg, #04000f 0%, #060216 40%, #08031d 75%, #050114 100%)', position: 'relative', overflow: 'hidden' }}>

      {/* ── Deep Ocean Subtle Bioluminescent Light & Ambiance ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        
        {/* Soft atmospheric light beams (God rays from above) */}
        <div
          className="absolute top-0 left-1/4 w-[300px] h-[550px] opacity-20 transform -rotate-12"
          style={{
            background: 'linear-gradient(180deg, rgba(56,189,248,0.3) 0%, rgba(14,116,144,0.15) 50%, transparent 100%)',
            filter: 'blur(35px)',
          }}
        />
        <div
          className="absolute top-0 right-1/4 w-[240px] h-[500px] opacity-15 transform rotate-12"
          style={{
            background: 'linear-gradient(180deg, rgba(168,85,247,0.25) 0%, rgba(99,102,241,0.1) 50%, transparent 100%)',
            filter: 'blur(30px)',
          }}
        />

        {/* Bioluminescent Deep Glows */}
        <div
          className="absolute bottom-16 left-1/4 w-[420px] h-[220px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.16) 0%, rgba(147,51,234,0.08) 50%, transparent 75%)', filter: 'blur(50px)' }}
        />
        <div
          className="absolute bottom-20 right-1/5 w-[380px] h-[200px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.14) 0%, rgba(126,34,206,0.06) 50%, transparent 75%)', filter: 'blur(45px)' }}
        />
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[550px] h-[160px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />

        {/* Jellyfish drifting gracefully */}
        <div className="anim-jelly" style={{ position: 'absolute', top: '6%', left: '4%', animationDuration: '7s', opacity: 0.8 }}>
          <Jellyfish size={46} color="rgba(139,92,246,0.85)" glowColor="#38bdf8" />
        </div>
        <div className="anim-jelly" style={{ position: 'absolute', top: '16%', left: '13%', animationDuration: '9s', animationDelay: '3s', opacity: 0.65 }}>
          <Jellyfish size={34} color="rgba(56,189,248,0.75)" glowColor="#c084fc" />
        </div>

        {/* Angler Fish lurking with glowing lure */}
        <div className="anim-jelly" style={{ position: 'absolute', top: '18%', right: '6%', animationDuration: '11s', animationDelay: '1s', opacity: 0.85 }}>
          <AnglerFish size={52} />
        </div>

        {/* Seahorse near kelp */}
        <div className="anim-jelly" style={{ position: 'absolute', top: '46%', left: '4%', animationDuration: '5.5s', opacity: 0.85 }}>
          <Seahorse size={40} />
        </div>

        {/* Clownfish swimming across */}
        <div className="anim-swim-right" style={{ position: 'absolute', top: '56%', left: 0, animationDuration: '28s', opacity: 0.75 }}>
          <ClownFish size={28} />
        </div>

        {/* Rising bioluminescent bubble columns */}
        {[
          { left: '12%', delay: '0s',   size: 11 },
          { left: '26%', delay: '1.4s', size: 8  },
          { left: '48%', delay: '0.6s', size: 13 },
          { left: '68%', delay: '2.1s', size: 9  },
          { left: '82%', delay: '0.9s', size: 11 },
          { left: '94%', delay: '1.7s', size: 7  },
        ].map((b, i) => (
          <div key={i} className="anim-bubble-rise" style={{ position: 'absolute', bottom: '200px', left: b.left, animationDelay: b.delay, animationDuration: `${3.5 + i * 0.5}s` }}>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
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
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Festival Al-Fityan Multi Open Sport — ajang kompetisi bergengsi Se-Pulau Jawa untuk generasi berprestasi.
            </p>
            <div className="flex gap-3 mt-1">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(232,76,30,0.2)'; e.currentTarget.style.color = 'var(--color-orange-light)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigasi */}
          <FooterColumn title="Navigasi" links={footerLinks.navigasi} scrollTo={scrollTo} />

          {/* Lomba */}
          <FooterColumn title="Cabang Lomba" links={footerLinks.lomba} scrollTo={scrollTo} />

          {/* Kontak */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold text-white">Kontak Panitia</h3>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Diza', phone: '081343059590' },
                { name: 'Hendra', phone: '081400842090' },
                { name: 'Ustadz Ahad', phone: '08212134290' },
              ].map((cp) => (
                <a
                  key={cp.name}
                  href={`tel:${cp.phone}`}
                  className="flex items-center gap-2 text-sm transition-colors duration-150"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-orange-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                >
                  <Phone size={13} className="flex-shrink-0" />
                  <span>{cp.phone} <span style={{ color: 'rgba(255,255,255,0.3)' }}>({cp.name})</span></span>
                </a>
              ))}

              <div className="flex items-start gap-2 text-sm mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <MapPin size={13} className="flex-shrink-0 mt-0.5" />
                <span>SMAIT Al-Fityan Boarding School,<br />Bogor, Jawa Barat</span>
              </div>
            </div>

            {/* Registration CTA */}
            <div className="mt-2 p-4 rounded-xl" style={{ backgroundColor: 'rgba(232,76,30,0.14)', border: '1px solid rgba(232,76,30,0.3)' }}>
              <div className="text-xs font-bold mb-1" style={{ color: 'var(--color-orange-light)' }}>Open Registration</div>
              <div className="text-sm font-black text-white">02 Sep – 10 Okt 2026</div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf9L5-OeVrr1cqmMCkVdMo5ItTQ1X7t9p6-0Xj8z1uaO_dNuQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all duration-200"
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

      {/* ── RICH BIOLUMINESCENT CORAL REEF ECOSYSTEM SEABED ── */}
      <div className="relative w-full overflow-hidden pointer-events-none" style={{ marginTop: '10px', minHeight: '190px' }}>
        
        {/* Soft Luminous Terrain SVG with Multi-Toned Depths & Bioluminescent Highlights */}
        <svg viewBox="0 0 1440 210" className="w-full h-auto" preserveAspectRatio="none" style={{ display: 'block', minHeight: '150px' }}>
          <defs>
            <linearGradient id="reefBackTerrain" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#140b2e" />
              <stop offset="50%" stopColor="#0d061f" />
              <stop offset="100%" stopColor="#050110" />
            </linearGradient>
            <linearGradient id="reefForeTerrain" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a0d3b" />
              <stop offset="40%" stopColor="#100624" />
              <stop offset="100%" stopColor="#04010a" />
            </linearGradient>
            <linearGradient id="crestGlow1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="35%" stopColor="#a855f7" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#ec4899" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="crestGlow2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Layer 1: Background Distant Ridge with glowing crest */}
          <path d="M0,210 L0,95 Q220,55 450,85 Q680,115 900,70 Q1120,30 1320,75 Q1390,90 1440,70 L1440,210Z" fill="url(#reefBackTerrain)" />
          <path d="M0,95 Q220,55 450,85 Q680,115 900,70 Q1120,30 1320,75 Q1390,90 1440,70" stroke="url(#crestGlow1)" strokeWidth="2.5" fill="none" opacity="0.8" />

          {/* Layer 2: Foreground Reef Ridge with glowing crest */}
          <path d="M0,210 L0,125 Q180,90 400,120 Q620,145 840,105 Q1060,65 1260,105 Q1360,120 1440,95 L1440,210Z" fill="url(#reefForeTerrain)" />
          <path d="M0,125 Q180,90 400,120 Q620,145 840,105 Q1060,65 1260,105 Q1360,120 1440,95" stroke="url(#crestGlow2)" strokeWidth="2" fill="none" opacity="0.75" />

          {/* Ambient Bioluminescent Spores / Plankton specks */}
          {[
            { cx: 95, cy: 75, r: 2.5, color: '#38bdf8' },
            { cx: 210, cy: 60, r: 3, color: '#c084fc' },
            { cx: 340, cy: 85, r: 2, color: '#f472b6' },
            { cx: 480, cy: 55, r: 3.5, color: '#38bdf8' },
            { cx: 620, cy: 75, r: 2, color: '#a855f7' },
            { cx: 750, cy: 50, r: 3, color: '#34d399' },
            { cx: 890, cy: 65, r: 2.5, color: '#fbcfe8' },
            { cx: 1040, cy: 45, r: 3.5, color: '#38bdf8' },
            { cx: 1180, cy: 70, r: 2, color: '#c084fc' },
            { cx: 1320, cy: 55, r: 3, color: '#38bdf8' },
            { cx: 1400, cy: 75, r: 2, color: '#f472b6' },
          ].map((s, i) => (
            <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill={s.color} filter="drop-shadow(0 0 6px currentColor)" opacity="0.85" />
          ))}
        </svg>

        {/* ── Corals & Biota Layered on Reef Bed ── */}

        {/* 1. LEFT CORAL REEF COMPLEX */}
        <div style={{ position: 'absolute', bottom: '25px', left: '1.5%', zIndex: 4 }}>
          <div className="relative flex items-end gap-1">
            {/* Swaying Kelp in back */}
            <div className="anim-sway" style={{ marginBottom: '10px' }}>
              <Seaweed height={85} color="#15803d" />
            </div>
            {/* Sea Fan */}
            <div style={{ marginLeft: '-15px', marginBottom: '8px' }}>
              <SeaFan height={78} color="#f97316" />
            </div>
            {/* Tube Sponges */}
            <div style={{ marginLeft: '-10px' }}>
              <TubeSponges height={75} color="#7c3aed" rimColor="#38bdf8" />
            </div>
            {/* Brain Coral */}
            <div style={{ marginLeft: '-8px', marginBottom: '2px' }}>
              <BrainCoral size={55} color="#ec4899" ridgeColor="#fbcfe8" />
            </div>
            {/* Sea Anemone */}
            <div style={{ marginLeft: '-10px' }}>
              <SeaAnemone size={48} color="#06b6d4" tipColor="#fef08a" />
            </div>
          </div>
        </div>

        {/* 2. MID-LEFT STAGHORN REEF GARDEN */}
        <div style={{ position: 'absolute', bottom: '28px', left: '26%', zIndex: 4 }}>
          <div className="relative flex items-end gap-1">
            {/* Branching Staghorn Coral */}
            <StaghornCoral height={80} color="#a855f7" accentColor="#38bdf8" />
            {/* Coral Branch */}
            <div style={{ marginLeft: '-12px', marginBottom: '4px' }}>
              <CoralBranch height={60} color="#f43f5e" />
            </div>
            {/* Starfish on reef shelf */}
            <div style={{ marginLeft: '4px', marginBottom: '4px' }}>
              <Starfish size={24} color="#f59e0b" />
            </div>
          </div>
        </div>

        {/* 3. CENTER GIANT CLAM & PEARL WITH CORAL CLUSTER */}
        <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
          <div className="relative flex items-end justify-center gap-2">
            {/* Soft Coral Branch */}
            <div style={{ marginBottom: '8px' }}>
              <CoralBranch height={68} color="#0284c7" />
            </div>
            {/* Giant Clam with glowing pearl */}
            <GiantClam size={64} />
            {/* Tube Sponges Right */}
            <div style={{ marginLeft: '-10px', marginBottom: '4px' }}>
              <TubeSponges height={62} color="#0d9488" rimColor="#2dd4bf" />
            </div>
            {/* Little Crab scuttling near pearl */}
            <div style={{ marginBottom: '6px' }}>
              <Crab size={26} />
            </div>
          </div>
        </div>

        {/* 4. MID-RIGHT SUNKEN ANCHOR & REEF OVERGROWTH */}
        <div style={{ position: 'absolute', bottom: '26px', right: '23%', zIndex: 4 }}>
          <div className="relative flex items-end gap-1">
            {/* Weathered Anchor */}
            <SunkenAnchor size={60} />
            {/* Brain Coral clinging to anchor */}
            <div style={{ marginLeft: '-12px', marginBottom: '2px' }}>
              <BrainCoral size={50} color="#6366f1" ridgeColor="#a5b4fc" />
            </div>
            {/* Swaying Kelp */}
            <div className="anim-sway" style={{ marginLeft: '-8px', marginBottom: '6px', animationDelay: '1.5s' }}>
              <Seaweed height={75} color="#166534" />
            </div>
          </div>
        </div>

        {/* 5. RIGHT CORAL REEF COMPLEX */}
        <div style={{ position: 'absolute', bottom: '24px', right: '1.5%', zIndex: 4 }}>
          <div className="relative flex items-end gap-1">
            {/* Staghorn Coral in pink/orange */}
            <StaghornCoral height={82} color="#f43f5e" accentColor="#fef08a" />
            {/* Sea Fan */}
            <div style={{ marginLeft: '-14px', marginBottom: '6px' }}>
              <SeaFan height={72} color="#ec4899" />
            </div>
            {/* Tube Sponges */}
            <div style={{ marginLeft: '-10px' }}>
              <TubeSponges height={70} color="#e11d48" rimColor="#f472b6" />
            </div>
            {/* Sea Anemone */}
            <div style={{ marginLeft: '-8px' }}>
              <SeaAnemone size={46} color="#8b5cf6" tipColor="#38bdf8" />
            </div>
            {/* Starfish */}
            <div style={{ marginLeft: '4px', marginBottom: '4px' }}>
              <Starfish size={22} color="#f97316" />
            </div>
          </div>
        </div>
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
    <div className="flex flex-col gap-5">
      <h3 className="text-sm font-bold text-white">{title}</h3>
      <div className="flex flex-col gap-2.5">
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
            className="text-sm transition-colors duration-150"
            style={{ color: 'rgba(255,255,255,0.45)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-orange-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
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
