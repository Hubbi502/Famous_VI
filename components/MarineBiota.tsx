import React from 'react';

/* ── 0. JELLYFISH (Ubur-Ubur) ── */
export function Jellyfish({ size = 55, color = 'rgba(192,132,252,0.85)', style = {}, className = '' }: { size?: number; color?: string; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 50 70" style={style} className={className}>
      <ellipse cx="25" cy="20" rx="20" ry="16" fill={color} stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      {/* Inner glow dome */}
      <ellipse cx="25" cy="18" rx="12" ry="10" fill="rgba(255,255,255,0.15)" />
      <ellipse cx="20" cy="14" rx="4" ry="3" fill="rgba(255,255,255,0.35)" />
      {/* Tentacles */}
      <path d="M12 34 Q8 50 12 66"  stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M18 36 Q16 52 20 66" stroke={color} strokeWidth="2"   fill="none" strokeLinecap="round" />
      <path d="M25 37 Q25 53 25 67" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M32 36 Q34 52 30 66" stroke={color} strokeWidth="2"   fill="none" strokeLinecap="round" />
      <path d="M38 34 Q42 50 38 66" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ── 0b. ANGLER FISH (Ikan Senter Laut Dalam) ── */
export function AnglerFish({ size = 55, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.4} height={size} viewBox="0 0 70 50" style={style} className={className}>
      {/* Lure/Lantern stem */}
      <path d="M35 8 Q28 2 30 -4" stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="28" cy="-5" r="5" fill="#fef08a" filter="drop-shadow(0 0 8px #fef08a)" />
      {/* Body */}
      <ellipse cx="38" cy="28" rx="28" ry="18" fill="#1e1b4b" />
      <ellipse cx="42" cy="26" rx="20" ry="14" fill="#312e81" />
      {/* Dorsal spike fins */}
      <path d="M22 14 Q28 8 34 14 M34 14 Q40 7 46 14" stroke="#4c1d95" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Big mouth with teeth */}
      <path d="M12 28 Q20 38 36 36" stroke="#0f172a" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M14 29 L16 34 M20 31 L21 37 M26 32 L27 37 M32 32 L33 36" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      {/* Eyes */}
      <circle cx="18" cy="22" r="5" fill="rgba(250,204,21,0.9)" />
      <circle cx="17" cy="21" r="2" fill="#000" />
      <circle cx="16" cy="20" r="0.8" fill="#fff" />
      {/* Tail */}
      <path d="M65 20 L70 12 L70 28Z" fill="#1e1b4b" />
      <path d="M60 25 L65 20 L65 28Z" fill="#312e81" />
    </svg>
  );
}

/* ── 0c. BUBBLE RISING ── */
export function Bubble({ size = 14, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" style={style} className={className}>
      <circle cx="10" cy="10" r="9" fill="none" stroke="rgba(160,230,255,0.55)" strokeWidth="1.5" />
      <circle cx="7" cy="7" r="3" fill="rgba(255,255,255,0.25)" />
    </svg>
  );
}

/* ── 0d. CORAL BRANCH ── */
export function CoralBranch({ height = 80, color = '#f97316', style = {}, className = '' }: { height?: number; color?: string; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={height * 0.6} height={height} viewBox="0 0 36 80" style={style} className={className}>
      <path d="M18 80 L18 45 M18 60 L30 40 M18 55 L8 38 M18 45 L28 25 M18 45 L6 26" stroke={color} strokeWidth="5" strokeLinecap="round" fill="none" />
      <circle cx="30" cy="40" r="3" fill={color} />
      <circle cx="8" cy="38" r="3" fill={color} />
      <circle cx="28" cy="25" r="3" fill={color} />
      <circle cx="6" cy="26" r="3" fill={color} />
      <circle cx="18" cy="80" r="5" fill={color} opacity="0.4" />
    </svg>
  );
}

