import { useEffect, useRef, useState } from 'react';
import { Calendar, Phone } from 'lucide-react';
import { Jellyfish, AnglerFish, Seahorse, MantaRay, CoralBranch, Seaweed, Bubble } from './MarineBiota';

const timelineItems = [
  {
    id: 1,
    stepNumber: "01",
    title: "Open Registration",
    date: "02 Sep – 10 Okt 2026",
    desc: "Daftarkan timmu sebelum kuota habis!",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.5)",
    side: "left" as const,
  },
  {
    id: 2,
    stepNumber: "02",
    title: "Technical Meeting",
    date: "11 Oktober 2026",
    desc: "Penjelasan teknis dan pengundian nomor peserta.",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.5)",
    side: "right" as const,
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Competition Day",
    date: "12–17 Oktober 2026",
    desc: "Enam hari penuh aksi & kompetisi sengit!",
    color: "#fb923c",
    glow: "rgba(251,146,60,0.5)",
    side: "left" as const,
  },
  {
    id: 4,
    stepNumber: "04",
    title: "Awarding Ceremony",
    date: "31 Oktober 2026",
    desc: "Pengumuman juara & momen kemenangan bersama.",
    color: "#facc15",
    glow: "rgba(250,204,21,0.5)",
    side: "right" as const,
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* Animated node that pulses when visible */
function TimelineNode({ color, glow, step, visible, delay }: {
  color: string; glow: string; step: string; visible: boolean; delay: number;
}) {
  return (
    <div
      style={{
        width: 64, height: 64, borderRadius: '50%', flexShrink: 0,
        background: `radial-gradient(circle at 35% 30%, ${color}33 0%, ${color}11 100%)`,
        border: `2.5px solid ${color}`,
        boxShadow: visible ? `0 0 0 8px ${glow.replace('0.5', '0.15')}, 0 0 24px ${glow}` : 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', zIndex: 3,
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.4)',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms, box-shadow 0.5s ease ${delay}ms`,
      }}
    >
      {/* Inner pulse ring */}
      {visible && (
        <div style={{
          position: 'absolute', inset: -6, borderRadius: '50%',
          border: `1.5px solid ${color}`,
          animation: 'tl-pulse 2s ease-out infinite',
          animationDelay: `${delay}ms`,
          opacity: 0,
        }} />
      )}
      <span style={{
        fontFamily: "'Fredoka', sans-serif",
        fontWeight: 900, fontSize: 20,
        color, letterSpacing: '-0.01em',
        textShadow: `0 0 12px ${glow}`,
      }}>
        {step}
      </span>
    </div>
  );
}

/* Single timeline event card */
function TimelineCard({ item, idx, visible }: {
  item: typeof timelineItems[0]; idx: number; visible: boolean;
}) {
  const delay = idx * 200 + 150;
  const isLeft = item.side === 'left';

  return (
    <div style={{
      display: 'flex',
      flexDirection: isLeft ? 'row' : 'row-reverse',
      alignItems: 'center',
      gap: 0,
      width: '100%',
      position: 'relative',
    }}>
      {/* Card side */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: isLeft ? 'flex-end' : 'flex-start',
        paddingRight: isLeft ? 28 : 0,
        paddingLeft: isLeft ? 0 : 28,
      }}>
        <div
          style={{
            maxWidth: 260,
            width: '100%',
            padding: '18px 20px',
            borderRadius: 20,
            background: `linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)`,
            border: `1.5px solid ${item.color}55`,
            backdropFilter: 'blur(12px)',
            boxShadow: visible ? `0 8px 32px rgba(0,0,0,0.3), 0 0 20px ${item.glow.replace('0.5', '0.12')}` : 'none',
            opacity: visible ? 1 : 0,
            transform: visible
              ? 'translateX(0) translateY(0)'
              : `translateX(${isLeft ? 40 : -40}px) translateY(10px)`,
            transition: `opacity 0.55s ease ${delay}ms, transform 0.6s cubic-bezier(0.25,1,0.5,1) ${delay}ms, box-shadow 0.55s ease ${delay}ms`,
          }}
        >
          {/* Step badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            marginBottom: 8,
            padding: '2px 10px', borderRadius: 99,
            backgroundColor: `${item.color}22`,
            border: `1px solid ${item.color}55`,
          }}>
            <span style={{
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 800, fontSize: 11,
              color: item.color, letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              Step {item.stepNumber}
            </span>
          </div>

          <h3 style={{
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: 900, fontSize: 22, lineHeight: 1.2,
            color: 'white', margin: 0, marginBottom: 6,
            textShadow: `0 2px 12px rgba(0,0,0,0.4)`,
          }}>
            {item.title}
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <Calendar size={13} color={item.color} />
            <span style={{
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 600, fontSize: 13, color: item.color,
            }}>
              {item.date}
            </span>
          </div>

          <p style={{
            fontSize: 13, lineHeight: 1.55,
            color: 'rgba(255,255,255,0.75)', margin: 0,
          }}>
            {item.desc}
          </p>
        </div>
      </div>

      {/* Center node */}
      <TimelineNode
        color={item.color}
        glow={item.glow}
        step={item.stepNumber}
        visible={visible}
        delay={delay - 100}
      />

      {/* Spacer opposite side */}
      <div style={{ flex: 1 }} />
    </div>
  );
}

