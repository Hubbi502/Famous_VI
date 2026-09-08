import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Trophy, Sparkles } from 'lucide-react';
import famousLogo from '../assets/img/recovered_f_000ab4.png';

const lombaItems = [
  { label: 'Futsal', href: '#competitions', tag: 'Olahraga' },
  { label: 'LKBB', href: '#competitions', tag: 'PBB' },
  { label: 'Archery Putri', href: '#competitions', tag: 'Olahraga' },
  { label: 'Speech', href: '#competitions', tag: 'Bahasa' },
  { label: 'Story Telling', href: '#competitions', tag: 'Bahasa' },
  { label: 'MHQ', href: '#competitions', tag: 'Agama' },
  { label: 'Poster Digital', href: '#competitions', tag: 'Seni' },
  { label: 'Khitobah', href: '#competitions', tag: 'Agama' },
];

const navLinks = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Lomba', href: '#competitions' },
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
    onScroll();
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
        background: scrolled
          ? 'linear-gradient(90deg, rgba(5,15,30,0.96) 0%, rgba(8,25,50,0.96) 50%, rgba(5,15,30,0.96) 100%)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(42,196,216,0.2)'
          : '1px solid transparent',
        boxShadow: scrolled
          ? '0 4px 32px rgba(0,0,0,0.5), 0 0 80px rgba(42,196,216,0.06)'
          : 'none',
      }}
      ref={menuRef}
    >
      {/* Subtle gradient accent line at bottom when scrolled */}
      {scrolled && (
        <div
          className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(42,196,216,0.4) 30%, rgba(232,76,30,0.4) 70%, transparent)' }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

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
                className="h-10 sm:h-11 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="poster-font text-xs font-black tracking-widest uppercase" style={{ color: scrolled ? '#38bdf8' : 'rgba(147,210,255,0.9)' }}>
                SMAIT Al-Fityan
              </span>
              <span className="poster-font text-base font-black tracking-tight drop-shadow-sm" style={{ color: scrolled ? '#ffffff' : '#ffffff' }}>
                FAM<span style={{ color: '#E84C1E' }}>O</span>US 6.0
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="poster-font px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 relative group"
                style={{
                  color: '#ffffff',
                  textShadow: scrolled ? 'none' : '0 1px 8px rgba(0,0,0,0.6)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#38bdf8';
                  e.currentTarget.style.backgroundColor = scrolled ? 'rgba(56,189,248,0.1)' : 'rgba(255,255,255,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf9L5-OeVrr1cqmMCkVdMo5ItTQ1X7t9p6-0Xj8z1uaO_dNuQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="poster-font inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all duration-200 relative overflow-hidden group shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #E84C1E 0%, #C43A10 100%)',
                boxShadow: '0 4px 18px rgba(232,76,30,0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(232,76,30,0.55)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(232,76,30,0.4)';
              }}
            >
              <Trophy size={15} />
              Daftar Sekarang
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-xl transition-colors"
              style={{
                backgroundColor: scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.15)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t px-4 pt-3 pb-6 flex flex-col gap-2"
          style={{
            background: 'linear-gradient(180deg, rgba(5,15,30,0.98) 0%, rgba(8,25,50,0.98) 100%)',
            borderColor: 'rgba(42,196,216,0.15)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="poster-font px-4 py-3 rounded-xl text-base font-bold text-white transition-colors"
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(56,189,248,0.12)'; e.currentTarget.style.color = '#38bdf8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'white'; }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf9L5-OeVrr1cqmMCkVdMo5ItTQ1X7t9p6-0Xj8z1uaO_dNuQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="poster-font mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-white text-center shadow-lg"
            style={{ background: 'linear-gradient(135deg, #E84C1E 0%, #C43A10 100%)' }}
          >
            <Trophy size={16} />
            Daftar Sekarang
          </a>
        </div>
      )}
    </header>
  );
}
