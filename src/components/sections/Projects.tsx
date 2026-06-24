'use client';

import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'Physical AI Textbook',
    description:
      'An interactive textbook exploring Physical AI concepts, designed for learning and understanding AI in the physical world.',
    tags: ['AI', 'Education', 'Next.js'],
    github: 'https://github.com/shumailahassan',
    live: 'https://vercel.com/shumailahassans-projects/physical-ai-textbook',
  },
  {
    title: 'AI Chat Assistant',
    description:
      'Built an intelligent chatbot using OpenAI Agent SDK with context-aware responses and multi-turn conversation support.',
    tags: ['Python', 'OpenAI', 'Agent SDK'],
    github: 'https://github.com/shumailahassan',
    live: null,
  },
  {
    title: 'Portfolio Website',
    description:
      'A professional, responsive portfolio built with Next.js and Tailwind CSS featuring dark theme design.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/shumailahassan',
    live: null,
  },
  {
    title: 'Prompt Engineering Playground',
    description:
      'Interactive tool for testing and comparing different prompt engineering techniques and strategies.',
    tags: ['Python', 'OpenAI', 'Prompt Engineering'],
    github: 'https://github.com/shumailahassan',
    live: null,
  },
  {
    title: 'Context Engineering Lab',
    description:
      'Experiments with context window management, RAG pipelines, and retrieval-augmented generation patterns.',
    tags: ['Python', 'Context Engineering', 'RAG'],
    github: 'https://github.com/shumailahassan',
    live: null,
  },
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 px-6 lg:px-20 bg-[#16213e]" id="projects">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-[#d4af37] font-medium text-sm tracking-widest uppercase mb-3">
              Projects
            </p>
            <div className="w-16 h-[2px] bg-[#d4af37]" />
          </div>

          {/* Projects List - 1 by 1 */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-[#1f1f38] rounded-xl p-6 border border-[#2a2a4a] hover:border-[#d4af37]/30 transition-all duration-300 group flex flex-col sm:flex-row gap-6 items-start"
              >
                {/* Number */}
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-[#d4af37]">{String(index + 1).padStart(2, '0')}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#b0b0b0] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[#d4af37]/10 text-[#d4af37]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[#8b9dc3] hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[#8b9dc3] hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-10">
            <a
              href="https://github.com/shumailahassan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#d4af37] text-[#d4af37] rounded-full font-medium hover:bg-[#d4af37] hover:text-[#1a1a2e] transition-all duration-300"
            >
              View All on GitHub
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
