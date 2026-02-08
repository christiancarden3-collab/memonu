'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function About() {
  const [currentDate, setCurrentDate] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
    };
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    };
    setCurrentDate(`${now.toLocaleDateString('en-US', options)} | ${now.toLocaleTimeString('en-US', timeOptions)}`);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-2xl tracking-[0.3em] font-light uppercase">
            MEMO
          </Link>
          
          <div className="hidden md:block text-white/60 text-xs tracking-wider">
            {currentDate}
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8 text-sm tracking-wider">
              <Link href="/about" className="text-white transition-colors">
                About
              </Link>
              <Link href="/product" className="text-white/70 hover:text-white transition-colors">
                Product
              </Link>
              <Link href="/journal" className="text-white/70 hover:text-white transition-colors">
                Journal
              </Link>
            </div>
            
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 py-8 px-6">
            <div className="flex flex-col gap-6 text-lg">
              <Link href="/about" className="text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/product" className="text-white/70 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                Product
              </Link>
              <Link href="/journal" className="text-white/70 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                Journal
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <span className="text-white/30 text-xs tracking-[0.3em] uppercase block mb-8">About Us</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white tracking-tight leading-[0.9] mb-8">
              We believe in
              <br />
              <em className="font-light">doing more</em>
              <br />
              with less.
            </h1>
          </div>
        </div>
      </section>

      {/* Full Width Image */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1461896836934- voices-only-photo?q=80&w=2940&auto=format&fit=crop"
          alt="The journey"
          fill
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Story Section */}
      <section className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            {/* Left Column - Story */}
            <div className="col-span-12 lg:col-span-7">
              <span className="text-white/30 text-xs tracking-[0.3em] uppercase block mb-8">01 — The Beginning</span>
              
              <div className="space-y-8 text-white/60 text-lg md:text-xl leading-relaxed">
                <p>
                  It started with a problem we all know too well: the mid-workout crash, 
                  the afternoon slump, the moment when your body demands more than a sip of water 
                  can provide.
                </p>
                <p>
                  We were athletes, entrepreneurs, parents—people who couldn't afford to slow down. 
                  We tried everything: powders that needed mixing, drinks that needed refrigeration, 
                  tablets that took forever to work.
                </p>
                <p className="text-white text-2xl md:text-3xl font-extralight leading-snug">
                  None of it fit the way we actually lived.
                </p>
                <p>
                  So we asked a different question: what if hydration could be as instant as 
                  the moments that demand it? What if you could carry a week's worth of 
                  electrolytes in your pocket?
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="col-span-12 lg:col-span-5 lg:pt-32">
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop"
                  alt="Lab work"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-white/30 text-xs tracking-wider mt-4">Research & Development, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-[#fafafa] text-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-20">
            <span className="text-black/30 text-xs tracking-[0.3em] uppercase block mb-8">02 — What We Believe</span>
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tight leading-tight">
              Simplicity is the
              <br />
              ultimate sophistication.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                number: '01',
                title: 'No Compromises',
                description: 'We spent two years perfecting a formula that works as fast as you need it to. No shortcuts. No fillers. Just what your body needs.'
              },
              {
                number: '02',
                title: 'Designed for Reality',
                description: 'Life doesn\'t pause for hydration. Neither should you. Our strips go anywhere, work anytime, require nothing but you.'
              },
              {
                number: '03',
                title: 'Built to Last',
                description: 'A pouch of MEMO outlasts a week of workouts. No bottles to clean. No waste. Just pure, portable performance.'
              }
            ].map((value, i) => (
              <div key={i} className="border-t border-black/10 pt-8">
                <span className="text-black/30 text-xs tracking-[0.2em] block mb-4">{value.number}</span>
                <h3 className="text-2xl font-light mb-4">{value.title}</h3>
                <p className="text-black/50 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto text-center">
          <blockquote className="text-3xl md:text-5xl lg:text-6xl font-extralight text-white leading-tight mb-12">
            "The best hydration is the kind
            <br />
            <em className="font-light">you actually use.</em>"
          </blockquote>
          <cite className="text-white/40 text-sm tracking-[0.2em] uppercase not-italic">
            — Founding Team, MEMO
          </cite>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between mb-20">
            <div>
              <span className="text-white/30 text-xs tracking-[0.3em] uppercase block mb-8">03 — The Team</span>
              <h2 className="text-4xl md:text-6xl font-extralight text-white tracking-tight">
                Built by athletes,
                <br />
                <em className="font-light">for athletes.</em>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Coming Soon', role: 'Founder & CEO', image: null },
              { name: 'Coming Soon', role: 'Head of Product', image: null },
              { name: 'Coming Soon', role: 'Head of Science', image: null },
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[3/4] bg-neutral-900 mb-6 overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/10 text-6xl font-extralight">?</span>
                    </div>
                  )}
                </div>
                <h3 className="text-white text-xl font-light mb-1">{member.name}</h3>
                <p className="text-white/40 text-sm tracking-wider">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-[#fafafa] text-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-tight mb-8">
            Ready to fuel
            <br />
            <em className="font-light">your pursuit?</em>
          </h2>
          <p className="text-black/50 text-lg md:text-xl max-w-xl mx-auto mb-12">
            Join our waitlist and be the first to experience hydration, reimagined.
          </p>
          <Link 
            href="/#waitlist"
            className="inline-flex items-center gap-4 text-black border border-black/30 px-10 py-5 hover:bg-black hover:text-white transition-all duration-300 group"
          >
            <span className="text-sm tracking-[0.2em] uppercase">Join the Waitlist</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-black/5 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <span className="text-black text-xl tracking-[0.4em] font-extralight">MEMO</span>

            <div className="flex items-center gap-8 text-xs text-black/30 tracking-wider">
              <Link href="/about" className="hover:text-black/60 transition-colors">About</Link>
              <Link href="/privacy" className="hover:text-black/60 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-black/60 transition-colors">Terms</Link>
              <span>Patent Pending</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://instagram.com/memonu" target="_blank" rel="noopener noreferrer" className="text-black/30 hover:text-black/60 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://twitter.com/memonu" target="_blank" rel="noopener noreferrer" className="text-black/30 hover:text-black/60 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-black/5 text-center">
            <p className="text-black/20 text-xs tracking-wider">
              © {new Date().getFullYear()} Memo Nu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
