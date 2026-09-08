import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Crab, Starfish, Seaweed, Jellyfish, AnglerFish, Seahorse, Bubble, ClownFish, StaghornCoral, TubeSponges, MantaRay } from './MarineBiota';
import CoralReefLandscape from './CoralReefLandscape';

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter / X', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

const footerLinks = {
  navigasi: [
    { label: 'Beranda', href: '#home' },
    { label: 'Tentang FAMOUS VI', href: '#about' },
    { label: 'Cabang Lomba', href: '#competitions' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'FAQ', href: '#faq' },
  ],
  lomba: [
    { label: 'Futsal', href: '#competitions' },
    { label: 'LKBB', href: '#competitions' },
    { label: 'Archery Putri', href: '#competitions' },
    { label: 'Speech', href: '#competitions' },
    { label: 'Story Telling', href: '#competitions' },
    { label: 'MHQ', href: '#competitions' },
    { label: 'Poster Digital', href: '#competitions' },
    { label: 'Khitobah', href: '#competitions' },
  ],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'linear-gradient(180deg, #04000f 0%, #030009 50%, #010005 100%)', position: 'relative', overflow: 'hidden' }}>

      {/* ── Deep ocean ambient creatures ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>

        {/* Radial Bioluminescent Glows */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />

        {/* Jellyfish cluster - top left */}
        <div className="anim-jelly" style={{ position: 'absolute', top: '5%', left: '4%', animationDuration: '7s', opacity: 0.75 }}>
          <Jellyfish size={48} color="rgba(139,92,246,0.75)" />
        </div>
        <div className="anim-jelly" style={{ position: 'absolute', top: '15%', left: '12%', animationDuration: '9s', animationDelay: '3s', opacity: 0.55 }}>
          <Jellyfish size={32} color="rgba(56,189,248,0.65)" />
        </div>

        {/* Angler Fish - right side lurking */}
        <div className="anim-jelly" style={{ position: 'absolute', top: '20%', right: '5%', animationDuration: '11s', animationDelay: '1s', opacity: 0.7 }}>
          <AnglerFish size={50} />
        </div>

        {/* Seahorse bobbing - mid left */}
        <div className="anim-jelly" style={{ position: 'absolute', top: '45%', left: '3%', animationDuration: '5.5s', opacity: 0.8 }}>
          <Seahorse size={42} />
        </div>

        {/* Clownfish swimming through the abyss */}
        <div className="anim-swim-right" style={{ position: 'absolute', top: '55%', left: 0, animationDuration: '30s', opacity: 0.65 }}>
          <ClownFish size={28} />
        </div>

        {/* Seaweed on sides - swaying */}
        <div className="anim-sway" style={{ position: 'absolute', bottom: '180px', left: '2%', opacity: 0.55 }}>
          <Seaweed height={90} color="#166534" />
        </div>
        <div className="anim-sway" style={{ position: 'absolute', bottom: '180px', left: '8%', animationDelay: '1.2s', opacity: 0.45 }}>
          <Seaweed height={70} color="#15803d" />
        </div>
        <div className="anim-sway" style={{ position: 'absolute', bottom: '180px', right: '4%', opacity: 0.5 }}>
          <Seaweed height={85} color="#14532d" />
        </div>
        <div className="anim-sway" style={{ position: 'absolute', bottom: '180px', right: '10%', animationDelay: '2s', opacity: 0.4 }}>
          <Seaweed height={65} color="#166534" />
        </div>

        {/* Coral branches */}
        <div style={{ position: 'absolute', bottom: '160px', left: '18%', opacity: 0.6 }}>
          <CoralBranch height={70} color="#be185d" />
        </div>
        <div style={{ position: 'absolute', bottom: '160px', left: '30%', opacity: 0.5 }}>
          <CoralBranch height={55} color="#0284c7" />
        </div>
        <div style={{ position: 'absolute', bottom: '160px', right: '18%', opacity: 0.55 }}>
          <CoralBranch height={65} color="#a855f7" />
        </div>
        <div style={{ position: 'absolute', bottom: '160px', right: '28%', opacity: 0.45 }}>
          <CoralBranch height={50} color="#f97316" />
        </div>

        {/* Crabs on seabed */}
        <div style={{ position: 'absolute', bottom: '160px', left: '42%', opacity: 0.8 }}>
          <Crab size={28} />
        </div>
        <div style={{ position: 'absolute', bottom: '162px', right: '38%', opacity: 0.7 }}>
          <Crab size={22} />
        </div>

        {/* Starfish on the floor */}
        <div style={{ position: 'absolute', bottom: '163px', left: '55%', opacity: 0.85 }}>
          <Starfish size={24} color="#f59e0b" />
        </div>
        <div style={{ position: 'absolute', bottom: '162px', left: '68%', opacity: 0.7 }}>
          <Starfish size={18} color="#f97316" />
        </div>

        {/* Rising bubble columns */}
        {[
          { left: '15%', delay: '0s',   size: 10 },
          { left: '28%', delay: '1.3s', size: 7  },
          { left: '50%', delay: '0.6s', size: 12 },
          { left: '65%', delay: '2s',   size: 8  },
          { left: '80%', delay: '0.8s', size: 10 },
          { left: '92%', delay: '1.8s', size: 6  },
        ].map((b, i) => (
          <div key={i} className="anim-bubble-rise" style={{ position: 'absolute', bottom: '170px', left: b.left, animationDelay: b.delay, animationDuration: `${3.5 + i * 0.5}s` }}>
            <Bubble size={b.size} />
          </div>
        ))}
      </div>

      {/* Wave top */}
      <div className="w-full overflow-hidden" style={{ marginTop: '-1px', position: 'relative', zIndex: 1 }}>
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
          <path d="M0,0 Q360,60 720,20 Q1080,-20 1440,40 L1440,0Z"
            fill="#080219" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
              className="inline-flex items-center gap-2"
              aria-label="FAMOUS VI"
            >
              <FooterKeyIcon />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black text-white tracking-tight">
                  FAM<span style={{ color: 'var(--color-orange)' }}>O</span>US
                </span>
                <span className="text-xs font-bold tracking-wider" style={{ color: 'var(--color-cyan)' }}>VI · 2026</span>
              </div>
            </a>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Festival Al-Fityan Multi Open Sport — ajang kompetisi bergengsi Se-Pulau Jawa untuk generasi berprestasi.
            </p>
            <div className="flex gap-3 mt-1">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.45)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(232,76,30,0.2)'; e.currentTarget.style.color = 'var(--color-orange-light)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigasi */}
          <FooterColumn title="Navigasi" links={footerLinks.navigasi} scrollTo={scrollTo} />

          {/* Lomba */}
          <FooterColumn title="Cabang Lomba" links={footerLinks.lomba} scrollTo={scrollTo} />

          {/* Kontak */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold text-white">Kontak Panitia</h3>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Diza', phone: '081343059590' },
                { name: 'Hendra', phone: '081400842090' },
                { name: 'Ustadz Ahad', phone: '08212134290' },
              ].map((cp) => (
                <a
                  key={cp.name}
                  href={`tel:${cp.phone}`}
                  className="flex items-center gap-2 text-sm transition-colors duration-150"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-orange-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  <Phone size={13} className="flex-shrink-0" />
                  <span>{cp.phone} <span style={{ color: 'rgba(255,255,255,0.25)' }}>({cp.name})</span></span>
                </a>
              ))}

              <div className="flex items-start gap-2 text-sm mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <MapPin size={13} className="flex-shrink-0 mt-0.5" />
                <span>SMAIT Al-Fityan Boarding School,<br />Bogor, Jawa Barat</span>
              </div>
            </div>

            {/* Registration CTA */}
            <div className="mt-2 p-4 rounded-xl" style={{ backgroundColor: 'rgba(232,76,30,0.12)', border: '1px solid rgba(232,76,30,0.25)' }}>
              <div className="text-xs font-bold mb-1" style={{ color: 'var(--color-orange-light)' }}>Open Registration</div>
              <div className="text-sm font-black text-white">02 Sep – 10 Okt 2026</div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf9L5-OeVrr1cqmMCkVdMo5ItTQ1X7t9p6-0Xj8z1uaO_dNuQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-200"
                style={{ backgroundColor: 'var(--color-orange)', color: 'white' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-orange-dark)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-orange)')}
              >
                Daftar Sekarang →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Magnificent Coral Reef Ecosystem at the Ocean Floor ── */}
      <div className="w-full mt-4">
        <CoralReefLandscape />
      </div>

      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © FAMOUS 6.0 2026. All rights reserved.
          </p>
          <p className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.35)' }}>
            SMAIT Al-Fityan Boarding School Bogor
          </p>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
  scrollTo: (href: string) => void;
}

