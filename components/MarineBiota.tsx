import React from 'react';

/* ═══════════════════════════════════════════════════════════════════
   FAMOUS 6.0 — PREMIUM VECTOR MARINE BIOTA & CORAL REEF ECOSYSTEM
   ═══════════════════════════════════════════════════════════════════ */

/* ── 1. BIOLUMINESCENT JELLYFISH (Ubur-Ubur Bercahaya) ── */
export function Jellyfish({ size = 55, color = 'rgba(192,132,252,0.85)', glowColor = '#38bdf8', style = {}, className = '' }: {
  size?: number;
  color?: string;
  glowColor?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <svg width={size} height={size * 1.45} viewBox="0 0 60 85" style={style} className={className}>
      <defs>
        <radialGradient id={`jellyDome-${size}`} cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="35%" stopColor={glowColor} stopOpacity="0.75" />
          <stop offset="85%" stopColor={color} stopOpacity="0.85" />
          <stop offset="100%" stopColor={color} stopOpacity="0.25" />
        </radialGradient>
      </defs>
      {/* Outer Glow */}
      <ellipse cx="30" cy="24" rx="24" ry="18" fill={glowColor} opacity="0.2" filter="blur(5px)" />
      {/* Main Dome */}
      <path d="M8 28 Q30 4 52 28 Q44 34 30 31 Q16 34 8 28 Z" fill={`url(#jellyDome-${size})`} stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
      {/* Glowing Inner Ribs */}
      <path d="M18 26 Q30 12 42 26" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none" />
      <path d="M24 28 Q30 16 36 28" stroke="rgba(255,255,255,0.9)" strokeWidth="1.2" fill="none" />
      {/* Bioluminescent Rim Dots */}
      <circle cx="14" cy="28" r="1.5" fill="#ffffff" />
      <circle cx="22" cy="30" r="1.5" fill="#ffffff" />
      <circle cx="30" cy="31" r="1.5" fill="#ffffff" />
      <circle cx="38" cy="30" r="1.5" fill="#ffffff" />
      <circle cx="46" cy="28" r="1.5" fill="#ffffff" />
      {/* Center Oral Arms */}
      <path d="M26 31 Q22 52 26 72 Q28 78 26 82" stroke="#ffffff" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.85" />
      <path d="M34 31 Q38 52 34 72 Q32 78 34 82" stroke="#ffffff" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.85" />
      {/* Flowing Outer Tentacles */}
      <path d="M12 30 Q6 48 14 68 Q18 78 12 84" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.85" />
      <path d="M20 31 Q14 52 22 70 Q26 76 20 82" stroke={glowColor} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.9" />
      <path d="M40 31 Q46 52 38 70 Q34 76 40 82" stroke={glowColor} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.9" />
      <path d="M48 30 Q54 48 46 68 Q42 78 48 84" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}

/* ── 2. ANGLER FISH (Ikan Senter Abisal Laut Dalam) ── */
export function AnglerFish({ size = 55, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.45} height={size} viewBox="0 0 75 52" style={style} className={className}>
      <defs>
        <radialGradient id={`anglerLantern-${size}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#eab308" />
        </radialGradient>
      </defs>
      {/* Lure glow */}
      <circle cx="28" cy="2" r="10" fill="#fef08a" opacity="0.3" filter="blur(4px)" />
      <path d="M40 14 Q28 -2 30 -4" stroke="#64748b" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="29" cy="-4" r="4.5" fill={`url(#anglerLantern-${size})`} filter="drop-shadow(0 0 7px #fef08a)" />
      {/* Body */}
      <ellipse cx="44" cy="29" rx="26" ry="17" fill="#1e1b4b" stroke="#312e81" strokeWidth="1.5" />
      <ellipse cx="46" cy="27" rx="18" ry="11" fill="#312e81" opacity="0.7" />
      {/* Dorsal Spikes */}
      <path d="M26 15 Q32 9 38 15 M38 15 Q44 8 50 15" stroke="#4c1d95" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Teeth Jaw */}
      <path d="M18 28 Q26 38 42 34" stroke="#0f172a" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M20 29 L22 34 M26 31 L27 36 M32 32 L33 36 M38 32 L39 35" stroke="#f1f5f9" strokeWidth="2" strokeLinecap="round" />
      {/* Glowing Eye */}
      <circle cx="24" cy="22" r="4.5" fill="#facc15" />
      <circle cx="23" cy="22" r="2" fill="#000000" />
      <circle cx="22" cy="21" r="0.8" fill="#ffffff" />
      {/* Tail */}
      <path d="M68 29 L74 20 L74 38 Z" fill="#1e1b4b" stroke="#312e81" strokeWidth="1.5" />
    </svg>
  );
}

/* ── 3. BUBBLE RISING (Gelembung Udara Bersinar) ── */
export function Bubble({ size = 14, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" style={style} className={className}>
      <circle cx="10" cy="10" r="9" fill="none" stroke="rgba(160,230,255,0.65)" strokeWidth="1.5" />
      <circle cx="7" cy="7" r="3" fill="rgba(255,255,255,0.4)" />
    </svg>
  );
}

/* ── 4. CORAL BRANCH (Cabang Terumbu Karang) ── */
export function CoralBranch({ height = 80, color = '#f97316', style = {}, className = '' }: { height?: number; color?: string; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={height * 0.75} height={height} viewBox="0 0 50 80" style={style} className={className}>
      <path d="M25 80 L25 45 M25 60 L40 38 M25 52 L10 35 M25 42 L36 20 M25 38 L14 18" stroke={color} strokeWidth="5.5" strokeLinecap="round" fill="none" />
      <circle cx="40" cy="38" r="3.5" fill={color} filter="drop-shadow(0 0 3px rgba(255,255,255,0.6))" />
      <circle cx="10" cy="35" r="3.5" fill={color} filter="drop-shadow(0 0 3px rgba(255,255,255,0.6))" />
      <circle cx="36" cy="20" r="3.5" fill={color} filter="drop-shadow(0 0 3px rgba(255,255,255,0.6))" />
      <circle cx="14" cy="18" r="3.5" fill={color} filter="drop-shadow(0 0 3px rgba(255,255,255,0.6))" />
      <circle cx="25" cy="80" r="6" fill={color} opacity="0.4" />
    </svg>
  );
}

/* ── 5. SEA TURTLE (Penyu Laut Bersisik) ── */
export function SeaTurtle({ size = 50, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.5} height={size} viewBox="0 0 60 40" style={style} className={className}>
      {/* Shell */}
      <ellipse cx="30" cy="20" rx="18" ry="13" fill="#15803d" stroke="#166534" strokeWidth="2" />
      <path d="M18 20 Q30 12 42 20 M18 20 Q30 28 42 20 M30 7 L30 33" stroke="#86efac" strokeWidth="1.5" fill="none" />
      <circle cx="30" cy="20" r="4.5" fill="#166534" opacity="0.5" />
      {/* Flippers */}
      <path d="M38 12 Q52 2 55 14 Q44 17 38 16" fill="#166534" />
      <path d="M38 28 Q52 38 55 26 Q44 23 38 24" fill="#166534" />
      <path d="M18 13 Q10 7 8 15 Q15 16 18 16" fill="#15803d" />
      <path d="M18 27 Q10 33 8 25 Q15 24 18 24" fill="#15803d" />
      {/* Head & Eye */}
      <ellipse cx="53" cy="20" rx="6" ry="4.5" fill="#15803d" />
      <circle cx="55" cy="19" r="1.2" fill="#ffffff" />
      <circle cx="55.5" cy="19" r="0.7" fill="#000000" />
      {/* Tail */}
      <path d="M12 20 L5 20" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* ── 6. CLOWNFISH / NEMO (Ikan Badut) ── */
export function ClownFish({ size = 35, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.6} height={size} viewBox="0 0 44 26" style={style} className={className}>
      <defs>
        <linearGradient id={`clownG-${size}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
      {/* Tail */}
      <path d="M10 13 L2 5 Q5 13 2 21 Z" fill={`url(#clownG-${size})`} stroke="#1e293b" strokeWidth="1" />
      <path d="M5 8 L3 6 M5 18 L3 20" stroke="#ffffff" strokeWidth="1.2" />
      {/* Body */}
      <ellipse cx="25" cy="13" rx="16" ry="10" fill={`url(#clownG-${size})`} />
      {/* White Stripes with Black Outlines */}
      <path d="M12 7 Q10 13 12 19" stroke="#1e293b" strokeWidth="3.5" fill="none" />
      <path d="M12 7 Q10 13 12 19" stroke="#ffffff" strokeWidth="2" fill="none" />
      <path d="M22 4 Q19 13 22 22" stroke="#1e293b" strokeWidth="4" fill="none" />
      <path d="M22 4 Q19 13 22 22" stroke="#ffffff" strokeWidth="2.5" fill="none" />
      <path d="M31 5 Q29 13 31 21" stroke="#1e293b" strokeWidth="3.5" fill="none" />
      <path d="M31 5 Q29 13 31 21" stroke="#ffffff" strokeWidth="2" fill="none" />
      {/* Fins */}
      <path d="M21 3 Q25 0 28 3" fill="#ea580c" stroke="#1e293b" strokeWidth="1" />
      <path d="M23 14 Q27 17 25 21" fill="#ea580c" stroke="#1e293b" strokeWidth="1" />
      {/* Eye */}
      <circle cx="35" cy="11" r="2.3" fill="#ffffff" />
      <circle cx="35.5" cy="11" r="1.2" fill="#0f172a" />
      <circle cx="35.2" cy="10.5" r="0.5" fill="#ffffff" />
    </svg>
  );
}

/* ── 7. BLUE TANG / DORY (Ikan Biru Ekor Kuning) ── */
export function BlueTang({ size = 35, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.6} height={size} viewBox="0 0 42 26" style={style} className={className}>
      {/* Yellow Tail */}
      <path d="M12 13 L2 5 Q6 13 2 21 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1.2" />
      {/* Main Body */}
      <ellipse cx="25" cy="13" rx="15" ry="11" fill="#2563eb" />
      {/* Black Wave Pattern */}
      <path d="M14 7 Q28 8 23 18 Q13 21 16 11 Z" fill="#0f172a" />
      <ellipse cx="22" cy="13" rx="4.5" ry="3" fill="#1d4ed8" />
      {/* Yellow Accents */}
      <path d="M23 3 Q30 1 33 4" fill="#facc15" />
      <path d="M21 23 Q28 25 31 22" fill="#facc15" />
      {/* Eye */}
      <circle cx="34" cy="11" r="2.5" fill="#ffffff" />
      <circle cx="34.5" cy="11" r="1.3" fill="#0f172a" />
    </svg>
  );
}

/* ── 8. SEAHORSE (Kuda Laut) ── */
export function Seahorse({ size = 45, color = '#f97316', style = {}, className = '' }: { size?: number; color?: string; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 0.65} height={size} viewBox="0 0 32 54" style={style} className={className}>
      {/* Snout & Crown */}
      <path d="M14 9 L17 5 L18 10 L21 7 L20 13" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M15 12 Q7 9 9 15 Q14 18 16 18 Z" fill={color} />
      <circle cx="13" cy="13" r="1.8" fill="#ffffff" />
      <circle cx="13" cy="13" r="0.9" fill="#0f172a" />
      {/* Body & Curled Tail */}
      <path d="M16 16 Q23 25 18 34 Q13 43 18 48 Q21 51 17 50 Q13 47 15 44" stroke={color} strokeWidth="6.5" fill="none" strokeLinecap="round" />
      {/* Fin */}
      <path d="M21 21 Q28 26 21 31" fill="#fde047" opacity="0.85" />
      {/* Belly Armor */}
      <path d="M13 23 L18 23 M12 28 L17 28 M13 33 L17 33" stroke="#ffedd5" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/* ── 9. MANTA RAY (Pari Raksasa) ── */
export function MantaRay({ size = 70, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.6} height={size} viewBox="0 0 85 54" style={style} className={className}>
      {/* Tail */}
      <path d="M42 40 Q44 60 38 78" stroke="#0f172a" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      {/* Wings Body */}
      <path d="M42 6 Q82 26 42 40 Q2 26 42 6 Z" fill="#1e293b" stroke="#475569" strokeWidth="1.2" />
      <path d="M42 10 Q66 25 42 34 Q18 25 42 10 Z" fill="#334155" opacity="0.8" />
      {/* Cephalic Horns */}
      <path d="M36 6 Q33 0 38 2 M48 6 Q51 0 46 2" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Glowing Spots */}
      <circle cx="38" cy="22" r="1.5" fill="#38bdf8" opacity="0.8" />
      <circle cx="46" cy="22" r="1.5" fill="#38bdf8" opacity="0.8" />
      <circle cx="42" cy="18" r="1.8" fill="#e2e8f0" opacity="0.9" />
      <circle cx="42" cy="28" r="1.4" fill="#38bdf8" opacity="0.7" />
    </svg>
  );
}

/* ── 10. OCTOPUS (Gurita Ceria) ── */
export function Octopus({ size = 45, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 44 50" style={style} className={className}>
      <ellipse cx="22" cy="20" rx="16" ry="15" fill="#a855f7" />
      <circle cx="16" cy="18" r="2.5" fill="#ffffff" />
      <circle cx="16" cy="18" r="1.3" fill="#000000" />
      <circle cx="28" cy="18" r="2.5" fill="#ffffff" />
      <circle cx="28" cy="18" r="1.3" fill="#000000" />
      <circle cx="12" cy="22" r="2" fill="#f472b6" opacity="0.7" />
      <circle cx="32" cy="22" r="2" fill="#f472b6" opacity="0.7" />
      <path d="M10 32 Q6 42 10 48 M15 34 Q14 44 18 48 M22 35 Q22 45 22 49 M29 34 Q30 44 26 48 M34 32 Q38 42 34 48" stroke="#a855f7" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ── 11. CRAB (Kepiting Pantai) ── */
export function Crab({ size = 35, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.25} height={size} viewBox="0 0 44 34" style={style} className={className}>
      {/* Legs */}
      <path d="M10 20 Q4 24 2 30 M12 23 Q6 29 5 33 M32 23 Q38 29 39 33 M34 20 Q40 24 42 30" stroke="#dc2626" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      {/* Shell */}
      <ellipse cx="22" cy="19" rx="13" ry="8.5" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.8" />
      <path d="M14 17 Q22 13 30 17" stroke="#fca5a5" strokeWidth="1.4" fill="none" />
      {/* Claws */}
      <path d="M11 15 Q3 9 6 3 Q12 3 14 11" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.8" />
      <path d="M33 15 Q41 9 38 3 Q32 3 30 11" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.8" />
      {/* Eyes */}
      <line x1="15" y1="11" x2="15" y2="5" stroke="#b91c1c" strokeWidth="2.2" />
      <circle cx="15" cy="5" r="2.5" fill="#ffffff" stroke="#b91c1c" strokeWidth="1" />
      <circle cx="15" cy="5" r="1.2" fill="#000000" />
      <line x1="29" y1="11" x2="29" y2="5" stroke="#b91c1c" strokeWidth="2.2" />
      <circle cx="29" cy="5" r="2.5" fill="#ffffff" stroke="#b91c1c" strokeWidth="1" />
      <circle cx="29" cy="5" r="1.2" fill="#000000" />
    </svg>
  );
}

/* ── 12. STARFISH (Bintang Laut Bertekstur) ── */
export function Starfish({ size = 32, color = '#f97316', style = {}, className = '' }: { size?: number; color?: string; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" style={style} className={className}>
      <path
        d="M18 2 Q20 11 23 13 Q32 13 34 16 Q27 22 25 24 Q29 33 25 35 Q18 29 15 30 Q9 35 7 32 Q10 24 5 20 Q11 16 13 13 Q15 11 18 2 Z"
        fill={color}
        stroke="rgba(0,0,0,0.2)"
        strokeWidth="1.2"
      />
      <circle cx="18" cy="18" r="2.8" fill="rgba(255,255,255,0.75)" />
      <circle cx="18" cy="10" r="1" fill="rgba(255,255,255,0.6)" />
      <circle cx="25" cy="17" r="1" fill="rgba(255,255,255,0.6)" />
      <circle cx="22" cy="26" r="1" fill="rgba(255,255,255,0.6)" />
      <circle cx="13" cy="25" r="1" fill="rgba(255,255,255,0.6)" />
      <circle cx="11" cy="16" r="1" fill="rgba(255,255,255,0.6)" />
    </svg>
  );
}

/* ── 13. SEAWEED & KELP (Hutan Rumput Laut) ── */
export function Seaweed({ height = 90, color = '#22c55e', style = {}, className = '' }: { height?: number; color?: string; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={height * 0.45} height={height} viewBox="0 0 40 90" style={style} className={className}>
      <path d="M25 90 Q35 68 25 45 Q15 22 26 0" stroke={color} strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.45" />
      <path d="M14 90 Q4 68 16 45 Q28 22 10 0" stroke={color} strokeWidth="5.5" fill="none" strokeLinecap="round" opacity="0.9" />
      <path d="M12 58 Q26 54 22 45 M11 30 Q-1 26 3 17" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

/* ── 14. STAGHORN CORAL (Karang Tanduk Rusa Bertingkat) ── */
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
        <linearGradient id={`stagGrad-${height}-${color.replace(/[^a-zA-Z0-9]/g, '')}`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={accentColor} />
        </linearGradient>
      </defs>
      {/* Trunk & Branches */}
      <path d="M40 90 L40 50 M40 65 L60 40 M40 55 L20 35 M40 45 L50 20 M40 40 L30 15" stroke={`url(#stagGrad-${height}-${color.replace(/[^a-zA-Z0-9]/g, '')})`} strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M60 40 L70 25 M60 40 L55 22 M20 35 L12 22 M20 35 L26 18 M50 20 L58 8 M30 15 L24 5 M30 15 L36 4" stroke={`url(#stagGrad-${height}-${color.replace(/[^a-zA-Z0-9]/g, '')})`} strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* Glowing Polyp Tips */}
      {[
        { cx: 70, cy: 25 }, { cx: 55, cy: 22 }, { cx: 12, cy: 22 }, { cx: 26, cy: 18 },
        { cx: 58, cy: 8 }, { cx: 24, cy: 5 }, { cx: 36, cy: 4 }, { cx: 50, cy: 20 },
      ].map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r="4" fill={accentColor} filter="drop-shadow(0 0 4px rgba(255,255,255,0.85))" />
      ))}
    </svg>
  );
}

/* ── 15. BRAIN CORAL (Karang Otak Bertekstur Meliuk) ── */
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
        <radialGradient id={`brainGrad-${size}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={ridgeColor} />
          <stop offset="45%" stopColor={color} />
          <stop offset="100%" stopColor="#4c1d95" />
        </radialGradient>
      </defs>
      {/* Base Dome */}
      <path d="M10 55 Q5 25 30 12 Q45 4 60 12 Q85 25 80 55 Q45 68 10 55 Z" fill={`url(#brainGrad-${size})`} stroke="#4c1d95" strokeWidth="2" />
      {/* Intricate Grooves */}
      <path d="M22 45 Q30 38 25 28 Q35 20 45 28 Q55 35 48 45" stroke={ridgeColor} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85" />
      <path d="M35 52 Q45 45 40 36 Q50 30 60 38 Q68 45 62 52" stroke={ridgeColor} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85" />
      <path d="M20 32 Q15 20 28 16 Q36 22 45 15 Q55 20 65 16 Q75 22 72 34" stroke={ridgeColor} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.75" />
      <path d="M58 24 Q68 28 66 38 Q74 44 70 52" stroke={ridgeColor} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.75" />
    </svg>
  );
}

/* ── 16. TUBE SPONGES (Spons Tabung Bersarang) ── */
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
        <linearGradient id={`tubeGrad-${height}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0369a1" />
          <stop offset="40%" stopColor={rimColor} />
          <stop offset="80%" stopColor={color} />
          <stop offset="100%" stopColor="#082f49" />
        </linearGradient>
      </defs>
      {/* Tube 1 */}
      <rect x="6" y="32" width="14" height="50" rx="7" fill={`url(#tubeGrad-${height})`} />
      <ellipse cx="13" cy="32" rx="7" ry="4" fill="#082f49" stroke={rimColor} strokeWidth="1.5" />
      {/* Tube 2 */}
      <rect x="22" y="10" width="18" height="72" rx="9" fill={`url(#tubeGrad-${height})`} />
      <ellipse cx="31" cy="10" rx="9" ry="5" fill="#082f49" stroke={rimColor} strokeWidth="2" />
      <circle cx="31" cy="4" r="2.5" fill="rgba(255,255,255,0.8)" filter="drop-shadow(0 0 4px #38bdf8)" />
      {/* Tube 3 */}
      <rect x="42" y="24" width="15" height="58" rx="7.5" fill={`url(#tubeGrad-${height})`} />
      <ellipse cx="49.5" cy="24" rx="7.5" ry="4.5" fill="#082f49" stroke={rimColor} strokeWidth="1.5" />
    </svg>
  );
}

/* ── 17. SEA ANEMONE (Anemon Laut Tentakel Lembut) ── */
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
      <path d="M20 58 Q30 50 40 58 L38 48 Q30 45 22 48 Z" fill="#9f1239" />
      {tentacles.map((t, i) => (
        <g key={i}>
          <path d={t.d} stroke={color} strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <circle cx={t.tip[0]} cy={t.tip[1]} r="3" fill={tipColor} filter="drop-shadow(0 0 4px rgba(255,255,255,0.9))" />
        </g>
      ))}
    </svg>
  );
}

