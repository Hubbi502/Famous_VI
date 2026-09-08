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
    id: 1, maskot: MASKOT_MHQ,
    name: 'MHQ', fullName: 'Musabaqah Hifzhil Qur\'an',
    level: 'SMP/MTs Se-Jawa', type: 'Individu', price: 'Rp 60.000',
    description: 'Kompetisi hafalan Al-Qur\'an yang menguji kelancaran hafalan, kefasihan tajwid, dan kemampuan menjawab pertanyaan seputar hafalan.',
    details: ['Kategori: Individu (Putra & Putri)', 'Materi: Juz 29 & 30', 'Sistem: Tahfizh + Tanya Jawab', 'Peserta membawa Al-Qur\'an sendiri'],
    tags: ['Agama', 'Individu', 'Hafalan'],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf_VLEuhalLzw707v1DjeT9fNA2o8EjXO8UKpYZu7hf22GkFA/viewform?usp=publish-editor',
    guidebookUrl: '#',
    deepColor: '#002B2E', midColor: '#005B63', brightColor: '#00BCD4',
    coralA: 'rgba(0,188,212,0.7)', coralB: 'rgba(0,131,143,0.6)', coralC: 'rgba(38,198,218,0.5)',
    accent: '#00838F', bg: 'linear-gradient(135deg, #004D40 0%, #00838F 100%)',
    lightBg: 'rgba(0,131,143,0.08)', border: 'rgba(0,131,143,0.2)',
  },
  {
    id: 2, maskot: MASKOT_KHITOBAH,
    name: 'Khitobah 3 Bahasa', fullName: 'Khitobah 3 Bahasa',
    level: 'SMP/MTs Se-Jawa', type: 'Individu', price: 'Rp 60.000',
    description: 'Lomba ceramah/pidato islami yang disampaikan dalam tiga bahasa: Arab, Inggris, dan Indonesia secara bergantian dalam satu penampilan.',
    details: ['Bahasa: Arab, Inggris & Indonesia', 'Durasi: Maks. 7 menit', 'Kategori: Individu Campuran', 'Tema ditentukan saat Technical Meeting'],
    tags: ['Agama', 'Trilingual', 'Dakwah'],
    registerUrl: 'https://forms.gle/X2UvG7MDSZuGFb4e9',
    guidebookUrl: '#',
    deepColor: '#050E2A', midColor: '#0D3470', brightColor: '#42A5F5',
    coralA: 'rgba(66,165,245,0.7)', coralB: 'rgba(21,101,192,0.6)', coralC: 'rgba(100,181,246,0.5)',
    accent: '#1565C0', bg: 'linear-gradient(135deg, #0D3470 0%, #1565C0 100%)',
    lightBg: 'rgba(21,101,192,0.08)', border: 'rgba(21,101,192,0.2)',
  },
  {
    id: 3, maskot: MASKOT_SPEECH,
    name: 'English Speech', fullName: 'English Speech',
    level: 'SMP/MTs Se-Jawa', type: 'Individu', price: 'Rp 55.000',
    description: 'Lomba pidato bahasa Inggris yang menguji kemampuan public speaking, penguasaan kosakata, intonasi, dan penyampaian argumen yang sistematis.',
    details: ['Bahasa: English Only', 'Durasi: 5–7 menit', 'Tema: Ditentukan saat Technical Meeting', 'Penilaian: Konten, Pronounciasi & Kepercayaan Diri'],
    tags: ['Bahasa', 'Individu', 'English'],
    registerUrl: 'https://forms.gle/zQ1yQj9ohQ6AjCzw8',
    guidebookUrl: '#',
    deepColor: '#071A0A', midColor: '#1B4A1E', brightColor: '#66BB6A',
    coralA: 'rgba(102,187,106,0.7)', coralB: 'rgba(46,125,50,0.6)', coralC: 'rgba(129,199,132,0.5)',
    accent: '#2E7D32', bg: 'linear-gradient(135deg, #1B4A1E 0%, #2E7D32 100%)',
    lightBg: 'rgba(46,125,50,0.08)', border: 'rgba(46,125,50,0.2)',
  },
  {
    id: 4, maskot: MASKOT_STORYTELLING,
    name: 'Storytelling', fullName: 'Storytelling',
    level: 'SMP/MTs Se-Jawa', type: 'Individu', price: 'Rp 55.000',
    description: 'Lomba bercerita menggunakan bahasa Inggris dengan kreativitas ekspresi, mimik wajah, dan intonasi yang menarik. Cerita dapat berupa fabel, legenda, atau cerita rakyat.',
    details: ['Bahasa: English', 'Durasi: 5–7 menit', 'Boleh menggunakan properti sederhana', 'Penilaian: Ekspresi, Intonasi & Kreativitas'],
    tags: ['Seni', 'Individu', 'Kreativitas'],
    registerUrl: 'https://forms.gle/m1CMd9cYAaMZ5TCC9',
    guidebookUrl: '#',
    deepColor: '#1E0A00', midColor: '#7C2D00', brightColor: '#FF8A65',
    coralA: 'rgba(255,138,101,0.7)', coralB: 'rgba(230,81,0,0.6)', coralC: 'rgba(255,171,145,0.5)',
    accent: '#E65100', bg: 'linear-gradient(135deg, #7c2d00 0%, #E65100 100%)',
    lightBg: 'rgba(230,81,0,0.08)', border: 'rgba(230,81,0,0.2)',
  },
  {
    id: 5, maskot: MASKOT_LKBB,
    name: 'LKBB', fullName: 'Lomba Ketangkasan Baris-Berbaris',
    level: 'SMP/MTs Se-Jawa', type: 'Tim (8–12 orang)', price: 'Rp 250.000',
    description: 'Lomba Ketangkasan Baris-Berbaris yang menguji kedisiplinan, kekompakan gerakan, dan ketepatan aba-aba seluruh anggota tim.',
    details: ['Tim: 8–12 peserta + 1 Komandan Regu', 'Jenis: Peraturan & Variasi', 'Kategori: Putra & Putri', 'Penilaian: Keseragaman, Ketepatan & Kekompakan'],
    tags: ['Tim', 'Disiplin', 'Baris'],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScqEkrs6PKZYIhIPKxREakuZgV2T7m2c4jJztjbz6URhcFW5g/viewform?usp=publish-editor',
    guidebookUrl: '#',
    deepColor: '#050F20', midColor: '#0A2A50', brightColor: '#64B5F6',
    coralA: 'rgba(100,181,246,0.7)', coralB: 'rgba(30,111,191,0.6)', coralC: 'rgba(144,202,249,0.5)',
    accent: '#1E6FBF', bg: 'linear-gradient(135deg, #0a2a50 0%, #1E6FBF 100%)',
    lightBg: 'rgba(30,111,191,0.08)', border: 'rgba(30,111,191,0.2)',
  },
  {
    id: 6, maskot: MASKOT_FUTSAL,
    name: 'Futsal', fullName: 'Futsal Putra',
    level: 'SMP/MTs Se-Jawa', type: 'Tim (5 orang)', price: 'Rp 350.000',
    description: 'Lomba futsal beregu putra antar sekolah SMP/MTs sederajat Se-Pulau Jawa. Tunjukkan skill individu dan kerjasama tim terbaikmu di lapangan!',
    details: ['Kategori: Putra', 'Tim: 5 pemain + maks. 5 cadangan', 'Peraturan FIFA Futsal', 'Penilaian: Fair play, Sportsmanship & Gol'],
    tags: ['Tim', 'Olahraga', 'Putra'],
    registerUrl: 'https://forms.gle/ki54VHFdEccopHjd8',
    guidebookUrl: '#',
    deepColor: '#1A0500', midColor: '#7B1D1D', brightColor: '#FF7043',
    coralA: 'rgba(255,112,67,0.7)', coralB: 'rgba(196,58,16,0.6)', coralC: 'rgba(255,154,128,0.5)',
    accent: '#E84C1E', bg: 'linear-gradient(135deg, #7B1D1D 0%, #C43A10 100%)',
    lightBg: 'rgba(232,76,30,0.08)', border: 'rgba(232,76,30,0.2)',
  },
  {
    id: 7, maskot: MASKOT_ARCHERY,
    name: 'Archery', fullName: 'Archery (Panahan)',
    level: 'SMP/MTs Se-Jawa', type: 'Individu', price: 'Rp 80.000',
    description: 'Lomba panahan tingkat SMP/MTs yang menguji konsentrasi, ketepatan, dan pengendalian diri. Menggunakan alat panahan standar dengan jarak yang ditentukan panitia.',
    details: ['Kategori: Putri', 'Jarak: Disesuaikan tingkat SMP', 'Alat dapat dipinjam dari panitia', 'Penilaian: Akurasi & Konsistensi'],
    tags: ['Putri', 'Panahan', 'Individu'],
    registerUrl: 'https://forms.gle/1vuKHNcZkApnL4dR8',
    guidebookUrl: '#',
    deepColor: '#110820', midColor: '#4A1D6E', brightColor: '#CE93D8',
    coralA: 'rgba(206,147,216,0.7)', coralB: 'rgba(123,63,158,0.6)', coralC: 'rgba(186,104,200,0.5)',
    accent: '#7B3F9E', bg: 'linear-gradient(135deg, #4a1d6e 0%, #7B3F9E 100%)',
    lightBg: 'rgba(123,63,158,0.08)', border: 'rgba(123,63,158,0.2)',
  },
  {
    id: 8, maskot: MASKOT_POSTER,
    name: 'Poster Digital', fullName: 'Desain Poster Digital',
    level: 'SMP/MTs Se-Jawa', type: 'Individu', price: 'Rp 55.000',
    description: 'Lomba desain poster digital menggunakan perangkat lunak desain. Ekspresikan kreativitas, estetika visual, dan kemampuan komunikasi grafis dalam satu karya terbaik.',
    details: ['Software: Bebas (Canva, Photoshop, AI, dll)', 'Format output: PNG/JPG, min. 300 dpi', 'Tema: Ditentukan saat Technical Meeting', 'Penilaian: Kreativitas, Estetika & Pesan'],
    tags: ['Seni', 'Digital', 'Desain'],
    registerUrl: 'https://forms.gle/PrJ9HtrrLBG8tSz88',
    guidebookUrl: '#',
    deepColor: '#1A0210', midColor: '#6A0A35', brightColor: '#F48FB1',
    coralA: 'rgba(244,143,177,0.7)', coralB: 'rgba(173,20,87,0.6)', coralC: 'rgba(240,98,146,0.5)',
    accent: '#AD1457', bg: 'linear-gradient(135deg, #6A0A35 0%, #AD1457 100%)',
    lightBg: 'rgba(173,20,87,0.08)', border: 'rgba(173,20,87,0.2)',
  },
];

