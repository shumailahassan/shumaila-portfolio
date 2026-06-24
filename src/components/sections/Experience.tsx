'use client';

import { useEffect, useState } from 'react';

const experiences = [
  {
    title: 'Billing & Corporate Executive',
    company: 'Kutiyana Memon Hospital',
    duration: '6 Years',
    description:
      'Managed billing operations, corporate accounts, and financial documentation. Handled patient billing, insurance claims, reconciliation, and corporate financial procedures.',
    type: 'Healthcare',
  },
  {
    title: 'Telephone Operator',
    company: 'Kutiyana Memon Hospital',
    duration: '2 Years',
    description:
      'Handled incoming and outgoing calls, managed communication systems, coordinated between departments, and assisted patients with inquiries.',
    type: 'Healthcare',
  },
  {
    title: 'Cash & Billing Handler',
    company: 'Okhai Memon Hospital',
    duration: '2 Years',
    description:
      'Managed cash and billing operations, processed patient payments, maintained accurate financial records, and assisted with daily transaction reconciliation.',
    type: 'Healthcare',
  },
  {
    title: 'School Teacher',
    company: 'School Education',
    duration: '4 Months',
    description:
      'Taught students, developed lesson plans, managed classroom environments, and helped students achieve their academic goals.',
    type: 'Education',
  },
];

export default function Experience() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 px-6 lg:px-20 bg-[#16213e]" id="experience">
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="mb-10">
            <p className="text-[#d4af37] font-medium text-sm tracking-widest uppercase mb-3">
              Experience
            </p>
            <div className="w-16 h-[2px] bg-[#d4af37]" />
          </div>

          {/* Experience Cards - 2 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="bg-[#1f1f38] rounded-xl p-6 border border-[#2a2a4a] hover:border-[#d4af37]/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#d4af37]/10 text-[#d4af37]">
                    {exp.type}
                  </span>
                  <span className="text-xs text-[#8b9dc3]">{exp.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#d4af37] transition-colors">
                  {exp.title}
                </h3>
                <p className="text-[#d4af37] text-sm font-medium mb-3">{exp.company}</p>
                <p className="text-[#b0b0b0] text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
