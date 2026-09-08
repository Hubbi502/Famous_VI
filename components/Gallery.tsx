import { useState, useCallback } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { MantaRay, Jellyfish, Octopus, Seahorse, Seaweed, CoralBranch, Bubble } from './MarineBiota';

const galleryImages = [
  {
    id: 1,
    alt: 'FAMOUS VI Opening Ceremony',
    label: 'Opening Ceremony',
    src: '/assets/img/dokumentasi/IMG_6547.PNG',
    emoji: '🎊',
  },
  {
    id: 2,
    alt: 'Lomba Futsal FAMOUS VI',
    label: 'Lomba Futsal',
    src: '/assets/img/dokumentasi/IMG_6548.PNG',
    emoji: '⚽',
  },
  {
    id: 3,
    alt: 'LKBB FAMOUS VI',
    label: 'LKBB',
    src: '/assets/img/dokumentasi/IMG_6550.PNG',
    emoji: '🪖',
  },
  {
    id: 4,
    alt: 'Archery Putri FAMOUS VI',
    label: 'Archery Putri',
    src: '/assets/img/dokumentasi/IMG_6551.PNG',
    emoji: '🏹',
  },
  {
    id: 5,
    alt: 'Awarding Night FAMOUS VI',
    label: 'Awarding Night',
    src: '/assets/img/dokumentasi/IMG_6552.PNG',
    emoji: '🏆',
  },
  {
    id: 6,
    alt: 'Acara Tambahan FAMOUS VI',
    label: 'Acara Tambahan',
    src: '/assets/img/dokumentasi/IMG_6553.PNG',
    emoji: '🎉',
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % galleryImages.length));
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goPrev();
    if (e.key === 'ArrowRight') goNext();
  }, [closeLightbox, goPrev, goNext]);

  return (
    <section id="gallery" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #100526 0%, #0e0422 40%, #0b031a 75%, #080215 100%)' }}>
      {/* ── Top Camouflage Soft Fade (From Timeline) ── */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '220px', background: 'linear-gradient(180deg, #100526 0%, transparent 100%)' }}
      />
      {/* ── Bottom Camouflage Soft Fade (To FAQ) ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '220px', background: 'linear-gradient(180deg, transparent 0%, #080215 100%)' }}
      />
      {/* ── Deep Sea Ambient Glow & Biota ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Radial Bioluminescent Glows */}
        <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)', filter: 'blur(75px)' }} />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)', filter: 'blur(75px)' }} />

        {/* Jellyfish on Left */}
        <div className="anim-jelly" style={{ position: 'absolute', top: '15%', left: '3%', opacity: 0.7, animationDuration: '7s' }}>
          <Jellyfish size={50} color="rgba(56,189,248,0.8)" />
        </div>

        {/* Octopus floating mid-right */}
        <div className="anim-jelly" style={{ position: 'absolute', top: '28%', right: '4%', opacity: 0.75, animationDuration: '9s', animationDelay: '1s' }}>
          <Octopus size={48} />
        </div>

        {/* Seahorse bobbing left */}
        <div className="anim-jelly" style={{ position: 'absolute', bottom: '20%', left: '4%', opacity: 0.8, animationDuration: '6s' }}>
          <Seahorse size={38} />
        </div>

        {/* MantaRay swimming left across background */}
        <div className="anim-swim-left" style={{ position: 'absolute', top: '55%', right: '-10%', opacity: 0.45, animationDuration: '30s' }}>
          <MantaRay size={80} />
        </div>

        {/* Bottom seaweed & coral */}
        <div className="anim-sway" style={{ position: 'absolute', bottom: '10px', left: '2%', opacity: 0.5 }}>
          <Seaweed height={75} color="#0284c7" />
        </div>
        <div style={{ position: 'absolute', bottom: '5px', right: '5%', opacity: 0.6 }}>
          <CoralBranch height={55} color="#a855f7" />
        </div>

        {/* Rising bubbles */}
        {[
          { left: '18%', delay: '0.4s', size: 9 },
          { left: '48%', delay: '1.8s', size: 11 },
          { left: '78%', delay: '1.0s', size: 7 },
        ].map((b, idx) => (
          <div key={idx} className="anim-bubble-rise" style={{ position: 'absolute', bottom: '20px', left: b.left, animationDelay: b.delay, animationDuration: '4.2s' }}>
            <Bubble size={b.size} />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black tracking-widest uppercase cloud-badge-cyan poster-shadow-cyan"
              style={{ color: '#0284c7' }}
            >
              ✦ Photo Gallery
            </span>
          </div>
          <h2 className="poster-font text-3xl sm:text-5xl font-black text-white">
            Galeri Acara{' '}
            <span className="text-stroke-white text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #FF8A50 0%, #FFD166 100%)' }}>
              FAMOUS 6.0
            </span>
          </h2>
          <p className="poster-font mt-3 text-base max-w-md mx-auto font-medium text-white/90">
            Sekilas momen berharga dari penyelenggaraan FAMOUS sebelumnya
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, idx) => (
            <div
              key={image.id}
              className="gallery-img rounded-2xl overflow-hidden relative group"
              style={{ aspectRatio: '1/1' }}
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Buka gambar: ${image.label}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40">
                <div className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(232,76,30,0.9)' }}>
                  <ZoomIn size={22} color="white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{ border: '1.5px solid var(--color-border)', color: 'var(--color-navy)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-orange)'; e.currentTarget.style.color = 'var(--color-orange)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-navy)'; }}
          >
            Lihat Semua Galeri
          </button>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.94)' }}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          role="dialog"
          aria-label="Lightbox galeri"
          aria-modal="true"
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'white' }}
            onClick={closeLightbox}
            aria-label="Tutup lightbox"
          >
            <X size={20} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'white' }}
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Gambar sebelumnya"
          >
            <ChevronLeft size={20} />
          </button>
          <div
            className="relative rounded-2xl overflow-hidden w-full max-w-3xl"
            style={{ aspectRatio: '16/9' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={galleryImages[lightboxIndex].src} alt={galleryImages[lightboxIndex].alt} className="w-full h-full object-contain" />
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'white' }}
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Gambar berikutnya"
          >
            <ChevronRight size={20} />
          </button>
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white' }}
          >
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}


