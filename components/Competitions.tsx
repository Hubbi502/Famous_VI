import { useState } from 'react';
import { X, Download, ExternalLink, BookOpen } from 'lucide-react';

// Maskot images
const MASKOT_MHQ = '/assets/img/maskot/Desain tanpa judul - MHQ.png';
const MASKOT_KHITOBAH = '/assets/img/maskot/Desain tanpa judul - KHITOBAH.png';
const MASKOT_SPEECH = '/assets/img/maskot/Desain tanpa judul - SPEECH.png';
const MASKOT_STORYTELLING = '/assets/img/maskot/Desain tanpa judul - STORYTELLING.png';
const MASKOT_LKBB = '/assets/img/maskot/Desain tanpa judul - LKBB.png';
const MASKOT_FUTSAL = '/assets/img/maskot/Desain tanpa judul - FUTSAL.png';
const MASKOT_ARCHERY = '/assets/img/maskot/Desain tanpa judul - ARCHERY.png';
const MASKOT_POSTER = '/assets/img/maskot/Desain tanpa judul - POSTER DIGITAL.png';

const competitions = [
  {
    id: 1,
    maskot: MASKOT_MHQ,
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
      'Peserta membawa Al-Qur\'an sendiri',
    ],
    tags: ['Agama', 'Individu', 'Hafalan'],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf_VLEuhalLzw707v1DjeT9fNA2o8EjXO8UKpYZu7hf22GkFA/viewform?usp=publish-editor',
    guidebookUrl: '#',
    accent: '#00838F',
    bg: 'linear-gradient(135deg, #004D40 0%, #00838F 100%)',
    lightBg: 'rgba(0,131,143,0.08)',
    border: 'rgba(0,131,143,0.2)',
  },
  {
    id: 2,
    maskot: MASKOT_KHITOBAH,
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
      'Tema ditentukan saat Technical Meeting',
    ],
    tags: ['Agama', 'Trilingual', 'Dakwah'],
    registerUrl: 'https://forms.gle/X2UvG7MDSZuGFb4e9',
    guidebookUrl: '#',
    accent: '#1565C0',
    bg: 'linear-gradient(135deg, #0D3470 0%, #1565C0 100%)',
    lightBg: 'rgba(21,101,192,0.08)',
    border: 'rgba(21,101,192,0.2)',
  },
  {
    id: 3,
    maskot: MASKOT_SPEECH,
    name: 'English Speech',
    fullName: 'English Speech',
    level: 'SMP/MTs Se-Jawa',
    type: 'Individu',
    price: 'Rp 55.000',
    description: 'Lomba pidato bahasa Inggris yang menguji kemampuan public speaking, penguasaan kosakata, intonasi, dan penyampaian argumen yang sistematis.',
    details: [
      'Bahasa: English Only',
      'Durasi: 5–7 menit',
      'Tema: Ditentukan saat Technical Meeting',
      'Penilaian: Konten, Pronounciasi & Kepercayaan Diri',
    ],
    tags: ['Bahasa', 'Individu', 'English'],
    registerUrl: 'https://forms.gle/zQ1yQj9ohQ6AjCzw8',
    guidebookUrl: '#',
    accent: '#2E7D32',
    bg: 'linear-gradient(135deg, #1B4A1E 0%, #2E7D32 100%)',
    lightBg: 'rgba(46,125,50,0.08)',
    border: 'rgba(46,125,50,0.2)',
  },
  {
    id: 4,
    maskot: MASKOT_STORYTELLING,
    name: 'Storytelling',
    fullName: 'Storytelling',
    level: 'SMP/MTs Se-Jawa',
    type: 'Individu',
    price: 'Rp 55.000',
    description: 'Lomba bercerita menggunakan bahasa Inggris dengan kreativitas ekspresi, mimik wajah, dan intonasi yang menarik. Cerita dapat berupa fabel, legenda, atau cerita rakyat.',
    details: [
      'Bahasa: English',
      'Durasi: 5–7 menit',
      'Boleh menggunakan properti sederhana',
      'Penilaian: Ekspresi, Intonasi & Kreativitas',
    ],
    tags: ['Seni', 'Individu', 'Kreativitas'],
    registerUrl: 'https://forms.gle/m1CMd9cYAaMZ5TCC9',
    guidebookUrl: '#',
    accent: '#E65100',
    bg: 'linear-gradient(135deg, #7c2d00 0%, #E65100 100%)',
    lightBg: 'rgba(230,81,0,0.08)',
    border: 'rgba(230,81,0,0.2)',
  },
  {
    id: 5,
    maskot: MASKOT_LKBB,
    name: 'LKBB',
    fullName: 'Lomba Ketangkasan Baris-Berbaris',
    level: 'SMP/MTs Se-Jawa',
    type: 'Tim (8–12 orang)',
    price: 'Rp 250.000',
    description: 'Lomba Ketangkasan Baris-Berbaris yang menguji kedisiplinan, kekompakan gerakan, dan ketepatan aba-aba seluruh anggota tim.',
    details: [
      'Tim: 8–12 peserta + 1 Komandan Regu',
      'Jenis: Peraturan & Variasi',
      'Kategori: Putra & Putri',
      'Penilaian: Keseragaman, Ketepatan & Kekompakan',
    ],
    tags: ['Tim', 'Disiplin', 'Baris'],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScqEkrs6PKZYIhIPKxREakuZgV2T7m2c4jJztjbz6URhcFW5g/viewform?usp=publish-editor',
    guidebookUrl: '#',
    accent: '#1E6FBF',
    bg: 'linear-gradient(135deg, #0a2a50 0%, #1E6FBF 100%)',
    lightBg: 'rgba(30,111,191,0.08)',
    border: 'rgba(30,111,191,0.2)',
  },
  {
    id: 6,
    maskot: MASKOT_FUTSAL,
    name: 'Futsal',
    fullName: 'Futsal Putra',
    level: 'SMP/MTs Se-Jawa',
    type: 'Tim (5 orang)',
    price: 'Rp 350.000',
    description: 'Lomba futsal beregu putra antar sekolah SMP/MTs sederajat Se-Pulau Jawa. Tunjukkan skill individu dan kerjasama tim terbaikmu di lapangan!',
    details: [
      'Kategori: Putra',
      'Tim: 5 pemain + maks. 5 cadangan',
      'Peraturan FIFA Futsal',
      'Penilaian: Fair play, Sportsmanship & Gol',
    ],
    tags: ['Tim', 'Olahraga', 'Putra'],
    registerUrl: 'https://forms.gle/ki54VHFdEccopHjd8',
    guidebookUrl: '#',
    accent: '#E84C1E',
    bg: 'linear-gradient(135deg, #7B1D1D 0%, #C43A10 100%)',
    lightBg: 'rgba(232,76,30,0.08)',
    border: 'rgba(232,76,30,0.2)',
  },
  {
    id: 7,
    maskot: MASKOT_ARCHERY,
    name: 'Archery',
    fullName: 'Archery (Panahan)',
    level: 'SMP/MTs Se-Jawa',
    type: 'Individu',
    price: 'Rp 80.000',
    description: 'Lomba panahan tingkat SMP/MTs yang menguji konsentrasi, ketepatan, dan pengendalian diri. Menggunakan alat panahan standar dengan jarak yang telah ditentukan panitia.',
    details: [
      'Kategori: Putri',
      'Jarak: Disesuaikan tingkat SMP',
      'Alat dapat dipinjam dari panitia',
      'Penilaian: Akurasi & Konsistensi',
    ],
    tags: ['Putri', 'Panahan', 'Individu'],
    registerUrl: 'https://forms.gle/1vuKHNcZkApnL4dR8',
    guidebookUrl: '#',
    accent: '#7B3F9E',
    bg: 'linear-gradient(135deg, #4a1d6e 0%, #7B3F9E 100%)',
    lightBg: 'rgba(123,63,158,0.08)',
    border: 'rgba(123,63,158,0.2)',
  },
  {
    id: 8,
    maskot: MASKOT_POSTER,
    name: 'Poster Digital',
    fullName: 'Desain Poster Digital',
    level: 'SMP/MTs Se-Jawa',
    type: 'Individu',
    price: 'Rp 55.000',
    description: 'Lomba desain poster digital menggunakan perangkat lunak desain. Ekspresikan kreativitas, estetika visual, dan kemampuan komunikasi grafis dalam satu karya terbaik.',
    details: [
      'Software: Bebas (Canva, Photoshop, AI, dll)',
      'Format output: PNG/JPG, min. 300 dpi',
      'Tema: Ditentukan saat Technical Meeting',
      'Penilaian: Kreativitas, Estetika & Pesan',
    ],
    tags: ['Seni', 'Digital', 'Desain'],
    registerUrl: 'https://forms.gle/PrJ9HtrrLBG8tSz88',
    guidebookUrl: '#',
    accent: '#AD1457',
    bg: 'linear-gradient(135deg, #6A0A35 0%, #AD1457 100%)',
    lightBg: 'rgba(173,20,87,0.08)',
    border: 'rgba(173,20,87,0.2)',
  },
];

