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
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0]">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-8">
        <div className="flex justify-center">
          <Link 
            href="/" 
            className="text-[#f5f5f0] text-lg tracking-[0.06em]"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
          >
            memo
          </Link>
        </div>
        
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

      {/* Menu Overlay - EXPANDED */}
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
          <ul className="space-y-10 text-center">
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
                  className="text-[#f5f5f0] text-4xl md:text-6xl font-light hover:text-[#f5f5f0]/40 transition-colors block"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Content - MEGA SPACED */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32">
        <div className="w-full max-w-md mx-auto text-center">
          <h1 
            className="text-5xl md:text-7xl font-light mb-10"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Contact
          </h1>
          <p className="text-[#f5f5f0]/40 text-lg mb-32">
            Questions? Partnerships? Just say hello.
          </p>

          {status === 'success' ? (
            <div className="py-20">
              <p 
                className="text-3xl mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Message sent.
              </p>
              <p className="text-[#f5f5f0]/40 text-lg">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-24 text-left">
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/40 block mb-6">Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-[#f5f5f0]/20 py-5 text-lg focus:outline-none focus:border-[#f5f5f0]/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/40 block mb-6">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-[#f5f5f0]/20 py-5 text-lg focus:outline-none focus:border-[#f5f5f0]/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/40 block mb-6">Message</label>
                <textarea
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-[#f5f5f0]/20 py-5 text-lg focus:outline-none focus:border-[#f5f5f0]/50 transition-colors resize-none"
                />
              </div>
              <div className="text-center pt-12">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="border border-[#f5f5f0]/30 px-14 py-5 text-[11px] tracking-[0.25em] uppercase hover:bg-[#f5f5f0] hover:text-[#0a0a0a] transition-all duration-300 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
          )}

          {/* Contact Info - MEGA SPACED */}
          <div className="mt-48 pt-32 border-t border-[#f5f5f0]/10">
            <div className="space-y-24">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/30 block mb-6">Email</span>
                <a href="mailto:hello@memonu.com" className="text-xl hover:text-[#f5f5f0]/50 transition-colors">
                  hello@memonu.com
                </a>
              </div>
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/30 block mb-6">Social</span>
                <div className="flex gap-12 justify-center">
                  <a href="https://instagram.com/memonu" className="text-xl hover:text-[#f5f5f0]/50 transition-colors">Instagram</a>
                  <a href="https://twitter.com/memonu" className="text-xl hover:text-[#f5f5f0]/50 transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
