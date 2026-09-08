import React from 'react';

const sponsors = [
  {
    id: 1,
    name: 'Bank Syariah Indonesia',
    label: 'Official Sponsor',
    src: '/assets/img/sponsor/IMG_6558.JPG.jpeg',
    tier: 'gold',
  },
  {
    id: 2,
    name: 'Penerbit Intan Pariwara',
    label: 'Official Partner',
    src: '/assets/img/sponsor/IMG_6559.JPG.jpeg',
    tier: 'silver',
  },
  {
    id: 3,
    name: 'Grafindo Media Pratama',
    label: 'Official Partner',
    src: '/assets/img/sponsor/IMG_6560.JPG.jpeg',
    tier: 'silver',
  },
];

export default function Sponsor() {
  return (
    <section
      id="sponsor"
      style={{
        background: 'linear-gradient(180deg, #07030d 0%, #050013 60%, #07030d 100%)',
        padding: '80px 0 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── subtle top divider line ── */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      }} />

      {/* ── ambient glows ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '40%',
          left: '15%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,76,30,0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }} />
        <div style={{
          position: 'absolute',
          top: '30%',
          right: '10%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }} />
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* ── Section Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          {/* eyebrow */}
          <div style={{ marginBottom: '16px' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'rgba(232,76,30,0.85)',
              padding: '6px 16px',
              border: '1px solid rgba(232,76,30,0.25)',
              borderRadius: '100px',
              background: 'rgba(232,76,30,0.06)',
            }}>
              Partners &amp; Sponsors
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 44px)',
            fontWeight: 800,
            color: '#ffffff',
            margin: '0 0 14px',
            letterSpacing: '-0.5px',
            lineHeight: 1.15,
          }}>
            Didukung Oleh{' '}
            <span style={{
              backgroundImage: 'linear-gradient(90deg, #FF8A50 0%, #FFD166 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Mitra Terbaik
            </span>
          </h2>

          <p style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '15px',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Terima kasih atas kepercayaan dan dukungan para mitra dalam menyukseskan FAMOUS 6.0
          </p>
        </div>

        {/* ── Gold Sponsor (featured) ── */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px',
          }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08))' }} />
            <span style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: 'rgba(255,210,100,0.7)',
            }}>Official Sponsor</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SponsorCard item={sponsors[0]} large />
          </div>
        </div>

        {/* ── Silver Partners ── */}
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px',
            marginTop: '40px',
          }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08))' }} />
            <span style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: 'rgba(180,210,240,0.7)',
            }}>Official Partners</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)' }} />
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}>
            {sponsors.slice(1).map((item) => (
              <SponsorCard key={item.id} item={item} large={false} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function SponsorCard({ item, large }: { item: typeof sponsors[0]; large: boolean }) {
  const [hovered, setHovered] = React.useState(false);

  const isGold = item.tier === 'gold';
  const cardWidth = large ? '320px' : '230px';
  const logoHeight = large ? '100px' : '72px';

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: cardWidth,
        padding: large ? '28px 28px 24px' : '20px 20px 18px',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        cursor: 'default',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        background: hovered
          ? 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)'
          : 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        boxShadow: hovered
          ? `0 20px 50px rgba(0,0,0,0.55), 0 0 0 1px ${isGold ? 'rgba(255,210,80,0.3)' : 'rgba(100,160,220,0.2)'}`
          : '0 4px 20px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06)',
        backdropFilter: 'blur(16px)',
      }}
    >
      {/* Logo container */}
      <div style={{
        width: '100%',
        height: logoHeight,
        borderRadius: '10px',
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px 16px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
        transition: 'box-shadow 0.25s ease',
        ...(hovered ? { boxShadow: '0 4px 20px rgba(0,0,0,0.35)' } : {}),
      }}>
        <img
          src={item.src}
          alt={item.name}
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
          }}
          loading="lazy"
        />
      </div>

      {/* Name & label */}
      <div style={{ textAlign: 'center' }}>
        <p style={{
          fontSize: large ? '15px' : '13px',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.9)',
          margin: '0 0 6px',
          letterSpacing: '-0.2px',
        }}>
          {item.name}
        </p>
        <span style={{
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: isGold ? 'rgba(255,210,80,0.75)' : 'rgba(140,190,240,0.65)',
        }}>
          {item.label}
        </span>
      </div>
    </div>
  );
}
