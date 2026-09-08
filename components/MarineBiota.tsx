import React from 'react';

/* ═══════════════════════════════════════════════════════════════════
   FAMOUS 6.0 — PREMIUM VECTOR MARINE BIOTA & CORAL REEF ECOSYSTEM
   ═══════════════════════════════════════════════════════════════════ */

/* ── 1. SCHOOL OF FISH (Kawanan Ikan Berenang Bersama) ── */
export function SchoolOfFish({ count = 6, color = '#38bdf8', accentColor = '#facc15', size = 20, style = {}, className = '' }: {
  count?: number;
  color?: string;
  accentColor?: string;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  const fishOffsets = [
    { x: 0, y: 0, s: 1.0 },
    { x: 28, y: -14, s: 0.85 },
    { x: 32, y: 16, s: 0.9 },
    { x: 58, y: -6, s: 0.75 },
    { x: 64, y: 22, s: 0.8 },
    { x: 88, y: 8, s: 0.7 },
  ];

  return (
    <svg width={size * 5.5} height={size * 2.8} viewBox="0 0 120 60" style={style} className={className}>
      <defs>
        <linearGradient id={`fishGrad-${color.replace(/[^a-zA-Z0-9]/g, '')}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={accentColor} />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      {fishOffsets.slice(0, count).map((f, i) => (
        <g key={i} transform={`translate(${f.x}, ${f.y + 16}) scale(${f.s})`}>
          {/* Fish tail */}
          <path d="M4,10 L-5,3 L-2,10 L-5,17 Z" fill={accentColor} opacity="0.9" />
          {/* Fish body */}
          <path d="M0,10 Q10,2 22,10 Q10,18 0,10 Z" fill={`url(#fishGrad-${color.replace(/[^a-zA-Z0-9]/g, '')})`} />
          {/* Top fin */}
          <path d="M8,4 Q13,1 16,5" fill={accentColor} opacity="0.8" />
          {/* Eye */}
          <circle cx="17" cy="8" r="1.3" fill="#ffffff" />
          <circle cx="17.5" cy="8" r="0.7" fill="#0f172a" />
        </g>
      ))}
    </svg>
  );
}

/* ── 2. SEA TURTLE (Penyu Laut Bersisik Berenang Anggun) ── */
export function SeaTurtle({ size = 70, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.5} height={size} viewBox="0 0 90 60" style={style} className={className}>
      <defs>
        <linearGradient id="turtleShell" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="50%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
        <linearGradient id="turtleSkin" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>

      {/* Rear Flippers */}
      <path d="M22 20 Q12 10 8 20 Q14 24 22 23" fill="url(#turtleSkin)" />
      <path d="M22 40 Q12 50 8 40 Q14 36 22 37" fill="url(#turtleSkin)" />
      {/* Front Big Flippers */}
      <path d="M52 18 Q72 2 78 18 Q62 25 50 24" fill="url(#turtleSkin)" />
      <path d="M52 42 Q72 58 78 42 Q62 35 50 36" fill="url(#turtleSkin)" />
      {/* Flipper Scutes */}
      <circle cx="65" cy="14" r="2" fill="#15803d" opacity="0.6" />
      <circle cx="68" cy="46" r="2" fill="#15803d" opacity="0.6" />

      {/* Tail */}
      <path d="M16 30 L6 30" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />

      {/* Head */}
      <ellipse cx="76" cy="30" rx="9" ry="6.5" fill="url(#turtleSkin)" />
      <circle cx="80" cy="28" r="1.8" fill="#ffffff" />
      <circle cx="80.6" cy="28" r="1" fill="#0f172a" />
      <circle cx="73" cy="30" r="1.5" fill="#15803d" opacity="0.5" />

      {/* Shell Base */}
      <ellipse cx="40" cy="30" rx="26" ry="19" fill="url(#turtleShell)" stroke="#14532d" strokeWidth="2.5" />
      
      {/* Hexagonal Shell Scutes / Motif Karapas */}
      {/* Center hexagon */}
      <polygon points="40,20 48,25 48,35 40,40 32,35 32,25" fill="#16a34a" stroke="#86efac" strokeWidth="1.5" />
      <polygon points="54,24 61,28 61,32 54,36 49,32 49,28" fill="#15803d" stroke="#86efac" strokeWidth="1.2" />
      <polygon points="26,24 31,28 31,32 26,36 19,32 19,28" fill="#15803d" stroke="#86efac" strokeWidth="1.2" />
      {/* Top & Bottom Scutes */}
      <path d="M32 25 L40 13 L48 25 M32 35 L40 47 L48 35" stroke="#86efac" strokeWidth="1.5" fill="none" />
      {/* Shell Rim Highlights */}
      <path d="M18 20 Q40 10 62 20" stroke="#bbf7d0" strokeWidth="1" fill="none" opacity="0.6" />
    </svg>
  );
}

