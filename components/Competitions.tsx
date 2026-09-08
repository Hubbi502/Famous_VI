import { useState } from 'react';
import { X, Download, ExternalLink, BookOpen } from 'lucide-react';

/* ── Maskot paths ── */
const MASKOT_MHQ          = '/assets/img/maskot/Desain tanpa judul - MHQ.png';
const MASKOT_KHITOBAH     = '/assets/img/maskot/Desain tanpa judul - KHITOBAH.png';
const MASKOT_SPEECH       = '/assets/img/maskot/Desain tanpa judul - SPEECH.png';
const MASKOT_STORYTELLING = '/assets/img/maskot/Desain tanpa judul - STORYTELLING.png';
const MASKOT_LKBB         = '/assets/img/maskot/Desain tanpa judul - LKBB.png';
const MASKOT_FUTSAL       = '/assets/img/maskot/Desain tanpa judul - FUTSAL.png';
const MASKOT_ARCHERY      = '/assets/img/maskot/Desain tanpa judul - ARCHERY.png';
const MASKOT_POSTER       = '/assets/img/maskot/Desain tanpa judul - POSTER DIGITAL.png';

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
    bubbleColor: 'rgba(0, 180, 200, 0.22)',
    glowHex: '#00BCD4',
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
    bubbleColor: 'rgba(70, 140, 220, 0.22)',
    glowHex: '#42A5F5',
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
    bubbleColor: 'rgba(80, 180, 90, 0.22)',
    glowHex: '#66BB6A',
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
    bubbleColor: 'rgba(240, 120, 40, 0.22)',
    glowHex: '#FF8A65',
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
    bubbleColor: 'rgba(50, 130, 210, 0.22)',
    glowHex: '#64B5F6',
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
    bubbleColor: 'rgba(220, 80, 30, 0.22)',
    glowHex: '#FF7043',
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
    description: 'Lomba panahan tingkat SMP/MTs yang menguji konsentrasi, ketepatan, dan pengendalian diri. Menggunakan alat panahan standar dengan jarak yang ditentukan panitia.',
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
    bubbleColor: 'rgba(160, 80, 210, 0.22)',
    glowHex: '#CE93D8',
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
    bubbleColor: 'rgba(200, 40, 100, 0.22)',
    glowHex: '#F48FB1',
    lightBg: 'rgba(173,20,87,0.08)',
    border: 'rgba(173,20,87,0.2)',
  },
];

type Competition = typeof competitions[0];

