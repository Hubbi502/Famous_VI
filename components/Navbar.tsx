import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import famousLogo from '../assets/img/recovered_f_000ab4.png';

const lombaItems = [
  { label: 'Futsal', href: '#competitions' },
  { label: 'LKBB', href: '#competitions' },
  { label: 'Archery Putri', href: '#competitions' },
  { label: 'Speech', href: '#competitions' },
  { label: 'Story Telling', href: '#competitions' },
  { label: 'MHQ', href: '#competitions' },
  { label: 'Poster Digital', href: '#competitions' },
  { label: 'Khitobah', href: '#competitions' },
];

const navLinks = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLombaShow, setMobileLombaShow] = useState(false);
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
        backgroundColor: scrolled ? 'rgba(7,18,32,0.97)' : 'rgba(7,18,32,0.85)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.4)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(232,76,30,0.2)' : '1px solid transparent',
      }}
      ref={menuRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="flex items-center gap-2 flex-shrink-0"
            aria-label="FAMOUS VI Home"
          >
            <FamousLogo />
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-orange-light)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
              >
                {link.label}
              </a>
            ))}

            <div className="nav-dropdown-wrapper relative" tabIndex={0}>
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.8)', background: 'none', border: 'none', cursor: 'pointer' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-orange-light)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                aria-haspopup="true"
              >
                Lomba <ChevronDown size={14} />
              </button>
              <div
                className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 rounded-xl overflow-hidden"
                style={{ background: 'var(--color-deep-navy)', boxShadow: '0 12px 32px rgba(0,0,0,0.4)', border: '1px solid rgba(232,76,30,0.25)' }}
                role="menu"
              >
                {lombaItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors duration-150"
                    style={{ color: 'rgba(255,255,255,0.75)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(232,76,30,0.12)';
                      e.currentTarget.style.color = 'var(--color-orange-light)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
                    }}
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <div className="hidden lg:block">
            <a
              href="#competitions"
              onClick={(e) => { e.preventDefault(); scrollTo('#competitions'); }}
              className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, var(--color-orange) 0%, var(--color-orange-dark) 100%)', color: 'white', boxShadow: '0 4px 16px rgba(232,76,30,0.35)' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(232,76,30,0.45)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 16px rgba(232,76,30,0.35)'; }}
            >
              Daftar Sekarang
            </a>
          </div>

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

      <div className={`mobile-menu lg:hidden ${mobileOpen ? 'open' : ''}`} style={{ borderTop: mobileOpen ? '1px solid rgba(232,76,30,0.2)' : 'none', backgroundColor: 'rgba(7,18,32,0.98)' }}>
        <nav className="flex flex-col px-4 py-3 gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:text-white transition-colors"
              style={{ }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(232,76,30,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
            >
              {link.label}
            </a>
          ))}
          <button
            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:text-white transition-colors w-full text-left"
            onClick={() => setMobileLombaShow((v) => !v)}
            aria-expanded={mobileLombaShow}
          >
            Lomba <ChevronDown size={14} className={`transition-transform ${mobileLombaShow ? 'rotate-180' : ''}`} />
          </button>
          {mobileLombaShow && (
            <div className="ml-4 flex flex-col gap-1">
              {lombaItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  className="px-3 py-2 rounded-lg text-sm text-white/60 hover:text-white transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(232,76,30,0.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
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
              className="block w-full text-center px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, var(--color-orange) 0%, var(--color-orange-dark) 100%)', color: 'white' }}
            >
              Daftar Sekarang
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function FamousLogo() {
  return (
    <div className="flex items-center">
      <img
        src={famousLogo}
        alt="FAMOUS VI"
        className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 hover:scale-105"
      />
    </div>
  );
}