/* ── 3. BIOLUMINESCENT JELLYFISH (Ubur-Ubur Bercahaya) ── */
export function Jellyfish({ size = 65, color = '#c084fc', glowColor = '#38bdf8', style = {}, className = '' }: {
  size?: number;
  color?: string;
  glowColor?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <svg width={size} height={size * 1.5} viewBox="0 0 60 90" style={style} className={className}>
      <defs>
        <radialGradient id={`jellyDome-${color.replace(/[^a-zA-Z0-9]/g, '')}`} cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="35%" stopColor={glowColor} stopOpacity="0.8" />
          <stop offset="85%" stopColor={color} stopOpacity="0.85" />
          <stop offset="100%" stopColor={color} stopOpacity="0.2" />
        </radialGradient>
      </defs>

      {/* Outer Glow Halo */}
      <ellipse cx="30" cy="26" rx="25" ry="20" fill={glowColor} opacity="0.18" filter="blur(6px)" />

      {/* Main Bell/Umbrella */}
      <path d="M6 30 Q30 2 54 30 Q45 36 30 33 Q15 36 6 30 Z" fill={`url(#jellyDome-${color.replace(/[^a-zA-Z0-9]/g, '')})`} stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />

      {/* Inner Cap Glowing Ribs */}
      <path d="M18 28 Q30 12 42 28" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none" />
      <path d="M24 29 Q30 16 36 29" stroke="rgba(255,255,255,0.8)" strokeWidth="1" fill="none" />

      {/* Bioluminescent Dots along rim */}
      <circle cx="12" cy="30" r="1.5" fill="#ffffff" />
      <circle cx="21" cy="32" r="1.5" fill="#ffffff" />
      <circle cx="30" cy="33" r="1.5" fill="#ffffff" />
      <circle cx="39" cy="32" r="1.5" fill="#ffffff" />
      <circle cx="48" cy="30" r="1.5" fill="#ffffff" />

      {/* Oral Arms (Frilly center tentacles) */}
      <path d="M26 33 Q22 55 26 78 Q28 85 26 88" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.8" />
      <path d="M34 33 Q38 55 34 78 Q32 85 34 88" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.8" />

      {/* Outer Flowing Tentacles */}
      <path d="M10 32 Q4 52 12 75 Q16 85 10 90" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.85" />
      <path d="M18 33 Q12 56 20 74 Q24 82 18 88" stroke={glowColor} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.9" />
      <path d="M42 33 Q48 56 40 74 Q36 82 42 88" stroke={glowColor} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.9" />
      <path d="M50 32 Q56 52 48 75 Q44 85 50 90" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}

/* ── 4. MANTA RAY (Pari Raksasa Meluncur Indah) ── */
export function MantaRay({ size = 80, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.6} height={size} viewBox="0 0 96 60" style={style} className={className}>
      <defs>
        <linearGradient id="mantaBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="50%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      {/* Whip-like Tail */}
      <path d="M48 44 Q50 68 44 88" stroke="#0f172a" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Main Diamond Wings */}
      <path d="M48 6 Q92 28 48 44 Q4 28 48 6 Z" fill="url(#mantaBody)" stroke="#475569" strokeWidth="1.5" />
      
      {/* Wing Highlight Creases */}
      <path d="M48 10 Q74 27 48 38 Q22 27 48 10 Z" fill="#475569" opacity="0.45" />

      {/* Cephalic Horns (Head scoops) */}
      <path d="M41 7 Q38 1 43 3 M55 7 Q58 1 53 3" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* White/Cyan Decorative Dorsal Spots */}
      <circle cx="44" cy="24" r="1.5" fill="#38bdf8" opacity="0.8" />
      <circle cx="52" cy="24" r="1.5" fill="#38bdf8" opacity="0.8" />
      <circle cx="48" cy="20" r="1.8" fill="#e2e8f0" opacity="0.9" />
      <circle cx="40" cy="30" r="1.2" fill="#38bdf8" opacity="0.7" />
      <circle cx="56" cy="30" r="1.2" fill="#38bdf8" opacity="0.7" />
      <circle cx="48" cy="34" r="1.4" fill="#e2e8f0" opacity="0.8" />
    </svg>
  );
}

