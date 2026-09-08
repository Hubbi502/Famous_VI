export default function PrizePool() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #581c87 0%, #3b0764 45%, #2e1065 75%, #1e1b4b 100%)',
      }}
    >
      {/* Decorative bubbles */}
      {[
        { size: 120, top: '-20px', left: '5%', opacity: 0.06 },
        { size: 80, bottom: '-10px', right: '8%', opacity: 0.06 },
        { size: 50, top: '30%', left: '45%', opacity: 0.05 },
      ].map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ width: b.size, height: b.size, top: (b as any).top, bottom: (b as any).bottom, left: (b as any).left, right: (b as any).right, border: '2px solid rgba(255,255,255,0.3)', opacity: b.opacity * 10 }}
        />
      ))}

      {/* Flame/glow at center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-48 rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(232,76,30,0.2) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(232,76,30,0.2)', border: '1px solid rgba(232,76,30,0.4)' }}>
            <span style={{ color: 'var(--color-orange-light)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              ✦ Total Hadiah FAMOUS VI 2026 ✦
            </span>
          </div>

          {/* Amount */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-3xl font-black" style={{ color: 'var(--color-orange)' }}>✦</span>
            <h2
              className="font-black leading-none"
              style={{ fontSize: 'clamp(48px, 10vw, 96px)', color: 'white', textShadow: '0 0 40px rgba(232,76,30,0.4)' }}
            >
              Puluhan Juta
            </h2>
            <span className="text-3xl font-black" style={{ color: 'var(--color-orange)' }}>✦</span>
          </div>
          <div className="text-xl font-bold mb-8" style={{ color: 'var(--color-cyan)' }}>Rupiah</div>

          {/* Prize breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { place: '🥇 Juara 1', label: 'Tiap Cabang', desc: 'Trofi + Uang Tunai' },
              { place: '🥈 Juara 2', label: 'Tiap Cabang', desc: 'Trofi + Uang Tunai' },
              { place: '🥉 Juara 3', label: 'Tiap Cabang', desc: 'Trofi + Uang Tunai' },
            ].map((prize) => (
              <div
                key={prize.place}
                className="px-4 py-4 rounded-2xl text-center"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}
              >
                <div className="text-2xl mb-1">{prize.place.split(' ')[0]}</div>
                <div className="text-sm font-bold text-white">{prize.place.split(' ').slice(1).join(' ')}</div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{prize.label}</div>
                <div className="text-xs mt-1 font-semibold" style={{ color: 'var(--color-cyan)' }}>{prize.desc}</div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            *Detail hadiah akan diumumkan melalui media sosial resmi FAMOUS VI
          </p>
        </div>
      </div>
    </section>
  );
}
