'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Product() {
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
    <main className="min-h-screen bg-[#fafafa] text-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 bg-[#fafafa]/80 backdrop-blur-md border-b border-black/5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-black text-2xl tracking-[0.3em] font-light uppercase">
            MEMO
          </Link>
          
          <div className="hidden md:block text-black/40 text-xs tracking-wider">
            {currentDate}
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8 text-sm tracking-wider">
              <Link href="/about" className="text-black/50 hover:text-black transition-colors">
                About
              </Link>
              <Link href="/product" className="text-black transition-colors">
                Product
              </Link>
              <Link href="/journal" className="text-black/50 hover:text-black transition-colors">
                Journal
              </Link>
            </div>
            
            <button 
              className="md:hidden text-black p-2"
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#fafafa]/95 backdrop-blur-md border-t border-black/5 py-8 px-6">
            <div className="flex flex-col gap-6 text-lg">
              <Link href="/about" className="text-black/50 hover:text-black transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/product" className="text-black transition-colors" onClick={() => setIsMenuOpen(false)}>
                Product
              </Link>
              <Link href="/journal" className="text-black/50 hover:text-black transition-colors" onClick={() => setIsMenuOpen(false)}>
                Journal
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 md:gap-16 items-end">
            <div className="col-span-12 lg:col-span-7">
              <span className="text-black/30 text-xs tracking-[0.3em] uppercase block mb-8">The Product</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[0.9] mb-8">
                Hydration,
                <br />
                <em className="font-light">simplified.</em>
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <p className="text-black/50 text-lg md:text-xl leading-relaxed">
                A revolutionary dissolving strip that delivers essential electrolytes 
                instantly. No water required. No mixing. No waiting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
            {/* Product Display */}
            <div className="relative">
              <div className="w-48 md:w-72 h-64 md:h-96 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-sm shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                <span className="text-white text-4xl md:text-5xl font-extralight tracking-[0.4em] -rotate-90">MEMO</span>
              </div>
              {/* Shadow/Reflection */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/10 blur-xl rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-20">
            <span className="text-black/30 text-xs tracking-[0.3em] uppercase block mb-8">How It Works</span>
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tight leading-tight">
              Three seconds to
              <br />
              <em className="font-light">better performance.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                step: '01',
                title: 'Place',
                description: 'Take one strip from the pack. Place it under your tongue.',
                detail: 'Each strip is individually wrapped for freshness and portability.'
              },
              {
                step: '02',
                title: 'Dissolve',
                description: 'Let it dissolve naturally. Takes about 30 seconds.',
                detail: 'Our patent-pending formula breaks down instantly on contact.'
              },
              {
                step: '03',
                title: 'Perform',
                description: 'Feel the difference. Electrolytes absorb directly into your bloodstream.',
                detail: 'Sublingual absorption bypasses digestion for faster results.'
              }
            ].map((item, i) => (
              <div key={i} className="border-t border-black/10 pt-8">
                <span className="text-emerald-500 text-5xl md:text-6xl font-extralight block mb-6">{item.step}</span>
                <h3 className="text-2xl md:text-3xl font-light mb-4">{item.title}</h3>
                <p className="text-black/70 text-lg mb-4">{item.description}</p>
                <p className="text-black/40 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            <div className="col-span-12 lg:col-span-5">
              <span className="text-white/30 text-xs tracking-[0.3em] uppercase block mb-8">The Science</span>
              <h2 className="text-4xl md:text-6xl font-extralight tracking-tight leading-tight mb-8">
                Clean formula.
                <br />
                <em className="font-light">Real results.</em>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed">
                Every ingredient earns its place. No fillers, no artificial colors, 
                no unnecessary additives. Just what your body needs to perform.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:pl-16">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { name: 'Sodium', amount: '250mg', benefit: 'Primary electrolyte lost in sweat' },
                  { name: 'Potassium', amount: '100mg', benefit: 'Muscle function & hydration' },
                  { name: 'Magnesium', amount: '50mg', benefit: 'Energy production & recovery' },
                  { name: 'Calcium', amount: '25mg', benefit: 'Muscle contraction support' },
                ].map((ingredient, i) => (
                  <div key={i} className="border-t border-white/10 pt-6">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-white text-xl font-light">{ingredient.name}</span>
                      <span className="text-emerald-400 text-sm tracking-wider">{ingredient.amount}</span>
                    </div>
                    <p className="text-white/40 text-sm">{ingredient.benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-wrap gap-4">
                  {['Sugar Free', 'Vegan', 'Gluten Free', 'Non-GMO', 'No Artificial Colors'].map((badge, i) => (
                    <span key={i} className="text-white/40 text-xs tracking-[0.2em] uppercase border border-white/10 px-4 py-2">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-20">
            <span className="text-black/30 text-xs tracking-[0.3em] uppercase block mb-8">Why MEMO</span>
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tight leading-tight">
              Everything else is
              <br />
              <em className="font-light">a compromise.</em>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="text-left py-6 pr-8 font-light text-black/40 text-sm tracking-wider uppercase">Feature</th>
                  <th className="text-center py-6 px-8 font-light text-emerald-600 text-sm tracking-wider uppercase">MEMO</th>
                  <th className="text-center py-6 px-8 font-light text-black/40 text-sm tracking-wider uppercase">Powders</th>
                  <th className="text-center py-6 px-8 font-light text-black/40 text-sm tracking-wider uppercase">Drinks</th>
                  <th className="text-center py-6 pl-8 font-light text-black/40 text-sm tracking-wider uppercase">Tablets</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Water Required', memo: 'No', powder: 'Yes', drink: 'Pre-mixed', tablet: 'Yes' },
                  { feature: 'Absorption Time', memo: '~2 min', powder: '15-30 min', drink: '15-30 min', tablet: '20-45 min' },
                  { feature: 'Portable', memo: 'Pocket-sized', powder: 'Bulky', drink: 'Heavy', tablet: 'Moderate' },
                  { feature: 'Mess-Free', memo: 'Always', powder: 'Rarely', drink: 'Sometimes', tablet: 'Usually' },
                  { feature: 'Precise Dosing', memo: 'Per strip', powder: 'Measuring', drink: 'Fixed', tablet: 'Per tablet' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-black/5">
                    <td className="py-6 pr-8 text-black/70">{row.feature}</td>
                    <td className="py-6 px-8 text-center text-emerald-600 font-medium">{row.memo}</td>
                    <td className="py-6 px-8 text-center text-black/40">{row.powder}</td>
                    <td className="py-6 px-8 text-center text-black/40">{row.drink}</td>
                    <td className="py-6 pl-8 text-center text-black/40">{row.tablet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-[#0a0a0a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-white/30 text-xs tracking-[0.3em] uppercase block mb-8">Coming Soon</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-tight mb-8">
            Be the first to
            <br />
            <em className="font-light">experience MEMO.</em>
          </h2>
          <p className="text-white/40 text-lg md:text-xl max-w-xl mx-auto mb-12">
            Join our waitlist for early access and exclusive launch pricing.
          </p>
          <Link 
            href="/#waitlist"
            className="inline-flex items-center gap-4 text-white border border-white/30 px-10 py-5 hover:bg-white hover:text-black transition-all duration-300 group"
          >
            <span className="text-sm tracking-[0.2em] uppercase">Join the Waitlist</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <span className="text-white text-xl tracking-[0.4em] font-extralight">MEMO</span>

            <div className="flex items-center gap-8 text-xs text-white/30 tracking-wider">
              <Link href="/about" className="hover:text-white/60 transition-colors">About</Link>
              <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
              <span>Patent Pending</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://instagram.com/memonu" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/60 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://twitter.com/memonu" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/60 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <p className="text-white/20 text-xs tracking-wider">
              © {new Date().getFullYear()} Memo Nu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
