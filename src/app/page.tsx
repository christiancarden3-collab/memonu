'use client';

import { useState, useEffect } from 'react';

const sportsVideos = [
  "/videos/sport-1.mp4",
  "/videos/sport-2.mp4",
  "/videos/sport-3.mp4",
  "/videos/sport-4.mp4",
];

export default function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % sportsVideos.length);
    }, 750);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    sportsVideos.forEach((src) => {
      const video = document.createElement('video');
      video.src = src;
      video.preload = 'auto';
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service (Klaviyo, Mailchimp, etc.)
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-[#FAF3E0]">
      {/* Video Background */}
      {sportsVideos.map((src, index) => (
        <video
          key={src}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-150 ${
            index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectPosition: 'center 30%' }}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">
        {/* Logo */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-semibold tracking-tight mb-4">
          memo
        </h1>
        
        {/* Tagline */}
        <p className="text-[#FAF3E0]/70 text-sm sm:text-base md:text-lg tracking-[0.3em] uppercase font-light mb-8">
          Fuel Your Performance
        </p>

        {/* Coming Soon Badge */}
        <div className="mb-10">
          <span className="inline-block px-6 py-3 rounded-full border border-[#FAF3E0]/30 bg-white/5 backdrop-blur-sm text-lg sm:text-xl md:text-2xl font-medium tracking-wider">
            COMING SOON
          </span>
        </div>

        {/* Description */}
        <p className="text-[#FAF3E0]/60 text-sm sm:text-base max-w-md mb-10 leading-relaxed">
          Revolutionary hydration strips for athletes. 
          <br className="hidden sm:block" />
          Fast-absorbing electrolytes — no water needed.
        </p>

        {/* Email Signup */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 
                         text-[#FAF3E0] placeholder-[#FAF3E0]/50 text-center sm:text-left
                         focus:outline-none focus:border-[#FAF3E0]/50 transition"
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-2xl bg-[#FAF3E0] text-black font-semibold
                         hover:bg-[#FAF3E0]/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Notify Me
            </button>
          </form>
        ) : (
          <div className="px-6 py-4 rounded-2xl bg-green-500/20 border border-green-500/30 backdrop-blur-sm">
            <p className="text-green-300 font-medium">You&apos;re on the list! We&apos;ll be in touch.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-30 px-4 sm:px-6 lg:px-8 py-6">
        <div className="mx-auto max-w-6xl flex items-center justify-center">
          <span className="text-[#FAF3E0]/30 text-xs">© {new Date().getFullYear()} Memo Nu</span>
        </div>
      </footer>
    </main>
  );
}
