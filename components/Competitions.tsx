import { useState } from 'react';
import { X, Download, ExternalLink, BookOpen } from 'lucide-react';
import { BlueTang, MantaRay, ClownFish, Starfish, Seahorse, Jellyfish, AnglerFish, CoralBranch, Seaweed, Octopus } from './MarineBiota';

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
    price: 'Rp 50.000',
    description: "Kompetisi hafalan Al-Qur'an yang menguji kelancaran hafalan, kefasihan tajwid, dan kemampuan menjawab pertanyaan seputar hafalan.",
    details: [
      'Kategori: Individu (Putra & Putri)',
      'Materi: Juz 29 & 30',
      'Sistem: Tahfizh + Tanya Jawab',
      'Peserta membawa Al-Qur\'an sendiri',
    ],
    tags: ['Agama', 'Individu', 'Hafalan'],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf_VLEuhalLzw707v1DjeT9fNA2o8EjXO8UKpYZu7hf22GkFA/viewform?usp=publish-editor',
    guidebookUrl: 'https://drive.usercontent.google.com/download?id=17et4xoJRWtDwj7qrSf-5SzLUtxlo4v98&export=download&authuser=0&confirm=t&uuid=15972702-6869-4b52-9923-2de6410520d2&at=AMrWOn2g8QYxdAIJjqiiF5ZQfKN9:1788880734928',
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
    price: 'Rp 50.000',
    description: 'Lomba ceramah/pidato islami yang disampaikan dalam tiga bahasa: Arab, Inggris, dan Indonesia secara bergantian dalam satu penampilan.',
    details: [
      'Bahasa: Arab, Inggris & Indonesia',
      'Durasi: Maks. 7 menit',
      'Kategori: Individu Campuran',
      'Tema ditentukan saat Technical Meeting',
    ],
    tags: ['Agama', 'Trilingual', 'Dakwah'],
    registerUrl: 'https://forms.gle/X2UvG7MDSZuGFb4e9',
    guidebookUrl: 'https://drive.usercontent.google.com/download?id=156o38txPYl7xangl2miQP6Lr8HusRVHU&export=download&authuser=0&confirm=t&uuid=b9307dc5-43e5-4f8b-af4c-1f3dd9082f4d&at=AMrWOn0-94LMmnEh2z96VBYq8Wd3:1788880637803',
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
    price: 'Rp 50.000',
    description: 'Lomba pidato bahasa Inggris yang menguji kemampuan public speaking, penguasaan kosakata, intonasi, dan penyampaian argumen yang sistematis.',
    details: [
      'Bahasa: English Only',
      'Durasi: 5–7 menit',
      'Tema: Ditentukan saat Technical Meeting',
      'Penilaian: Konten, Pronounciasi & Kepercayaan Diri',
    ],
    tags: ['Bahasa', 'Individu', 'English'],
    registerUrl: 'https://forms.gle/zQ1yQj9ohQ6AjCzw8',
    guidebookUrl: 'https://drive.usercontent.google.com/download?id=1W8ghafKvilwb6M2nTfshcphndmrVs3H9&export=download&authuser=0&confirm=t&uuid=6b9ad66b-5954-4814-ba0f-3789e32d37cc&at=AMrWOn110JA12Z5OuYuLhVUacOcH:1788880751220',
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
    price: 'Rp 50.000',
    description: 'Lomba bercerita menggunakan bahasa Inggris dengan kreativitas ekspresi, mimik wajah, dan intonasi yang menarik. Cerita dapat berupa fabel, legenda, atau cerita rakyat.',
    details: [
      'Bahasa: English',
      'Durasi: 5–7 menit',
      'Boleh menggunakan properti sederhana',
      'Penilaian: Ekspresi, Intonasi & Kreativitas',
    ],
    tags: ['Seni', 'Individu', 'Kreativitas'],
    registerUrl: 'https://forms.gle/m1CMd9cYAaMZ5TCC9',
    guidebookUrl: 'https://drive.usercontent.google.com/download?id=1jA6CpZ4yO2DibiSsBp5HTWCT9oOZYg52&export=download&authuser=0&confirm=t&uuid=cee3d92c-e871-4e7d-ac82-9282554881a3&at=AMrWOn0FehjhZ_UzPXtVkUZcbHxG:1788880755153',
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
    type: 'Tim (13–16 orang)',
    price: 'Rp 500.000',
    description: 'Lomba Ketangkasan Baris-Berbaris yang menguji kedisiplinan, kekompakan gerakan, dan ketepatan aba-aba seluruh anggota tim.',
    details: [
      'Tim: 13–16 peserta + 1 Komandan Regu',
      'Jenis: Peraturan & Variasi',
      'Kategori: Putra & Putri',
      'Penilaian: Keseragaman, Ketepatan & Kekompakan',
    ],
    tags: ['Tim', 'Disiplin', 'Baris'],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScqEkrs6PKZYIhIPKxREakuZgV2T7m2c4jJztjbz6URhcFW5g/viewform?usp=publish-editor',
    guidebookUrl: 'https://drive.usercontent.google.com/download?id=1tDRF4EvvLElsAeSZaRLJzFHaEgBfNTSW&export=download&authuser=0&confirm=t&uuid=7986e7ff-f604-4300-b2ff-20308c354c09&at=AMrWOn0x54PSmcKhtQQyYJ0Vx0YM:1788880701945',
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
    type: 'Tim (12 orang)',
    price: 'Rp 300.000',
    description: 'Lomba futsal beregu putra antar sekolah SMP/MTs sederajat Se-Pulau Jawa. Tunjukkan skill individu dan kerjasama tim terbaikmu di lapangan!',
    details: [
      'Kategori: Putra',
      'Tim: 12 pemain + maks. 5 cadangan',
      'Peraturan FIFA Futsal',
      'Penilaian: Fair play, Sportsmanship & Gol',
    ],
    tags: ['Tim', 'Olahraga', 'Putra'],
    registerUrl: 'https://forms.gle/ki54VHFdEccopHjd8',
    guidebookUrl: 'https://drive.usercontent.google.com/download?id=1hNQvn4iv6-79GA01CbZXcbWqW6CLDViU&export=download&authuser=0&confirm=t&uuid=5e964e5f-b6b9-427e-87ac-1dd977f5096b&at=AMrWOn0-r_ZsSd9pmtWe8J2UiyPj:1788880604991',
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
    guidebookUrl: 'https://drive.usercontent.google.com/download?id=1_N8K0B1H-i4nxT8evNuh_zZIjCOgq4H7&export=download&authuser=0&confirm=t&uuid=83d54f76-feeb-4b4d-8373-7757b424c041&at=AMrWOn2jXptQ_f8a0dqBTY7V3oNf:1788880541569',
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
    price: 'Gratis',
    description: 'Lomba desain poster digital menggunakan perangkat lunak desain. Ekspresikan kreativitas, estetika visual, dan kemampuan komunikasi grafis dalam satu karya terbaik.',
    details: [
      'Software: Bebas (Canva, Photoshop, AI, dll)',
      'Format output: PNG/JPG, min. 300 dpi',
      'Tema: Ditentukan saat Technical Meeting',
      'Penilaian: Kreativitas, Estetika & Pesan',
    ],
    tags: ['Seni', 'Digital', 'Desain'],
    registerUrl: 'https://forms.gle/PrJ9HtrrLBG8tSz88',
    guidebookUrl: 'https://drive.usercontent.google.com/download?id=1j2hvU1lLoin4OkVHkumYfw57S9WORsgG&export=download&authuser=0&confirm=t&uuid=462e8fd5-ac5b-47cd-9f75-0aa3c87f6865&at=AMrWOn2EcD4LwEd2dD1YLHBDoIcX:1788880747557',
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
        background: 'linear-gradient(180deg, #0e5090 0%, #1a3fa0 25%, #2d2b8a 55%, #4a1280 80%, #581c87 100%)',
      }}
    >
      {/* ── Top Camouflage Soft Fade (From About) ── */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '220px', background: 'linear-gradient(180deg, #0e5090 0%, transparent 100%)' }}
      />
      {/* ── Bottom Camouflage Soft Fade (To PrizePool) ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '220px', background: 'linear-gradient(180deg, transparent 0%, #581c87 100%)' }}
      />

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
          <span className="poster-font inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#7EEEFF' }}>
            <span className="w-8 h-px bg-current opacity-60" />
            Cabang Lomba
            <span className="w-8 h-px bg-current opacity-60" />
          </span>
          <h2 className="poster-font text-3xl sm:text-5xl font-black text-white leading-tight">
            8 Cabang{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #FF8A50 0%, #FFD166 100%)' }}>
              Kompetisi
            </span>
          </h2>
          <p className="poster-font mt-4 text-base max-w-xl mx-auto font-medium text-white/90">
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

      {/* Floating Glowing Jellyfish cluster */}
      <div className="anim-jelly" style={{ position: 'absolute', top: '12%', right: '8%', opacity: 0.8 }}>
        <Jellyfish size={55} color="rgba(192,132,252,0.8)" />
      </div>
      <div className="anim-jelly" style={{ position: 'absolute', top: '5%', right: '22%', animationDuration: '8s', animationDelay: '2s', opacity: 0.55 }}>
        <Jellyfish size={35} color="rgba(56,189,248,0.7)" />
      </div>

      {/* Lurking AnglerFish */}
      <div className="anim-jelly" style={{ position: 'absolute', top: '68%', left: '2%', animationDuration: '13s', opacity: 0.6 }}>
        <AnglerFish size={55} />
      </div>

      {/* Gliding Manta Ray (Ikan Pari) */}
      <div className="anim-swim-left" style={{ position: 'absolute', top: '18%', right: '0', animationDuration: '28s', opacity: 0.7 }}>
        <MantaRay size={75} />
      </div>

      {/* Swimming Blue Tang & ClownFish School */}
      <div className="anim-swim-right" style={{ position: 'absolute', top: '35%', left: '0', animationDuration: '22s' }}>
        <BlueTang size={36} />
      </div>
      <div className="anim-swim-right" style={{ position: 'absolute', top: '38%', left: '0', animationDuration: '22s', animationDelay: '0.7s' }}>
        <ClownFish size={30} />
      </div>

      {/* Floating Seahorse near mid coral */}
      <div className="anim-jelly" style={{ position: 'absolute', top: '55%', left: '4%', opacity: 0.8 }}>
        <Seahorse size={42} />
      </div>

      {/* Octopus deep mid */}
      <div className="anim-jelly" style={{ position: 'absolute', top: '42%', right: '6%', animationDuration: '7s', opacity: 0.7 }}>
        <Octopus size={40} />
      </div>

      {/* Seaweed at bottom corners */}
      <div className="anim-sway" style={{ position: 'absolute', bottom: '100px', left: '2%', opacity: 0.45 }}>
        <Seaweed height={75} color="#166534" />
      </div>
      <div className="anim-sway" style={{ position: 'absolute', bottom: '100px', right: '1%', animationDelay: '1.5s', opacity: 0.4 }}>
        <Seaweed height={60} color="#15803d" />
      </div>

      {/* Coral branches swaying */}
      <div className="anim-sway" style={{ position: 'absolute', bottom: '95px', left: '15%', opacity: 0.4, animationDuration: '4.8s' }}>
        <CoralBranch height={60} color="#f43f5e" />
      </div>
      <div className="anim-sway" style={{ position: 'absolute', bottom: '95px', right: '14%', opacity: 0.38, animationDuration: '5.4s', animationDelay: '1s' }}>
        <CoralBranch height={55} color="#06b6d4" />
      </div>

      {/* Swimming Starfish drifting */}
      <div className="anim-jelly" style={{ position: 'absolute', top: '82%', left: '35%', opacity: 0.7 }}>
        <Starfish size={22} color="#f97316" />
      </div>

      {/* Swimming Cyan Fish */}
      <div className="anim-swim-left" style={{ position: 'absolute', top: '75%', right: '0', animationDuration: '26s', animationDelay: '3s' }}>
        <BlueTang size={32} />
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
      className="flex flex-col items-center justify-between cursor-pointer select-none h-full p-2 rounded-2xl transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* ── BUBBLE sphere ── */}
      <div
        className="relative flex items-center justify-center w-full max-w-[210px] mx-auto"
        style={{
          aspectRatio: '1 / 1',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 32% 28%, rgba(255,255,255,0.4) 0%, rgba(180,230,255,0.2) 35%, rgba(100,190,240,0.12) 65%, rgba(40,120,200,0.08) 100%)',
          border: '2px solid rgba(255,255,255,0.5)',
          boxShadow: hovered
            ? `0 0 0 4px rgba(255,255,255,0.18), 0 20px 55px rgba(0,0,0,0.4), 0 0 40px ${comp.bubbleColor}`
            : `0 0 0 1px rgba(255,255,255,0.12), 0 10px 35px rgba(0,0,0,0.3), 0 0 24px ${comp.bubbleColor}`,
          backdropFilter: 'blur(3px)',
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
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, transparent 100%)',
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
            width: '82%',
            height: '82%',
            objectFit: 'contain',
            objectPosition: 'center bottom',
            filter: `drop-shadow(0 8px 20px rgba(0,0,0,0.4)) drop-shadow(0 0 16px ${comp.bubbleColor})`,
            transform: hovered ? 'scale(1.06) translateY(-4px)' : 'scale(1) translateY(0)',
            transition: 'transform 0.42s cubic-bezier(0.34,1.56,0.64,1)',
            position: 'relative',
            zIndex: 2,
          }}
        />

        {/* Price pill — comfortably inside top-right */}
        <div style={{
          position: 'absolute', top: '11%', right: '9%', zIndex: 5,
          fontSize: '9px', fontWeight: 800,
          padding: '3px 8px', borderRadius: '99px',
          backgroundColor: 'rgba(5, 15, 35, 0.75)',
          color: '#FFE082',
          border: '1px solid rgba(255,224,130,0.4)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          letterSpacing: '0.02em',
        }}>
          {comp.price}
        </div>
      </div>

      {/* ── Text Content Area — Fixed Heights for Perfect Horizontal Alignment ── */}
      <div className="text-center mt-3 px-1 w-full flex flex-col items-center flex-1 justify-between">
        <div>
          <h3
            className="poster-font text-sm sm:text-base font-black text-white uppercase tracking-wider leading-tight"
            style={{
              textShadow: `0 2px 10px rgba(0,0,0,0.6), 0 0 18px ${comp.glowHex}55`,
            }}
          >
            {comp.name}
          </h3>
          <p className="text-[10px] sm:text-[11px] text-white/75 font-medium mt-0.5 h-4 flex items-center justify-center line-clamp-1">
            {comp.fullName !== comp.name ? comp.fullName : ''}
          </p>
        </div>

        {/* Type tag — aligned across all cards */}
        <div className="mt-1.5 mb-1">
          <span
            className="poster-font text-[9px] sm:text-[10px] font-extrabold px-2.5 py-0.5 rounded-full inline-block"
            style={{
              backgroundColor: comp.bubbleColor,
              color: comp.glowHex,
              border: `1px solid ${comp.glowHex}60`,
              backdropFilter: 'blur(6px)',
              letterSpacing: '0.03em',
            }}
          >
            {comp.type}
          </span>
        </div>
      </div>

      {/* ── Action buttons — Always aligned at bottom ── */}
      <div className="flex gap-2 mt-2 w-full px-1">
        <a
          href={comp.registerUrl}
          target="_blank"
          rel="noopener noreferrer"
          id={`register-${comp.id}`}
          onClick={(e) => e.stopPropagation()}
          className="poster-font"
          style={{
            flex: 1,
            textAlign: 'center',
            padding: '7px 4px',
            borderRadius: '10px',
            fontSize: '11px',
            fontWeight: 800,
            textDecoration: 'none',
            background: comp.bg,
            color: 'white',
            border: `1px solid ${comp.glowHex}60`,
            boxShadow: `0 4px 14px ${comp.bubbleColor}`,
            letterSpacing: '0.02em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Daftar →
        </a>
        <button
          id={`detail-${comp.id}`}
          onClick={onOpenDetail}
          className="poster-font"
          style={{
            flex: 1,
            textAlign: 'center',
            padding: '7px 4px',
            borderRadius: '10px',
            fontSize: '11px',
            fontWeight: 700,
            cursor: 'pointer',
            background: 'rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.95)',
            border: '1px solid rgba(255,255,255,0.22)',
            backdropFilter: 'blur(6px)',
            letterSpacing: '0.02em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Info ↗
        </button>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   MODAL — Redesigned Modern & Premium
════════════════════════════════════════════ */
interface CompetitionModalProps {
  comp: Competition;
  onClose: () => void;
}

function CompetitionModal({ comp, onClose }: CompetitionModalProps) {
  // Filter out any tag that is identical to comp.type to prevent duplicates like "Individu"
  const cleanTags = comp.tags.filter(
    (t) => t.toLowerCase() !== comp.type.toLowerCase() && !comp.type.toLowerCase().includes(t.toLowerCase())
  );

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 animate-fadeIn"
      style={{ backgroundColor: 'rgba(2, 6, 20, 0.85)', backdropFilter: 'blur(14px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl overflow-hidden flex flex-col shadow-2xl"
        style={{
          background: 'linear-gradient(180deg, #07152b 0%, #0a2144 40%, #081830 100%)',
          boxShadow: `0 25px 60px rgba(0,0,0,0.7), 0 0 60px ${comp.bubbleColor}`,
          maxHeight: '90vh',
          border: '1px solid rgba(255,255,255,0.15)',
        }}
      >
        {/* Ambient ocean glow layers */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', top: '-15%', left: '15%', width: '70%', height: '40%', borderRadius: '50%', background: `radial-gradient(circle, ${comp.bubbleColor} 0%, transparent 70%)`, filter: 'blur(50px)', opacity: 0.8 }} />
          <div style={{ position: 'absolute', bottom: '0', right: '-10%', width: '50%', height: '35%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(42,196,216,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        </div>

        {/* ── Modal Header: Mascot + Titles ── */}
        <div className="relative flex flex-col items-center pt-7 pb-4 px-6 text-center border-b border-white/10" style={{ zIndex: 1 }}>
          {/* Close button */}
          <button
            onClick={onClose}
            id="modal-close"
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150"
            style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', cursor: 'pointer' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            aria-label="Tutup"
          >
            <X size={18} />
          </button>

          {/* Big bubble mascot */}
          <div
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full relative flex items-center justify-center mb-3"
            style={{
              background: 'radial-gradient(circle at 30% 26%, rgba(255,255,255,0.45) 0%, rgba(180,230,255,0.22) 35%, rgba(100,190,240,0.12) 65%, transparent 100%)',
              border: '2.5px solid rgba(255,255,255,0.55)',
              boxShadow: `0 0 0 6px rgba(255,255,255,0.06), 0 16px 40px rgba(0,0,0,0.4), 0 0 40px ${comp.bubbleColor}`,
              overflow: 'hidden',
            }}
          >
            {/* Bubble shine highlight */}
            <div style={{ position: 'absolute', top: '7%', left: '13%', width: '36%', height: '28%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,255,255,0.65) 0%, transparent 100%)', transform: 'rotate(-20deg)', pointerEvents: 'none' }} />
            <img
              src={comp.maskot}
              alt={`Maskot ${comp.name}`}
              className="w-[85%] h-[85%] object-contain object-bottom relative z-10"
              style={{ filter: `drop-shadow(0 6px 16px rgba(0,0,0,0.45)) drop-shadow(0 0 16px ${comp.bubbleColor})` }}
            />
          </div>

          <span className="poster-font text-xs font-bold uppercase tracking-widest" style={{ color: comp.glowHex }}>
            FAMOUS 6.0 · {comp.level}
          </span>
          <h3 className="poster-font text-2xl sm:text-3xl font-black text-white leading-tight mt-1">
            {comp.name}
          </h3>
          {comp.fullName !== comp.name && (
            <p className="text-xs text-white/80 font-medium mt-0.5">{comp.fullName}</p>
          )}

          {/* Badges row: Type + Price + Clean Tags (NO duplicates!) */}
          <div className="flex gap-2 flex-wrap justify-center mt-3">
            <span
              className="poster-font text-xs font-extrabold px-3 py-1 rounded-full"
              style={{ background: comp.bubbleColor, color: comp.glowHex, border: `1px solid ${comp.glowHex}60` }}
            >
              {comp.type}
            </span>
            <span
              className="poster-font text-xs font-extrabold px-3 py-1 rounded-full"
              style={{ background: 'rgba(255,200,80,0.18)', color: '#FFD166', border: '1px solid rgba(255,200,80,0.4)' }}
            >
              Biaya: {comp.price}
            </span>
            {cleanTags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-2.5 py-1 rounded-full text-white/90"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Modal Body: Scrollable Content ── */}
        <div 
          className="overflow-y-auto flex-1 flex flex-col gap-4 px-5 sm:px-6 py-4"
          style={{
            zIndex: 1,
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255,255,255,0.2) transparent'
          }}
        >
          {/* Card 1: Tentang Lomba */}
          <div 
            className="p-4 rounded-2xl"
            style={{ 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)'
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: comp.glowHex }} />
              <p className="poster-font text-xs font-bold uppercase tracking-wider" style={{ color: comp.glowHex }}>
                Tentang Lomba
              </p>
            </div>
            <p className="text-sm leading-relaxed text-white/90 font-normal">
              {comp.description}
            </p>
          </div>

          {/* Card 2: Detail Teknis */}
          <div 
            className="p-4 rounded-2xl"
            style={{ 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)'
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: comp.glowHex }} />
              <p className="poster-font text-xs font-bold uppercase tracking-wider" style={{ color: comp.glowHex }}>
                Detail Teknis & Ketentuan
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              {comp.details.map((d, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-0.5"
                    style={{
                      backgroundColor: comp.bubbleColor,
                      color: comp.glowHex,
                      border: `1px solid ${comp.glowHex}55`,
                    }}
                  >
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm text-white/90 font-medium leading-snug">{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Guidebook */}
          <div
            className="p-3.5 rounded-2xl flex items-center justify-between gap-3"
            style={{
              background: `linear-gradient(135deg, ${comp.bubbleColor}, rgba(255,255,255,0.04))`,
              border: `1px solid ${comp.glowHex}40`,
              backdropFilter: 'blur(8px)',
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: comp.bg,
                  boxShadow: `0 4px 14px ${comp.bubbleColor}`,
                }}
              >
                <BookOpen size={18} color="white" />
              </div>
              <div>
                <p className="poster-font text-xs font-bold text-white">Guidebook {comp.name}</p>
                <p className="text-[11px] text-white/60">Peraturan & teknis lomba lengkap</p>
              </div>
            </div>
            <a
              href={comp.guidebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              id={`guidebook-${comp.id}`}
              className="poster-font inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white transition-opacity duration-150 flex-shrink-0"
              style={{
                background: comp.bg,
                border: `1px solid ${comp.glowHex}55`,
                boxShadow: `0 4px 12px ${comp.bubbleColor}`,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <Download size={13} />
              Unduh
            </a>
          </div>
        </div>

        {/* ── Modal Footer: Action Buttons ── */}
        <div className="p-4 sm:p-5 border-t border-white/10 grid grid-cols-2 gap-3" style={{ zIndex: 1 }}>
          <button
            onClick={onClose}
            className="poster-font py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white/80 transition-all duration-150 flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.18)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
          >
            Tutup
          </button>
          <a
            href={comp.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`modal-register-${comp.id}`}
            className="poster-font py-3 px-4 rounded-xl text-xs sm:text-sm font-black text-white transition-all duration-150 flex items-center justify-center gap-2 shadow-lg"
            style={{
              background: comp.bg,
              border: `1px solid ${comp.glowHex}60`,
              boxShadow: `0 6px 20px ${comp.bubbleColor}`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
          >
            Daftar Sekarang <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
