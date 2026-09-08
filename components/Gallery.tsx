import { useState, useCallback } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    alt: 'SITEFEST Opening Ceremony',
    label: 'Opening Ceremony',
    bg: 'linear-gradient(135deg, #0B1730 0%, #063E70 100%)',
    featured: true,
  },
  {
    id: 2,
    alt: 'Web Design Competition',
    label: 'Web Design Competition',
    bg: 'linear-gradient(135deg, #063E70 0%, #0d5a9e 100%)',
  },
  {
    id: 3,
    alt: 'Awarding Ceremony',
    label: 'Awarding Ceremony',
    bg: 'linear-gradient(135deg, #0a4d2e 0%, #166534 100%)',
  },
  {
    id: 4,
    alt: 'Lomba Ilustrasi Digital',
    label: 'Ilustrasi Digital',
    bg: 'linear-gradient(135deg, #4a1d4f 0%, #6b21a8 100%)',
  },
  {
    id: 5,
    alt: 'Grand Final SITEFEST',
    label: 'Grand Final',
    bg: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 100%)',
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
    <section id="gallery" className="py-20 lg:py-28" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'var(--color-cyan)' }}
          >
            <span className="w-5 h-0.5 rounded" style={{ backgroundColor: 'var(--color-cyan)' }} />
            Photo Gallery
            <span className="w-5 h-0.5 rounded" style={{ backgroundColor: 'var(--color-cyan)' }} />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--color-navy)' }}>
            Galeri Acara{' '}
            <span style={{ color: 'var(--color-cyan)' }}>SITEFEST</span>
          </h2>
          <p className="mt-3 text-base max-w-md mx-auto" style={{ color: 'var(--color-muted)' }}>
            Sekilas momen berharga dari penyelenggaraan SITEFEST sebelumnya
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Featured Image */}
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
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(32,199,215,0.9)' }}
              >
                <ZoomIn size={20} color="#0B1730" />
              </div>
            </div>
          </div>

          {/* 2x2 Thumbnail Grid */}
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
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(32,199,215,0.9)' }}
                  >
                    <ZoomIn size={16} color="#0B1730" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="text-center mt-10">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{ border: '1.5px solid var(--color-border)', color: 'var(--color-navy)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-cyan)'; e.currentTarget.style.color = 'var(--color-cyan)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-navy)'; }}
          >
            Lihat Semua Galeri
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          role="dialog"
          aria-label="Lightbox galeri"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-150"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
            onClick={closeLightbox}
            aria-label="Tutup lightbox"
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-150"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Gambar sebelumnya"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Image */}
          <div
            className="relative rounded-2xl overflow-hidden w-full max-w-3xl"
            style={{ aspectRatio: '16/9', background: galleryImages[lightboxIndex].bg }}
            onClick={(e) => e.stopPropagation()}
          >
            <GalleryPlaceholder image={galleryImages[lightboxIndex]} featured />
          </div>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-150"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Gambar berikutnya"
          >
            <ChevronRight size={20} />
          </button>

          {/* Counter */}
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
        className="rounded-full flex items-center justify-center text-2xl"
        style={{
          width: featured ? '64px' : '48px',
          height: featured ? '64px' : '48px',
          backgroundColor: 'rgba(255,255,255,0.1)',
        }}
      >
        📸
      </div>
      <span
        className="text-center font-semibold"
        style={{ color: 'rgba(255,255,255,0.7)', fontSize: featured ? '16px' : '12px' }}
      >
        {image.label}
      </span>
      <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px' }}>SITEFEST 2026</span>
    </div>
  );
}
