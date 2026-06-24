'use client';

import { useEffect, useState } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Python', icon: 'PY' },
      { name: 'JavaScript', icon: 'JS' },
      { name: 'HTML/CSS', icon: 'HC' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Next.js', icon: 'NX' },
      { name: 'React', icon: 'RE' },
      { name: 'Tailwind CSS', icon: 'TW' },
      { name: 'Node.js', icon: 'ND' },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'OpenAI Agent SDK', icon: 'AI' },
      { name: 'Prompt Engineering', icon: 'PE' },
      { name: 'Context Engineering', icon: 'CE' },
      { name: 'Agent Factory', icon: 'AF' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git / GitHub', icon: 'GH' },
      { name: 'VS Code', icon: 'VS' },
      { name: 'Figma', icon: 'FG' },
      { name: 'Postman', icon: 'PM' },
    ],
  },
];

export default function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 px-6 lg:px-20 bg-[#1a1a2e]" id="skills">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-[#d4af37] font-medium text-sm tracking-widest uppercase mb-3">
              Skills
            </p>
            <div className="w-16 h-[2px] bg-[#d4af37]" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-[#1f1f38] rounded-xl p-6 border border-[#2a2a4a] hover:border-[#d4af37]/30 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 group cursor-default"
                    >
                      <span className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-xs font-bold text-[#d4af37] group-hover:bg-[#d4af37]/20 transition-colors">
                        {skill.icon}
                      </span>
                      <span className="text-[#b0b0b0] group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
