import React from 'react';
import { Sparkles, Megaphone, Store, Award, ArrowRight, MessageCircle } from 'lucide-react';
import mascotImg from '../assets/img/IMG_7254.PNG';

const partnerships = [
  {
    id: 'sponsor',
    title: 'Sponsor',
    tagline: 'Brand Partnership',
    badgeBg: 'linear-gradient(135deg, #F43F5E 0%, #FB7185 100%)',
    shadowColor: 'rgba(244,63,94,0.3)',
    borderColor: 'rgba(251,113,133,0.4)',
    accentColor: '#F43F5E',
    icon: Award,
    description: 'Tingkatkan eksposur dan citra brand Anda di hadapan ribuan audiens pelajar, guru, dan masyarakat se-Pulau Jawa.',
    perks: [
      'Penempatan logo di seluruh media promosi & panggung',
      'Ad-libs & branding eksklusif oleh MC acara',
      'Sesi presentasi produk & slot booth premium',
      'Dokumentasi & laporan pertanggungjawaban (LPJ) resmi',
    ],
    ctaText: 'Hubungi Tim Sponsorship',
    waText: 'Halo Tim FAMOUS VI, saya tertarik untuk menjadi Sponsor...',
  },
  {
    id: 'media-partner',
    title: 'Media Partner',
    tagline: 'Publikasi & Sinergi',
    badgeBg: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
    shadowColor: 'rgba(139,92,246,0.3)',
    borderColor: 'rgba(168,85,247,0.4)',
    accentColor: '#8B5CF6',
    icon: Megaphone,
    description: 'Kolaborasi publikasi bersama media online, komunitas kreatif, radio, dan portal edukasi untuk memperluas jangkauan festival.',
    perks: [
      'Pemasangan logo media di banner, poster, & website resmi',
      'Akses liputan khusus & pers saat hari festival',
      'Barter publikasi konten di seluruh kanal media sosial',
      'Sertifikat apresiasi kemitraan media resmi',
    ],
    ctaText: 'Ajukan Media Partner',
    waText: 'Halo Tim FAMOUS VI, kami ingin mengajukan kerjasama Media Partner...',
  },
  {
    id: 'tenant',
    title: 'Tenant / Bazaar',
    tagline: 'F&B & Creative Goods',
    badgeBg: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
    shadowColor: 'rgba(2,132,199,0.3)',
    borderColor: 'rgba(56,189,248,0.4)',
    accentColor: '#0284C7',
    icon: Store,
    description: 'Dapatkan omzet optimal dengan membuka stan bazar kuliner (makanan/minuman) atau produk kreatif di arena festival FAMOUS VI.',
    perks: [
      'Spot tenda strategis di pusat keramaian penonton & peserta',
      'Fasilitas meja, kursi, dan instalasi colokan listrik',
      'Promosi brand stan di Instagram Stories panitia',
      'Potensi ribuan pembeli aktif sepanjang festival',
    ],
    ctaText: 'Booking Slot Tenant',
    waText: 'Halo Tim FAMOUS VI, saya ingin memesan slot booth tenant/bazaar...',
  },
];

export default function CallingOut() {
  const openWhatsApp = (msg: string) => {
    const phone = '6281234567890'; // Contact placeholder, can be updated anytime
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="partnership" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #2d1b69 0%, #1a0a3d 40%, #0d0a2e 100%)' }}>
      {/* Bioluminescence ambient glows */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '10%', left: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(2,132,199,0.15) 0%, transparent 70%)', filter: 'blur(70px)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,63,94,0.12) 0%, transparent 70%)', filter: 'blur(50px)', transform: 'translate(-50%,-50%)' }} />
      </div>
      {/* Jellyfish decorations */}
      {[
        { top: '8%', left: '2%', size: 60, color: 'rgba(139,92,246,0.35)' },
        { top: '60%', right: '3%', size: 45, color: 'rgba(244,63,94,0.3)' },
      ].map((j, i) => (
        <div key={i} style={{ position: 'absolute', top: j.top, left: (j as any).left, right: (j as any).right, width: j.size, height: j.size * 0.6, borderRadius: '50% 50% 0 0', background: j.color, pointerEvents: 'none', backdropFilter: 'blur(1px)' }}>
          {[0,1,2,3].map(t => <div key={t} style={{ position: 'absolute', bottom: 0, left: `${20 + t*20}%`, width: '1.5px', height: `${20 + t*5}px`, background: j.color, borderRadius: '99px' }} />)}
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Poster Style */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3 cloud-badge-purple poster-shadow-purple">
            <Sparkles size={14} color="#7e22ce" />
            <span style={{ color: '#6b21a8' }}>Open Partnership & Collaboration</span>
          </div>

          <div className="relative inline-block mt-3">
            <h2 className="poster-font text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight"
              style={{ lineHeight: 1.1 }}>
              <span className="text-stroke-white" style={{ background: 'linear-gradient(180deg, #38bdf8 0%, #0284c7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Calling{' '}
              </span>
              <span className="text-stroke-white" style={{ background: 'linear-gradient(180deg, #fef08a 0%, #f59e0b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                OUT!
              </span>
            </h2>

            {/* Cute mascot peeking */}
            <div className="hidden sm:block absolute -top-12 -right-20 w-20 h-24 float-anim">
              <img src={mascotImg} alt="FAMOUS VI Mascot" className="w-full h-full object-contain filter drop-shadow-lg" />
            </div>
          </div>

          <p className="poster-font text-lg sm:text-xl max-w-2xl mx-auto font-bold mt-4" style={{ color: 'rgba(224,242,254,0.9)' }}>
            Bergabung dan berlayar bersama kami menyukseskan gelombang festival akbar <strong style={{ color: '#fef08a' }}>FAMOUS 6.0 SMAIT Al-Fityan Bogor</strong>.
          </p>
        </div>

        {/* 3 Main Partnership Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {partnerships.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative group"
                style={{
                  border: `2px solid ${item.borderColor}`,
                  boxShadow: `0 12px 32px ${item.shadowColor}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 20px 40px ${item.shadowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = `0 12px 32px ${item.shadowColor}`;
                }}
              >
                {/* Card Top / Header Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="px-4 py-1.5 rounded-full text-white text-xs font-black tracking-wide uppercase shadow-sm"
                      style={{ background: item.badgeBg }}
                    >
                      {item.tagline}
                    </span>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                      style={{ background: item.badgeBg, boxShadow: `0 4px 14px ${item.shadowColor}` }}
                    >
                      <Icon size={24} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black mb-3" style={{ color: '#07152B' }}>
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#64748B' }}>
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: item.accentColor }}>
                      Benefit & Keuntungan:
                    </div>
                    <ul className="space-y-2.5">
                      {item.perks.map((perk, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: item.accentColor }} />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => openWhatsApp(item.waText)}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all duration-200"
                  style={{
                    background: item.badgeBg,
                    boxShadow: `0 6px 18px ${item.shadowColor}`,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = '')}
                >
                  <MessageCircle size={16} />
                  {item.ctaText}
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help Note */}
        <div className="mt-14 text-center bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-slate-200/80 max-w-xl mx-auto shadow-sm">
          <p className="text-sm text-slate-600 mb-2">
            Punya penawaran khusus atau butuh proposal resmi?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold">
            <span className="inline-flex items-center gap-1.5 text-slate-800">
              📧 Email: <span className="text-sky-600">famous.alfityan@gmail.com</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-800">
              📍 Lokasi: <span className="text-slate-600">SMAIT Al-Fityan Bogor</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
