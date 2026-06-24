'use client';

import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // detect active section
      const sections = navLinks.map((l) => l.href.replace('#', '')).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHrefClass = (href: string) => {
    const section = href.replace('#', '');
    const isActive = section === '' ? activeSection === '' : activeSection === section;
    return `relative text-sm font-medium transition-colors duration-300 ${
      isActive ? 'text-[#d4af37]' : 'text-[#8b9dc3] hover:text-white'
    }`;
  };

  const getUnderlineClass = (href: string) => {
    const section = href.replace('#', '');
    const isActive = section === '' ? activeSection === '' : activeSection === section;
    return `absolute -bottom-1 left-0 h-[2px] bg-[#d4af37] transition-all duration-300 ${
      isActive ? 'w-full' : 'w-0 group-hover:w-full'
    }`;
  };

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes menuFade {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#1a1a2e]/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-[#d4af37]/10'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={{ animation: 'slideDown 0.6s ease-out' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              {/* Hexagon Monogram */}
              <div className="relative w-10 h-11 flex items-center justify-center transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Outer hexagon */}
                  <polygon
                    points="50,2 95,25 95,75 50,98 5,75 5,25"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="3"
                    opacity="0.6"
                    className="transition-all duration-300 group-hover:opacity-100 group-hover:stroke-[4]"
                  />
                  {/* Inner hexagon */}
                  <polygon
                    points="50,12 85,30 85,70 50,88 15,70 15,30"
                    fill="#d4af37"
                    fillOpacity="0.08"
                    stroke="#d4af37"
                    strokeWidth="1.5"
                    opacity="0.4"
                    className="transition-all duration-300 group-hover:opacity-70"
                  />
                  {/* S letter */}
                  <text
                    x="50"
                    y="56"
                    textAnchor="middle"
                    fill="#d4af37"
                    fontSize="38"
                    fontWeight="700"
                    fontFamily="Arial, sans-serif"
                    letterSpacing="-1"
                  >
                    S
                  </text>
                </svg>
                {/* Glow dot */}
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#d4af37] rounded-full opacity-60 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#d4af37] transition-all duration-300" />
              </div>
              <span className="hidden sm:inline text-sm font-bold tracking-[0.2em] uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#d4af37]/60 group-hover:from-[#d4af37] group-hover:via-white group-hover:to-[#d4af37] transition-all duration-500">
                  Shumaila
                </span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`group relative px-4 py-2 rounded-lg transition-all duration-300 ${getHrefClass(link.href)} ${
                    !scrolled ? '' : 'hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  <span className={getUnderlineClass(link.href)} />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-[#8b9dc3] hover:text-[#d4af37] hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
                    isOpen ? 'rotate-45 translate-y-[5px]' : ''
                  }`}
                />
                <span
                  className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ${
                    isOpen ? 'opacity-0 scale-0' : ''
                  }`}
                />
                <span
                  className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
                    isOpen ? '-rotate-45 -translate-y-[5px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-4 pt-2 bg-[#1a1a2e]/95 backdrop-blur-xl border-t border-[#2a2a4a]">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-sm font-medium transition-all duration-300 border-b border-[#2a2a4a]/50 last:border-0 ${
                  (link.href === '#' && activeSection === '') || activeSection === link.href.replace('#', '')
                    ? 'text-[#d4af37] pl-2'
                    : 'text-[#8b9dc3] hover:text-white hover:pl-2'
                }`}
                style={{
                  animation: isOpen ? `menuFade 0.3s ease-out ${i * 0.05}s both` : 'none',
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
