import { useEffect, useRef, useState } from 'react';
import { Calendar, Phone, ChevronRight } from 'lucide-react';
import { Jellyfish, AnglerFish, Seahorse, MantaRay, Bubble } from './MarineBiota';

const timelineItems = [
  {
    id: 1,
    step: '01',
    title: 'Open Registration',
    date: '02 Sep – 10 Okt 2026',
    desc: 'Daftarkan tim sebelum kuota habis!',
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.45)',
    bg: 'rgba(56,189,248,0.1)',
    border: 'rgba(56,189,248,0.3)',
  },
  {
    id: 2,
    step: '02',
    title: 'Technical Meeting',
    date: '11 Oktober 2026',
    desc: 'Penjelasan teknis & pengundian nomor peserta.',
    color: '#c084fc',
    glow: 'rgba(192,132,252,0.45)',
    bg: 'rgba(192,132,252,0.1)',
    border: 'rgba(192,132,252,0.3)',
  },
  {
    id: 3,
    step: '03',
    title: 'Competition Day',
    date: '15–17 Oktober 2026',
    desc: 'Tiga hari penuh aksi & kompetisi sengit!',
    color: '#fb923c',
    glow: 'rgba(251,146,60,0.45)',
    bg: 'rgba(251,146,60,0.1)',
    border: 'rgba(251,146,60,0.3)',
  },
  {
    id: 4,
    step: '04',
    title: 'Awarding Ceremony',
    date: '31 Oktober 2026',
    desc: 'Pengumuman juara & momen kemenangan!',
    color: '#facc15',
    glow: 'rgba(250,204,21,0.45)',
    bg: 'rgba(250,204,21,0.1)',
    border: 'rgba(250,204,21,0.3)',
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

export default function Timeline() {
  const { ref, visible } = useInView(0.1);

  return (
    <section
      id="timeline"
      className="py-20 lg:py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #2a0a5e 0%, #220855 40%, #18063d 75%, #100526 100%)' }}
    >
      {/* Camouflage fades */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '200px', background: 'linear-gradient(180deg, #2a0a5e 0%, transparent 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '200px', background: 'linear-gradient(180deg, transparent 0%, #100526 100%)' }} />

      {/* Ocean biota background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(192,132,252,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(192,132,252,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)', filter: 'blur(70px)' }} />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)', filter: 'blur(70px)' }} />
        <div className="anim-jelly" style={{ position: 'absolute', top: '12%', right: '4%', opacity: 0.65, animationDuration: '8s' }}>
          <Jellyfish size={48} color="rgba(192,132,252,0.8)" />
        </div>
        <div className="anim-jelly" style={{ position: 'absolute', top: '52%', left: '2%', opacity: 0.6, animationDuration: '11s' }}>
          <AnglerFish size={44} />
        </div>
        <div className="anim-jelly" style={{ position: 'absolute', bottom: '20%', right: '3%', opacity: 0.7, animationDuration: '7s' }}>
          <Seahorse size={36} />
        </div>
        <div className="anim-swim-right" style={{ position: 'absolute', top: '35%', left: '-8%', opacity: 0.4, animationDuration: '30s' }}>
          <MantaRay size={65} />
        </div>
        {[
          { left: '20%', delay: '0s', size: 8 },
          { left: '50%', delay: '1.3s', size: 10 },
          { left: '78%', delay: '0.7s', size: 7 },
        ].map((b, i) => (
          <div key={i} className="anim-bubble-rise" style={{ position: 'absolute', bottom: '20px', left: b.left, animationDelay: b.delay, animationDuration: '4.5s' }}>
            <Bubble size={b.size} />
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="poster-font inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--color-orange-light)' }}>
            <span className="w-5 h-0.5 rounded" style={{ backgroundColor: 'var(--color-orange)' }} />
            Rangkaian Kegiatan
            <span className="w-5 h-0.5 rounded" style={{ backgroundColor: 'var(--color-orange)' }} />
          </span>
          <h2 className="poster-font text-4xl sm:text-5xl font-black text-white">
            Timeline{' '}
            <span className="text-stroke-white text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #FF7A45 0%, #FFB088 100%)' }}>
              FAMOUS 6.0
            </span>
          </h2>
        </div>

        {/* ── Winding Timeline Path — Desktop: alternating L/R, Mobile: vertical ── */}
        <div ref={ref} className="relative">

          {/* Desktop layout */}
          <div className="hidden md:block">
            {/* SVG winding connector path */}
            <svg
              className="absolute inset-0 w-full pointer-events-none"
              style={{ height: '100%', zIndex: 1, overflow: 'visible' }}
              viewBox="0 0 800 520"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="tlGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="33%" stopColor="#c084fc" />
                  <stop offset="66%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#facc15" />
                </linearGradient>
              </defs>
              {/* Ghost track */}
              <path
                d="M 130 65 C 200 65 260 195 400 195 C 540 195 600 325 670 325"
                fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={4}
                strokeDasharray="10 8" strokeLinecap="round"
              />
              {/* Animated path */}
              <path
                d="M 130 65 C 200 65 260 195 400 195 C 540 195 600 325 670 325"
                fill="none" stroke="url(#tlGrad)" strokeWidth={2.5}
                strokeDasharray="10 8" strokeLinecap="round"
                pathLength={1000}
                style={{
                  strokeDashoffset: visible ? 0 : 1000,
                  transition: visible ? 'stroke-dashoffset 1.8s cubic-bezier(0.4,0,0.2,1) 0.2s' : 'none',
                }}
              />
            </svg>

            {/* Row 1: Step 01 (left) and Step 02 (right) */}
            <div className="grid grid-cols-2 gap-8 mb-0" style={{ position: 'relative', zIndex: 2 }}>
              <TimelineCard item={timelineItems[0]} idx={0} visible={visible} align="left" />
              <TimelineCard item={timelineItems[1]} idx={1} visible={visible} align="right" />
            </div>

            {/* Spacer row */}
            <div style={{ height: 40 }} />

            {/* Row 2: Step 03 (left) and Step 04 (right) */}
            <div className="grid grid-cols-2 gap-8" style={{ position: 'relative', zIndex: 2 }}>
              <TimelineCard item={timelineItems[2]} idx={2} visible={visible} align="left" />
              <TimelineCard item={timelineItems[3]} idx={3} visible={visible} align="right" />
            </div>
          </div>

          {/* Mobile layout — compact vertical list */}
          <div className="md:hidden flex flex-col gap-4">
            {timelineItems.map((item, idx) => (
              <MobileCard key={item.id} item={item} idx={idx} visible={visible} isLast={idx === timelineItems.length - 1} />
            ))}
          </div>
        </div>

        {/* Bottom info strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}>

          {/* Quick stats */}
          <div className="flex gap-6 flex-wrap justify-center sm:justify-start">
            {[
              { val: '8', lbl: 'Cabang Lomba' },
              { val: 'Bogor', lbl: 'Lokasi' },
              { val: '02 Sep', lbl: 'Mulai Daftar' },
              { val: '10 Okt', lbl: 'Tutup Daftar' },
            ].map(s => (
              <div key={s.lbl} className="text-center">
                <div className="poster-font text-lg font-black" style={{ color: 'var(--color-orange-light)' }}>{s.val}</div>
                <div className="text-xs text-white/60 font-medium">{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1 text-sm">
            {[
              { name: 'Diza', phone: '081343059590' },
              { name: 'Hendra', phone: '081400842090' },
            ].map(cp => (
              <div key={cp.name} className="flex items-center gap-2 text-white/80 font-medium">
                <Phone size={12} className="text-orange-400" />
                <span>{cp.phone} <span className="text-white/50">({cp.name})</span></span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* Desktop card */
function TimelineCard({ item, idx, visible, align }: {
  item: typeof timelineItems[0]; idx: number; visible: boolean; align: 'left' | 'right';
}) {
  const delay = idx * 180 + 100;
  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(30px)',
      transition: `opacity 0.55s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>
      <div style={{
        padding: '20px 22px',
        borderRadius: 20,
        background: item.bg,
        border: `1.5px solid ${item.border}`,
        backdropFilter: 'blur(10px)',
        boxShadow: visible ? `0 8px 28px rgba(0,0,0,0.25), 0 0 18px ${item.glow}` : 'none',
        transition: 'box-shadow 0.6s ease',
      }}>
        {/* Step badge + node dot */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          {/* Pulsing node */}
          <div style={{
            width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
            background: `radial-gradient(circle at 35% 30%, ${item.color}33 0%, ${item.color}11 100%)`,
            border: `2px solid ${item.color}`,
            boxShadow: `0 0 0 5px ${item.glow.replace('0.45', '0.12')}, 0 0 14px ${item.glow}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}>
            {/* Pulse ring */}
            {visible && (
              <div style={{
                position: 'absolute', inset: -5, borderRadius: '50%',
                border: `1.5px solid ${item.color}`,
                animation: 'tl-pulse 2.2s ease-out infinite',
                animationDelay: `${delay + 400}ms`,
                opacity: 0,
              }} />
            )}
            <span style={{
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 900, fontSize: 15, color: item.color,
            }}>{item.step}</span>
          </div>
          <span style={{
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: 800, fontSize: 11,
            color: item.color, letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Step {item.step}
          </span>
        </div>

        <h3 style={{
          fontFamily: "'Fredoka', sans-serif",
          fontWeight: 900, fontSize: 20, lineHeight: 1.25,
          color: 'white', margin: 0, marginBottom: 6,
        }}>{item.title}</h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 8 }}>
          <Calendar size={12} color={item.color} />
          <span style={{
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: 600, fontSize: 13, color: item.color,
          }}>{item.date}</span>
        </div>

        <p style={{
          fontSize: 13, lineHeight: 1.5,
          color: 'rgba(255,255,255,0.72)', margin: 0,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>{item.desc}</p>
      </div>
    </div>
  );
}

/* Mobile card — compact horizontal strip */
function MobileCard({ item, idx, visible, isLast }: {
  item: typeof timelineItems[0]; idx: number; visible: boolean; isLast: boolean;
}) {
  const delay = idx * 150 + 80;
  return (
    <div style={{
      display: 'flex', gap: 12,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(0)' : 'translateX(-20px)',
      transition: `opacity 0.5s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
    }}>
      {/* Left: node + vertical line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
          border: `2px solid ${item.color}`,
          boxShadow: `0 0 12px ${item.glow}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: item.bg,
          position: 'relative',
        }}>
          {visible && (
            <div style={{
              position: 'absolute', inset: -4, borderRadius: '50%',
              border: `1px solid ${item.color}`,
              animation: 'tl-pulse 2.2s ease-out infinite',
              animationDelay: `${delay + 300}ms`,
              opacity: 0,
            }} />
          )}
          <span style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 900, fontSize: 13, color: item.color }}>{item.step}</span>
        </div>
        {!isLast && (
          <div style={{
            width: 2, flex: 1, marginTop: 6,
            background: `linear-gradient(to bottom, ${item.color}55, rgba(255,255,255,0.06))`,
            minHeight: 32,
          }} />
        )}
      </div>

      {/* Right: content */}
      <div style={{ flex: 1, paddingBottom: isLast ? 0 : 16 }}>
        <div style={{
          padding: '14px 16px', borderRadius: 16,
          background: item.bg, border: `1px solid ${item.border}`,
          backdropFilter: 'blur(8px)',
        }}>
          <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 900, fontSize: 17, color: 'white', margin: 0, marginBottom: 4 }}>
            {item.title}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5 }}>
            <Calendar size={11} color={item.color} />
            <span style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: 12, color: item.color }}>{item.date}</span>
          </div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.68)', margin: 0, lineHeight: 1.45 }}>{item.desc}</p>
        </div>
      </div>
    </div>
  );
}
