import { useState } from 'react';

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  icon: string;
}

const timelineItems: TimelineItem[] = [
  { id: 1, title: 'Registration', date: '02 Sep – 10 Okt 2026', icon: '📝' },
  { id: 2, title: 'Technical Meeting', date: '11 Oktober 2026', icon: '🤝' },
  { id: 3, title: 'Competition Day', date: '15-17 Oktober 2026', icon: '⚽' },
  { id: 4, title: 'Awarding Ceremony', date: '31 Oktober 2026', icon: '🎉' },
];

export default function Timeline() {
  const [activeItem, setActiveItem] = useState<number | null>(1);

  return (
    <section
      id="timeline"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #071220 0%, #0a2a50 60%, #071220 100%)' }}
    >
      {/* Ocean grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(42,196,216,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(42,196,216,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(232,76,30,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(42,196,216,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Text */}
          <div className="flex flex-col gap-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase"
              style={{ color: 'var(--color-orange-light)' }}
            >
              <span className="w-5 h-0.5 rounded" style={{ backgroundColor: 'var(--color-orange)' }} />
              Rangkaian Kegiatan
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Timeline{' '}
              <span style={{ color: 'var(--color-orange)' }}>FAMOUS VI</span>
            </h2>

            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Cek jadwal lengkap acara FAMOUS VI 2026! Mulai dari pendaftaran hingga momen
              puncak Grand Final dan Awarding. Jangan sampai terlewat, daftarkan dirimu sekarang!
            </p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { value: '02 Sep', label: 'Buka Pendaftaran' },
                { value: '10 Okt', label: 'Tutup Pendaftaran' },
                { value: '8', label: 'Cabang Lomba' },
                { value: 'Bogor', label: 'Lokasi' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-4"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="text-xl font-bold" style={{ color: 'var(--color-orange-light)' }}>{stat.value}</div>
                  <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-2 p-4 rounded-xl" style={{ backgroundColor: 'rgba(232,76,30,0.1)', border: '1px solid rgba(232,76,30,0.25)' }}>
              <div className="text-xs font-bold mb-2" style={{ color: 'var(--color-orange-light)' }}>Contact Person</div>
              {[
                { name: 'Diza', phone: '081343059590' },
                { name: 'Hendra', phone: '081400842090' },
                { name: 'Ustadz Ahad', phone: '08212134290' },
              ].map((cp) => (
                <div key={cp.name} className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  📞 {cp.phone} <span style={{ color: 'rgba(255,255,255,0.35)' }}>({cp.name})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Timeline */}
          <div className="flex flex-col gap-0">
            {timelineItems.map((item, idx) => (
              <TimelineEntry
                key={item.id}
                item={item}
                isLast={idx === timelineItems.length - 1}
                isActive={activeItem === item.id}
                onClick={() => setActiveItem(item.id === activeItem ? null : item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineEntryProps {
  item: TimelineItem;
  isLast: boolean;
  isActive: boolean;
  onClick: () => void;
}

function TimelineEntry({ item, isLast, isActive, onClick }: TimelineEntryProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <button
          onClick={onClick}
          className="relative w-10 h-10 rounded-full flex items-center justify-center text-base flex-shrink-0 transition-all duration-200 cursor-pointer"
          style={{
            backgroundColor: isActive ? 'var(--color-orange)' : 'rgba(255,255,255,0.05)',
            border: `2px solid ${isActive ? 'var(--color-orange)' : 'rgba(255,255,255,0.12)'}`,
            transform: isActive ? 'scale(1.1)' : 'scale(1)',
            boxShadow: isActive ? '0 0 16px rgba(232,76,30,0.4)' : 'none',
          }}
          aria-label={`${item.title}: ${item.date}`}
        >
          <span role="img" aria-hidden="true">{item.icon}</span>
        </button>
        {!isLast && (
          <div
            className="w-0.5 flex-1 my-1"
            style={{
              background: isActive
                ? 'linear-gradient(to bottom, var(--color-orange), rgba(232,76,30,0.1))'
                : 'rgba(255,255,255,0.06)',
              minHeight: '24px',
            }}
          />
        )}
      </div>

      <div className="pb-5 flex-1 transition-all duration-200 cursor-pointer" onClick={onClick}>
        <div
          className="rounded-xl p-4 transition-all duration-200"
          style={{
            backgroundColor: isActive ? 'rgba(232,76,30,0.08)' : 'transparent',
            border: `1px solid ${isActive ? 'rgba(232,76,30,0.25)' : 'transparent'}`,
          }}
        >
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-semibold" style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.65)' }}>
              {item.title}
            </h3>
            {isActive && (
              <span
                className="text-xs px-2 py-0.5 rounded-full font-bold flex-shrink-0"
                style={{ backgroundColor: 'rgba(232,76,30,0.25)', color: 'var(--color-orange-light)' }}
              >
                ●
              </span>
            )}
          </div>
          <p className="text-xs mt-1" style={{ color: isActive ? 'var(--color-orange-light)' : 'rgba(255,255,255,0.3)' }}>
            📅 {item.date}
          </p>
        </div>
      </div>
    </div>
  );
}