/* ── 1. SEA TURTLE (Penyu Laut) ── */
export function SeaTurtle({ size = 50, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.5} height={size} viewBox="0 0 60 40" style={style} className={className}>
      {/* Shell */}
      <ellipse cx="30" cy="20" rx="18" ry="13" fill="#15803d" stroke="#166534" strokeWidth="2" />
      <path d="M18 20 Q30 12 42 20 M18 20 Q30 28 42 20 M30 7 L30 33" stroke="#4ade80" strokeWidth="1.5" fill="none" />
      <circle cx="30" cy="20" r="5" fill="#166534" opacity="0.4" />
      {/* Flippers */}
      <path d="M38 12 Q52 2 55 14 Q44 17 38 16" fill="#166534" />
      <path d="M38 28 Q52 38 55 26 Q44 23 38 24" fill="#166534" />
      <path d="M18 13 Q10 7 8 15 Q15 16 18 16" fill="#15803d" />
      <path d="M18 27 Q10 33 8 25 Q15 24 18 24" fill="#15803d" />
      {/* Head & Eye */}
      <ellipse cx="53" cy="20" rx="6" ry="4.5" fill="#15803d" />
      <circle cx="55" cy="19" r="1" fill="#ffffff" />
      {/* Tail */}
      <path d="M12 20 L5 20" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* ── 2. CLOWNFISH / NEMO (Ikan Badut Orange-Putih) ── */
export function ClownFish({ size = 35, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.75} height={size} viewBox="0 0 42 24" style={style} className={className}>
      {/* Tail Fin */}
      <path d="M10 12 L2 4 L4 12 L2 20Z" fill="#f97316" stroke="#c2410c" strokeWidth="1" />
      <path d="M5 7 L2 4 M5 17 L2 20" stroke="#ffffff" strokeWidth="1" />
      {/* Body */}
      <ellipse cx="24" cy="12" rx="15" ry="9" fill="#f97316" />
      {/* White Stripes with Black Borders */}
      <path d="M28 3 Q25 12 28 21" stroke="#000000" strokeWidth="3.5" fill="none" />
      <path d="M28 3 Q25 12 28 21" stroke="#ffffff" strokeWidth="2" fill="none" />
      <path d="M20 4 Q17 12 20 20" stroke="#000000" strokeWidth="3" fill="none" />
      <path d="M20 4 Q17 12 20 20" stroke="#ffffff" strokeWidth="1.5" fill="none" />
      {/* Fins */}
      <path d="M22 3 Q26 0 29 3" fill="#f97316" stroke="#c2410c" strokeWidth="1" />
      <path d="M21 14 Q25 18 23 21" fill="#f97316" stroke="#c2410c" strokeWidth="1" />
      {/* Eye & Mouth */}
      <circle cx="34" cy="10" r="2" fill="#ffffff" />
      <circle cx="34.5" cy="10" r="1" fill="#000000" />
      <path d="M38 13 Q36 15 38 16" stroke="#c2410c" strokeWidth="1" fill="none" />
    </svg>
  );
}

/* ── 3. BLUE TANG / DORY (Ikan Biru-Kuning) ── */
export function BlueTang({ size = 35, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.6} height={size} viewBox="0 0 40 25" style={style} className={className}>
      {/* Yellow Tail */}
      <path d="M12 12.5 L2 5 L5 12.5 L2 20Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
      {/* Main Body */}
      <ellipse cx="24" cy="12.5" rx="14" ry="10" fill="#2563eb" />
      {/* Black Wave Pattern */}
      <path d="M16 5 Q28 8 22 18 Q14 20 18 10Z" fill="#0f172a" />
      {/* Yellow Fin accent */}
      <path d="M22 3 Q28 1 31 4" fill="#facc15" />
      {/* Eye */}
      <circle cx="32" cy="10" r="2" fill="#ffffff" />
      <circle cx="32.5" cy="10" r="1" fill="#0f172a" />
    </svg>
  );
}

/* ── 4. SEAHORSE (Kuda Laut) ── */
export function Seahorse({ size = 45, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 0.6} height={size} viewBox="0 0 28 50" style={style} className={className}>
      {/* Crown / Snout Head */}
      <path d="M12 10 Q6 8 8 14 Q12 16 14 16 L14 8 Z" fill="#fb923c" />
      <circle cx="11" cy="11" r="1.5" fill="#ffffff" />
      <circle cx="11" cy="11" r="0.8" fill="#000000" />
      {/* Curved Body & Curled Tail */}
      <path d="M14 14 Q20 22 16 32 Q12 40 16 45 Q18 48 15 47 Q12 45 14 42" stroke="#f97316" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Back Fin */}
      <path d="M18 20 Q24 24 18 28" fill="#fdba74" opacity="0.8" />
      {/* Belly Ridges */}
      <path d="M12 20 L16 20 M11 24 L16 24 M12 28 L15 28" stroke="#ffedd5" strokeWidth="1.5" />
    </svg>
  );
}

/* ── 5. MANTA RAY (Ikan Pari) ── */
export function MantaRay({ size = 70, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.6} height={size} viewBox="0 0 80 50" style={style} className={className}>
      {/* Diamond Wings Body */}
      <path d="M40 5 Q78 25 40 38 Q2 25 40 5Z" fill="#1e293b" opacity="0.85" />
      <path d="M40 10 Q65 24 40 33 Q15 24 40 10Z" fill="#334155" opacity="0.9" />
      {/* Cephalic Fins / Horns */}
      <path d="M34 5 Q32 0 36 2 M46 5 Q48 0 44 2" stroke="#1e293b" strokeWidth="3" fill="none" />
      {/* Long Whip Tail */}
      <path d="M40 38 Q42 55 38 70" stroke="#0f172a" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Gills / White belly spots */}
      <circle cx="36" cy="22" r="1.5" fill="#94a3b8" opacity="0.6" />
      <circle cx="44" cy="22" r="1.5" fill="#94a3b8" opacity="0.6" />
      <circle cx="38" cy="26" r="1.2" fill="#94a3b8" opacity="0.5" />
      <circle cx="42" cy="26" r="1.2" fill="#94a3b8" opacity="0.5" />
    </svg>
  );
}

