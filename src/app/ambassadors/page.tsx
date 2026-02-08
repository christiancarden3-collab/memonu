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
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-10"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Ambassadors
          </h1>
          <p className="text-[#f5f5f0]/60 text-lg max-w-md mx-auto">
            Join a community of athletes redefining hydration.
          </p>
        </div>
      </section>

      {/* Benefits - MEGA SPACED */}
      <section className="py-48 md:py-64 px-6 bg-[#f5f5f0] text-[#0a0a0a]">
        <div className="max-w-2xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl font-light text-center mb-32"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            What You Get
          </h2>
          
          <div className="space-y-24">
            <div className="text-center">
              <h3 
                className="text-2xl font-light mb-8"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Free Product
              </h3>
              <p className="text-[#0a0a0a]/50 max-w-md mx-auto text-lg leading-relaxed">Monthly supply of memo strips delivered to your door.</p>
            </div>
            
            <div className="text-center">
              <h3 
                className="text-2xl font-light mb-8"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Early Access
              </h3>
              <p className="text-[#0a0a0a]/50 max-w-md mx-auto text-lg leading-relaxed">First look at new products, flavors, and collaborations.</p>
            </div>
            
            <div className="text-center">
              <h3 
                className="text-2xl font-light mb-8"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Commission
              </h3>
              <p className="text-[#0a0a0a]/50 max-w-md mx-auto text-lg leading-relaxed">Earn on every sale through your unique code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application - MEGA SPACED */}
      <section className="py-48 md:py-64 px-6 bg-[#0a0a0a]">
        <div className="max-w-md mx-auto text-center">
          <h2 
            className="text-3xl md:text-5xl font-light mb-10"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Apply Now
          </h2>
          <p className="text-[#f5f5f0]/40 text-lg mb-20">
            We're looking for authentic voices in fitness, sports, and wellness.
          </p>

          {status === 'success' ? (
            <div className="py-20">
              <p 
                className="text-3xl mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Application received.
              </p>
              <p className="text-[#f5f5f0]/40 text-lg">We'll review and get back to you within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12 text-left">
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/40 block mb-6">Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-[#f5f5f0]/20 py-5 text-lg focus:outline-none focus:border-[#f5f5f0]/50"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/40 block mb-6">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-[#f5f5f0]/20 py-5 text-lg focus:outline-none focus:border-[#f5f5f0]/50"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/40 block mb-6">Instagram</label>
                <input
                  type="text"
                  placeholder="@"
                  className="w-full bg-transparent border-b border-[#f5f5f0]/20 py-5 text-lg placeholder:text-[#f5f5f0]/20 focus:outline-none focus:border-[#f5f5f0]/50"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/40 block mb-6">Why Memo?</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about yourself..."
                  className="w-full bg-transparent border-b border-[#f5f5f0]/20 py-5 text-lg placeholder:text-[#f5f5f0]/20 focus:outline-none focus:border-[#f5f5f0]/50 resize-none"
                />
              </div>
              <div className="text-center pt-12">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="border border-[#f5f5f0]/30 px-14 py-5 text-[11px] tracking-[0.25em] uppercase hover:bg-[#f5f5f0] hover:text-[#0a0a0a] transition-all duration-300 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[#f5f5f0]/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center">
          <span 
            className="text-lg tracking-[0.06em]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            memo
          </span>
          <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/30">
            <Link href="/about" className="hover:text-[#f5f5f0] transition-colors">About</Link>
            <Link href="/contact" className="hover:text-[#f5f5f0] transition-colors">Contact</Link>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
