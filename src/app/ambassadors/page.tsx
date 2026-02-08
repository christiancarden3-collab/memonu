'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Ambassadors() {
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
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-white text-xl tracking-[0.06em]"
          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
        >
          memo
        </Link>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white flex items-center gap-3 group"
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

      {/* Hero */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2940&auto=format&fit=crop"
            alt="Athletes"
            fill
            className="object-cover"
            style={{ filter: 'grayscale(100%) brightness(0.4)' }}
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Ambassadors
          </h1>
          <p className="text-white/50 text-base md:text-lg max-w-md mx-auto">
            Join a community of athletes redefining hydration.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-32 px-6 bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl font-light text-center mb-20"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            What You Get
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { title: 'Free Product', desc: 'Monthly supply of memo strips delivered to your door.' },
              { title: 'Early Access', desc: 'First look at new products, flavors, and collaborations.' },
              { title: 'Commission', desc: 'Earn on every sale through your unique code.' },
            ].map((item, i) => (
              <div key={i}>
                <h3 
                  className="text-xl font-light mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-black/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application */}
      <section className="py-24 md:py-32 px-6 bg-black">
        <div className="max-w-lg mx-auto text-center">
          <h2 
            className="text-3xl md:text-5xl font-light mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Apply Now
          </h2>
          <p className="text-white/40 text-base mb-12">
            We're looking for authentic voices in fitness, sports, and wellness.
          </p>

          {status === 'success' ? (
            <div className="py-12">
              <p 
                className="text-2xl mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Application received.
              </p>
              <p className="text-white/40 text-sm">We'll review and get back to you within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 block mb-3">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-base focus:outline-none focus:border-white/50"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 block mb-3">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-base focus:outline-none focus:border-white/50"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 block mb-3">Instagram</label>
                <input
                  type="text"
                  placeholder="@"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-base placeholder:text-white/20 focus:outline-none focus:border-white/50"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-white/40 block mb-3">Why Memo?</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about yourself..."
                  className="w-full bg-transparent border-b border-white/20 py-3 text-base placeholder:text-white/20 focus:outline-none focus:border-white/50 resize-none"
                />
              </div>
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="border border-white/30 px-12 py-4 text-[11px] tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <span 
            className="text-lg tracking-[0.06em]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            memo
          </span>
          <div className="flex gap-6 text-[10px] tracking-[0.2em] uppercase text-white/30">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
