import { useState } from 'react';

const competitions = [
  {
    id: 1,
    emoji: '📖',
    name: 'MHQ',
    fullName: 'Musabaqah Hifzhil Qur\'an',
    level: 'SMP/MTs Se-Jawa',
    type: 'Individu',
    price: 'Rp 60.000',
    description: 'Kompetisi hafalan Al-Qur\'an yang menguji kelancaran hafalan, kefasihan tajwid, dan kemampuan menjawab pertanyaan seputar hafalan.',
    details: [
      'Kategori: Individu (Putra & Putri)',
      'Materi: Juz 29 & 30',
      'Sistem: Tahfizh + Tanya Jawab',
    ],
    tags: ['Agama', 'Individu', 'Hafalan'],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf9L5-OeVrr1cqmMCkVdMo5ItTQ1X7t9p6-0Xj8z1uaO_dNuQ/viewform',
    accent: '#00838F',
    bg: 'linear-gradient(135deg, #004D40 0%, #00838F 100%)',
    lightBg: 'rgba(0,131,143,0.08)',
    border: 'rgba(0,131,143,0.2)',
  },
  {
    id: 2,
    emoji: '🎙️',
    name: 'Khitobah 3 Bahasa',
    fullName: 'Khitobah 3 Bahasa',
    level: 'SMP/MTs Se-Jawa',
    type: 'Individu',
    price: 'Rp 60.000',
    description: 'Lomba ceramah/pidato islami yang disampaikan dalam tiga bahasa: Arab, Inggris, dan Indonesia secara bergantian dalam satu penampilan.',
    details: [
      'Bahasa: Arab, Inggris & Indonesia',
      'Durasi: Maks. 7 menit',
      'Kategori: Individu Campuran',
    ],
    tags: ['Agama', 'Trilingual', 'Dakwah'],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf9L5-OeVrr1cqmMCkVdMo5ItTQ1X7t9p6-0Xj8z1uaO_dNuQ/viewform',
    accent: '#1565C0',
    bg: 'linear-gradient(135deg, #0D3470 0%, #1565C0 100%)',
    lightBg: 'rgba(21,101,192,0.08)',
    border: 'rgba(21,101,192,0.2)',
  },
  {
    id: 3,
    emoji: '🎤',
    name: 'English Speech',
    fullName: 'English Speech',
    level: 'SMP/MTs Se-Jawa',
    type: 'Individu',
    price: 'Rp 55.000',
    description: 'Lomba pidato bahasa Inggris yang menguji kemampuan public speaking, penguasaan kosakata, intonasi, dan penyampaian argumen yang sistematis.',
    details: [
      'Bahasa: English Only',
      'Durasi: 5–7 menit',
      'Tema: Ditentukan saat kompetisi',
    ],
    tags: ['Bahasa', 'Individu', 'English'],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf9L5-OeVrr1cqmMCkVdMo5ItTQ1X7t9p6-0Xj8z1uaO_dNuQ/viewform',
    accent: '#2E7D32',
    bg: 'linear-gradient(135deg, #1B4A1E 0%, #2E7D32 100%)',
    lightBg: 'rgba(46,125,50,0.08)',
    border: 'rgba(46,125,50,0.2)',
  },
  {
    id: 4,
    emoji: '📚',
    name: 'Storytelling',
    fullName: 'Storytelling',
    level: 'SMP/MTs Se-Jawa',
    type: 'Individu',
    price: 'Rp 55.000',
    description: 'Lomba bercerita menggunakan bahasa Inggris dengan kreativitas ekspresi, mimik wajah, dan intonasi yang menarik. Cerita dapat berupa fabel, legenda, atau cerita rakyat.',
    details: [
      'Bahasa: English',
      'Durasi: 5–7 menit',
      'Boleh gunakan properti sederhana',
    ],
    tags: ['Seni', 'Individu', 'Kreativitas'],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf9L5-OeVrr1cqmMCkVdMo5ItTQ1X7t9p6-0Xj8z1uaO_dNuQ/viewform',
    accent: '#E65100',
    bg: 'linear-gradient(135deg, #7c2d00 0%, #E65100 100%)',
    lightBg: 'rgba(230,81,0,0.08)',
    border: 'rgba(230,81,0,0.2)',
  },
  {
    id: 5,
    emoji: '🪖',
    name: 'LKBB',
    fullName: 'Lomba Ketangkasan Baris-Berbaris',
    level: 'SMP/MTs Se-Jawa',
    type: 'Tim (8–12 orang)',
    price: 'Rp 250.000',
    description: 'Lomba Ketangkasan Baris-Berbaris yang menguji kedisiplinan, kekompakan gerakan, dan ketepatan aba-aba seluruh anggota tim.',
    details: [
      'Tim: 8–12 peserta + 1 Danton',
      'Jenis: Peraturan & Variasi',
      'Kategori: Putra & Putri',
    ],
    tags: ['Tim', 'Disiplin', 'Baris'],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf9L5-OeVrr1cqmMCkVdMo5ItTQ1X7t9p6-0Xj8z1uaO_dNuQ/viewform',
    accent: '#1E6FBF',
    bg: 'linear-gradient(135deg, #0a2a50 0%, #1E6FBF 100%)',
    lightBg: 'rgba(30,111,191,0.08)',
    border: 'rgba(30,111,191,0.2)',
  },
  {
    id: 6,
    emoji: '⚽',
    name: 'Futsal',
    fullName: 'Futsal Putra',
    level: 'SMP/MTs Se-Jawa',
    type: 'Tim (5 orang)',
    price: 'Rp 350.000',
    description: 'Lomba futsal beregu putra antar sekolah SMP/MTs sederajat Se-Pulau Jawa. Tunjukkan skill individu dan kerjasama tim terbaikmu di lapangan!',
    details: [
      'Kategori: Putra',
      'Tim: 5 pemain + max. 5 cadangan',
      'Peraturan FIFA Futsal',
    ],
    tags: ['Tim', 'Olahraga', 'Putra'],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf9L5-OeVrr1cqmMCkVdMo5ItTQ1X7t9p6-0Xj8z1uaO_dNuQ/viewform',
    accent: '#E84C1E',
    bg: 'linear-gradient(135deg, #7B1D1D 0%, #C43A10 100%)',
    lightBg: 'rgba(232,76,30,0.08)',
    border: 'rgba(232,76,30,0.2)',
  },
  {
    id: 7,
    emoji: '🏹',
    name: 'Archery',
    fullName: 'Archery (Panahan)',
    level: 'SMP/MTs Se-Jawa',
    type: 'Individu',
    price: 'Rp 80.000',
    description: 'Lomba panahan tingkat SMP/MTs yang menguji konsentrasi, ketepatan, dan pengendalian diri. Menggunakan alat panahan standar dengan jarak yang telah ditentukan panitia.',
    details: [
      'Kategori: Putri',
      'Jarak: Disesuaikan tingkat',
      'Alat disediakan panitia',
    ],
    tags: ['Putri', 'Panahan', 'Individu'],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf9L5-OeVrr1cqmMCkVdMo5ItTQ1X7t9p6-0Xj8z1uaO_dNuQ/viewform',
    accent: '#7B3F9E',
    bg: 'linear-gradient(135deg, #4a1d6e 0%, #7B3F9E 100%)',
    lightBg: 'rgba(123,63,158,0.08)',
    border: 'rgba(123,63,158,0.2)',
  },
  {
    id: 8,
    emoji: '🎨',
    name: 'Poster Digital',
    fullName: 'Desain Poster Digital',
    level: 'SMP/MTs Se-Jawa',
    type: 'Individu',
    price: 'Rp 55.000',
    description: 'Lomba desain poster digital menggunakan perangkat lunak desain. Ekspresikan kreativitas, estetika visual, dan kemampuan komunikasi grafis dalam satu karya terbaik.',
    details: [
      'Software: Bebas (Canva, PS, AI, dll)',
      'Format: PNG/JPG, min. 300dpi',
      'Tema: Ditentukan panitia',
    ],
    tags: ['Seni', 'Digital', 'Desain'],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf9L5-OeVrr1cqmMCkVdMo5ItTQ1X7t9p6-0Xj8z1uaO_dNuQ/viewform',
    accent: '#AD1457',
    bg: 'linear-gradient(135deg, #6A0A35 0%, #AD1457 100%)',
    lightBg: 'rgba(173,20,87,0.08)',
    border: 'rgba(173,20,87,0.2)',
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
            Pilih cabang lomba sesuai minat dan bakat. Terbuka untuk pelajar SMP/MTs sederajat Se-Pulau Jawa.
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
              href="https://docs.google.com/forms/d/e/1FAIpQLSf9L5-OeVrr1cqmMCkVdMo5ItTQ1X7t9p6-0Xj8z1uaO_dNuQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-base font-bold transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, var(--color-orange) 0%, var(--color-orange-dark) 100%)', color: 'white', boxShadow: '0 6px 24px rgba(232,76,30,0.35)' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(232,76,30,0.45)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 24px rgba(232,76,30,0.35)'; }}
            >
              🏆 Daftar Sekarang
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
  const [expanded, setExpanded] = useState(false);

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
        {/* Emoji bubble */}
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
        {/* Type badge */}
        <div
          className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-xs font-semibold"
          style={{ backgroundColor: 'rgba(0,0,0,0.35)', color: 'white', backdropFilter: 'blur(4px)' }}
        >
          {comp.type}
        </div>
        {/* Price badge */}
        <div
          className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md text-xs font-bold"
          style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.3)' }}
        >
          {comp.price}/tim
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-base font-black leading-tight" style={{ color: 'var(--color-navy)' }}>
            {comp.name}
          </h3>
          <p className="text-xs mt-0.5" style={{ color: comp.accent, fontWeight: 600 }}>
            {comp.fullName !== comp.name ? comp.fullName : ''}
          </p>
        </div>
        <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--color-muted)' }}>
          {comp.description}
        </p>

        {/* Details (collapsible) */}
        {expanded && (
          <ul className="text-xs space-y-1 mt-1">
            {comp.details.map((d, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span style={{ color: comp.accent }} className="mt-0.5">✓</span>
                <span style={{ color: 'var(--color-navy)' }}>{d}</span>
              </li>
            ))}
          </ul>
        )}

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

        {/* Action buttons */}
        <div className="flex flex-col gap-2 mt-2">
          <a
            href={comp.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`register-${comp.id}`}
            className="w-full text-center py-2 rounded-lg text-xs font-bold transition-all duration-150"
            style={{ background: comp.bg, color: 'white', boxShadow: `0 4px 12px ${comp.border}` }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}
          >
            Daftar Sekarang →
          </a>
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full text-center py-1.5 rounded-lg text-xs font-semibold transition-all duration-150"
            style={{ backgroundColor: comp.lightBg, color: comp.accent, border: `1px solid ${comp.border}` }}
          >
            {expanded ? 'Sembunyikan ↑' : 'Info Selengkapnya ↓'}
          </button>
        </div>
      </div>
    </article>
  );
}