type Competition = typeof competitions[0];

export default function Competitions() {
  const [selectedComp, setSelectedComp] = useState<Competition | null>(null);

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
            <CompetitionCard key={comp.id} comp={comp} onOpenDetail={() => setSelectedComp(comp)} />
          ))}
        </div>

        {/* Mobile Scroll */}
        <div className="sm:hidden comp-scroll flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
          {competitions.map((comp) => (
            <div key={comp.id} className="flex-shrink-0 w-64">
              <CompetitionCard comp={comp} onOpenDetail={() => setSelectedComp(comp)} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col items-center gap-2">
            <span className="text-sm font-semibold" style={{ color: 'var(--color-muted)' }}>
              Pilih cabang lomba di atas untuk mendaftar
            </span>
            <span className="text-xs" style={{ color: 'var(--color-muted)' }}>Open Registration: 02 Sep – 10 Okt 2026</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedComp && (
        <CompetitionModal comp={selectedComp} onClose={() => setSelectedComp(null)} />
      )}
    </section>
  );
}

/* ─── Card ─── */
interface CompetitionCardProps {
  comp: Competition;
  onOpenDetail: () => void;
}

function CompetitionCard({ comp, onOpenDetail }: CompetitionCardProps) {
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
        style={{ height: '140px', background: comp.bg, overflow: 'hidden' }}
      >
        {/* Glow behind maskot */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 110%, rgba(255,255,255,0.18) 0%, transparent 65%)' }} />
        <img
          src={comp.maskot}
          alt={`Maskot ${comp.name}`}
          className="relative z-10"
          style={{ height: '130px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.35))' }}
        />
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
          {comp.price}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-base font-black leading-tight" style={{ color: 'var(--color-navy)' }}>
            {comp.name}
          </h3>
          {comp.fullName !== comp.name && (
            <p className="text-xs mt-0.5 font-semibold" style={{ color: comp.accent }}>
              {comp.fullName}
            </p>
          )}
        </div>
        <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--color-muted)' }}>
          {comp.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
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
        <div className="flex flex-col gap-2 mt-1">
          <a
            href={comp.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`register-${comp.id}`}
            className="w-full text-center py-2 rounded-lg text-xs font-bold transition-all duration-150"
            style={{ background: comp.bg, color: 'white', boxShadow: `0 4px 12px ${comp.border}` }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}
          >
            Daftar Sekarang →
          </a>
          <button
            id={`detail-${comp.id}`}
            onClick={onOpenDetail}
            className="w-full text-center py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer"
            style={{ backgroundColor: comp.lightBg, color: comp.accent, border: `1px solid ${comp.border}` }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = comp.border; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = comp.lightBg; }}
          >
            Info Selengkapnya ↗
          </button>
        </div>
      </div>
    </article>
  );
}