/* ── 5. CLOWNFISH / NEMO (Ikan Badut Oranye Garis Putih) ── */
export function ClownFish({ size = 40, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.6} height={size} viewBox="0 0 48 30" style={style} className={className}>
      <defs>
        <linearGradient id="clownGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>

      {/* Tail Fin */}
      <path d="M12 15 L2 5 Q6 15 2 25 Z" fill="url(#clownGrad)" stroke="#1e293b" strokeWidth="1" />
      <path d="M6 9 L3 6 M6 21 L3 24" stroke="#ffffff" strokeWidth="1.2" />

      {/* Dorsal & Ventral Fins */}
      <path d="M24 4 Q28 0 34 5" fill="url(#clownGrad)" stroke="#1e293b" strokeWidth="1" />
      <path d="M22 25 Q26 29 30 26" fill="url(#clownGrad)" stroke="#1e293b" strokeWidth="1" />

      {/* Main Torpedo Body */}
      <ellipse cx="28" cy="15" rx="17" ry="11" fill="url(#clownGrad)" />

      {/* 3 White Curved Stripes with Black Outline */}
      {/* Stripe 1: Tail root */}
      <path d="M14 8 Q12 15 14 22" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M14 8 Q12 15 14 22" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Stripe 2: Mid-body curve */}
      <path d="M25 4 Q21 15 25 26" stroke="#1e293b" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <path d="M25 4 Q21 15 25 26" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Stripe 3: Behind eye */}
      <path d="M35 6 Q32 15 35 24" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M35 6 Q32 15 35 24" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Pectoral Fin */}
      <path d="M26 15 Q30 18 28 22 Q24 22 25 15" fill="#ea580c" stroke="#1e293b" strokeWidth="1" />

      {/* Eye & Mouth */}
      <circle cx="39" cy="12" r="2.5" fill="#ffffff" />
      <circle cx="39.5" cy="12" r="1.3" fill="#0f172a" />
      <circle cx="39" cy="11.5" r="0.6" fill="#ffffff" />
      <path d="M44 16 Q42 18 45 19" stroke="#9a3412" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

