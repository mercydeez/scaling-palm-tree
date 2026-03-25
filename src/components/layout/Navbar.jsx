import { useState } from 'react';
import { sectionLinks } from '../../data/portfolioData';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-surface/90 backdrop-blur-md border-b border-surface-container-high z-50">
      {/* Left - Logo */}
      <div className="flex-1 flex justify-start">
        <a href="#hero" className="text-xl font-black text-primary tracking-tighter font-headline">
          Atharva Soundankar
        </a>
      </div>

      {/* Center - Links (Desktop) */}
      <nav className="hidden md:flex flex-1 justify-center gap-10 items-center">
        {sectionLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-label uppercase tracking-widest text-xs text-outline-variant hover:text-primary transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Right - Resume (Desktop) & Hamburger (Mobile) */}
      <div className="flex-1 flex justify-end items-center">
        <a
          href="https://drive.google.com/file/d/1jGQImDZQIKfrKM98UwaSmX_P00gK6R-5/view"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex"
          style={{
            border: '1px solid #b8fd4b',
            color: '#b8fd4b',
            padding: '4px 14px',
            fontFamily: 'Syne Mono, monospace',
            fontSize: '11px',
            letterSpacing: '0.15em',
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#b8fd4b'; e.currentTarget.style.color = '#000'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#b8fd4b'; }}
        >
          RESUME
        </a>

        {/* Hamburger - mobile only */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? '#b8fd4b' : '#ffffff', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(5px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 1.5, background: '#ffffff', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
          <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? '#b8fd4b' : '#ffffff', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 flex flex-col items-center"
          style={{ background: '#0e0e0e', borderBottom: '1px solid #262626', padding: '1.5rem', marginTop: '1px' }}
        >
          {sectionLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-4 font-mono text-sm tracking-[0.15em] no-underline border-b border-[#191919] transition-colors duration-200 text-[#ababab] hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
