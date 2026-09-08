import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter / X', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

const footerLinks = {
  tentang: [
    { label: 'Beranda', href: '#home' },
    { label: 'Seminar', href: '#about' },
    { label: 'Workshop', href: '#timeline' },
  ],
  kompetisi: [
    { label: 'Web Design Competition', href: '#competitions' },
    { label: 'Lomba Ilustrasi Digital', href: '#competitions' },
    { label: 'Cerdas Cermat Akuntansi', href: '#competitions' },
    { label: 'Cerdas Cermat Manajemen', href: '#competitions' },
  ],
  kampus: [
    { label: 'Sistem Informasi Bisnis', href: '#' },
    { label: 'Program Pendidikan', href: '#' },
    { label: 'Teknologi Pemasaran', href: '#' },
  ],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: 'var(--color-deep-navy)' }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
              className="inline-flex"
              aria-label="SITEFEST 5.0"
            >
              <FooterLogo />
            </a>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Making innovation a better place through technology-based education and competition.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-1">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(32,199,215,0.15)';
                    e.currentTarget.style.color = 'var(--color-cyan)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Tentang */}
          <FooterColumn title="Tentang" links={footerLinks.tentang} scrollTo={scrollTo} />

          {/* Kompetisi */}
          <FooterColumn title="Kompetisi" links={footerLinks.kompetisi} scrollTo={scrollTo} />

          {/* Kontak */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold text-white">Kontak</h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:marketing@primakara.ac.id"
                className="flex items-start gap-3 text-sm transition-colors duration-150"
                style={{ color: 'rgba(255,255,255,0.45)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >
                <Mail size={14} className="flex-shrink-0 mt-0.5" />
                marketing@primakara.ac.id
              </a>
              <a
                href="tel:0878550312345"
                className="flex items-start gap-3 text-sm transition-colors duration-150"
                style={{ color: 'rgba(255,255,255,0.45)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >
                <Phone size={14} className="flex-shrink-0 mt-0.5" />
                087855 031 2345
              </a>
              <div className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                <span>Jl. Tukad Badung No 135,<br />Denpasar, Bali</span>
              </div>
            </div>

            {/* Kampus */}
            <div className="mt-2">
              <h3 className="text-sm font-bold text-white mb-4">Kampus Kami</h3>
              <div className="flex flex-col gap-2">
                {footerLinks.kampus.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © SITEFEST 2026. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Primakara University · Bali, Indonesia
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
      <div className="flex flex-col gap-3">
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
            style={{ color: 'rgba(255,255,255,0.45)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function FooterLogo() {
  return (
    <svg width="130" height="28" viewBox="0 0 130 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SITEFEST 5.0">
      <rect x="0" y="2" width="22" height="22" rx="6" fill="#20C7D7" />
      <text x="4.5" y="19" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="900" fill="#0B1730">S</text>
      <text x="28" y="19" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="800" fill="white" letterSpacing="0.5">SITEFEST</text>
      <text x="100" y="19" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" fill="#20C7D7">5.0</text>
    </svg>
  );
}