/* The winding SVG path that connects all nodes */
function WindingPath({ visible }: { visible: boolean }) {
  const PATH = "M 300 30 C 160 30 60 140 160 250 C 260 360 440 350 440 460 C 440 570 160 560 160 670 C 160 760 280 790 300 790";

  return (
    <svg
      viewBox="0 0 600 820"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'visible',
      }}
    >
      <defs>
        <linearGradient id="pathGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="33%"  stopColor="#a78bfa" stopOpacity="0.9" />
          <stop offset="66%"  stopColor="#fb923c" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#facc15" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Background ghost path */}
      <path
        d={PATH}
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth={5}
        strokeDasharray="12 10"
        strokeLinecap="round"
      />

      {/* Animated foreground path — draws in on scroll */}
      <path
        d={PATH}
        fill="none"
        stroke="url(#pathGrad)"
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeDasharray="12 10"
        pathLength={1000}
        style={{
          strokeDashoffset: visible ? 0 : 1000,
          transition: visible
            ? 'stroke-dashoffset 2.2s cubic-bezier(0.4,0,0.2,1) 0.1s'
            : 'none',
        }}
      />

      {/* Glowing dot that slides along — emulated with a circle at path midpoints */}
    </svg>
  );
}

export default function Timeline() {
  const { ref: sectionRef, visible } = useInView(0.1);

  return (
    <section
      id="timeline"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #2a0a5e 0%, #220855 40%, #18063d 75%, #100526 100%)' }}
    >
      <style>{`
        @keyframes tl-pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes tl-node-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* ── Top Camouflage ── */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '220px', background: 'linear-gradient(180deg, #2a0a5e 0%, transparent 100%)' }} />
      {/* ── Bottom Camouflage ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '220px', background: 'linear-gradient(180deg, transparent 0%, #100526 100%)' }} />

      {/* ── Ocean Biota Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(192,132,252,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(192,132,252,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)', filter: 'blur(70px)' }} />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)', filter: 'blur(70px)' }} />

        <div className="anim-jelly" style={{ position: 'absolute', top: '8%', right: '4%', opacity: 0.7, animationDuration: '8s' }}>
          <Jellyfish size={52} color="rgba(192,132,252,0.85)" />
        </div>
        <div className="anim-jelly" style={{ position: 'absolute', top: '55%', left: '2%', opacity: 0.65, animationDuration: '12s' }}>
          <AnglerFish size={46} />
        </div>
        <div className="anim-jelly" style={{ position: 'absolute', bottom: '18%', right: '3%', opacity: 0.75, animationDuration: '7s' }}>
          <Seahorse size={38} />
        </div>
        <div className="anim-swim-right" style={{ position: 'absolute', top: '38%', left: '-8%', opacity: 0.4, animationDuration: '30s' }}>
          <MantaRay size={70} />
        </div>
        <div className="anim-sway" style={{ position: 'absolute', bottom: '10px', left: '1%', opacity: 0.5 }}>
          <Seaweed height={75} color="#9333ea" />
        </div>
        <div className="anim-sway" style={{ position: 'absolute', bottom: '5px', left: '5%', opacity: 0.55, animationDuration: '4.8s', animationDelay: '0.8s' }}>
          <CoralBranch height={50} color="#38bdf8" />
        </div>
        <div className="anim-sway" style={{ position: 'absolute', bottom: '10px', right: '2%', opacity: 0.45 }}>
          <Seaweed height={80} color="#0284c7" />
        </div>
        {[
          { left: '15%', delay: '0s', size: 9 },
          { left: '40%', delay: '1.2s', size: 7 },
          { left: '70%', delay: '0.6s', size: 11 },
          { left: '90%', delay: '2s', size: 8 },
        ].map((b, i) => (
          <div key={i} className="anim-bubble-rise" style={{ position: 'absolute', bottom: '20px', left: b.left, animationDelay: b.delay, animationDuration: '4.5s' }}>
            <Bubble size={b.size} />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <span
            className="poster-font inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: 'var(--color-orange-light)' }}
          >
            <span className="w-5 h-0.5 rounded" style={{ backgroundColor: 'var(--color-orange)' }} />
            Rangkaian Kegiatan
            <span className="w-5 h-0.5 rounded" style={{ backgroundColor: 'var(--color-orange)' }} />
          </span>
          <h2 className="poster-font text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Timeline{' '}
            <span className="text-stroke-white text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #FF7A45 0%, #FFB088 100%)' }}>
              FAMOUS 6.0
            </span>
          </h2>
          <p className="mt-4 text-base text-white/80 font-medium max-w-lg mx-auto">
            Ikuti setiap tahapan FAMOUS VI 2026 — dari pendaftaran hingga momen puncak Awarding Ceremony!
          </p>
        </div>

        {/* ── Winding Timeline ── */}
        <div ref={sectionRef} style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          {/* The animated SVG path */}
          <WindingPath visible={visible} />

          {/* Event cards stacked vertically with alternating sides */}
          <div style={{
            display: 'flex', flexDirection: 'column',
            gap: 0, position: 'relative', zIndex: 2,
            paddingTop: 10, paddingBottom: 10,
          }}>
            {timelineItems.map((item, idx) => (
              <div key={item.id} style={{ marginBottom: idx < timelineItems.length - 1 ? 60 : 0 }}>
                <TimelineCard item={item} idx={idx} visible={visible} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Quick Stats Row ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
          {[
            { value: '02 Sep', label: 'Buka Pendaftaran' },
            { value: '10 Okt', label: 'Tutup Pendaftaran' },
            { value: '8', label: 'Cabang Lomba' },
            { value: 'Bogor', label: 'Lokasi Pelaksanaan' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-4 text-center"
              style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)' }}
            >
              <div className="poster-font text-2xl font-black" style={{ color: 'var(--color-orange-light)' }}>{stat.value}</div>
              <div className="text-xs mt-1 text-white/75 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ── Contact Person ── */}
        <div className="mt-8 max-w-sm mx-auto p-5 rounded-2xl" style={{ backgroundColor: 'rgba(232,76,30,0.13)', border: '1px solid rgba(232,76,30,0.28)' }}>
          <div className="poster-font text-xs font-bold mb-3 text-orange-400 uppercase tracking-wider text-center">Contact Person</div>
          <div className="flex flex-col gap-1.5">
            {[
              { name: 'Diza', phone: '081343059590' },
              { name: 'Hendra', phone: '081400842090' },
              { name: 'Ustadz Ahad', phone: '08212134290' },
            ].map((cp) => (
              <div key={cp.name} className="flex items-center gap-2 text-sm text-white/90 font-medium">
                <Phone size={13} className="text-orange-400 flex-shrink-0" />
                <span>{cp.phone} <span className="text-white/55">({cp.name})</span></span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