type Competition = typeof competitions[0];

/* ════════════════════════════════
   SECTION
════════════════════════════════ */
export default function Competitions() {
  const [selectedComp, setSelectedComp] = useState<Competition | null>(null);

  return (
    <section
      id="competitions"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #071a38 0%, #0b2d5e 30%, #0d4a8a 60%, #0e6e9c 85%, #1a9db5 100%)',
      }}
    >
      {/* Background ambient bubbles */}
      <AmbientBubbles />

      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ zIndex: 1 }}>
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
          <path d="M0,0 L1440,0 L1440,30 Q1260,60 1080,30 Q900,0 720,30 Q540,60 360,30 Q180,0 0,30Z" fill="white" />
        </svg>
      </div>

      {/* Coral reef bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 1 }}>
        <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
          <path d="M0,100 L0,65 Q100,30 200,55 Q300,80 400,48 Q500,16 600,45 Q700,74 800,42 Q900,10 1000,38 Q1100,66 1200,42 Q1300,18 1440,50 L1440,100Z" fill="rgba(251,113,133,0.4)" />
          <path d="M0,100 L0,80 Q120,55 240,72 Q360,89 480,66 Q600,43 720,65 Q840,87 960,62 Q1080,37 1200,60 Q1320,83 1440,68 L1440,100Z" fill="rgba(42,196,216,0.3)" />
          <ellipse cx="60"   cy="98"  rx="28" ry="14" fill="rgba(251,113,133,0.65)" />
          <ellipse cx="200"  cy="99"  rx="18" ry="10" fill="rgba(42,196,216,0.55)" />
          <ellipse cx="420"  cy="98"  rx="22" ry="12" fill="rgba(255,138,101,0.6)" />
          <ellipse cx="680"  cy="99"  rx="20" ry="11" fill="rgba(206,147,216,0.6)" />
          <ellipse cx="920"  cy="98"  rx="26" ry="13" fill="rgba(100,181,246,0.6)" />
          <ellipse cx="1180" cy="99"  rx="20" ry="11" fill="rgba(102,187,106,0.55)" />
          <ellipse cx="1380" cy="98"  rx="24" ry="12" fill="rgba(244,143,177,0.6)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 2 }}>
        {/* Header */}
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

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {competitions.map((comp) => (
            <CompetitionCard key={comp.id} comp={comp} onOpenDetail={() => setSelectedComp(comp)} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="sm:hidden flex gap-4 overflow-x-auto pb-6 -mx-4 px-4" style={{ scrollSnapType: 'x mandatory' }}>
          {competitions.map((comp) => (
            <div key={comp.id} className="flex-shrink-0" style={{ width: '200px', scrollSnapAlign: 'start' }}>
              <CompetitionCard comp={comp} onOpenDetail={() => setSelectedComp(comp)} />
            </div>
          ))}
        </div>
      </div>

      {selectedComp && (
        <CompetitionModal comp={selectedComp} onClose={() => setSelectedComp(null)} />
      )}
    </section>
  );
}

/* ── Ambient floating bubbles ── */
function AmbientBubbles() {
  const bubbles = [
    { size: 200, top: '10%', left:  '2%', op: 0.04 },
    { size: 120, top: '18%', left: '82%', op: 0.05 },
    { size:  70, top: '55%', left: '90%', op: 0.06 },
    { size:  40, top: '38%', left:  '6%', op: 0.07 },
    { size:  22, top: '72%', left: '48%', op: 0.07 },
    { size:  14, top: '12%', left: '58%', op: 0.09 },
    { size:  10, top: '82%', left: '20%', op: 0.10 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {bubbles.map((b, i) => (
        <div key={i} className="absolute rounded-full" style={{
          width: b.size, height: b.size, top: b.top, left: b.left,
          border: '1.5px solid rgba(160,230,255,0.4)',
          background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.15) 0%, transparent 70%)',
          opacity: b.op * 10,
        }} />
      ))}
    </div>
  );
}

