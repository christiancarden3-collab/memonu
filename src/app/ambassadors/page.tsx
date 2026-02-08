'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Ambassadors() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 md:px-16 py-8">
        <Link href="/" className="text-white text-2xl tracking-[0.5em] font-light">
          MEMO
        </Link>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white flex items-center gap-3 group"
        >
          <span className="text-sm tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            Menu
          </span>
          <div className="flex flex-col gap-1.5">
            <span className="w-6 h-px bg-white" />
            <span className="w-6 h-px bg-white" />
          </div>
        </button>
      </header>

      {/* Menu */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-black/95 backdrop-blur-md transform transition-transform duration-500 ease-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end px-8 md:px-16 py-8">
          <button onClick={() => setIsMenuOpen(false)} className="text-white flex items-center gap-3">
            <span className="text-sm tracking-[0.2em] uppercase opacity-70">Close</span>
            <div className="relative w-6 h-6">
              <span className="absolute top-1/2 left-0 w-6 h-px bg-white rotate-45" />
              <span className="absolute top-1/2 left-0 w-6 h-px bg-white -rotate-45" />
            </div>
          </button>
        </div>
        <nav className="px-8 md:px-16 py-12">
          <ul className="space-y-8">
            {[
              { name: 'Shop', href: '/shop' },
              { name: 'About Us', href: '/about' },
              { name: 'Contact', href: '/contact' },
              { name: 'Ambassadors', href: '/ambassadors' },
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.href} onClick={() => setIsMenuOpen(false)} className="text-white text-4xl font-extralight hover:opacity-50 transition-opacity block">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Content */}
      <div className="pt-32 pb-20 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-8">
            Ambassadors
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mb-20">
            We're building a community of athletes, coaches, and fitness enthusiasts who share our vision. 
            Join the movement.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {[
              { title: 'Free Product', desc: 'Monthly supply of MEMO strips' },
              { title: 'Exclusive Access', desc: 'First look at new products and flavors' },
              { title: 'Commission', desc: 'Earn on every sale you drive' },
            ].map((benefit, i) => (
              <div key={i} className="border-t border-white/10 pt-8">
                <h3 className="text-white text-xl font-light mb-3">{benefit.title}</h3>
                <p className="text-white/40">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Requirements */}
          <div className="mb-24">
            <h2 className="text-white/40 text-xs tracking-[0.2em] uppercase mb-8">What we look for</h2>
            <ul className="space-y-4 text-white/70 text-lg">
              <li>• Active presence on social media (Instagram, TikTok, YouTube)</li>
              <li>• Genuine passion for fitness, sports, or wellness</li>
              <li>• Engaged community (quality over quantity)</li>
              <li>• Authentic voice and content style</li>
            </ul>
          </div>

          {/* Apply Form */}
          <div className="border border-white/10 p-8 md:p-12">
            <h2 className="text-2xl font-light mb-6">Apply to become an ambassador</h2>
            
            {status === 'success' ? (
              <div className="text-emerald-400">
                Application received. We'll review and get back to you within 48 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Instagram handle"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about yourself and why you'd be a great fit"
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center gap-4 text-white border border-white/30 px-10 py-5 hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
                >
                  <span className="text-sm tracking-[0.2em] uppercase">
                    {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
