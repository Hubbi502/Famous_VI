export default function PrizePool() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-deep-navy)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(32,199,215,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(6,62,112,0.3) 0%, transparent 50%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(32,199,215,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(32,199,215,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center flex flex-col items-center gap-6">
          {/* Stars decoration */}
          <div className="flex items-center gap-4">
            <span style={{ color: 'var(--color-cyan)', fontSize: '24px', opacity: 0.6 }}>✦</span>
            <span style={{ color: 'var(--color-cyan)', fontSize: '16px', opacity: 0.4 }}>✧</span>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px' }}>✦</span>
          </div>

          {/* Label */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(32,199,215,0.3)', color: 'var(--color-cyan)', backgroundColor: 'rgba(32,199,215,0.08)' }}
          >
            🏆 Total Hadiah SITEFEST 2026
          </div>

          {/* Prize Amount */}
          <div className="relative">
            <div
              className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight"
              style={{ color: 'var(--color-white)', textShadow: '0 0 60px rgba(32,199,215,0.3)' }}
            >
              Rp{' '}
              <span style={{ color: 'var(--color-cyan)' }}>100.000.000</span>
              <span style={{ color: 'var(--color-cyan)' }}>+</span>
            </div>
            {/* Glow effect */}
            <div
              className="absolute inset-0 blur-3xl -z-10"
              style={{ background: 'radial-gradient(circle, rgba(32,199,215,0.15) 0%, transparent 70%)' }}
            />
          </div>

          {/* Subtitle */}
          <p className="text-base max-w-md" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Dibagikan kepada para pemenang dari setiap kategori kompetisi SITEFEST 2026
          </p>

          {/* Prize breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 w-full max-w-2xl">
            {[
              { place: 'Juara 1', amount: '25JT', label: 'per kategori' },
              { place: 'Juara 2', amount: '15JT', label: 'per kategori' },
              { place: 'Juara 3', amount: '10JT', label: 'per kategori' },
              { place: 'Favorit', amount: '5JT', label: 'per kategori' },
            ].map((prize) => (
              <div
                key={prize.place}
                className="rounded-xl p-4 text-center"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(32,199,215,0.15)',
                }}
              >
                <div className="text-xs font-medium mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {prize.place}
                </div>
                <div className="text-xl font-bold" style={{ color: 'var(--color-cyan)' }}>
                  {prize.amount}
                </div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  {prize.label}
                </div>
              </div>
            ))}
          </div>

          {/* Stars decoration bottom */}
          <div className="flex items-center gap-4 mt-2">
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px' }}>✦</span>
            <span style={{ color: 'var(--color-cyan)', fontSize: '16px', opacity: 0.4 }}>✧</span>
            <span style={{ color: 'var(--color-cyan)', fontSize: '24px', opacity: 0.6 }}>✦</span>
          </div>

          <a
            href="#"
            className="mt-2 inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{ backgroundColor: 'var(--color-cyan)', color: 'var(--color-navy)' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#18b0bf'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-cyan)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Daftar & Menangkan
          </a>
        </div>
      </div>
    </section>
  );
}
