import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import famousLogo from '../assets/img/recovered_f_000ab4.png';

const lombaItems = [
  { label: 'Futsal', href: '#competitions', emoji: '⚽' },
  { label: 'LKBB', href: '#competitions', emoji: '🪖' },
  { label: 'Archery Putri', href: '#competitions', emoji: '🏹' },
  { label: 'Speech', href: '#competitions', emoji: '🎙️' },
  { label: 'Story Telling', href: '#competitions', emoji: '📖' },
  { label: 'MHQ', href: '#competitions', emoji: '📿' },
  { label: 'Poster Digital', href: '#competitions', emoji: '🖼️' },
  { label: 'Khitobah', href: '#competitions', emoji: '🎤' },
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
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'linear-gradient(90deg, rgba(5,15,30,0.97) 0%, rgba(8,25,50,0.97) 50%, rgba(5,15,30,0.97) 100%)'
          : 'linear-gradient(90deg, rgba(5,15,30,0.75) 0%, rgba(8,25,50,0.75) 50%, rgba(5,15,30,0.75) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(42,196,216,0.2)'
          : '1px solid rgba(255,255,255,0.06)',
        boxShadow: scrolled
          ? '0 4px 32px rgba(0,0,0,0.5), 0 0 80px rgba(42,196,216,0.06)'
          : 'none',
      }}
      ref={menuRef}
    >
      {/* Subtle gradient accent line at bottom */}
      {scrolled && (
        <div
          className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(42,196,216,0.4) 30%, rgba(232,76,30,0.4) 70%, transparent)' }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="flex items-center gap-3 flex-shrink-0 group"
            aria-label="FAMOUS VI Home"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'radial-gradient(circle, rgba(42,196,216,0.25) 0%, transparent 70%)', filter: 'blur(8px)' }}
              />
              <img
                src={famousLogo}
                alt="FAMOUS VI"
                className="h-9 sm:h-10 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-[11px] font-black tracking-[0.18em] uppercase" style={{ color: 'rgba(42,196,216,0.8)' }}>
                SMAIT Al-Fityan
              </span>
              <span className="text-[10px] font-semibold tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Bogor · 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink key={link.label} label={link.label} href={link.href} onClick={() => scrollTo(link.href)} />
            ))}

            {/* Lomba Dropdown */}
            <div className="nav-dropdown-wrapper relative" tabIndex={0}>
              <button
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 group"
                style={{ color: 'rgba(255,255,255,0.75)', background: 'none', border: 'none', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#38bdf8';
                  e.currentTarget.style.backgroundColor = 'rgba(56,189,248,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
                  e.currentTarget.style.backgroundColor = '';
                }}
                aria-haspopup="true"
              >
                Cabang Lomba
                <ChevronDown size={13} strokeWidth={2.5} style={{ transition: 'transform 0.2s' }} />
              </button>
              <div
                className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(5,20,45,0.98) 0%, rgba(8,30,60,0.98) 100%)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(42,196,216,0.15)',
                  backdropFilter: 'blur(20px)',
                }}
                role="menu"
              >
                <div className="p-2">
                  {lombaItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
                      style={{ color: 'rgba(255,255,255,0.7)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(56,189,248,0.12)';
                        e.currentTarget.style.color = '#38bdf8';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                      }}
                      role="menuitem"
                    >
                      <span className="text-base">{item.emoji}</span>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf9L5-OeVrr1cqmMCkVdMo5ItTQ1X7t9p6-0Xj8z1uaO_dNuQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #E84C1E 0%, #C43A10 100%)',
                color: 'white',
                boxShadow: '0 4px 20px rgba(232,76,30,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(232,76,30,0.55), inset 0 1px 0 rgba(255,255,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(232,76,30,0.4), inset 0 1px 0 rgba(255,255,255,0.15)';
              }}
            >
              🏆 Daftar Sekarang
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-xl transition-all duration-200"
            style={{ color: 'white', backgroundColor: mobileOpen ? 'rgba(232,76,30,0.2)' : 'rgba(255,255,255,0.08)' }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu lg:hidden ${mobileOpen ? 'open' : ''}`}
        style={{
          borderTop: mobileOpen ? '1px solid rgba(42,196,216,0.15)' : 'none',
          background: 'linear-gradient(180deg, rgba(5,15,30,0.98) 0%, rgba(8,25,50,0.98) 100%)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150"
              style={{ color: 'rgba(255,255,255,0.8)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(56,189,248,0.1)';
                e.currentTarget.style.color = '#38bdf8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '';
                e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Lomba Accordion */}
          <button
            className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-white/80 transition-all w-full text-left"
            onClick={() => setMobileLombaShow((v) => !v)}
            aria-expanded={mobileLombaShow}
            style={{ backgroundColor: mobileLombaShow ? 'rgba(56,189,248,0.1)' : '' }}
          >
            <span>Cabang Lomba</span>
            <ChevronDown size={14} className={`transition-transform duration-200 ${mobileLombaShow ? 'rotate-180' : ''}`} />
          </button>
          {mobileLombaShow && (
            <div className="ml-3 flex flex-col gap-0.5 pb-1">
              {lombaItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-150"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(56,189,248,0.08)';
                    e.currentTarget.style.color = '#38bdf8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                  }}
                >
                  <span>{item.emoji}</span>
                  {item.label}
                </a>
              ))}
            </div>
          )}

          {/* Mobile CTA */}
          <div className="pt-3 pb-1">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf9L5-OeVrr1cqmMCkVdMo5ItTQ1X7t9p6-0Xj8z1uaO_dNuQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #E84C1E 0%, #C43A10 100%)',
                color: 'white',
                boxShadow: '0 4px 16px rgba(232,76,30,0.4)',
              }}
            >
              🏆 Daftar Sekarang
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ label, href, onClick }: { label: string; href: string; onClick: () => void }) {
  return (
    <a
      href={href}
      onClick={(e) => { e.preventDefault(); onClick(); }}
      className="relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 group"
      style={{ color: 'rgba(255,255,255,0.75)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#38bdf8';
        e.currentTarget.style.backgroundColor = 'rgba(56,189,248,0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
        e.currentTarget.style.backgroundColor = '';
      }}
    >
      {label}
    </a>
  );
}
