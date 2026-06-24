'use client';

import { useEffect, useState } from 'react';

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 px-6 lg:px-20 bg-[#1a1a2e]" id="contact">
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-[#d4af37] font-medium text-sm tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <div className="w-16 h-[2px] bg-[#d4af37]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Form with Shadow */}
            <div className="bg-[#1f1f38] rounded-2xl p-8 border border-[#2a2a4a] shadow-2xl shadow-[#000000]/50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for your message! I will get back to you soon.');
                }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm text-[#8b9dc3] mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-[#16213e] border border-[#2a2a4a] rounded-lg text-white placeholder-[#555] focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#8b9dc3] mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-[#16213e] border border-[#2a2a4a] rounded-lg text-white placeholder-[#555] focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#8b9dc3] mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 bg-[#16213e] border border-[#2a2a4a] rounded-lg text-white placeholder-[#555] focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#d4af37] text-[#1a1a2e] font-semibold rounded-lg hover:bg-[#c4a232] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right - Info */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Let&apos;s Work Together
              </h2>
              <p className="text-[#b0b0b0] text-lg leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>

              <div className="space-y-6">
                {/* Email */}
                <a href="mailto:shumailayousuf1000@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                    <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#8b9dc3]">Email</p>
                    <p className="text-white group-hover:text-[#d4af37] transition-colors">shumailayousuf1000@gmail.com</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#8b9dc3]">Location</p>
                    <p className="text-white">Karachi, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href="https://github.com/shumailahassan" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#1f1f38] border border-[#2a2a4a] flex items-center justify-center text-[#8b9dc3] hover:bg-[#d4af37] hover:text-[#1a1a2e] hover:border-[#d4af37] transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com/in/shumaila-hassan-26406a2b5/" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#1f1f38] border border-[#2a2a4a] flex items-center justify-center text-[#8b9dc3] hover:bg-[#d4af37] hover:text-[#1a1a2e] hover:border-[#d4af37] transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://x.com/shumailaa786" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#1f1f38] border border-[#2a2a4a] flex items-center justify-center text-[#8b9dc3] hover:bg-[#d4af37] hover:text-[#1a1a2e] hover:border-[#d4af37] transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
