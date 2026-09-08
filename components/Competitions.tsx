const competitions = [
  {
    id: 1,
    icon: '⚽',
    emoji: '⚽',
    name: 'Futsal',
    level: 'SMP/MTs',
    description: 'Lomba futsal beregu putra antar sekolah SMP/MTs sederajat Se-Pulau Jawa. Tunjukkan skill dan kerjasama timmu!',
    tags: ['Tim', 'Olahraga', 'Putra'],
    accent: '#E84C1E',
    bg: 'linear-gradient(135deg, #7B1D1D 0%, #C43A10 100%)',
    lightBg: 'rgba(232,76,30,0.08)',
    border: 'rgba(232,76,30,0.2)',
  },
  {
    id: 2,
    icon: '🪖',
    emoji: '🪖',
    name: 'LKBB',
    level: 'SMP/MTs',
    description: 'Lomba Ketangkasan Baris Berbaris. Uji kedisiplinan, kekompakan, dan keseragaman gerakan tim kamu!',
    tags: ['Tim', 'Disiplin', 'Baris'],
    accent: '#1E6FBF',
    bg: 'linear-gradient(135deg, #0a2a50 0%, #1E6FBF 100%)',
    lightBg: 'rgba(30,111,191,0.08)',
    border: 'rgba(30,111,191,0.2)',
  },
  {
    id: 3,
    icon: '🏹',
    emoji: '🏹',
    name: 'Archery Putri',
    level: 'SMP/MTs',
    description: 'Lomba panahan putri tingkat SMP/MTs. Adu ketepatan dan konsentrasi dalam olahraga panahan!',
    tags: ['Putri', 'Panahan', 'Individu'],
    accent: '#7B3F9E',
    bg: 'linear-gradient(135deg, #4a1d6e 0%, #7B3F9E 100%)',
    lightBg: 'rgba(123,63,158,0.08)',
    border: 'rgba(123,63,158,0.2)',
  },
  {
    id: 4,
    icon: '🎤',
    emoji: '🎤',
    name: 'Speech',
    level: 'SMP/MTs',
    description: 'Lomba pidato bahasa Inggris. Tunjukkan kemampuan public speaking dan penguasaan bahasa Inggrismu!',
    tags: ['Bahasa', 'Individu', 'English'],
    accent: '#2E7D32',
    bg: 'linear-gradient(135deg, #1B4A1E 0%, #2E7D32 100%)',
    lightBg: 'rgba(46,125,50,0.08)',
    border: 'rgba(46,125,50,0.2)',
  },
  {
    id: 5,
    icon: '📖',
    emoji: '📖',
    name: 'Story Telling',
    level: 'SMP/MTs',
    description: 'Lomba bercerita dengan kreativitas dan ekspresi. Hidupkan cerita dengan gaya penyampaian terbaikmu!',
    tags: ['Seni', 'Individu', 'Kreativitas'],
    accent: '#E65100',
    bg: 'linear-gradient(135deg, #7c2d00 0%, #E65100 100%)',
    lightBg: 'rgba(230,81,0,0.08)',
    border: 'rgba(230,81,0,0.2)',
  },
  {
    id: 6,
    icon: '📚',
    emoji: '📚',
    name: 'MHQ',
    level: 'SMP/MTs',
    description: 'Musabaqah Hifdzil Qur\'an. Kompetisi menghafal dan melantunkan Al-Qur\'an dengan tartil dan tajwid yang benar.',
    tags: ['Agama', 'Qur\'an', 'Hafalan'],
    accent: '#00838F',
    bg: 'linear-gradient(135deg, #004D40 0%, #00838F 100%)',
    lightBg: 'rgba(0,131,143,0.08)',
    border: 'rgba(0,131,143,0.2)',
  },
  {
    id: 7,
    icon: '🎨',
    emoji: '🎨',
    name: 'Poster Digital',
    level: 'SMP/MTs',
    description: 'Lomba desain poster digital. Ekspresikan kreativitas dan kemampuan desain grafismu secara digital!',
    tags: ['Seni', 'Digital', 'Desain'],
    accent: '#AD1457',
    bg: 'linear-gradient(135deg, #6A0A35 0%, #AD1457 100%)',
    lightBg: 'rgba(173,20,87,0.08)',
    border: 'rgba(173,20,87,0.2)',
  },
  {
    id: 8,
    icon: '🕌',
    emoji: '🕌',
    name: 'Khitobah',
    level: 'SMP/MTs',
    description: 'Lomba pidato/ceramah islami dalam bahasa Indonesia. Sampaikan dakwah dengan penuh semangat dan hikmah!',
    tags: ['Agama', 'Individu', 'Dakwah'],
    accent: '#1565C0',
    bg: 'linear-gradient(135deg, #0D3470 0%, #1565C0 100%)',
    lightBg: 'rgba(21,101,192,0.08)',
    border: 'rgba(21,101,192,0.2)',
  },
];

