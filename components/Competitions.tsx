const competitions = [
  {
    id: 1,
    icon: '🌐',
    color: '#063E70',
    accent: '#20C7D7',
    bg: 'linear-gradient(135deg, #063E70 0%, #0d5a9e 100%)',
    category: 'Web Design Competition',
    level: 'SMA/SMK & Perguruan Tinggi',
    description: 'Lomba desain website terbaik SITEFEST 2026 Tingkat SMA/SMK Nasional dan tingkat Perguruan Tinggi.',
    tags: ['UI/UX', 'Coding', 'Design'],
  },
  {
    id: 2,
    icon: '📊',
    color: '#0a4d2e',
    accent: '#34d399',
    bg: 'linear-gradient(135deg, #0a4d2e 0%, #166534 100%)',
    category: 'Cerdas Cermat Akuntansi',
    level: 'SMA/SMK',
    description: 'Lomba Cerdas Cermat Akuntansi Nasional SITEFEST. Uji kemampuan akuntansi terbaikmu di level nasional.',
    tags: ['Akuntansi', 'Nasional', 'SMA/SMK'],
  },
  {
    id: 3,
    icon: '🎨',
    color: '#4a1d4f',
    accent: '#c084fc',
    bg: 'linear-gradient(135deg, #4a1d4f 0%, #6b21a8 100%)',
    category: 'Lomba Ilustrasi Digital',
    level: 'SMA/SMK',
    description: 'Lomba Karya Ilustrasi Digital dan Konten Kreatif Nasional. Ekspresikan kreativitas digitalmu!',
    tags: ['Ilustrasi', 'Digital Art', 'Kreatif'],
  },
  {
    id: 4,
    icon: '💡',
    color: '#7c2d12',
    accent: '#fb923c',
    bg: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 100%)',
    category: 'Cerdas Cermat Manajemen',
    level: 'SMA/SMK',
    description: 'Cerdas Cermat Ekonomi dan Manajemen Nasional. Kompetisi pengetahuan bisnis dan ekonomi tingkat nasional.',
    tags: ['Manajemen', 'Ekonomi', 'Bisnis'],
  },
];

export default function Competitions() {
  return (
    <section id="competitions" className="py-20 lg:py-28" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'var(--color-cyan)' }}
          >
            <span className="w-5 h-0.5 rounded" style={{ backgroundColor: 'var(--color-cyan)' }} />
            Kompetisi
            <span className="w-5 h-0.5 rounded" style={{ backgroundColor: 'var(--color-cyan)' }} />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--color-navy)' }}>
            Competitions
          </h2>
          <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            Pilih kategori kompetisi yang sesuai dengan minat dan keahlianmu. Tunjukkan yang terbaik!
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {competitions.map((comp) => (
            <CompetitionCard key={comp.id} comp={comp} />
          ))}
        </div>

        {/* Mobile Scroll */}
        <div className="sm:hidden comp-scroll flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
          {competitions.map((comp) => (
            <div key={comp.id} className="flex-shrink-0 w-72">
              <CompetitionCard comp={comp} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{ backgroundColor: 'var(--color-navy)', color: 'white' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0d2050'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-navy)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}

interface CompetitionCardProps {
  comp: typeof competitions[0];
}

function CompetitionCard({ comp }: CompetitionCardProps) {
  return (
    <article
      className="card-hover rounded-2xl overflow-hidden flex flex-col"
      style={{
        backgroundColor: 'var(--color-white)',
        border: '1px solid var(--color-border)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      {/* Card Image/Icon area */}
      <div
        className="relative flex items-center justify-center"
        style={{ height: '140px', background: comp.bg }}
      >
        <span style={{ fontSize: '48px', lineHeight: 1 }} role="img" aria-label={comp.category}>
          {comp.icon}
        </span>
        {/* Level badge */}
        <div
          className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-semibold"
          style={{ backgroundColor: 'rgba(0,0,0,0.3)', color: 'white', backdropFilter: 'blur(4px)' }}
        >
          {comp.level.includes('Perguruan') ? 'S1' : 'SMA/SMK'}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-sm font-bold leading-tight" style={{ color: 'var(--color-navy)' }}>
            {comp.category}
          </h3>
          <p className="text-xs mt-1 font-medium" style={{ color: 'var(--color-cyan)' }}>
            {comp.level}
          </p>
        </div>
        <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--color-muted)' }}>
          {comp.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {comp.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs font-medium"
              style={{ backgroundColor: '#f0f7ff', color: 'var(--color-blue)', border: '1px solid #d0e7ff' }}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="mt-1 text-xs font-semibold inline-flex items-center gap-1 transition-colors duration-150"
          style={{ color: 'var(--color-blue)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-blue)')}
        >
          Selengkapnya →
        </a>
      </div>
    </article>
  );
}
