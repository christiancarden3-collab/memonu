'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Full Screen Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2940&auto=format&fit=crop"
      >
        <source src="https://cdn.coverr.co/videos/coverr-running-on-a-treadmill-1652/1080p.mp4" type="video/mp4" />
        <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-8 md:px-16 py-8">
          {/* Logo */}
          <h1 className="text-white text-3xl md:text-4xl tracking-[0.5em] font-light">
            MEMO
          </h1>

          {/* Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white flex items-center gap-3 group"
          >
            <span className="text-sm tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
              Menu
            </span>
            <div className="flex flex-col gap-1.5">
              <span className={`w-6 h-px bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
              <span className={`w-6 h-px bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
            </div>
          </button>
        </header>

        {/* Dropdown Menu */}
        <div className={`absolute top-0 right-0 h-full w-full md:w-[400px] bg-black/95 backdrop-blur-md transform transition-transform duration-500 ease-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Close Button */}
          <div className="flex justify-end px-8 md:px-16 py-8">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-white flex items-center gap-3 group"
            >
              <span className="text-sm tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                Close
              </span>
              <div className="relative w-6 h-6">
                <span className="absolute top-1/2 left-0 w-6 h-px bg-white rotate-45" />
                <span className="absolute top-1/2 left-0 w-6 h-px bg-white -rotate-45" />
              </div>
            </button>
          </div>

          {/* Menu Links */}
          <nav className="px-8 md:px-16 py-12">
            <ul className="space-y-8">
              {[
                { name: 'Shop', href: '/shop' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'Ambassadors', href: '/ambassadors' },
              ].map((item, i) => (
                <li key={item.name} style={{ animationDelay: `${i * 100}ms` }} className={`${isMenuOpen ? 'animate-fade-in' : 'opacity-0'}`}>
                  <Link 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white text-4xl md:text-5xl font-extralight tracking-wide hover:opacity-50 transition-opacity block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer in Menu */}
          <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 py-8 border-t border-white/10">
            <div className="flex items-center gap-6">
              <a href="https://instagram.com/memonu" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://twitter.com/memonu" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@memonu" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
            <p className="text-white/30 text-xs tracking-wider mt-4">
              © 2026 Memo Nu
            </p>
          </div>
        </div>

        {/* Center Logo (optional - for extra impact) */}
        {/* Uncomment below if you want MEMO centered on screen too */}
        {/*
        <div className="flex-1 flex items-center justify-center">
          <h2 className="text-white text-6xl md:text-8xl lg:text-9xl tracking-[0.5em] font-extralight">
            MEMO
          </h2>
        </div>
        */}
      </div>
    </main>
  );
}
