import { useEffect, useRef, useState } from 'react';
import { Calendar, Phone, Sparkles } from 'lucide-react';
import { Jellyfish, AnglerFish, Seahorse, MantaRay, Bubble } from './MarineBiota';

const timelineItems = [
  {
    id: 1,
    step: '01',
    title: 'Open Registration',
    date: '02 Sep – 10 Okt 2026',
    desc: 'Pendaftaran resmi dibuka! Daftarkan tim sekolahmu sebelum kuota habis.',
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.5)',
    bg: 'rgba(56,189,248,0.08)',
    border: 'rgba(56,189,248,0.35)',
    tag: 'Pendaftaran Dibuka',
  },
  {
    id: 2,
    step: '02',
    title: 'Technical Meeting',
    date: '11 Oktober 2026',
    desc: 'Pengarahan aturan teknis lomba, sesi tanya jawab, dan pengundian nomor urut peserta.',
    color: '#c084fc',
    glow: 'rgba(192,132,252,0.5)',
    bg: 'rgba(192,132,252,0.08)',
    border: 'rgba(192,132,252,0.35)',
    tag: 'Pengarahan Peserta',
  },
  {
    id: 3,
    step: '03',
    title: 'Competition Day',
    date: '15 – 17 Oktober 2026',
    desc: 'Tiga hari penuh aksi, kreativitas, dan kompetisi sengit antarsekolah se-Indonesia!',
    color: '#fb923c',
    glow: 'rgba(251,146,60,0.5)',
    bg: 'rgba(251,146,60,0.08)',
    border: 'rgba(251,146,60,0.35)',
    tag: 'Hari Perlombaan',
  },
  {
    id: 4,
    step: '04',
    title: 'Awarding Ceremony',
    date: '31 Oktober 2026',
    desc: 'Puncak acara megah, pengumuman sang juara, penyerahan trofi, serta Grand Closing.',
    color: '#facc15',
    glow: 'rgba(250,204,21,0.5)',
    bg: 'rgba(250,204,21,0.08)',
    border: 'rgba(250,204,21,0.35)',
    tag: 'Grand Closing & Juara',
  },
];

