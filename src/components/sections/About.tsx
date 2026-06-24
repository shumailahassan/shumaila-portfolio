'use client';

import { useEffect, useState } from 'react';

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 px-6 lg:px-20 bg-[#16213e]" id="about">
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-[#d4af37] font-medium text-sm tracking-widest uppercase mb-3">
              About Me
            </p>
            <div className="w-16 h-[2px] bg-[#d4af37]" />
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                From Commerce to Building Intelligent Solutions
              </h2>
              <p className="text-[#b0b0b0] leading-relaxed text-lg">
                I have a Bachelor of Commerce from the University of Karachi. With over 6 years
                of experience in billing, corporate affairs, and financial operations, I have
                worked extensively with patients, companies, and the public — handling billing,
                documentation, and communication with both corporate clients and individuals.
              </p>
              <p className="text-[#b0b0b0] leading-relaxed text-lg">
                Currently, I am studying Artificial Intelligence through GIAIC — Governor
                Initiative on AI. I am building web applications with Next.js and TypeScript,
                and exploring how AI can solve real-world problems. My background in commerce
                and public dealing gives me a unique perspective on building solutions that
                actually work for people.
              </p>
              <div className="flex gap-8 pt-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#d4af37]">6+</p>
                  <p className="text-sm text-[#8b9dc3]">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#d4af37]">10+</p>
                  <p className="text-sm text-[#8b9dc3]">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#d4af37]">4+</p>
                  <p className="text-sm text-[#8b9dc3]">Technologies</p>
                </div>
              </div>
            </div>

            {/* Right - Card */}
            <div className="bg-[#1f1f38] rounded-2xl p-8 border border-[#2a2a4a]">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Curious Mind</h3>
                    <p className="text-sm text-[#8b9dc3]">Always learning, always growing</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Self-Taught Developer</h3>
                    <p className="text-sm text-[#8b9dc3]">Commerce background, tech passion</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Team Player</h3>
                    <p className="text-sm text-[#8b9dc3]">6 years in collaborative environments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
