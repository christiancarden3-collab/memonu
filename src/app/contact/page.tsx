'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-8">
            Contact
          </h1>
          <p className="text-white/50 text-lg mb-16">
            Questions, partnerships, or just want to say hello? We'd love to hear from you.
          </p>

          {status === 'success' ? (
            <div className="border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
              <p className="text-emerald-400 text-lg">Message sent. We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="text-white/40 text-xs tracking-[0.2em] uppercase block mb-3">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-white/50 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-white/40 text-xs tracking-[0.2em] uppercase block mb-3">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-white/50 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-white/40 text-xs tracking-[0.2em] uppercase block mb-3">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-white/50 transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center gap-4 text-white border border-white/30 px-10 py-5 hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
              >
                <span className="text-sm tracking-[0.2em] uppercase">
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </span>
              </button>
            </form>
          )}

          {/* Contact Info */}
          <div className="mt-24 pt-16 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">Email</h3>
                <a href="mailto:hello@memonu.com" className="text-white text-lg hover:opacity-50 transition-opacity">
                  hello@memonu.com
                </a>
              </div>
              <div>
                <h3 className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">Social</h3>
                <div className="flex gap-4">
                  <a href="https://instagram.com/memonu" className="text-white hover:opacity-50 transition-opacity">Instagram</a>
                  <a href="https://twitter.com/memonu" className="text-white hover:opacity-50 transition-opacity">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