/* ── 18. SEA FAN (Karang Kipas Jala Indah) ── */
export function SeaFan({ height = 90, color = '#f97316', style = {}, className = '' }: { height?: number; color?: string; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={height * 1.1} height={height} viewBox="0 0 100 90" style={style} className={className}>
      <path d="M50 90 L50 65" stroke="#7c2d12" strokeWidth="5" strokeLinecap="round" />
      <path d="M50 65 Q20 45 8 20 Q50 5 92 20 Q80 45 50 65 Z" fill={color} opacity="0.25" />
      <path d="M50 65 Q30 40 18 18 M50 65 Q40 35 34 10 M50 65 Q50 30 50 8 M50 65 Q60 35 66 10 M50 65 Q70 40 82 18" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M20 40 Q50 30 80 40 M12 25 Q50 15 88 25" stroke={color} strokeWidth="1.8" fill="none" opacity="0.75" />
    </svg>
  );
}

/* ── 19. SUNKEN ANCHOR (Jangkar Berkarat Berlumut) ── */
export function SunkenAnchor({ size = 55, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 0.8} height={size} viewBox="0 0 48 60" style={style} className={className}>
      <circle cx="24" cy="9" r="6" stroke="#64748b" strokeWidth="3" fill="none" />
      <line x1="8" y1="18" x2="40" y2="18" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
      <circle cx="8" cy="18" r="2.5" fill="#94a3b8" />
      <circle cx="40" cy="18" r="2.5" fill="#94a3b8" />
      <line x1="24" y1="12" x2="24" y2="52" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
      <path d="M6 38 Q24 58 42 38" stroke="#334155" strokeWidth="5.5" strokeLinecap="round" fill="none" />
      <polygon points="6,38 3,30 11,35" fill="#475569" />
      <polygon points="42,38 45,30 37,35" fill="#475569" />
      <path d="M22 28 Q18 22 23 16" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M26 44 Q32 40 28 35" stroke="#16a34a" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ── 20. GIANT CLAM (Kerang Raksasa Mutiara Bercahaya) ── */
export function GiantClam({ size = 65, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.25} height={size} viewBox="0 0 90 70" style={style} className={className}>
      <defs>
        <linearGradient id={`clamG-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fce7f3" />
          <stop offset="45%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#be185d" />
        </linearGradient>
        <radialGradient id={`pearlG-${size}`} cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </radialGradient>
      </defs>
      {/* Outer Shell */}
      <path d="M10,55 Q45,80 80,55 Q85,30 45,20 Q5,30 10,55Z" fill={`url(#clamG-${size})`} stroke="#9d174d" strokeWidth="2.5" />
      {/* Ridges */}
      <path d="M20,50 Q45,68 70,50" fill="none" stroke="#fbcfe8" strokeWidth="2" />
      <path d="M28,45 Q45,60 62,45" fill="none" stroke="#fbcfe8" strokeWidth="2" />
      {/* Pearl with soft glow */}
      <circle cx="45" cy="42" r="12" fill={`url(#pearlG-${size})`} filter="drop-shadow(0 0 10px rgba(255,255,255,0.95))" />
      <circle cx="41" cy="38" r="3.5" fill="#ffffff" opacity="0.9" />
    </svg>
  );
}