function useInView(threshold = 0.12) {
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
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #2a0a5e 0%, #220855 35%, #18063d 70%, #100526 100%)' }}
    >
      {/* Camouflage fades */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '220px', background: 'linear-gradient(180deg, #2a0a5e 0%, transparent 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '220px', background: 'linear-gradient(180deg, transparent 0%, #100526 100%)' }} />

      {/* Ocean biota background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(192,132,252,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(192,132,252,0.035) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        
        <div className="anim-jelly" style={{ position: 'absolute', top: '10%', right: '5%', opacity: 0.65, animationDuration: '8s' }}>
          <Jellyfish size={50} color="rgba(192,132,252,0.8)" />
        </div>
        <div className="anim-jelly" style={{ position: 'absolute', top: '48%', left: '3%', opacity: 0.6, animationDuration: '11s' }}>
          <AnglerFish size={46} />
        </div>
        <div className="anim-jelly" style={{ position: 'absolute', bottom: '18%', right: '4%', opacity: 0.7, animationDuration: '7s' }}>
          <Seahorse size={38} />
        </div>
        <div className="anim-swim-right" style={{ position: 'absolute', top: '32%', left: '-8%', opacity: 0.35, animationDuration: '32s' }}>
          <MantaRay size={70} />
        </div>
        {[
          { left: '15%', delay: '0s', size: 8 },
          { left: '48%', delay: '1.5s', size: 12 },
          { left: '82%', delay: '0.8s', size: 9 },
        ].map((b, i) => (
          <div key={i} className="anim-bubble-rise" style={{ position: 'absolute', bottom: '20px', left: b.left, animationDelay: b.delay, animationDuration: '4.5s' }}>
            <Bubble size={b.size} />
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="poster-font inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-orange-light)' }}>
            <Sparkles size={16} />
            Rangkaian Jadwal Acara
            <Sparkles size={16} />
          </span>
          <h2 className="poster-font text-4xl sm:text-6xl font-black text-white tracking-tight">
            TIMELINE{' '}
            <span className="text-stroke-white text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #FF7A45 0%, #FFB088 100%)' }}>
              EVENT
            </span>
          </h2>
          <p className="mt-3 text-white/70 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Ikuti alur perjalanan kompetisi dari awal pendaftaran hingga panggung juara!
          </p>
        </div>

        {/* ── Elongated Winding Rope Timeline ── */}
        <div ref={ref} className="relative">

          {/* DESKTOP VIEW (Snaking Rope Zigzag) */}
          <div className="hidden lg:block relative" style={{ minHeight: '980px' }}>

            {/* Continuous SVG Winding Dashed Rope */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 900 1000"
              preserveAspectRatio="none"
              style={{ overflow: 'visible', zIndex: 1 }}
            >
              <defs>
                <linearGradient id="ropeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="30%" stopColor="#c084fc" />
                  <stop offset="65%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#facc15" />
                </linearGradient>
                <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Shadow / Glow track behind */}
              <path
                d="M 450,15 C 300,15 220,50 220,130 C 220,260 680,250 680,380 C 680,510 220,500 220,630 C 220,760 680,750 680,870 C 680,940 550,975 450,975"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth={8}
                strokeLinecap="round"
              />

              {/* Glowing animated base line */}
              <path
                d="M 450,15 C 300,15 220,50 220,130 C 220,260 680,250 680,380 C 680,510 220,500 220,630 C 220,760 680,750 680,870 C 680,940 550,975 450,975"
                fill="none"
                stroke="url(#ropeGrad)"
                strokeWidth={6}
                strokeDasharray="16 12"
                strokeLinecap="round"
                filter="url(#glowFilter)"
                className="anim-dash-crawl"
                opacity={0.5}
              />

              {/* Crisp Foreground Dashed Rope with marching crawl animation */}
              <path
                d="M 450,15 C 300,15 220,50 220,130 C 220,260 680,250 680,380 C 680,510 220,500 220,630 C 220,760 680,750 680,870 C 680,940 550,975 450,975"
                fill="none"
                stroke="#ffffff"
                strokeWidth={3.5}
                strokeDasharray="14 10"
                strokeLinecap="round"
                className="anim-dash-crawl"
              />

              {/* Waypoint nodes on the rope */}
              {[
                { cx: 220, cy: 130, color: '#38bdf8' },
                { cx: 680, cy: 380, color: '#c084fc' },
                { cx: 220, cy: 630, color: '#fb923c' },
                { cx: 680, cy: 870, color: '#facc15' },
              ].map((pt, i) => (
                <g key={i}>
                  <circle cx={pt.cx} cy={pt.cy} r={16} fill={pt.color} fillOpacity={0.25} />
                  <circle cx={pt.cx} cy={pt.cy} r={8} fill={pt.color} stroke="#ffffff" strokeWidth={2.5} />
                </g>
              ))}
            </svg>

            {/* Desktop Items positioned along the elongated path */}
            <div className="relative z-10 flex flex-col gap-12" style={{ padding: '20px 0' }}>

              {/* Step 01 - Left side */}
              <div className="flex items-center justify-start" style={{ minHeight: '210px' }}>
                <div className="w-[45%] pl-4">
                  <DesktopCard item={timelineItems[0]} idx={0} visible={visible} align="left" />
                </div>
              </div>

              {/* Step 02 - Right side */}
              <div className="flex items-center justify-end" style={{ minHeight: '210px' }}>
                <div className="w-[45%] pr-4">
                  <DesktopCard item={timelineItems[1]} idx={1} visible={visible} align="right" />
                </div>
              </div>

              {/* Step 03 - Left side */}
              <div className="flex items-center justify-start" style={{ minHeight: '210px' }}>
                <div className="w-[45%] pl-4">
                  <DesktopCard item={timelineItems[2]} idx={2} visible={visible} align="left" />
                </div>
              </div>

              {/* Step 04 - Right side */}
              <div className="flex items-center justify-end" style={{ minHeight: '210px' }}>
                <div className="w-[45%] pr-4">
                  <DesktopCard item={timelineItems[3]} idx={3} visible={visible} align="right" />
                </div>
              </div>

            </div>
          </div>

          {/* TABLET & MOBILE VIEW (Snaking vertical dashed track) */}
          <div className="lg:hidden relative pl-6 sm:pl-10">

            {/* Vertical Animated Dashed Rope on the left */}
            <svg
              className="absolute left-2 sm:left-4 top-0 bottom-0 w-6 h-full pointer-events-none"
              style={{ overflow: 'visible', zIndex: 1 }}
            >
              <defs>
                <linearGradient id="mobileRopeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="35%" stopColor="#c084fc" />
                  <stop offset="70%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#facc15" />
                </linearGradient>
              </defs>
              <line
                x1="12" y1="20" x2="12" y2="100%"
                stroke="rgba(255,255,255,0.15)" strokeWidth={6} strokeLinecap="round"
              />
              <line
                x1="12" y1="20" x2="12" y2="100%"
                stroke="url(#mobileRopeGrad)" strokeWidth={3} strokeDasharray="10 8" strokeLinecap="round"
                className="anim-dash-crawl"
              />
            </svg>

            {/* Cards List */}
            <div className="flex flex-col gap-6 relative z-10">
              {timelineItems.map((item, idx) => (
                <MobileCard key={item.id} item={item} idx={idx} visible={visible} />
              ))}
            </div>
          </div>

        </div>

        {/* Bottom info strip */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-3xl"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1.5px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>

          {/* Quick stats */}
          <div className="flex gap-6 sm:gap-8 flex-wrap justify-center sm:justify-start">
            {[
              { val: '8', lbl: 'Cabang Lomba' },
              { val: 'Bogor', lbl: 'Lokasi' },
              { val: '02 Sep', lbl: 'Mulai Daftar' },
              { val: '10 Okt', lbl: 'Tutup Daftar' },
            ].map(s => (
              <div key={s.lbl} className="text-center">
                <div className="poster-font text-2xl font-black" style={{ color: 'var(--color-orange-light)' }}>{s.val}</div>
                <div className="text-xs text-white/60 font-medium">{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* Contact Person */}
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            {[
              { name: 'Diza', phone: '081343059590' },
              { name: 'Hendra', phone: '081400842090' },
            ].map(cp => (
              <div key={cp.name} className="flex items-center gap-2 text-white/80 font-medium px-4 py-2 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Phone size={14} className="text-orange-400" />
                <span>{cp.phone} <span className="text-white/50 font-normal">({cp.name})</span></span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* Desktop Card with reference styling (balloon font, outline, playful badge) */
function DesktopCard({ item, idx, visible, align }: {
  item: typeof timelineItems[0]; idx: number; visible: boolean; align: 'left' | 'right';
}) {
  const delay = idx * 180 + 120;
  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
      transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>
      <div
        className="group hover:scale-[1.02] transition-transform duration-300"
        style={{
          padding: '24px 28px',
          borderRadius: 24,
          background: `linear-gradient(135deg, ${item.bg}, rgba(16,5,38,0.75))`,
          border: `2px solid ${item.border}`,
          backdropFilter: 'blur(16px)',
          boxShadow: `0 12px 36px rgba(0,0,0,0.35), 0 0 24px ${item.glow}`,
          position: 'relative',
        }}
      >
        {/* Top Tag & Step */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <span
            className="poster-font px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase"
            style={{
              background: item.color,
              color: '#071220',
              boxShadow: `0 2px 10px ${item.glow}`,
            }}
          >
            {item.tag}
          </span>
          <span
            className="poster-font text-2xl font-black"
            style={{ color: item.color, opacity: 0.9 }}
          >
            #{item.step}
          </span>
        </div>

        {/* Title in Poster Balloon Font */}
        <h3
          className="poster-font text-2xl sm:text-3xl font-black text-white mb-2 tracking-wide leading-tight"
        >
          {item.title}
        </h3>

        {/* Date pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl mb-3"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
          <Calendar size={14} style={{ color: item.color }} />
          <span className="poster-font text-sm font-bold text-white tracking-wide">
            {item.date}
          </span>
        </div>

        {/* Description */}
        <p className="text-white/80 text-sm leading-relaxed font-medium m-0">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

/* Mobile Card */
function MobileCard({ item, idx, visible }: {
  item: typeof timelineItems[0]; idx: number; visible: boolean;
}) {
  const delay = idx * 140 + 80;
  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(0)' : 'translateX(-20px)',
      transition: `opacity 0.5s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
    }}>
      <div
        style={{
          padding: '18px 20px',
          borderRadius: 20,
          background: `linear-gradient(135deg, ${item.bg}, rgba(16,5,38,0.85))`,
          border: `1.5px solid ${item.border}`,
          backdropFilter: 'blur(12px)',
          boxShadow: `0 8px 24px rgba(0,0,0,0.3), 0 0 16px ${item.glow}`,
          position: 'relative',
        }}
      >
        <div className="flex items-center justify-between gap-2 mb-2">
          <span
            className="poster-font px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider"
            style={{ background: item.color, color: '#071220' }}
          >
            {item.tag}
          </span>
          <span className="poster-font text-lg font-black" style={{ color: item.color }}>
            #{item.step}
          </span>
        </div>

        <h3 className="poster-font text-xl font-black text-white mb-2">
          {item.title}
        </h3>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg mb-2"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
          <Calendar size={12} style={{ color: item.color }} />
          <span className="poster-font text-xs font-bold text-white">{item.date}</span>
        </div>

        <p className="text-white/75 text-xs leading-relaxed m-0">{item.desc}</p>
      </div>
    </div>
  );
}
