import { useState, useCallback } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { MantaRay, Jellyfish, Octopus, Seahorse, Seaweed, CoralBranch, Bubble } from './MarineBiota';

const galleryImages = [
  {
    id: 1,
    alt: 'FAMOUS VI Opening Ceremony',
    label: 'Opening Ceremony',
    emoji: '🎊',
    bg: 'linear-gradient(135deg, #071220 0%, #0a2a50 50%, #1E6FBF 100%)',
    featured: true,
  },
  {
    id: 2,
    alt: 'Lomba Futsal FAMOUS VI',
    label: 'Lomba Futsal',
    emoji: '⚽',
    bg: 'linear-gradient(135deg, #7B1D1D 0%, #C43A10 100%)',
  },
  {
    id: 3,
    alt: 'LKBB FAMOUS VI',
    label: 'LKBB',
    emoji: '🪖',
    bg: 'linear-gradient(135deg, #0a2a50 0%, #1E6FBF 100%)',
  },
  {
    id: 4,
    alt: 'Archery Putri FAMOUS VI',
    label: 'Archery Putri',
    emoji: '🏹',
    bg: 'linear-gradient(135deg, #4a1d6e 0%, #7B3F9E 100%)',
  },
  {
    id: 5,
    alt: 'Awarding Night FAMOUS VI',
    label: 'Awarding Night',
    emoji: '🏆',
    bg: 'linear-gradient(135deg, #7B6000 0%, #F9A825 100%)',
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

  const thumbnails = galleryImages.slice(1);

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
        <div className="anim-sway" style={{ position: 'absolute', bottom: '5px', right: '5%', opacity: 0.6, animationDuration: '5.2s' }}>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Featured */}
          <div
            className="gallery-img rounded-2xl overflow-hidden relative group"
            style={{ aspectRatio: '4/3', background: galleryImages[0].bg }}
            onClick={() => openLightbox(0)}
            role="button"
            tabIndex={0}
            aria-label={`Buka gambar: ${galleryImages[0].label}`}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(0)}
          >
            <GalleryPlaceholder image={galleryImages[0]} featured />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(232,76,30,0.9)' }}>
                <ZoomIn size={22} color="white" />
              </div>
            </div>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4">
            {thumbnails.map((image, idx) => (
              <div
                key={image.id}
                className="gallery-img rounded-2xl overflow-hidden relative group"
                style={{ aspectRatio: '1/1', background: image.bg }}
                onClick={() => openLightbox(idx + 1)}
                role="button"
                tabIndex={0}
                aria-label={`Buka gambar: ${image.label}`}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx + 1)}
              >
                <GalleryPlaceholder image={image} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(232,76,30,0.85)' }}>
                    <ZoomIn size={16} color="white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            className="poster-font inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white transition-all duration-200"
            style={{
              backgroundColor: 'rgba(255,255,255,0.08)',
              border: '1.5px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-orange)';
              e.currentTarget.style.borderColor = 'var(--color-orange)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(232,76,30,0.45)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
              e.currentTarget.style.transform = '';
            }}
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
            style={{ aspectRatio: '16/9', background: galleryImages[lightboxIndex].bg }}
            onClick={(e) => e.stopPropagation()}
          >
            <GalleryPlaceholder image={galleryImages[lightboxIndex]} featured />
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

function GalleryPlaceholder({ image, featured }: { image: typeof galleryImages[0]; featured?: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
      <div
        className="rounded-full flex items-center justify-center"
        style={{
          width: featured ? '72px' : '52px',
          height: featured ? '72px' : '52px',
          backgroundColor: 'rgba(255,255,255,0.12)',
          fontSize: featured ? '32px' : '24px',
        }}
        role="img"
        aria-label={image.alt}
      >
        {image.emoji}
      </div>
      <span
        className="text-center font-bold"
        style={{ color: 'rgba(255,255,255,0.8)', fontSize: featured ? '16px' : '12px' }}
      >
        {image.label}
      </span>
      <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        FAMOUS VI · 2026
      </span>
    </div>
  );
}