/* ════════════════════════════════════════════
   SECTION
════════════════════════════════════════════ */
export default function Competitions() {
  const [selectedComp, setSelectedComp] = useState<Competition | null>(null);

  return (
    <section
      id="competitions"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0e7a9a 0%, #0284c7 20%, #312e81 60%, #581c87 100%)',
      }}
    >
      {/* ── Ocean decorative bubbles ── */}
      <OceanBubbles />

      {/* ── Coral reef bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 1 }}>
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
          <path d="M0,120 L0,80 Q80,50 160,70 Q240,90 320,55 Q400,20 480,50 Q560,80 640,45 Q720,10 800,40 Q880,70 960,35 Q1040,0 1120,30 Q1200,60 1280,30 Q1360,0 1440,40 L1440,120Z" fill="rgba(251,113,133,0.25)" />
          <path d="M0,120 L0,95 Q100,70 200,88 Q300,105 400,78 Q500,50 600,75 Q700,98 800,68 Q900,38 1000,60 Q1100,82 1200,60 Q1300,38 1440,70 L1440,120Z" fill="rgba(42,196,216,0.18)" />
          {/* Mini corals */}
          <ellipse cx="80" cy="118" rx="22" ry="12" fill="rgba(251,113,133,0.5)" />
          <ellipse cx="220" cy="119" rx="16" ry="9" fill="rgba(42,196,216,0.4)" />
          <ellipse cx="520" cy="118" rx="20" ry="11" fill="rgba(232,76,30,0.4)" />
          <ellipse cx="800" cy="117" rx="18" ry="10" fill="rgba(168,85,247,0.4)" />
          <ellipse cx="1100" cy="119" rx="22" ry="12" fill="rgba(251,113,133,0.4)" />
          <ellipse cx="1380" cy="118" rx="16" ry="9" fill="rgba(42,196,216,0.3)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 2 }}>

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#7EEEFF' }}>
            <span className="w-8 h-px bg-current opacity-60" />
            Cabang Lomba
            <span className="w-8 h-px bg-current opacity-60" />
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            8 Cabang{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #FF8A50 0%, #FFD166 100%)' }}>
              Kompetisi
            </span>
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'rgba(200,235,255,0.65)' }}>
            Terbuka untuk pelajar SMP/MTs sederajat Se-Pulau Jawa · 02 Sep – 10 Okt 2026
          </p>
        </div>

        {/* ── Grid — Bubble Cards ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {competitions.map((comp) => (
            <CompetitionCard key={comp.id} comp={comp} onOpenDetail={() => setSelectedComp(comp)} />
          ))}
        </div>

        {/* ── Mobile horizontal scroll ── */}
        <div className="sm:hidden flex gap-5 overflow-x-auto pb-6 -mx-4 px-4" style={{ scrollSnapType: 'x mandatory' }}>
          {competitions.map((comp) => (
            <div key={comp.id} className="flex-shrink-0" style={{ width: '200px', scrollSnapAlign: 'start' }}>
              <CompetitionCard comp={comp} onOpenDetail={() => setSelectedComp(comp)} />
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedComp && (
        <CompetitionModal comp={selectedComp} onClose={() => setSelectedComp(null)} />
      )}
    </section>
  );
}

/* ── Decorative floating bubbles in background ── */
function OceanBubbles() {
  const bubbles = [
    { size: 220, top: '8%',  left: '3%',  opacity: 0.04 },
    { size: 140, top: '20%', left: '80%', opacity: 0.05 },
    { size: 80,  top: '55%', left: '92%', opacity: 0.06 },
    { size: 50,  top: '35%', left: '5%',  opacity: 0.07 },
    { size: 30,  top: '70%', left: '50%', opacity: 0.06 },
    { size: 18,  top: '15%', left: '55%', opacity: 0.09 },
    { size: 12,  top: '80%', left: '18%', opacity: 0.1  },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width:  b.size,
            height: b.size,
            top:    b.top,
            left:   b.left,
            border: '2px solid rgba(160,230,255,0.45)',
            background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.18) 0%, rgba(120,210,255,0.04) 60%, transparent 100%)',
            opacity: b.opacity * 10,
            boxShadow: 'inset 0 0 30px rgba(160,230,255,0.1)',
          }}
        />
      ))}

      {/* Floating Glowing Jellyfish */}
      <div className="anim-jelly" style={{ position: 'absolute', top: '15%', right: '8%', opacity: 0.75 }}>
        <svg width="50" height="70" viewBox="0 0 50 70">
          <ellipse cx="25" cy="20" rx="20" ry="16" fill="rgba(192,132,252,0.4)" stroke="rgba(216,180,254,0.85)" strokeWidth="2" />
          <path d="M12 30 Q16 50 14 68" stroke="rgba(232,121,249,0.7)" strokeWidth="2" fill="none" />
          <path d="M20 32 Q22 48 24 65" stroke="rgba(192,132,252,0.7)" strokeWidth="2" fill="none" />
          <path d="M28 32 Q26 48 28 65" stroke="rgba(192,132,252,0.7)" strokeWidth="2" fill="none" />
          <path d="M36 30 Q34 50 38 68" stroke="rgba(232,121,249,0.7)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Swimming School of Small Yellow & Cyan Fishes */}
      <div className="anim-swim-right" style={{ position: 'absolute', top: '35%', left: '0', animationDuration: '22s' }}>
        <svg width="35" height="20" viewBox="0 0 35 20">
          <ellipse cx="18" cy="10" rx="14" ry="7" fill="#FACC15" />
          <path d="M7 10 L0 3 L0 17Z" fill="#FACC15" />
          <circle cx="26" cy="8" r="1.5" fill="#000" />
        </svg>
      </div>
      <div className="anim-swim-right" style={{ position: 'absolute', top: '38%', left: '0', animationDuration: '22s', animationDelay: '0.6s' }}>
        <svg width="28" height="16" viewBox="0 0 35 20">
          <ellipse cx="18" cy="10" rx="14" ry="7" fill="#FACC15" />
          <path d="M7 10 L0 3 L0 17Z" fill="#FACC15" />
          <circle cx="26" cy="8" r="1.5" fill="#000" />
        </svg>
      </div>
      <div className="anim-swim-left" style={{ position: 'absolute', top: '75%', right: '0', animationDuration: '26s', animationDelay: '3s' }}>
        <svg width="32" height="18" viewBox="0 0 35 20">
          <ellipse cx="18" cy="10" rx="14" ry="7" fill="#38BDF8" />
          <path d="M7 10 L0 3 L0 17Z" fill="#38BDF8" />
          <circle cx="26" cy="8" r="1.5" fill="#000" />
        </svg>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   BUBBLE CARD — Inspired by FAMOUS VI poster