/* ─── Modal ─── */
interface CompetitionModalProps {
  comp: Competition;
  onClose: () => void;
}

function CompetitionModal({ comp, onClose }: CompetitionModalProps) {
  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(7,18,32,0.72)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl overflow-hidden flex flex-col"
        style={{
          backgroundColor: 'var(--color-white)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
          maxHeight: '90vh',
        }}
      >
        {/* Modal Header — gradient banner */}
        <div
          className="relative flex items-end gap-5 p-7 pb-6"
          style={{ background: comp.bg, minHeight: '160px' }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            id="modal-close"
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150"
            style={{ backgroundColor: 'rgba(255,255,255,0.18)', color: 'white', backdropFilter: 'blur(8px)' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.32)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.18)'; }}
            aria-label="Tutup"
          >
            <X size={18} />
          </button>

          {/* Maskot */}
          <div
            className="w-16 h-16 rounded-2xl flex-shrink-0 overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '2px solid rgba(255,255,255,0.35)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <img
              src={comp.maskot}
              alt={`Maskot ${comp.name}`}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          {/* Title */}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.65)' }}>
              FAMOUS 6.0 · {comp.level}
            </p>
            <h3 className="text-xl font-black text-white leading-tight">{comp.name}</h3>
            {comp.fullName !== comp.name && (
              <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.75)' }}>{comp.fullName}</p>
            )}
          </div>
        </div>

        {/* Modal Body — scrollable */}
        <div className="overflow-y-auto flex-1 p-7 flex flex-col gap-6">

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: comp.lightBg, color: comp.accent, border: `1px solid ${comp.border}` }}>
              {comp.type}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: 'rgba(232,76,30,0.1)', color: 'var(--color-orange)', border: '1px solid rgba(232,76,30,0.25)' }}>
              💰 {comp.price}
            </span>
            {comp.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: 'var(--color-bg-light)', color: 'var(--color-muted)', border: '1px solid var(--color-border)' }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-black mb-2" style={{ color: 'var(--color-navy)' }}>
              Tentang Lomba
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              {comp.description}
            </p>
          </div>

          {/* Detail teknis */}
          <div>
            <h4 className="text-sm font-black mb-3" style={{ color: 'var(--color-navy)' }}>
              Detail Teknis
            </h4>
            <ul className="flex flex-col gap-2.5">
              {comp.details.map((d, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{ backgroundColor: comp.lightBg, color: comp.accent }}
                  >
                    ✓
                  </span>
                  <span className="text-sm" style={{ color: 'var(--color-text)' }}>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guidebook download */}
          <div
            className="rounded-2xl p-4 flex items-center gap-4"
            style={{ backgroundColor: comp.lightBg, border: `1px solid ${comp.border}` }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: comp.bg }}
            >
              <BookOpen size={18} color="white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-black" style={{ color: 'var(--color-navy)' }}>Guidebook {comp.name}</p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--color-muted)' }}>Peraturan & teknis lomba lengkap</p>
            </div>
            <a
              href={comp.guidebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              id={`guidebook-${comp.id}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold flex-shrink-0 transition-all duration-150"
              style={{ background: comp.bg, color: 'white' }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              <Download size={13} />
              Unduh
            </a>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 pt-0 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-150"
            style={{ border: '1.5px solid var(--color-border)', color: 'var(--color-muted)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = comp.accent; e.currentTarget.style.color = comp.accent; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-muted)'; }}
          >
            Tutup
          </button>
          <a
            href={comp.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`modal-register-${comp.id}`}
            className="flex-1 py-3 rounded-xl text-sm font-bold text-center transition-all duration-150 inline-flex items-center justify-center gap-2"
            style={{ background: comp.bg, color: 'white', boxShadow: `0 6px 20px ${comp.border}` }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}
          >
            Daftar Sekarang <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