function FooterColumn({ title, links, scrollTo }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-sm font-bold text-white">{title}</h3>
      <div className="flex flex-col gap-2.5">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => {
              if (link.href.startsWith('#')) {
                e.preventDefault();
                scrollTo(link.href);
              }
            }}
            className="text-sm transition-colors duration-150"
            style={{ color: 'rgba(255,255,255,0.4)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-orange-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function FooterKeyIcon() {
  return (
    <svg width="28" height="32" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 2 C10 2 5 7 7 13 C9 18 14 20 16 20 L16 34 L12 34 L12 36 L20 36 L20 34 L18 34 L18 28 L20 28 L20 26 L18 26 L18 20 C20 20 26 17 25 11 C24 5 22 2 16 2Z" fill="#1E6FBF" />
      <path d="M14 4 C9 5 7 10 9 15 C11 19 15 20 16 20 C17 20 21 18 22 13 C23 8 20 4 14 4Z" fill="#3B8FDF" />
      <ellipse cx="14" cy="11" rx="4" ry="5" fill="white" opacity="0.85" />
      <path d="M13 8 Q15 6 17 9 Q16 13 13 13 Q11 11 13 8Z" fill="#071220" opacity="0.7" />
      <path d="M6 4 C10 1 18 0 22 4 C26 7 27 12 25 11" stroke="var(--color-orange)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}
