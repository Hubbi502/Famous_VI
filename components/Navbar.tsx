import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const kompetisiItems = [
  { label: 'Web Design Competition', href: '#competitions' },
  { label: 'Lomba Ilustrasi Digital', href: '#competitions' },
  { label: 'Cerdas Cermat Akuntansi', href: '#competitions' },
  { label: 'Cerdas Cermat Manajemen', href: '#competitions' },
];

const navLinks = [
  { label: 'Beranda', href: '#home' },
  { label: 'Seminar', href: '#about' },
  { label: 'Workshop', href: '#timeline' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileKompetiShow, setMobileKompetiShow] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: 'var(--color-navy)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
      }}
      ref={menuRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="flex items-center gap-2 flex-shrink-0"
            aria-label="SITEFEST 5.0 Home"
          >
            <SitefestLogo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
              >
                {link.label}
              </a>
            ))}

            {/* Kompetisi Dropdown */}
            <div className="nav-dropdown-wrapper relative" tabIndex={0}>
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.8)', background: 'none', border: 'none', cursor: 'pointer' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                aria-haspopup="true"
                aria-expanded="false"
              >
                Kompetisi <ChevronDown size={14} />
              </button>
              <div
                className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-lg overflow-hidden"
                style={{ background: 'var(--color-white)', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', border: '1px solid var(--color-border)' }}
                role="menu"
              >
                {kompetisiItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                    className="block px-4 py-3 text-sm font-medium transition-colors duration-150"
                    style={{ color: 'var(--color-text)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f0f7ff';
                      e.currentTarget.style.color = 'var(--color-blue)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.color = 'var(--color-text)';
                    }}
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#competitions"
              onClick={(e) => { e.preventDefault(); scrollTo('#competitions'); }}
              className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200"
              style={{ backgroundColor: 'var(--color-cyan)', color: 'var(--color-navy)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#18b0bf')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-cyan)')}
            >
              Daftar
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-md"
            style={{ color: 'white' }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu lg:hidden ${mobileOpen ? 'open' : ''}`} style={{ borderTop: mobileOpen ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
        <nav className="flex flex-col px-4 py-3 gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors w-full text-left"
            onClick={() => setMobileKompetiShow((v) => !v)}
            aria-expanded={mobileKompetiShow}
          >
            Kompetisi <ChevronDown size={14} className={`transition-transform ${mobileKompetiShow ? 'rotate-180' : ''}`} />
          </button>
          {mobileKompetiShow && (
            <div className="ml-4 flex flex-col gap-1">
              {kompetisiItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  className="px-3 py-2 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
          <div className="pt-2 pb-1">
            <a
              href="#competitions"
              onClick={(e) => { e.preventDefault(); scrollTo('#competitions'); }}
              className="block w-full text-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{ backgroundColor: 'var(--color-cyan)', color: 'var(--color-navy)' }}
            >
              Daftar
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function SitefestLogo() {
  return (
    <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SITEFEST 5.0">
      <rect x="0" y="4" width="24" height="24" rx="6" fill="#20C7D7" />
      <text x="5" y="22" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="800" fill="#0B1730">S</text>
      <text x="30" y="22" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="800" fill="white" letterSpacing="0.5">SITEFEST</text>
      <text x="108" y="22" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="#20C7D7">5.0</text>
    </svg>
  );
}
