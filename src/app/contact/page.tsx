'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const playfair = "var(--font-playfair), 'Playfair Display', Georgia, serif";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0]" style={{ fontFamily: playfair }}>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-8 text-center">
        <Link href="/" className="text-[#f5f5f0] text-lg tracking-[0.06em]">
          memo
        </Link>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-8 right-6 md:right-12 text-[#f5f5f0] flex items-center gap-3 group"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#f5f5f0]/50 group-hover:text-[#f5f5f0] transition-colors hidden md:block">Menu</span>
          <div className="flex flex-col gap-[5px]">
            <span className="w-6 h-[1px] bg-[#f5f5f0]" />
            <span className="w-6 h-[1px] bg-[#f5f5f0]" />
          </div>
        </button>
      </header>

      {/* Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0a0a0a] z-50 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button 
          onClick={() => setIsMenuOpen(false)} 
          className="absolute top-8 right-6 md:right-12 text-[#f5f5f0] flex items-center gap-3 group"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#f5f5f0]/50 group-hover:text-[#f5f5f0] transition-colors hidden md:block">Close</span>
          <div className="relative w-6 h-6 flex items-center justify-center">
            <span className="absolute w-6 h-[1px] bg-[#f5f5f0] rotate-45" />
            <span className="absolute w-6 h-[1px] bg-[#f5f5f0] -rotate-45" />
          </div>
        </button>
        
        <nav className="h-full flex items-center justify-center">
          <ul className="space-y-12 text-center">
            {['Shop', 'Science', 'About', 'Ambassadors', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#f5f5f0] text-5xl md:text-7xl font-light hover:text-[#f5f5f0]/40 transition-colors block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Content */}
      <section className="min-h-screen flex items-center justify-center px-6 py-48 text-center">
        <div className="w-full max-w-lg mx-auto">
          <div className="border border-[#f5f5f0]/30 px-12 md:px-20 py-16 md:py-20 mb-32">
            <h1 className="text-5xl md:text-7xl font-light mb-8">
              Contact
            </h1>
            <p className="text-[#f5f5f0]/40 text-lg md:text-xl">
              Questions? Partnerships? Just say hello.
            </p>
          </div>

          {status === 'success' ? (
            <div className="border border-[#f5f5f0]/20 p-16 md:p-24">
              <p className="text-3xl mb-10">Message sent.</p>
              <p className="text-[#f5f5f0]/40 text-lg">We'll be in touch soon.</p>
            </div>
          ) : (
            <div className="border border-[#f5f5f0]/20 p-12 md:p-20">
              <form onSubmit={handleSubmit} className="space-y-16 text-center">
                <div>
                  <label className="text-[11px] tracking-[0.3em] uppercase text-[#f5f5f0]/40 block mb-8">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-[#f5f5f0]/20 py-6 text-xl text-center focus:outline-none focus:border-[#f5f5f0]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] tracking-[0.3em] uppercase text-[#f5f5f0]/40 block mb-8">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-[#f5f5f0]/20 py-6 text-xl text-center focus:outline-none focus:border-[#f5f5f0]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] tracking-[0.3em] uppercase text-[#f5f5f0]/40 block mb-8">Message</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full bg-transparent border-b border-[#f5f5f0]/20 py-6 text-xl text-center focus:outline-none focus:border-[#f5f5f0]/50 transition-colors resize-none"
                  />
                </div>
                <div className="pt-12">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="border border-[#f5f5f0] px-16 py-5 text-[11px] tracking-[0.3em] uppercase hover:bg-[#f5f5f0] hover:text-[#0a0a0a] transition-all duration-300 disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Contact Info */}
          <div className="mt-48 border border-[#f5f5f0]/10 p-12 md:p-20">
            <div className="space-y-20">
              <div>
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#f5f5f0]/30 block mb-8">Email</span>
                <a href="mailto:hello@memonu.com" className="text-2xl hover:text-[#f5f5f0]/50 transition-colors">
                  hello@memonu.com
                </a>
              </div>
              <div>
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#f5f5f0]/30 block mb-8">Social</span>
                <div className="flex gap-16 justify-center text-2xl">
                  <a href="https://instagram.com/memonu" className="hover:text-[#f5f5f0]/50 transition-colors">Instagram</a>
                  <a href="https://twitter.com/memonu" className="hover:text-[#f5f5f0]/50 transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
