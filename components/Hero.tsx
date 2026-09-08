import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-navy)', paddingTop: '64px' }}
    >
      {/* Background stars/particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              backgroundColor: i % 3 === 0 ? 'var(--color-cyan)' : 'rgba(255,255,255,0.3)',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
        {/* Grid lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(32,199,215,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(32,199,215,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        {/* Gradient glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(6,62,112,0.4) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(32,199,215,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
          {/* Left Content */}
          <div
            className="flex flex-col gap-6"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase"
                style={{ backgroundColor: 'rgba(32,199,215,0.15)', color: 'var(--color-cyan)', border: '1px solid rgba(32,199,215,0.3)' }}
              >
                ✦ From Imagination to Innovation
              </span>
            </div>

            {/* H1 */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight"
              style={{ color: 'white' }}
            >
              SITE
              <span style={{ color: 'var(--color-cyan)' }}>FEST</span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl" style={{ color: 'white' }}>5.0</span>
            </h1>

            {/* Description */}
            <p className="text-base leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Selamat datang di SITEFEST 5.0, ajang kompetisi tingkat nasional yang diselenggarakan oleh
              <span style={{ color: 'var(--color-cyan)', fontWeight: 600 }}> Primakara University</span>.
              Tunjukkan kreativitas dan keahlianmu di bidang teknologi sekarang juga! Bersaing dengan talenta
              terbaik dari seluruh Indonesia, mulai dari siswa SMA/SMK hingga mahasiswa. Saatnya wujudkan
              ide dan inovasimu di panggung karya luar biasa!
            </p>

            {/* Stats Row */}
            <div className="flex gap-6 flex-wrap">
              {[
                { value: '4+', label: 'Kategori Lomba' },
                { value: '100JT+', label: 'Total Hadiah' },
                { value: 'Nasional', label: 'Tingkat' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold" style={{ color: 'var(--color-cyan)' }}>{stat.value}</span>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#competitions"
                onClick={(e) => { e.preventDefault(); document.querySelector('#competitions')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
                style={{ backgroundColor: 'var(--color-cyan)', color: 'var(--color-navy)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#18b0bf'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-cyan)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Daftar Sekarang <ArrowRight size={16} />
              </a>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'white', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                Pelajari Lebih
              </a>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div
            className="relative"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            <div
              className="relative rounded-2xl overflow-hidden w-full"
              style={{
                aspectRatio: '4/3',
                background: 'linear-gradient(135deg, var(--color-blue) 0%, #0d2850 50%, var(--color-navy) 100%)',
                border: '1px solid rgba(32,199,215,0.2)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(32,199,215,0.1)',
              }}
            >
              {/* Inner decorative elements */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-black"
                  style={{ backgroundColor: 'var(--color-cyan)', color: 'var(--color-navy)' }}
                >
                  S
                </div>
                <div className="text-center">
                  <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-cyan)' }}>
                    Featured Competition
                  </div>
                  <div className="text-2xl font-bold text-white">Web Design</div>
                  <div className="text-xl font-bold" style={{ color: 'var(--color-cyan)' }}>Competition</div>
                </div>
                <div
                  className="px-4 py-1.5 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: 'rgba(32,199,215,0.15)', color: 'var(--color-cyan)', border: '1px solid rgba(32,199,215,0.3)' }}
                >
                  SMA/SMK & Perguruan Tinggi
                </div>
                {/* Floating cards */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  {['UI/UX', 'Design', 'Code'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Decorative glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(32,199,215,0.2) 0%, transparent 70%)', filter: 'blur(30px)', transform: 'translate(30%, -30%)' }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl"
              style={{ backgroundColor: 'var(--color-deep-navy)', border: '1px solid rgba(32,199,215,0.2)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
            >
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Total Hadiah</div>
              <div className="text-lg font-bold" style={{ color: 'var(--color-cyan)' }}>Rp 100JT+</div>
            </div>

            {/* Floating badge 2 */}
            <div
              className="absolute -top-4 -right-4 px-4 py-3 rounded-xl"
              style={{ backgroundColor: 'var(--color-deep-navy)', border: '1px solid rgba(32,199,215,0.2)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
            >
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Peserta</div>
              <div className="text-lg font-bold text-white">Nasional</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-200 hover:opacity-70"
        style={{ color: 'rgba(255,255,255,0.4)' }}
        aria-label="Scroll ke bagian berikutnya"
      >
        <span className="text-xs tracking-wider">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}