/* ════════════════════════════════
   COMPETITION CARD — Mini Ocean Scene
════════════════════════════════ */
interface CompetitionCardProps {
  comp: Competition;
  onOpenDetail: () => void;
}

function CompetitionCard({ comp, onOpenDetail }: CompetitionCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'transform 0.38s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.38s ease',
        boxShadow: hovered
          ? `0 24px 60px rgba(0,0,0,0.5), 0 0 0 2px rgba(255,255,255,0.18), 0 0 40px ${comp.brightColor}44`
          : `0 8px 28px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)`,
      }}
    >
      {/* ── Top Ocean Scene ── */}
      <div style={{
        position: 'relative',
        height: '220px',
        background: `linear-gradient(175deg, ${comp.deepColor} 0%, ${comp.midColor} 55%, ${comp.brightColor}55 100%)`,
        overflow: 'hidden',
      }}>
        {/* Ocean depth ambient glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse at 50% 0%, ${comp.brightColor}22 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />

        {/* Small ambient bubbles inside card */}
        {[
          { size: 6,  left: '12%', bottom: '38%', op: 0.5 },
          { size: 4,  left: '28%', bottom: '55%', op: 0.4 },
          { size: 8,  left: '76%', bottom: '42%', op: 0.5 },
          { size: 5,  left: '88%', bottom: '62%', op: 0.35 },
          { size: 3,  left: '55%', bottom: '70%', op: 0.4 },
        ].map((b, i) => (
          <div key={i} style={{
            position: 'absolute', left: b.left, bottom: b.bottom,
            width: b.size, height: b.size, borderRadius: '50%',
            border: `1px solid rgba(255,255,255,${b.op})`,
            background: `radial-gradient(circle at 35% 30%, rgba(255,255,255,${b.op * 0.6}), transparent)`,
          }} />
        ))}

        {/* Price pill top-left */}
        <div style={{
          position: 'absolute', top: '10px', left: '10px', zIndex: 10,
          fontSize: '9px', fontWeight: 800,
          padding: '3px 8px', borderRadius: '99px',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: `1px solid ${comp.brightColor}66`,
          backdropFilter: 'blur(8px)',
          letterSpacing: '0.03em',
        }}>
          {comp.price}
        </div>

        {/* Type pill top-right */}
        <div style={{
          position: 'absolute', top: '10px', right: '10px', zIndex: 10,
          fontSize: '9px', fontWeight: 700,
          padding: '3px 8px', borderRadius: '99px',
          backgroundColor: `${comp.brightColor}33`,
          color: comp.brightColor,
          border: `1px solid ${comp.brightColor}55`,
          backdropFilter: 'blur(8px)',
          letterSpacing: '0.03em',
        }}>
          {comp.type}
        </div>

        {/* ── Bubble sphere with mascot ── */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: `translate(-50%, -50%) ${hovered ? 'translateY(-6px) scale(1.05)' : 'translateY(0) scale(1)'}`,
          transition: 'transform 0.42s cubic-bezier(0.34,1.56,0.64,1)',
          width: '140px', height: '140px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 32% 25%, rgba(255,255,255,0.42) 0%, rgba(200,235,255,0.18) 38%, rgba(130,200,245,0.08) 68%, transparent 100%)',
          border: '2px solid rgba(255,255,255,0.48)',
          boxShadow: `
            inset 0 2px 12px rgba(255,255,255,0.25),
            0 8px 32px rgba(0,0,0,0.35),
            0 0 28px ${comp.brightColor}44
          `,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
          zIndex: 5,
        }}>
          {/* Shine highlight */}
          <div style={{
            position: 'absolute', top: '8%', left: '14%',
            width: '36%', height: '28%', borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, transparent 100%)',
            transform: 'rotate(-25deg)',
            pointerEvents: 'none',
          }} />
          {/* Bottom shine */}
          <div style={{
            position: 'absolute', bottom: '10%', right: '12%',
            width: '18%', height: '12%', borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.3) 0%, transparent 100%)',
            pointerEvents: 'none',
          }} />
          <img
            src={comp.maskot}
            alt={`Maskot ${comp.name}`}
            style={{
              width: '82%', height: '82%',
              objectFit: 'contain', objectPosition: 'center bottom',
              filter: `drop-shadow(0 6px 16px rgba(0,0,0,0.45))`,
              position: 'relative', zIndex: 2,
            }}
          />
        </div>

        {/* ── Mini coral reef at card bottom ── */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, pointerEvents: 'none', zIndex: 4 }}>
          <svg viewBox="0 0 220 40" style={{ width: '100%', display: 'block' }} preserveAspectRatio="none">
            <path d="M0,40 L0,28 Q27,12 55,22 Q82,32 110,18 Q138,4 165,16 Q192,28 220,20 L220,40Z" fill={`${comp.midColor}cc`} />
            <path d="M0,40 L0,34 Q35,22 70,30 Q105,38 140,26 Q175,14 220,28 L220,40Z" fill={`${comp.deepColor}dd`} />
            {/* Coral pops */}
            <ellipse cx="18"  cy="39" rx="11" ry="7" fill={comp.coralA} />
            <ellipse cx="58"  cy="40" rx="8"  ry="5" fill={comp.coralB} />
            <ellipse cx="112" cy="39" rx="10" ry="6" fill={comp.coralC} />
            <ellipse cx="168" cy="40" rx="8"  ry="5" fill={comp.coralA} />
            <ellipse cx="205" cy="39" rx="10" ry="6" fill={comp.coralB} />
          </svg>
        </div>
      </div>

      {/* ── Bottom info panel ── */}
      <div style={{
        background: `linear-gradient(180deg, ${comp.deepColor} 0%, #071220 100%)`,
        padding: '14px 14px 12px',
      }}>
        {/* Name */}
        <h3 style={{
          fontWeight: 900, fontSize: '14px', color: 'white', lineHeight: 1.15,
          textShadow: `0 0 16px ${comp.brightColor}88`,
          letterSpacing: '0.03em', textTransform: 'uppercase',
          marginBottom: '2px',
        }}>
          {comp.name}
        </h3>
        {comp.fullName !== comp.name && (
          <p style={{ fontSize: '10px', color: `${comp.brightColor}bb`, lineHeight: 1.3, marginBottom: '8px' }}>
            {comp.fullName}
          </p>
        )}

        {/* Tags */}
        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '10px', marginTop: comp.fullName !== comp.name ? 0 : '8px' }}>
          {comp.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: '8px', fontWeight: 700, letterSpacing: '0.05em',
              padding: '2px 7px', borderRadius: '99px',
              backgroundColor: `${comp.brightColor}22`,
              color: comp.brightColor,
              border: `1px solid ${comp.brightColor}44`,
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
          <a
            href={comp.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`register-${comp.id}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              textAlign: 'center', padding: '7px 4px',
              borderRadius: '9px', fontSize: '10px', fontWeight: 800,
              textDecoration: 'none', letterSpacing: '0.02em',
              background: `linear-gradient(135deg, ${comp.midColor}, ${comp.brightColor}cc)`,
              color: 'white',
              border: `1px solid ${comp.brightColor}55`,
              boxShadow: `0 3px 12px ${comp.brightColor}33`,
            }}
          >
            Daftar →
          </a>
          <button
            id={`detail-${comp.id}`}
            onClick={onOpenDetail}
            style={{
              textAlign: 'center', padding: '7px 4px',
              borderRadius: '9px', fontSize: '10px', fontWeight: 700,
              cursor: 'pointer', letterSpacing: '0.02em',
              background: 'rgba(255,255,255,0.07)',
              color: 'rgba(200,235,255,0.85)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            Info ↗
          </button>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════
   MODAL
════════════════════════════════ */
interface CompetitionModalProps {
  comp: Competition;
  onClose: () => void;
}

function CompetitionModal({ comp, onClose }: CompetitionModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(5,10,22,0.85)', backdropFilter: 'blur(14px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl overflow-hidden flex flex-col"
        style={{
          backgroundColor: 'var(--color-white)',
          boxShadow: `0 32px 80px rgba(0,0,0,0.45), 0 0 60px ${comp.brightColor}33`,
          maxHeight: '90vh',
        }}
      >
        {/* Modal Header */}
        <div
          className="relative flex items-end gap-5 p-7 pb-6 overflow-hidden"
          style={{
            background: `linear-gradient(155deg, ${comp.deepColor} 0%, ${comp.midColor} 55%, ${comp.brightColor}66 100%)`,
            minHeight: '170px',
          }}
        >
          {/* Glow overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(ellipse at 70% 20%, ${comp.brightColor}33 0%, transparent 65%)`,
            pointerEvents: 'none',
          }} />

          {/* Close */}
          <button
            onClick={onClose} id="modal-close"
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer' }}
            aria-label="Tutup"
          >
            <X size={18} />
          </button>

          {/* Bubble maskot */}
          <div style={{
            width: '80px', height: '80px', borderRadius: '50%', flexShrink: 0,
            background: 'radial-gradient(circle at 32% 28%, rgba(255,255,255,0.38) 0%, rgba(200,235,255,0.15) 55%, transparent 100%)',
            border: '2px solid rgba(255,255,255,0.4)',
            boxShadow: `0 8px 24px rgba(0,0,0,0.35), 0 0 20px ${comp.brightColor}55`,
            overflow: 'hidden', position: 'relative', zIndex: 2,
          }}>
            <img src={comp.maskot} alt={`Maskot ${comp.name}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>

          {/* Title */}
          <div className="flex-1 min-w-0 relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
              FAMOUS 6.0 · {comp.level}
            </p>
            <h3 className="text-xl font-black text-white leading-tight">{comp.name}</h3>
            {comp.fullName !== comp.name && (
              <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.72)' }}>{comp.fullName}</p>
            )}
          </div>
        </div>

        {/* Modal Body */}
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
            <h4 className="text-sm font-black mb-2" style={{ color: 'var(--color-navy)' }}>Tentang Lomba</h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>{comp.description}</p>
          </div>

          {/* Detail teknis */}
          <div>
            <h4 className="text-sm font-black mb-3" style={{ color: 'var(--color-navy)' }}>Detail Teknis</h4>
            <ul className="flex flex-col gap-2.5">
              {comp.details.map((d, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5" style={{ backgroundColor: comp.lightBg, color: comp.accent }}>✓</span>
                  <span className="text-sm" style={{ color: 'var(--color-text)' }}>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guidebook */}
          <div className="rounded-2xl p-4 flex items-center gap-4" style={{ backgroundColor: comp.lightBg, border: `1px solid ${comp.border}` }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: comp.bg }}>
              <BookOpen size={18} color="white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-black" style={{ color: 'var(--color-navy)' }}>Guidebook {comp.name}</p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--color-muted)' }}>Peraturan & teknis lomba lengkap</p>
            </div>
            <a
              href={comp.guidebookUrl} target="_blank" rel="noopener noreferrer"
              id={`guidebook-${comp.id}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold flex-shrink-0"
              style={{ background: comp.bg, color: 'white' }}
            >
              <Download size={13} />Unduh
            </a>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 pt-0 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-150"
            style={{ border: '1.5px solid var(--color-border)', color: 'var(--color-muted)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = comp.accent; e.currentTarget.style.color = comp.accent; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-muted)'; }}
          >
            Tutup
          </button>
          <a
            href={comp.registerUrl} target="_blank" rel="noopener noreferrer"
            id={`modal-register-${comp.id}`}
            className="flex-1 py-3 rounded-xl text-sm font-bold text-center inline-flex items-center justify-center gap-2 transition-all duration-150"
            style={{ background: comp.bg, color: 'white', boxShadow: `0 6px 20px ${comp.brightColor}44` }}
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