/* ── 6. BLUE TANG / DORY (Ikan Biru Cerah Ekor Kuning) ── */
export function BlueTang({ size = 40, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.6} height={size} viewBox="0 0 48 30" style={style} className={className}>
      <defs>
        <linearGradient id="tangBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>

      {/* Yellow Tail */}
      <path d="M12 15 L2 6 Q7 15 2 24 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1.2" />

      {/* Main Oval Body */}
      <ellipse cx="28" cy="15" rx="16" ry="12" fill="url(#tangBlue)" />

      {/* Signature Black Palette Pattern */}
      <path d="M16 8 Q32 10 26 21 Q14 24 18 12 Z" fill="#0f172a" />
      <ellipse cx="25" cy="15" rx="5" ry="3.5" fill="#1d4ed8" />

      {/* Yellow Accents on Fins */}
      <path d="M26 3 Q34 1 37 5" fill="#facc15" />
      <path d="M24 27 Q32 29 35 25" fill="#facc15" />

      {/* Big Cute Eye */}
      <circle cx="38" cy="12" r="2.8" fill="#ffffff" />
      <circle cx="38.5" cy="12" r="1.4" fill="#0f172a" />
      <circle cx="38" cy="11.5" r="0.6" fill="#ffffff" />
    </svg>
  );
}