export default function Competitions() {
  return (
    <section id="competitions" className="py-20 lg:py-28" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: 'var(--color-orange)' }}
          >
            <span className="w-6 h-0.5 rounded" style={{ backgroundColor: 'var(--color-orange)' }} />
            Cabang Lomba
            <span className="w-6 h-0.5 rounded" style={{ backgroundColor: 'var(--color-orange)' }} />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--color-navy)' }}>
            8 Cabang <span style={{ color: 'var(--color-orange)' }}>Kompetisi</span>
          </h2>
          <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            Pilih cabang lomba yang sesuai minat dan kemampuanmu. Semua tingkat SMP/MTs sederajat Se-Pulau Jawa.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {competitions.map((comp) => (
            <CompetitionCard key={comp.id} comp={comp} />
          ))}
        </div>

        {/* Mobile Scroll */}
        <div className="sm:hidden comp-scroll flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
          {competitions.map((comp) => (
            <div key={comp.id} className="flex-shrink-0 w-64">
              <CompetitionCard comp={comp} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col items-center gap-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-base font-bold transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, var(--color-orange) 0%, var(--color-orange-dark) 100%)', color: 'white', boxShadow: '0 6px 24px rgba(232,76,30,0.35)' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(232,76,30,0.45)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 24px rgba(232,76,30,0.35)'; }}
            >
              Daftar Sekarang — Gratis!
            </a>
            <span className="text-sm" style={{ color: 'var(--color-muted)' }}>Open Registration: 02 Sep – 10 Okt 2026</span>
          </div>
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
        border: `1px solid ${comp.border}`,
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      }}
    >
      {/* Top gradient band */}
      <div
        className="relative flex items-center justify-center"
        style={{ height: '120px', background: comp.bg }}
      >
        {/* Mascot bubble */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.35), rgba(255,255,255,0.08))',
            border: '2px solid rgba(255,255,255,0.3)',
            backdropFilter: 'blur(4px)',
            fontSize: '36px',
          }}
          role="img"
          aria-label={comp.name}
        >
          {comp.emoji}
        </div>
        {/* Level badge */}
        <div
          className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-xs font-semibold"
          style={{ backgroundColor: 'rgba(0,0,0,0.35)', color: 'white', backdropFilter: 'blur(4px)' }}
        >
          {comp.level}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-base font-black leading-tight" style={{ color: 'var(--color-navy)' }}>
            {comp.name}
          </h3>
        </div>
        <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--color-muted)' }}>
          {comp.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {comp.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs font-semibold"
              style={{ backgroundColor: comp.lightBg, color: comp.accent, border: `1px solid ${comp.border}` }}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="mt-1 text-xs font-bold inline-flex items-center gap-1 transition-colors duration-150"
          style={{ color: comp.accent }}
        >
          Info Selengkapnya →
        </a>
      </div>
    </article>
  );
}
