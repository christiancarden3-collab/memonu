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
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6">
        <div className="flex justify-center">
          <Link 
            href="/" 
            className="text-white text-lg tracking-[0.06em]"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
          >
            memo
          </Link>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-6 right-6 md:right-12 text-white flex items-center gap-3 group"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 group-hover:text-white transition-colors hidden md:block">Menu</span>
          <div className="flex flex-col gap-[5px]">
            <span className="w-6 h-[1px] bg-white" />
            <span className="w-6 h-[1px] bg-white" />
          </div>
        </button>
      </header>

      {/* Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0a0a0a] z-50 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex justify-end px-6 md:px-12 py-6">
          <button onClick={() => setIsMenuOpen(false)} className="text-white flex items-center gap-3 group">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 group-hover:text-white transition-colors hidden md:block">Close</span>
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className="absolute w-6 h-[1px] bg-white rotate-45" />
              <span className="absolute w-6 h-[1px] bg-white -rotate-45" />
            </div>
          </button>
        </div>
        <nav className="h-full flex items-center justify-center">
          <ul className="space-y-4 text-center">
            {[
              { name: 'Shop', href: '/shop' },
              { name: 'Science', href: '/science' },
              { name: 'About', href: '/about' },
              { name: 'Ambassadors', href: '/ambassadors' },
              { name: 'Contact', href: '/contact' },
            ].map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-5xl md:text-7xl font-light hover:text-white/40 transition-colors block py-1"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Content */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-lg mx-auto text-center">
          <h1 
            className="text-5xl md:text-7xl font-light mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Contact
          </h1>
          <p className="text-white/40 text-base mb-12">
            Questions? Partnerships? Just say hello.
          </p>

          {status === 'success' ? (
            <div className="py-12">
              <p 
                className="text-2xl mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Message sent.
              </p>
              <p className="text-white/40 text-sm">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 block mb-3">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-base focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 block mb-3">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-base focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 block mb-3">Message</label>
                <textarea
                  rows={3}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-base focus:outline-none focus:border-white/50 transition-colors resize-none"
                />
              </div>
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="border border-white/30 px-12 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
          )}

          {/* Contact Info */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 block mb-2">Email</span>
                <a href="mailto:hello@memonu.com" className="text-base hover:text-white/50 transition-colors">
                  hello@memonu.com
                </a>
              </div>
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 block mb-2">Social</span>
                <div className="flex gap-4 justify-center">
                  <a href="https://instagram.com/memonu" className="text-base hover:text-white/50 transition-colors">IG</a>
                  <a href="https://twitter.com/memonu" className="text-base hover:text-white/50 transition-colors">TW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
