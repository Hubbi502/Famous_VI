import { useState } from 'react';

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  icon: string;
  isActive?: boolean;
}

const timelineItems: TimelineItem[] = [
  { id: 1, title: 'Pendaftaran Gelombang I', date: '1 Mar – 4 Mar 2026', icon: '📝' },
  { id: 2, title: 'Pendaftaran Gelombang II', date: '5 Mar – 31 Mar 2026', icon: '📋' },
  { id: 3, title: 'Technical Meeting', date: '30 Mar 2026', icon: '🤝' },
  { id: 4, title: 'Pengumpulan Karya', date: '31 Mar 2026', icon: '📤' },
  { id: 5, title: 'Penilaian Karya', date: '1 Apr – 5 Apr 2026', icon: '⚖️' },
  { id: 6, title: 'Pengumuman Finalis', date: '6 Apr 2026', icon: '📢', isActive: true },
  { id: 7, title: 'Grand Final', date: '5 Jun – 7 Jun 2026', icon: '🏆' },
  { id: 8, title: 'Awarding & Penutupan', date: '7 Juni 2026', icon: '🎉' },
];

export default function Timeline() {
  const [activeItem, setActiveItem] = useState<number | null>(6);

  return (
    <section
      id="timeline"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-navy)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(32,199,215,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(32,199,215,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Text */}
          <div className="flex flex-col gap-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase"
              style={{ color: 'var(--color-cyan)' }}
            >
              <span className="w-5 h-0.5 rounded" style={{ backgroundColor: 'var(--color-cyan)' }} />
              Rangkaian Kegiatan
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Timeline{' '}
              <span style={{ color: 'var(--color-cyan)' }}>Event</span>
            </h2>

            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Yuk, cek jadwal lengkap acara SITEFEST 2026! Di sini kamu bisa lihat semua tahapan
              penting mulai dari pendaftaran sampai acara seru di penghujung acara. Jangan sampai
              terlewat atau kamu akan ketinggalan kesempatan emas!
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Ikuti setiap tahapan, ikut semua bisa dan seru!
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { value: '2', label: 'Gelombang Pendaftaran' },
                { value: '3 Hari', label: 'Grand Final' },
                { value: 'Jun 2026', label: 'Acara Utama' },
                { value: '8', label: 'Tahapan Kegiatan' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-4"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="text-xl font-bold" style={{ color: 'var(--color-cyan)' }}>{stat.value}</div>
                  <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</div>
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
      {/* Left indicator */}
      <div className="flex flex-col items-center">
        <button
          onClick={onClick}
          className="relative w-10 h-10 rounded-full flex items-center justify-center text-base flex-shrink-0 transition-all duration-200 cursor-pointer"
          style={{
            backgroundColor: isActive ? 'var(--color-cyan)' : 'rgba(255,255,255,0.05)',
            border: `2px solid ${isActive ? 'var(--color-cyan)' : 'rgba(255,255,255,0.1)'}`,
            transform: isActive ? 'scale(1.1)' : 'scale(1)',
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
                ? 'linear-gradient(to bottom, var(--color-cyan), rgba(32,199,215,0.1))'
                : 'rgba(255,255,255,0.07)',
              minHeight: '24px',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div
        className="pb-6 flex-1 transition-all duration-200 cursor-pointer"
        onClick={onClick}
      >
        <div
          className="rounded-xl p-4 transition-all duration-200"
          style={{
            backgroundColor: isActive ? 'rgba(32,199,215,0.08)' : 'transparent',
            border: `1px solid ${isActive ? 'rgba(32,199,215,0.2)' : 'transparent'}`,
          }}
        >
          <div className="flex items-start justify-between gap-2">
            <h3
              className="text-sm font-semibold"
              style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.7)' }}
            >
              {item.title}
            </h3>
            {isActive && (
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0"
                style={{ backgroundColor: 'rgba(32,199,215,0.2)', color: 'var(--color-cyan)' }}
              >
                Aktif
              </span>
            )}
          </div>
          <p
            className="text-xs mt-1"
            style={{ color: isActive ? 'var(--color-cyan)' : 'rgba(255,255,255,0.35)' }}
          >
            📅 {item.date}
          </p>
        </div>
      </div>
    </div>
  );
}