/* ── 6. OCTOPUS (Gurita Ceria) ── */
export function Octopus({ size = 45, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 44 50" style={style} className={className}>
      {/* Head Dome */}
      <ellipse cx="22" cy="20" rx="16" ry="15" fill="#a855f7" />
      {/* Eyes & Blush */}
      <circle cx="16" cy="18" r="2.5" fill="#ffffff" />
      <circle cx="16" cy="18" r="1.3" fill="#000000" />
      <circle cx="28" cy="18" r="2.5" fill="#ffffff" />
      <circle cx="28" cy="18" r="1.3" fill="#000000" />
      <circle cx="12" cy="22" r="2" fill="#f472b6" opacity="0.7" />
      <circle cx="32" cy="22" r="2" fill="#f472b6" opacity="0.7" />
      {/* Wavy Tentacles */}
      <path d="M10 32 Q6 42 10 48 M15 34 Q14 44 18 48 M22 35 Q22 45 22 49 M29 34 Q30 44 26 48 M34 32 Q38 42 34 48" stroke="#a855f7" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ── 7. CRAB (Kepiting Pantai) ── */
export function Crab({ size = 35, style = {}, className = '' }: { size?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size * 1.2} height={size} viewBox="0 0 40 32" style={style} className={className}>
      {/* Oval Body */}
      <ellipse cx="20" cy="18" rx="12" ry="8" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.5" />
      {/* Eyes on Stalks */}
      <line x1="14" y1="10" x2="14" y2="6" stroke="#b91c1c" strokeWidth="2" />
      <circle cx="14" cy="5" r="2" fill="#ffffff" />
      <circle cx="14" cy="5" r="1" fill="#000000" />
      <line x1="26" y1="10" x2="26" y2="6" stroke="#b91c1c" strokeWidth="2" />
      <circle cx="26" cy="5" r="2" fill="#ffffff" />
      <circle cx="26" cy="5" r="1" fill="#000000" />
      {/* Claws */}
      <path d="M10 15 Q2 10 5 4 Q10 4 12 12" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.5" />
      <path d="M30 15 Q38 10 35 4 Q30 4 28 12" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.5" />
      {/* Legs */}
      <path d="M10 20 Q4 24 2 28 M12 22 Q6 28 5 31 M28 22 Q34 28 35 31 M30 20 Q36 24 38 28" stroke="#b91c1c" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ── 8. STARFISH (Bintang Laut) ── */
export function Starfish({ size = 30, color = "#f97316", style = {}, className = '' }: { size?: number; color?: string; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" style={style} className={className}>
      <path d="M15 2 L19 11 L28 12 L21 18 L24 27 L15 22 L6 27 L9 18 L2 12 L11 11 Z" fill={color} stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="15" cy="15" r="2" fill="rgba(255,255,255,0.6)" />
    </svg>
  );
}

/* ── 9. SEAWEED & KELP (Rumput Laut Swaying) ── */
export function Seaweed({ height = 80, color = "#22c55e", style = {}, className = '' }: { height?: number; color?: string; style?: React.CSSProperties; className?: string }) {
  return (
    <svg width={height * 0.4} height={height} viewBox="0 0 30 80" style={style} className={className}>
      <path d="M15 80 Q5 60 15 40 Q25 20 10 0" stroke={color} strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.85" />
      <path d="M22 80 Q28 65 20 48 Q12 30 22 12" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

/* ── 10. CORAL REEF LEFT & RIGHT (Tepi Batu & Koral Asli) ── */
import coralLeftImg from '../assets/img/coral_reef_left.png';
import coralRightImg from '../assets/img/coral_reef_right.png';

export { coralLeftImg, coralRightImg };

export function CoralReefLeft({ width = '100%', style = {}, className = '' }: { width?: string | number; style?: React.CSSProperties; className?: string }) {
  return (
    <img
      src={coralLeftImg}
      alt="Coral Reef Left"
      className={`pointer-events-none select-none ${className}`}
      style={{ width, height: 'auto', ...style }}
    />
  );
}

export function CoralReefRight({ width = '100%', style = {}, className = '' }: { width?: string | number; style?: React.CSSProperties; className?: string }) {
  return (
    <img
      src={coralRightImg}
      alt="Coral Reef Right"
      className={`pointer-events-none select-none ${className}`}
      style={{ width, height: 'auto', ...style }}
    />
  );
}

