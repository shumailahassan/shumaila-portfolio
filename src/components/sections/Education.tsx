'use client';

import { useEffect, useState } from 'react';

const education = [
  {
    degree: 'Governor Initiative on AI (GIAIC)',
    institution: 'Governor Sindh Initiative',
    duration: 'In Progress',
    description:
      'Studying Artificial Intelligence, including TypeScript, Next.js, Python, OpenAI Agent SDK, Prompt Engineering, Context Engineering, and Agent Factory concepts.',
    status: 'Current',
  },
  {
    degree: 'Bachelor of Commerce',
    institution: 'University of Karachi',
    duration: 'Completed',
    description:
      'Completed bachelor\'s degree in commerce with focus on accounting, business management, and financial principles.',
    status: 'Completed',
  },
];

export default function Education() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 px-6 lg:px-20 bg-[#1a1a2e]" id="education">
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-[#d4af37] font-medium text-sm tracking-widest uppercase mb-3">
              Education
            </p>
            <div className="w-16 h-[2px] bg-[#d4af37]" />
          </div>

          {/* Education Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-[#1f1f38] rounded-xl p-8 border border-[#2a2a4a] hover:border-[#d4af37]/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      edu.status === 'Current'
                        ? 'bg-[#d4af37]/10 text-[#d4af37]'
                        : 'bg-[#8b9dc3]/10 text-[#8b9dc3]'
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                <p className="text-[#d4af37] font-medium mb-1">{edu.institution}</p>
                <p className="text-sm text-[#8b9dc3] mb-4">{edu.duration}</p>
                <p className="text-[#b0b0b0] text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