════════════════════════════════════════════ */
interface CompetitionCardProps {
  comp: Competition;
  onOpenDetail: () => void;
}

function CompetitionCard({ comp, onOpenDetail }: CompetitionCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center gap-0 cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'transform 0.38s cubic-bezier(0.34,1.56,0.64,1)',
      }}
    >
      {/* ── BUBBLE sphere ── */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: '100%',
          aspectRatio: '1 / 1',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 32% 28%, rgba(255,255,255,0.38) 0%, rgba(180,230,255,0.18) 35%, rgba(100,190,240,0.10) 65%, rgba(40,120,200,0.08) 100%)',
          border: '2px solid rgba(255,255,255,0.45)',
          boxShadow: hovered
            ? `0 0 0 4px rgba(255,255,255,0.15), 0 20px 55px rgba(0,0,0,0.35), 0 0 40px ${comp.bubbleColor}`
            : `0 0 0 1px rgba(255,255,255,0.1),  0 10px 35px rgba(0,0,0,0.28), 0 0 24px ${comp.bubbleColor}`,
          backdropFilter: 'blur(2px)',
          transition: 'box-shadow 0.38s ease',
          overflow: 'hidden',
        }}
      >
        {/* Inner bubble shine — top-left highlight */}
        <div style={{
          position: 'absolute',
          top: '8%', left: '12%',
          width: '35%', height: '28%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.55) 0%, transparent 100%)',
          pointerEvents: 'none',
          transform: 'rotate(-20deg)',
        }} />

        {/* Inner bubble shine — bottom-right */}
        <div style={{
          position: 'absolute',
          bottom: '10%', right: '10%',
          width: '20%', height: '14%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.25) 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        {/* Mascot image */}
        <img
          src={comp.maskot}
          alt={`Maskot ${comp.name}`}
          style={{
            width: '85%',
            height: '85%',
            objectFit: 'contain',
            objectPosition: 'center bottom',
            filter: `drop-shadow(0 8px 20px rgba(0,0,0,0.4)) drop-shadow(0 0 16px ${comp.bubbleColor})`,
            transform: hovered ? 'scale(1.06) translateY(-4px)' : 'scale(1) translateY(0)',
            transition: 'transform 0.42s cubic-bezier(0.34,1.56,0.64,1)',
            position: 'relative',
            zIndex: 2,
          }}
        />

        {/* Price pill — top-right of bubble */}
        <div style={{
          position: 'absolute', top: '10%', right: '6%', zIndex: 5,
          fontSize: '9px', fontWeight: 800,
          padding: '3px 7px', borderRadius: '99px',
          backgroundColor: 'rgba(0,0,0,0.45)',
          color: 'white',
          border: '1px solid rgba(255,255,255,0.3)',
          backdropFilter: 'blur(6px)',
          letterSpacing: '0.02em',
        }}>
          {comp.price}
        </div>
      </div>

      {/* ── Name label below bubble ── */}
      <div className="text-center mt-3 px-1">
        <h3 style={{
          fontWeight: 900,
          fontSize: '13px',
          color: 'white',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          textShadow: `0 2px 12px rgba(0,0,0,0.5), 0 0 20px ${comp.glowHex}55`,
          lineHeight: 1.2,
        }}>
          {comp.name}
        </h3>
        {comp.fullName !== comp.name && (
          <p style={{ fontSize: '10px', color: 'rgba(200,235,255,0.6)', marginTop: '2px', lineHeight: 1.3 }}>
            {comp.fullName}
          </p>
        )}
        {/* Type tag */}
        <span style={{
          display: 'inline-block', marginTop: '5px',
          fontSize: '9px', fontWeight: 700,
          padding: '2px 8px', borderRadius: '99px',
          backgroundColor: comp.bubbleColor,
          color: comp.glowHex,
          border: `1px solid ${comp.glowHex}55`,
          backdropFilter: 'blur(6px)',
          letterSpacing: '0.04em',
        }}>
          {comp.type}
        </span>
      </div>

      {/* ── Action buttons ── */}
      <div className="flex gap-2 mt-3 w-full px-2">
        <a
          href={comp.registerUrl}
          target="_blank"
          rel="noopener noreferrer"
          id={`register-${comp.id}`}
          onClick={(e) => e.stopPropagation()}
          style={{
            flex: 1,
            textAlign: 'center',
            padding: '7px 4px',
            borderRadius: '10px',
            fontSize: '10px',
            fontWeight: 800,
            textDecoration: 'none',
            background: comp.bg,
            color: 'white',
            border: `1px solid ${comp.glowHex}55`,
            boxShadow: `0 4px 14px ${comp.bubbleColor}`,
            letterSpacing: '0.02em',
          }}
        >
          Daftar →
        </a>
        <button
          id={`detail-${comp.id}`}
          onClick={onOpenDetail}
          style={{
            flex: 1,
            textAlign: 'center',
            padding: '7px 4px',
            borderRadius: '10px',
            fontSize: '10px',
            fontWeight: 700,
            cursor: 'pointer',
            background: 'rgba(255,255,255,0.1)',
            color: 'rgba(200,235,255,0.9)',
            border: '1px solid rgba(255,255,255,0.22)',
            backdropFilter: 'blur(6px)',
            letterSpacing: '0.02em',
          }}
        >
          Info ↗
        </button>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   MODAL
════════════════════════════════════════════ */
interface CompetitionModalProps {
  comp: Competition;
  onClose: () => void;
}

function CompetitionModal({ comp, onClose }: CompetitionModalProps) {
  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(3,8,22,0.88)', backdropFilter: 'blur(16px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-md rounded-3xl overflow-hidden flex flex-col"
        style={{
          background: 'linear-gradient(180deg, #071a38 0%, #0b2d5e 45%, #0d4880 100%)',
          boxShadow: `0 40px 100px rgba(0,0,0,0.6), 0 0 80px ${comp.bubbleColor}, 0 0 0 1px rgba(255,255,255,0.08)`,
          maxHeight: '92vh',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        {/* ── Ambient ocean glow layers ── */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', top: '-20%', left: '20%', width: '60%', height: '50%', borderRadius: '50%', background: `radial-gradient(circle, ${comp.bubbleColor} 0%, transparent 70%)`, filter: 'blur(40px)', opacity: 0.7 }} />
          <div style={{ position: 'absolute', bottom: '0', right: '-10%', width: '50%', height: '40%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(42,196,216,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }} />
        </div>

        {/* ── HERO area: mascot bubble + title ── */}
        <div className="relative flex flex-col items-center pt-8 pb-4 px-6" style={{ zIndex: 1 }}>

          {/* Close btn */}
          <button
            onClick={onClose}
            id="modal-close"
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(200,235,255,0.85)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', cursor: 'pointer' }}
            aria-label="Tutup"
          >
            <X size={17} />
          </button>

          {/* Big bubble mascot */}
          <div style={{
            width: '150px', height: '150px', borderRadius: '50%', position: 'relative',
            background: 'radial-gradient(circle at 30% 26%, rgba(255,255,255,0.42) 0%, rgba(180,230,255,0.2) 35%, rgba(100,190,240,0.1) 65%, transparent 100%)',
            border: '2.5px solid rgba(255,255,255,0.5)',
            boxShadow: `0 0 0 8px rgba(255,255,255,0.05), 0 16px 48px rgba(0,0,0,0.4), 0 0 50px ${comp.bubbleColor}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
            marginBottom: '16px',
          }}>
            {/* Bubble shine highlights */}
            <div style={{ position: 'absolute', top: '7%', left: '13%', width: '36%', height: '28%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,255,255,0.62) 0%, transparent 100%)', transform: 'rotate(-20deg)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '9%', right: '11%', width: '18%', height: '12%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,255,255,0.3) 0%, transparent 100%)', pointerEvents: 'none' }} />
            <img
              src={comp.maskot}
              alt={`Maskot ${comp.name}`}
              style={{ width: '85%', height: '85%', objectFit: 'contain', objectPosition: 'center bottom', filter: `drop-shadow(0 8px 20px rgba(0,0,0,0.45)) drop-shadow(0 0 18px ${comp.bubbleColor})`, position: 'relative', zIndex: 2 }}
            />
          </div>

          {/* Title */}
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(160,220,255,0.6)', marginBottom: '4px' }}>
            FAMOUS 6.0 · {comp.level}
          </p>
          <h3 style={{ fontSize: '26px', fontWeight: 900, color: 'white', lineHeight: 1.1, textAlign: 'center', textShadow: `0 2px 20px ${comp.bubbleColor}, 0 0 40px ${comp.bubbleColor}` }}>
            {comp.name}
          </h3>
          {comp.fullName !== comp.name && (
            <p style={{ fontSize: '12px', color: 'rgba(180,225,255,0.65)', marginTop: '4px', textAlign: 'center' }}>{comp.fullName}</p>
          )}

          {/* Type + Price pills */}
          <div className="flex gap-2 flex-wrap justify-center mt-4">
            <span style={{ fontSize: '10px', fontWeight: 800, padding: '4px 12px', borderRadius: '99px', background: comp.bubbleColor, color: comp.glowHex, border: `1px solid ${comp.glowHex}55`, backdropFilter: 'blur(8px)', letterSpacing: '0.04em' }}>
              {comp.type}
            </span>
            <span style={{ fontSize: '10px', fontWeight: 800, padding: '4px 12px', borderRadius: '99px', background: 'rgba(255,200,80,0.18)', color: '#FFD166', border: '1px solid rgba(255,200,80,0.35)', backdropFilter: 'blur(8px)', letterSpacing: '0.04em' }}>
              💰 {comp.price}
            </span>
            {comp.tags.map((tag) => (
              <span key={tag} style={{ fontSize: '10px', fontWeight: 600, padding: '4px 10px', borderRadius: '99px', background: 'rgba(255,255,255,0.08)', color: 'rgba(200,235,255,0.75)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Coral reef separator ── */}
        <div style={{ position: 'relative', zIndex: 1, marginTop: '4px', height: '32px', overflow: 'hidden', flexShrink: 0 }}>
          <svg viewBox="0 0 480 32" style={{ width: '100%', height: '100%', display: 'block' }} preserveAspectRatio="none">
            <path d="M0,32 L0,20 Q60,6 120,16 Q180,26 240,12 Q300,0 360,14 Q420,26 480,16 L480,32Z" fill="rgba(180,230,255,0.06)" />
            <ellipse cx="40"  cy="31" rx="16" ry="8" fill="rgba(251,113,133,0.4)" />
            <ellipse cx="120" cy="32" rx="11" ry="6" fill={`${comp.bubbleColor}`} opacity="0.8" />
            <ellipse cx="240" cy="31" rx="14" ry="7" fill="rgba(42,196,216,0.35)" />
            <ellipse cx="360" cy="32" rx="11" ry="6" fill={`${comp.bubbleColor}`} opacity="0.7" />
            <ellipse cx="450" cy="31" rx="14" ry="7" fill="rgba(168,85,247,0.35)" />
          </svg>
        </div>

        {/* ── Body (scrollable) ── */}
        <div className="overflow-y-auto flex-1 flex flex-col gap-5 px-6 py-5" style={{ zIndex: 1 }}>

          {/* Description glass panel */}
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '16px', backdropFilter: 'blur(8px)' }}>
            <p style={{ fontSize: '10px', fontWeight: 800, color: comp.glowHex, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
              🌊 Tentang Lomba
            </p>
            <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'rgba(200,235,255,0.82)' }}>
              {comp.description}
            </p>
          </div>

          {/* Detail teknis glass panel */}
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '16px', backdropFilter: 'blur(8px)' }}>
            <p style={{ fontSize: '10px', fontWeight: 800, color: comp.glowHex, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
              📋 Detail Teknis
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {comp.details.map((d, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{
                    width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
                    background: comp.bubbleColor,
                    border: `1px solid ${comp.glowHex}55`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '9px', fontWeight: 900, color: comp.glowHex,
                    marginTop: '1px',
                  }}>✓</div>
                  <span style={{ fontSize: '13px', color: 'rgba(200,235,255,0.85)', lineHeight: 1.5 }}>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guidebook panel */}
          <div style={{
            background: `linear-gradient(135deg, ${comp.bubbleColor}, rgba(255,255,255,0.04))`,
            border: `1px solid ${comp.glowHex}44`,
            borderRadius: '16px', padding: '14px 16px',
            display: 'flex', alignItems: 'center', gap: '14px',
            backdropFilter: 'blur(8px)',
          }}>
            <div style={{
              width: '42px', height: '42px', borderRadius: '12px', flexShrink: 0,
              background: comp.bg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: `0 4px 16px ${comp.bubbleColor}`,
            }}>
              <BookOpen size={18} color="white" />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 800, fontSize: '12px', color: 'white', margin: 0 }}>Guidebook {comp.name}</p>
              <p style={{ fontSize: '11px', color: 'rgba(200,235,255,0.55)', margin: '3px 0 0' }}>Peraturan & teknis lomba lengkap</p>
            </div>
            <a
              href={comp.guidebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              id={`guidebook-${comp.id}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                padding: '7px 13px', borderRadius: '10px',
                fontSize: '11px', fontWeight: 800, flexShrink: 0,
                background: comp.bg, color: 'white', textDecoration: 'none',
                border: `1px solid ${comp.glowHex}55`,
                boxShadow: `0 4px 14px ${comp.bubbleColor}`,
              }}
            >
              <Download size={12} />
              Unduh
            </a>
          </div>
        </div>

        {/* ── Footer ── */}
        <div style={{ padding: '12px 20px 20px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', zIndex: 1, position: 'relative' }}>
          <button
            onClick={onClose}
            style={{
              padding: '12px', borderRadius: '14px', fontSize: '13px', fontWeight: 600,
              background: 'rgba(255,255,255,0.08)', color: 'rgba(200,235,255,0.6)',
              border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(200,235,255,0.6)'; }}
          >
            Tutup
          </button>
          <a
            href={comp.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`modal-register-${comp.id}`}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              padding: '12px', borderRadius: '14px', fontSize: '13px', fontWeight: 800,
              background: comp.bg, color: 'white', textDecoration: 'none',
              boxShadow: `0 8px 28px ${comp.bubbleColor}`,
              border: `1px solid ${comp.glowHex}44`,
              transition: 'opacity 0.15s, transform 0.15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}
          >
            Daftar Sekarang <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
