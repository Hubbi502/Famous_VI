import { Instagram, Handshake, Award } from 'lucide-react';
import { Bubble, Jellyfish } from './MarineBiota';

const sponsors = [
  {
    id: 1,
    name: 'Bank Syariah Indonesia (BSI)',
    role: 'Official Sponsor',
    src: '/assets/img/sponsor/IMG_6558.JPG.jpeg',
    height: 'h-16 sm:h-20',
  },
  {
    id: 2,
    name: 'Penerbit Intan Pariwara',
    role: 'Official Partner',
    src: '/assets/img/sponsor/IMG_6559.JPG.jpeg',
    height: 'h-16 sm:h-20',
  },
  {
    id: 3,
    name: 'Grafindo Media Pratama',
    role: 'Official Partner',
    src: '/assets/img/sponsor/IMG_6560.JPG.jpeg',
    height: 'h-16 sm:h-20',
  },
];

export default function Sponsor() {
  return (
    <section
      id="sponsor"
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #03000a 0%, #08031d 50%, #03000a 100%)',
      }}
    >
      {/* ── Ambient Background Lighting & Ocean Elements ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, rgba(232,76,30,0.06) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Ambient Floating Jellyfish */}
        <div className="anim-jelly hidden lg:block" style={{ position: 'absolute', top: '15%', left: '6%', opacity: 0.5, animationDuration: '9s' }}>
          <Jellyfish size={45} color="rgba(56,189,248,0.7)" glowColor="#38bdf8" />
        </div>
        <div className="anim-jelly hidden lg:block" style={{ position: 'absolute', bottom: '15%', right: '6%', opacity: 0.5, animationDuration: '8s' }}>
          <Jellyfish size={40} color="rgba(249,115,22,0.6)" glowColor="#f97316" />
        </div>

        {/* Ambient Bubbles */}
        {[
          { left: '10%', delay: '0.2s', size: 8 },
          { left: '30%', delay: '1.2s', size: 10 },
          { left: '70%', delay: '0.6s', size: 7 },
          { left: '90%', delay: '1.8s', size: 9 },
        ].map((b, i) => (
          <div
            key={i}
            className="anim-bubble-rise"
            style={{
              position: 'absolute',
              bottom: '10px',
              left: b.left,
              animationDelay: b.delay,
              animationDuration: `${4 + i * 0.6}s`,
            }}
          >
            <Bubble size={b.size} />
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* ── Main Showcase Poster Board (Reference Design) ── */}
        <div
          className="relative rounded-3xl bg-white text-gray-900 shadow-2xl overflow-hidden border border-white/20 transition-all duration-300"
          style={{
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(56, 189, 248, 0.15)',
          }}
        >
          {/* Top Decorative Ribbon / Tag */}
          <div className="flex justify-center -mt-0.5">
            <div
              className="px-6 py-2 rounded-b-2xl flex items-center gap-2 shadow-md text-white"
              style={{
                background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
              }}
            >
              <Award size={16} className="text-yellow-300" />
              <span className="poster-font text-xs sm:text-sm font-black tracking-wider uppercase">
                FAMOUS VI • 2026
              </span>
            </div>
          </div>

          {/* Board Header */}
          <div className="text-center pt-8 pb-4 px-6 sm:px-12">
            <h2
              className="poster-font text-2xl sm:text-4xl md:text-5xl font-black tracking-tight"
              style={{ color: '#091e42' }}
            >
              SPECIAL THANKS TO OUR SPONSORS
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-lg mx-auto font-medium leading-relaxed">
              We appreciate your effort and generosity in supporting FAMOUS 6.0 SMAIT Al-Fityan Bogor
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-orange-400 mx-auto mt-4 rounded-full" />
          </div>

          {/* Clean Sponsor Logos Display */}
          <div className="px-6 sm:px-12 py-8 sm:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 items-center justify-items-center">
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="w-full flex flex-col items-center group transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* Category Pill */}
                  <span
                    className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full mb-3 text-sky-800 bg-sky-50 border border-sky-200/80"
                  >
                    {sponsor.role}
                  </span>

                  {/* Logo Image */}
                  <div className="w-full h-24 sm:h-28 flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={sponsor.src}
                      alt={sponsor.name}
                      className="max-h-full max-w-[85%] object-contain filter transition-all duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Partner Name Label */}
                  <p className="text-xs font-semibold text-gray-700 text-center mt-2 group-hover:text-sky-900 transition-colors">
                    {sponsor.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Info & Contact Bar (like the reference footer) */}
          <div
            className="border-t border-gray-100 bg-slate-50/90 px-6 py-4 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600"
          >
            <div className="flex items-center gap-2 font-medium">
              <Handshake size={15} className="text-orange-500" />
              <span>Media Partner & Sponsorship</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
              <a
                href="https://www.instagram.com/famous.absb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sky-700 hover:text-orange-600 transition-colors"
              >
                <Instagram size={14} />
                <span>@famous.absb</span>
              </a>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <a
                href="https://www.instagram.com/tanwira_sanjaya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sky-700 hover:text-orange-600 transition-colors"
              >
                <Instagram size={14} />
                <span>@tanwira_sanjaya</span>
              </a>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <a
                href="https://www.instagram.com/osforofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sky-700 hover:text-orange-600 transition-colors"
              >
                <Instagram size={14} />
                <span>@osforofficial</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

