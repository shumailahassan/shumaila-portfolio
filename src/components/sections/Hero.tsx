'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

/* ── cyclic photo: cartoon effect → morph → icon → back ── */
function CyclicPhoto() {
  const [phase, setPhase] = useState<'show' | 'cartoon' | 'morph' | 'icon' | 'back'>('show');

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    const loop = () => {
      timers.push(setTimeout(() => setPhase('cartoon'), 3000));   // photo becomes cartoon
      timers.push(setTimeout(() => setPhase('morph'), 4000));     // cartoon distorts
      timers.push(setTimeout(() => setPhase('icon'), 5000));      // icon reveal
      timers.push(setTimeout(() => setPhase('back'), 6200));      // morph back
      timers.push(setTimeout(() => { setPhase('show'); loop(); }, 7000));
    };
    loop();
    return () => timers.forEach(clearTimeout);
  }, []);

  const getPhotoStyle = (): React.CSSProperties => {
    switch (phase) {
      case 'cartoon':
        return {
          filter: 'contrast(1.8) saturate(2) brightness(1.1)',
          transform: 'scale(1.05) rotate(3deg)',
        };
      case 'morph':
        return {
          filter: 'contrast(2) saturate(2.5) hue-rotate(20deg) brightness(1.2)',
          transform: 'scale(0.9) rotate(-5deg) skewX(5deg)',
        };
      case 'back':
        return {
          filter: 'contrast(1.2) saturate(1.3)',
          transform: 'scale(1.02)',
        };
      default:
        return {
          filter: 'none',
          transform: 'scale(1) rotate(0deg)',
        };
    }
  };

  return (
    <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#d4af37]/30 shadow-2xl shadow-[#d4af37]/20"
         style={{ animation: 'glowPulse 3s ease-in-out infinite' }}>

      {/* Photo layer */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-700 ease-in-out ${
          phase === 'icon' ? 'opacity-0 scale-50' :
          phase === 'back' ? 'opacity-100 scale-100' :
          'opacity-100'
        }`}
        style={getPhotoStyle()}
      >
        <Image src="/images/profile.jpg" alt="Shumaila Hassan" fill className="rounded-full" style={{ objectFit: 'cover', objectPosition: 'center center' }} priority />

        {/* Cartoon outline overlay */}
        {phase === 'cartoon' && (
          <div className="absolute inset-0 rounded-full border-4 border-[#1a1a2e] shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]" />
        )}

        {/* Comic burst lines during morph */}
        {phase === 'morph' && (
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0%,#d4af37_10%,transparent_20%)] opacity-20 animate-spin" />
            <div className="absolute inset-4 rounded-full border-4 border-dashed border-[#d4af37]/40 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }} />
          </div>
        )}
      </div>

      {/* Icon layer */}
      <div className={`absolute inset-0 flex items-center justify-center bg-[#1f1f38] rounded-full transition-all duration-500 ${
        phase === 'icon' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}>
        <div className="text-center space-y-3">
          <span className="text-5xl block" style={{ animation: 'bounceIn 0.6s ease-out' }}>✨</span>
          <span className="text-sm text-[#d4af37] font-bold tracking-wider uppercase">AI Engineer</span>
          <div className="flex justify-center gap-1">
            <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </div>

      {/* Shimmer overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" style={{ backgroundSize: '200% 100%', animation: 'shimmer 3s ease-in-out infinite' }} />
    </div>
  );
}

function AnimatedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) return <span className={className}>&nbsp;</span>;

  return (
    <span className={className}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span
            className="inline-block animate-[slideUp_0.5s_ease-out_forwards] opacity-0"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {word}
          </span>
          {i < text.split(' ').length - 1 && ' '}
        </span>
      ))}
    </span>
  );
}

function AnimatedLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes rotateOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counterRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.1); }
          50% { box-shadow: 0 0 40px rgba(212, 175, 55, 0.3); }
        }
      `}</style>

      <section className="min-h-screen flex items-center bg-[#1a1a2e] px-6 lg:px-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Name */}
            <AnimatedLine delay={200}>
              <div className="space-y-2">
                <p className="text-[#d4af37] font-medium tracking-widest uppercase text-sm sm:text-base">Hello, I&apos;m</p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  <span className="block">Shumaila</span>
                  <span className="block text-[#d4af37]">Hassan</span>
                </h1>
              </div>
            </AnimatedLine>

            {/* Title */}
            <AnimatedLine delay={1200}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-[2px] bg-[#d4af37]" />
                <p className="text-base sm:text-lg font-medium text-[#8b9dc3] tracking-wide">
                  UI/UX Designer | Full Stack Developer | Aspiring AI Engineer
                </p>
              </div>
            </AnimatedLine>

            {/* Tagline */}
            <AnimatedLine delay={1800}>
              <p className="text-lg sm:text-xl text-[#b0b0b0] leading-relaxed max-w-xl pl-15">
                <AnimatedText text="Designing Human-Centered Experiences and Building Intelligent Solutions." delay={1900} />
              </p>
            </AnimatedLine>

            {/* Location & Availability */}
            <AnimatedLine delay={2400}>
              <div className="space-y-2">
                <p className="text-[#8b9dc3] flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Karachi, Pakistan
                </p>
                <p className="text-[#d4af37] font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
                  Available for Internships, Freelance Projects, and Collaborative Opportunities.
                </p>
              </div>
            </AnimatedLine>

            {/* Buttons */}
            <AnimatedLine delay={3200}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-[#d4af37] text-[#1a1a2e] rounded-full font-semibold
                    hover:bg-[#c4a232] transition-all duration-300 shadow-lg shadow-[#d4af37]/20
                    hover:shadow-xl hover:shadow-[#d4af37]/30 hover:-translate-y-0.5"
                >
                  View Projects
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="px-8 py-3 border-2 border-[#d4af37] text-[#d4af37] rounded-full font-semibold
                    hover:bg-[#d4af37] hover:text-[#1a1a2e] transition-all duration-300
                    hover:-translate-y-0.5"
                >
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 bg-[#2a2a4a] text-white rounded-full font-semibold
                    hover:bg-[#3a3a5a] transition-all duration-300
                    hover:-translate-y-0.5"
                >
                  Contact Me
                </a>
              </div>
            </AnimatedLine>

            {/* Social Links */}
            <AnimatedLine delay={3600}>
              <div className="flex gap-4">
                <a href="https://github.com/shumailahassan" target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#1f1f38] text-[#8b9dc3] hover:bg-[#d4af37] hover:text-[#1a1a2e] transition-all duration-300 border border-[#2a2a4a]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com/in/shumaila-hassan-26406a2b5/" target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#1f1f38] text-[#8b9dc3] hover:bg-[#d4af37] hover:text-[#1a1a2e] transition-all duration-300 border border-[#2a2a4a]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://x.com/shumailaa786" target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#1f1f38] text-[#8b9dc3] hover:bg-[#d4af37] hover:text-[#1a1a2e] transition-all duration-300 border border-[#2a2a4a]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="mailto:shumailayousuf1000@gmail.com"
                  className="p-3 rounded-full bg-[#1f1f38] text-[#8b9dc3] hover:bg-[#d4af37] hover:text-[#1a1a2e] transition-all duration-300 border border-[#2a2a4a]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </AnimatedLine>
          </div>

          {/* Right Column - Profile Photo */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 ease-out delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative flex items-center justify-center w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
              {/* Orbiting dots ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{ animation: 'rotateOrbit 20s linear infinite' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#d4af37] rounded-full shadow-[0_0_10px_#d4af37]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#5F8D8A] rounded-full shadow-[0_0_8px_#5F8D8A]" />
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-[#8b9dc3] rounded-full shadow-[0_0_8px_#8b9dc3]" />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 bg-[#d4af37] rounded-full shadow-[0_0_10px_#d4af37]" />
              </div>

              {/* Outer glow ring */}
              <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border border-[#d4af37]/10" style={{ animation: 'glowPulse 4s ease-in-out infinite' }} />

              {/* Decorative ring */}
              <div className="absolute w-[260px] h-[260px] md:w-[330px] md:h-[330px] rounded-full border-2 border-dashed border-[#d4af37]/15" style={{ animation: 'rotateOrbit 30s linear infinite reverse' }} />

              {/* Profile photo — cyclic animation */}
              <CyclicPhoto />

              {/* Orbiting Course Badges — mix when they meet */}
              <div className="absolute inset-0" style={{ animation: 'rotateOrbit 25s linear infinite' }}>
                {/* Badge 1: Python */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2" style={{ animation: 'counterRotate 25s linear infinite' }}>
                  <div className="bg-[#1f1f38]/90 backdrop-blur-sm border border-[#2a2a4a] rounded-2xl px-3 py-2 shadow-xl shadow-black/30 flex items-center gap-1.5">
                    <span className="text-base">🐍</span>
                    <span className="text-[10px] font-medium text-[#8b9dc3] hidden sm:inline">Python</span>
                  </div>
                </div>
                {/* Badge 2: TS */}
                <div className="absolute top-1/2 -right-3 -translate-y-1/2" style={{ animation: 'counterRotate 25s linear infinite' }}>
                  <div className="bg-[#1f1f38]/90 backdrop-blur-sm border border-[#2a2a4a] rounded-2xl px-3 py-2 shadow-xl shadow-black/30 flex items-center gap-1.5">
                    <span className="text-base">💻</span>
                    <span className="text-[10px] font-medium text-[#8b9dc3] hidden sm:inline">TS</span>
                  </div>
                </div>
                {/* Badge 3: Next.js */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2" style={{ animation: 'counterRotate 25s linear infinite' }}>
                  <div className="bg-[#1f1f38]/90 backdrop-blur-sm border border-[#2a2a4a] rounded-2xl px-3 py-2 shadow-xl shadow-black/30 flex items-center gap-1.5">
                    <span className="text-base">⚡</span>
                    <span className="text-[10px] font-medium text-[#8b9dc3] hidden sm:inline">Next.js</span>
                  </div>
                </div>
                {/* Badge 4: UI/UX */}
                <div className="absolute top-1/2 -left-3 -translate-y-1/2" style={{ animation: 'counterRotate 25s linear infinite' }}>
                  <div className="bg-[#1f1f38]/90 backdrop-blur-sm border border-[#2a2a4a] rounded-2xl px-3 py-2 shadow-xl shadow-black/30 flex items-center gap-1.5">
                    <span className="text-base">🎨</span>
                    <span className="text-[10px] font-medium text-[#8b9dc3] hidden sm:inline">UI/UX</span>
                  </div>
                </div>
              </div>

              {/* Second orbit ring — opposite direction, mix effect */}
              <div className="absolute inset-0" style={{ animation: 'rotateOrbit 18s linear infinite reverse' }}>
                {/* Badge 5: AI */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2" style={{ animation: 'counterRotate 18s linear infinite reverse' }}>
                  <div className="bg-[#d4af37]/10 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl px-3 py-2 shadow-xl shadow-[#d4af37]/10 flex items-center gap-1.5">
                    <span className="text-base">🤖</span>
                    <span className="text-[10px] font-bold text-[#d4af37] hidden sm:inline">AI</span>
                  </div>
                </div>
                {/* Badge 6: LLM */}
                <div className="absolute top-1/2 -right-3 -translate-y-1/2" style={{ animation: 'counterRotate 18s linear infinite reverse' }}>
                  <div className="bg-[#1f1f38]/90 backdrop-blur-sm border border-[#2a2a4a] rounded-2xl px-3 py-2 shadow-xl shadow-black/30 flex items-center gap-1.5">
                    <span className="text-base">🧠</span>
                    <span className="text-[10px] font-medium text-[#8b9dc3] hidden sm:inline">LLM</span>
                  </div>
                </div>
                {/* Badge 7: GIAIC */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2" style={{ animation: 'counterRotate 18s linear infinite reverse' }}>
                  <div className="bg-[#1f1f38]/90 backdrop-blur-sm border border-[#d4af37]/40 rounded-2xl px-3 py-2 shadow-xl shadow-[#d4af37]/10 flex items-center gap-1.5">
                    <span className="text-base">📋</span>
                    <span className="text-[10px] font-bold text-[#d4af37] hidden sm:inline">GIAIC</span>
                  </div>
                </div>
                {/* Badge 8: Prompt */}
                <div className="absolute top-1/2 -left-3 -translate-y-1/2" style={{ animation: 'counterRotate 18s linear infinite reverse' }}>
                  <div className="bg-[#1f1f38]/90 backdrop-blur-sm border border-[#2a2a4a] rounded-2xl px-3 py-2 shadow-xl shadow-black/30 flex items-center gap-1.5">
                    <span className="text-base">💬</span>
                    <span className="text-[10px] font-medium text-[#8b9dc3] hidden sm:inline">Prompt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
