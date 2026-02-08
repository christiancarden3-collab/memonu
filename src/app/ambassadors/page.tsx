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

      {/* Menu */}
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
        <div className="relative z-10 text-center px-8">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-normal mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Ambassadors
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto">
            Join a community of athletes redefining hydration.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32 md:py-48 px-8 md:px-16 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl md:text-6xl font-normal text-center mb-24"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            What You Get
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {[
              { title: 'Free Product', desc: 'Monthly supply of memo strips delivered to your door.' },
              { title: 'Early Access', desc: 'First look at new products, flavors, and collaborations.' },
              { title: 'Commission', desc: 'Earn on every sale through your unique code.' },
            ].map((item, i) => (
              <div key={i}>
                <h3 
                  className="text-2xl font-normal mb-4"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-black/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application */}
      <section className="py-32 md:py-48 px-8 md:px-16 bg-black">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-normal mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Apply Now
            </h2>
            <p className="text-white/50">
              We're looking for authentic voices in fitness, sports, and wellness.
            </p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-16">
              <p 
                className="text-3xl mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Application received.
              </p>
              <p className="text-white/50">We'll review and get back to you within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-4">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white/50"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-4">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white/50"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-4">Instagram Handle</label>
                <input
                  type="text"
                  placeholder="@"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl placeholder:text-white/20 focus:outline-none focus:border-white/50"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-4">Why Memo?</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about yourself..."
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl placeholder:text-white/20 focus:outline-none focus:border-white/50 resize-none"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                />
              </div>
              <div className="text-center pt-8">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="border border-white/30 px-16 py-5 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span 
            className="text-xl tracking-[0.06em]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            memo
          </span>
          <div className="flex gap-8 text-xs tracking-[0.2em] uppercase text-white/40">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
