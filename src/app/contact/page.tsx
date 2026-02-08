'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-8 md:px-16 py-8 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-white text-2xl tracking-[0.06em]"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          memo
        </Link>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white flex items-center gap-3 group"
        >
          <span className="text-xs tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 hidden md:block">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="w-7 h-px bg-white" />
            <span className="w-7 h-px bg-white" />
          </div>
        </button>
      </header>

      {/* Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-50 transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end px-8 md:px-16 py-8">
          <button onClick={() => setIsMenuOpen(false)} className="text-white flex items-center gap-3">
            <span className="text-xs tracking-[0.3em] uppercase opacity-60">Close</span>
            <div className="relative w-7 h-7 flex items-center justify-center">
              <span className="absolute w-7 h-px bg-white rotate-45" />
              <span className="absolute w-7 h-px bg-white -rotate-45" />
            </div>
          </button>
        </div>
        <nav className="px-8 md:px-16 py-16">
          <ul className="space-y-5">
            {['Shop', 'About Us', 'Contact', 'Ambassadors'].map((item) => (
              <li key={item}>
                <Link 
                  href={`/${item.toLowerCase().replace(' ', '-').replace('about-us', 'about')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-5xl font-normal hover:opacity-40 transition-opacity block"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Content */}
      <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-8">
        <div className="w-full max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h1 
              className="text-5xl md:text-7xl font-normal mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Contact
            </h1>
            <p className="text-white/50 text-lg">
              Questions? Partnerships? Just say hello.
            </p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-16">
              <p 
                className="text-3xl mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Message sent.
              </p>
              <p className="text-white/50">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-4">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white/50 transition-colors"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-4">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white/50 transition-colors"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-4">Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white/50 transition-colors resize-none"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                />
              </div>
              <div className="text-center pt-8">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="border border-white/30 px-16 py-5 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
          )}

          {/* Contact Info */}
          <div className="mt-24 pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-4">Email</span>
              <a href="mailto:hello@memonu.com" className="text-xl hover:opacity-50 transition-opacity"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                hello@memonu.com
              </a>
            </div>
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-4">Social</span>
              <div className="flex gap-6 justify-center md:justify-start">
                <a href="https://instagram.com/memonu" className="text-xl hover:opacity-50 transition-opacity"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Instagram
                </a>
                <a href="https://twitter.com/memonu" className="text-xl hover:opacity-50 transition-opacity"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