/* ── 7. SEAHORSE (Kuda Laut Lucu) ── */
export function Seahorse({ size = 50, color = '#f97316', style = {}, className = '' }: { size?: number; color?: string; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 0.65} height={size} viewBox="0 0 36 60" style={style} className={className}>
      <defs>
        <linearGradient id={`seahorseGrad-${color.replace(/[^a-zA-Z0-9]/g, '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
      </defs>

      {/* Dorsal Back Fin */}
      <path d="M23 24 Q31 29 23 35 Q27 30 23 24" fill="#fde047" stroke="#ca8a04" strokeWidth="1" opacity="0.85" />

      {/* Crown Crest on Head */}
      <path d="M15 10 L19 6 L20 12 L24 8 L23 15" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Snout & Head */}
      <path d="M16 13 Q7 10 9 17 Q15 20 17 20 Z" fill={`url(#seahorseGrad-${color.replace(/[^a-zA-Z0-9]/g, '')})`} />
      <circle cx="14" cy="14" r="2" fill="#ffffff" />
      <circle cx="14" cy="14" r="1" fill="#0f172a" />

      {/* S-Curved Body & Curled Tail */}
      <path d="M17 19 Q25 28 20 38 Q15 48 20 54 Q23 57 19 56 Q15 53 17 49" stroke={color} strokeWidth="7" fill="none" strokeLinecap="round" />

      {/* White/Yellow Belly Segment Armor */}
      <path d="M14 26 L19 26 M13 31 L19 31 M14 36 L18 36 M15 41 L18 41" stroke="#ffedd5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ── 8. ANGLER FISH (Ikan Senter Abisal Laut Dalam) ── */
export function AnglerFish({ size = 60, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.5} height={size} viewBox="0 0 75 50" style={style} className={className}>
      <defs>
        <radialGradient id="anglerLantern" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#eab308" />
        </radialGradient>
      </defs>

      {/* Glowing Bioluminescent Lure Bulb */}
      <circle cx="28" cy="4" r="12" fill="#fef08a" opacity="0.25" filter="blur(5px)" />
      <path d="M42 16 Q30 0 32 -2" stroke="#64748b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="31" cy="-2" r="5" fill="url(#anglerLantern)" filter="drop-shadow(0 0 8px #fef08a)" />

      {/* Big Grumpy Body */}
      <ellipse cx="44" cy="28" rx="26" ry="18" fill="#1e1b4b" stroke="#312e81" strokeWidth="2" />
      <ellipse cx="46" cy="26" rx="18" ry="12" fill="#312e81" opacity="0.6" />

      {/* Dorsal Spikes */}
      <path d="M26 14 Q32 8 38 14 M38 14 Q44 7 50 14" stroke="#4c1d95" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Huge Tooth Jaw */}
      <path d="M18 26 Q28 38 45 34" stroke="#0f172a" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <path d="M21 28 L23 33 M27 30 L28 36 M33 31 L34 36 M39 31 L40 35" stroke="#f1f5f9" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 35 L26 31 M30 36 L32 31 M36 35 L38 31" stroke="#f1f5f9" strokeWidth="2" strokeLinecap="round" />

      {/* Glowing Yellow Eye */}
      <circle cx="24" cy="21" r="5" fill="#facc15" />
      <circle cx="23" cy="21" r="2.2" fill="#000000" />
      <circle cx="22" cy="20" r="0.8" fill="#ffffff" />

      {/* Tail Fin */}
      <path d="M68 28 L74 18 L74 38 Z" fill="#1e1b4b" stroke="#312e81" strokeWidth="1.5" />
    </svg>
  );
}

/* ── 9. STAGHORN CORAL BUSH (Terumbu Karang Tanduk Rusa Bertingkat) ── */
export function StaghornCoral({ height = 90, color = '#ec4899', accentColor = '#f472b6', style = {}, className = '' }: {
  height?: number;
  color?: string;
  accentColor?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <svg width={height * 0.9} height={height} viewBox="0 0 80 90" style={style} className={className}>
      <defs>
        <linearGradient id={`stagGrad-${color.replace(/[^a-zA-Z0-9]/g, '')}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={accentColor} />
        </linearGradient>
      </defs>

      {/* Multiple branching antlers */}
      {/* Central Trunk */}
      <path d="M40 90 L40 50 M40 65 L60 40 M40 55 L20 35 M40 45 L50 20 M40 40 L30 15" stroke={`url(#stagGrad-${color.replace(/[^a-zA-Z0-9]/g, '')})`} strokeWidth="7" strokeLinecap="round" fill="none" />
      
      {/* Sub-branches */}
      <path d="M60 40 L70 25 M60 40 L55 22 M20 35 L12 22 M20 35 L26 18 M50 20 L58 8 M30 15 L24 5 M30 15 L36 4" stroke={`url(#stagGrad-${color.replace(/[^a-zA-Z0-9]/g, '')})`} strokeWidth="5" strokeLinecap="round" fill="none" />

      {/* Glowing Polyp Rounded Tips */}
      {[
        { cx: 70, cy: 25 }, { cx: 55, cy: 22 }, { cx: 12, cy: 22 }, { cx: 26, cy: 18 },
        { cx: 58, cy: 8 }, { cx: 24, cy: 5 }, { cx: 36, cy: 4 }, { cx: 50, cy: 20 },
      ].map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r="4" fill={accentColor} filter="drop-shadow(0 0 4px rgba(255,255,255,0.8))" />
      ))}
    </svg>
  );
}

/* ── 10. BRAIN CORAL (Karang Otak Bertekstur Meliuk) ── */
export function BrainCoral({ size = 70, color = '#a855f7', ridgeColor = '#e9d5ff', style = {}, className = '' }: {
  size?: number;
  color?: string;
  ridgeColor?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <svg width={size * 1.3} height={size} viewBox="0 0 90 70" style={style} className={className}>
      <defs>
        <radialGradient id={`brainGrad-${color.replace(/[^a-zA-Z0-9]/g, '')}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={ridgeColor} />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor="#4c1d95" />
        </radialGradient>
      </defs>

      {/* Main Dome */}
      <path d="M10 55 Q5 25 30 12 Q45 4 60 12 Q85 25 80 55 Q45 68 10 55 Z" fill={`url(#brainGrad-${color.replace(/[^a-zA-Z0-9]/g, '')})`} stroke="#4c1d95" strokeWidth="2" />

      {/* Wavy Intricate Brain Gyri / Grooves */}
      <path d="M22 45 Q30 38 25 28 Q35 20 45 28 Q55 35 48 45" stroke={ridgeColor} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85" />
      <path d="M35 52 Q45 45 40 36 Q50 30 60 38 Q68 45 62 52" stroke={ridgeColor} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85" />
      <path d="M20 32 Q15 20 28 16 Q36 22 45 15 Q55 20 65 16 Q75 22 72 34" stroke={ridgeColor} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.75" />
      <path d="M58 24 Q68 28 66 38 Q74 44 70 52" stroke={ridgeColor} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.75" />
    </svg>
  );
}

/* ── 11. TUBE SPONGES (Spons Tabung Bersarang) ── */
export function TubeSponges({ height = 85, color = '#0284c7', rimColor = '#38bdf8', style = {}, className = '' }: {
  height?: number;
  color?: string;
  rimColor?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <svg width={height * 0.75} height={height} viewBox="0 0 65 85" style={style} className={className}>
      <defs>
        <linearGradient id={`tubeGrad-${color.replace(/[^a-zA-Z0-9]/g, '')}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0369a1" />
          <stop offset="40%" stopColor={rimColor} />
          <stop offset="80%" stopColor={color} />
          <stop offset="100%" stopColor="#082f49" />
        </linearGradient>
      </defs>

      {/* Tube 1 - Left Small */}
      <rect x="6" y="32" width="14" height="50" rx="7" fill={`url(#tubeGrad-${color.replace(/[^a-zA-Z0-9]/g, '')})`} />
      <ellipse cx="13" cy="32" rx="7" ry="4" fill="#082f49" stroke={rimColor} strokeWidth="1.5" />

      {/* Tube 2 - Middle Tallest */}
      <rect x="22" y="10" width="18" height="72" rx="9" fill={`url(#tubeGrad-${color.replace(/[^a-zA-Z0-9]/g, '')})`} />
      <ellipse cx="31" cy="10" rx="9" ry="5" fill="#082f49" stroke={rimColor} strokeWidth="2" />
      <circle cx="31" cy="4" r="2.5" fill="rgba(255,255,255,0.7)" />

      {/* Tube 3 - Right Medium */}
      <rect x="42" y="24" width="15" height="58" rx="7.5" fill={`url(#tubeGrad-${color.replace(/[^a-zA-Z0-9]/g, '')})`} />
      <ellipse cx="49.5" cy="24" rx="7.5" ry="4.5" fill="#082f49" stroke={rimColor} strokeWidth="1.5" />
    </svg>
  );
}

/* ── 12. SEA ANEMONE (Anemon Laut Tentakel Lembut) ── */
export function SeaAnemone({ size = 60, color = '#f43f5e', tipColor = '#fde047', style = {}, className = '' }: {
  size?: number;
  color?: string;
  tipColor?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  const tentacles = [
    { d: 'M30,55 Q10,35 6,15', tip: [6, 15] },
    { d: 'M30,55 Q18,30 14,8', tip: [14, 8] },
    { d: 'M30,55 Q24,25 24,4', tip: [24, 4] },
    { d: 'M30,55 Q30,22 32,2', tip: [32, 2] },
    { d: 'M30,55 Q38,24 42,4', tip: [42, 4] },
    { d: 'M30,55 Q46,28 50,10', tip: [50, 10] },
    { d: 'M30,55 Q52,35 56,18', tip: [56, 18] },
  ];

  return (
    <svg width={size} height={size} viewBox="0 0 60 60" style={style} className={className}>
      {/* Base Stalk */}
      <path d="M20 58 Q30 50 40 58 L38 48 Q30 45 22 48 Z" fill="#9f1239" />
      {/* Tentacles */}
      {tentacles.map((t, i) => (
        <g key={i}>
          <path d={t.d} stroke={color} strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <circle cx={t.tip[0]} cy={t.tip[1]} r="3" fill={tipColor} filter="drop-shadow(0 0 3px rgba(255,255,255,0.9))" />
        </g>
      ))}
    </svg>
  );
}

/* ── 13. SEA FAN CORAL (Karang Kipas Jala Indah) ── */
export function SeaFan({ height = 90, color = '#f97316', style = {}, className = '' }: { height?: number; color?: string; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={height * 1.1} height={height} viewBox="0 0 100 90" style={style} className={className}>
      {/* Base Stem */}
      <path d="M50 90 L50 65" stroke="#7c2d12" strokeWidth="5" strokeLinecap="round" />
      {/* Fan Web Lattice */}
      <path d="M50 65 Q20 45 8 20 Q50 5 92 20 Q80 45 50 65 Z" fill={color} opacity="0.25" />
      <path d="M50 65 Q30 40 18 18 M50 65 Q40 35 34 10 M50 65 Q50 30 50 8 M50 65 Q60 35 66 10 M50 65 Q70 40 82 18" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Cross mesh ridges */}
      <path d="M20 40 Q50 30 80 40 M12 25 Q50 15 88 25" stroke={color} strokeWidth="1.8" fill="none" opacity="0.75" />
    </svg>
  );
}

/* ── 14. SEAWEED & KELP FOREST (Hutan Rumput Laut Berlapis) ── */
export function Seaweed({ height = 100, color = '#22c55e', style = {}, className = '' }: { height?: number; color?: string; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={height * 0.45} height={height} viewBox="0 0 45 100" style={style} className={className}>
      {/* Layer 1 (Background Ribbon) */}
      <path d="M28 100 Q38 75 28 50 Q18 25 30 0" stroke={color} strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.45" />
      {/* Layer 2 (Foreground Flowing Frond) */}
      <path d="M16 100 Q4 75 18 50 Q32 25 12 0" stroke={color} strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.9" />
      {/* Leaf Blades */}
      <path d="M14 65 Q30 60 26 50 M12 35 Q-2 30 2 20" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

/* ── 15. STARFISH (Bintang Laut Bertekstur) ── */
export function Starfish({ size = 35, color = '#f97316', style = {}, className = '' }: { size?: number; color?: string; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={style} className={className}>
      {/* Starfish Shape */}
      <path
        d="M20 2 Q23 12 26 14 Q36 14 38 18 Q30 24 28 27 Q32 37 28 39 Q20 32 17 33 Q10 39 8 36 Q11 27 6 22 Q12 18 14 14 Q17 12 20 2 Z"
        fill={color}
        stroke="rgba(0,0,0,0.2)"
        strokeWidth="1.5"
      />
      {/* Central texture & suction bumps */}
      <circle cx="20" cy="20" r="3" fill="rgba(255,255,255,0.7)" />
      <circle cx="20" cy="11" r="1.2" fill="rgba(255,255,255,0.6)" />
      <circle cx="28" cy="19" r="1.2" fill="rgba(255,255,255,0.6)" />
      <circle cx="24" cy="29" r="1.2" fill="rgba(255,255,255,0.6)" />
      <circle cx="14" cy="28" r="1.2" fill="rgba(255,255,255,0.6)" />
      <circle cx="12" cy="18" r="1.2" fill="rgba(255,255,255,0.6)" />
    </svg>
  );
}

/* ── 16. CRAB (Kepiting Pantai Ceria) ── */
export function Crab({ size = 38, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.25} height={size} viewBox="0 0 45 36" style={style} className={className}>
      {/* Legs */}
      <path d="M10 22 Q4 26 2 32 M12 25 Q6 31 5 35 M33 25 Q39 31 40 35 M35 22 Q41 26 43 32" stroke="#dc2626" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Oval Shell */}
      <ellipse cx="22.5" cy="20" rx="14" ry="9" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
      <path d="M14 18 Q22.5 14 31 18" stroke="#fca5a5" strokeWidth="1.5" fill="none" />

      {/* Claws */}
      <path d="M11 16 Q3 10 6 4 Q12 4 14 12" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
      <path d="M34 16 Q42 10 39 4 Q33 4 31 12" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />

      {/* Eye stalks & Big Eyes */}
      <line x1="16" y1="12" x2="16" y2="6" stroke="#b91c1c" strokeWidth="2.5" />
      <circle cx="16" cy="5" r="2.8" fill="#ffffff" stroke="#b91c1c" strokeWidth="1" />
      <circle cx="16" cy="5" r="1.3" fill="#000000" />
      <line x1="29" y1="12" x2="29" y2="6" stroke="#b91c1c" strokeWidth="2.5" />
      <circle cx="29" cy="5" r="2.8" fill="#ffffff" stroke="#b91c1c" strokeWidth="1" />
      <circle cx="29" cy="5" r="1.3" fill="#000000" />
    </svg>
  );
}

/* ── 17. BUBBLE RISING (Gelembung Udara Bersinar) ── */
export function Bubble({ size = 16, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style} className={className}>
      <circle cx="12" cy="12" r="10" fill="radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(56,189,248,0.1) 100%)" stroke="rgba(186,230,253,0.75)" strokeWidth="1.5" />
      <circle cx="8" cy="8" r="3.5" fill="rgba(255,255,255,0.75)" />
      <circle cx="15" cy="15" r="1.5" fill="rgba(255,255,255,0.4)" />
    </svg>
  );
}

/* ── 18. SUNKEN PIRATE TREASURE CHEST (Peti Harta Karun Laut Dalam) ── */
export function TreasureChest({ size = 50, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.3} height={size} viewBox="0 0 65 50" style={style} className={className}>
      {/* Gold Glow from Inside */}
      <ellipse cx="32" cy="22" rx="20" ry="12" fill="#fef08a" opacity="0.4" filter="blur(6px)" />
      
      {/* Chest Base */}
      <rect x="8" y="24" width="48" height="24" rx="3" fill="#78350f" stroke="#451a03" strokeWidth="2" />
      {/* Metal Bands */}
      <rect x="14" y="24" width="5" height="24" fill="#ca8a04" />
      <rect x="45" y="24" width="5" height="24" fill="#ca8a04" />

      {/* Gold Coins spilling out */}
      <circle cx="22" cy="23" r="3.5" fill="#facc15" stroke="#ca8a04" strokeWidth="0.8" />
      <circle cx="28" cy="21" r="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.8" />
      <circle cx="35" cy="22" r="3.5" fill="#facc15" stroke="#ca8a04" strokeWidth="0.8" />
      <circle cx="42" cy="24" r="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.8" />
      {/* Glowing Pearl */}
      <circle cx="31" cy="18" r="4.5" fill="#ffffff" filter="drop-shadow(0 0 8px #38bdf8)" />

      {/* Open Lid tilted back */}
      <path d="M6,16 Q32,4 58,16 L54,24 Q32,14 10,24 Z" fill="#92400e" stroke="#451a03" strokeWidth="2" />
      <path d="M12,18 L16,24 M48,18 L44,24" stroke="#ca8a04" strokeWidth="2" />
      {/* Keyhole Lock */}
      <rect x="30" y="27" width="5" height="7" rx="1.5" fill="#ca8a04" />
      <circle cx="32.5" cy="29.5" r="1" fill="#000000" />
    </svg>
  );
}

/* ── 19. SUNKEN ANCHOR (Jangkar Kapal Berkarat & Berlumut) ── */
export function SunkenAnchor({ size = 55, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 0.8} height={size} viewBox="0 0 48 60" style={style} className={className}>
      {/* Ring at top */}
      <circle cx="24" cy="9" r="6" stroke="#64748b" strokeWidth="3" fill="none" />
      {/* Crossbar */}
      <line x1="8" y1="18" x2="40" y2="18" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
      <circle cx="8" cy="18" r="2.5" fill="#94a3b8" />
      <circle cx="40" cy="18" r="2.5" fill="#94a3b8" />
      {/* Main Shank */}
      <line x1="24" y1="12" x2="24" y2="52" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
      {/* Curved Flukes / Arms */}
      <path d="M6 38 Q24 58 42 38" stroke="#334155" strokeWidth="5.5" strokeLinecap="round" fill="none" />
      {/* Arrow points on arms */}
      <polygon points="6,38 3,30 11,35" fill="#475569" />
      <polygon points="42,38 45,30 37,35" fill="#475569" />
      {/* Green moss / seaweed clinging to anchor */}
      <path d="M22 28 Q18 22 23 16" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M26 44 Q32 40 28 35" stroke="#16a34a" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
