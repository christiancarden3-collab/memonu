'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Ambassadors() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
  };

  return (
    <main className="min-h-screen bg-black text-[#FAF3E0]">
      <Header />

      {/* HERO - Full Width Image */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        <div className="relative z-10 text-center px-6">
          <Pill>Join Us</Pill>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            Ambassadors
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-[#FAF3E0]/80 leading-relaxed">
            Join a community of athletes redefining hydration.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#FAF3E0] text-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitleDark>What You Get</SectionTitleDark>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <BenefitCard 
              title="Free Product" 
              body="Monthly supply of memo strips delivered to your door."
            />
            <BenefitCard 
              title="Early Access" 
              body="First look at new products, flavors, and collaborations."
            />
            <BenefitCard 
              title="Commission" 
              body="Earn on every sale through your unique code."
            />
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle>Apply Now</SectionTitle>
          <p className="mt-4 text-[#FAF3E0]/70">
            We're looking for authentic voices in fitness, sports, and wellness.
          </p>
          
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 max-w-2xl">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="text-2xl font-semibold mb-4">Application received!</div>
                <p className="text-[#FAF3E0]/70">We'll review and get back to you within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[#FAF3E0]/70 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/[0.02] px-4 py-3 text-sm
                                 placeholder:text-[#FAF3E0]/40 focus:outline-none focus:border-white/30 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#FAF3E0]/70 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/[0.02] px-4 py-3 text-sm
                                 placeholder:text-[#FAF3E0]/40 focus:outline-none focus:border-white/30 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#FAF3E0]/70 mb-2">Instagram</label>
                  <input
                    type="text"
                    placeholder="@username"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.02] px-4 py-3 text-sm
                               placeholder:text-[#FAF3E0]/40 focus:outline-none focus:border-white/30 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#FAF3E0]/70 mb-2">Why memo?</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about yourself and why you'd be a great fit..."
                    className="w-full rounded-xl border border-white/15 bg-white/[0.02] px-4 py-3 text-sm
                               placeholder:text-[#FAF3E0]/40 focus:outline-none focus:border-white/30 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto rounded-xl bg-[#FAF3E0] px-8 py-3 text-black font-medium
                             hover:opacity-90 transition disabled:opacity-50"
                >
                  {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          memo
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink href="/shop" label="Shop" />
          <NavLink href="/science" label="Science" />
          <NavLink href="/about" label="About" />
          <NavLink href="/ambassadors" label="Ambassadors" />
          <NavLink href="/contact" label="Contact" />
        </nav>

        <details className="md:hidden relative">
          <summary className="list-none cursor-pointer rounded-xl border border-white/15 bg-white/[0.02] px-3 py-2 text-sm hover:bg-white/[0.05] transition">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-white/10 bg-black p-2 shadow-xl">
            <MobileLink href="/shop" label="Shop" />
            <MobileLink href="/science" label="Science" />
            <MobileLink href="/about" label="About" />
            <MobileLink href="/ambassadors" label="Ambassadors" />
            <MobileLink href="/contact" label="Contact" />
          </div>
        </details>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center justify-between">
        <div className="text-sm text-[#FAF3E0]/70">© {new Date().getFullYear()} memo</div>
        <div className="flex flex-wrap gap-3 text-sm">
          <FooterLink href="/about" label="About" />
          <FooterLink href="/contact" label="Contact" />
          <FooterLink href="/ambassadors" label="Ambassadors" />
        </div>
      </div>
    </footer>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="rounded-xl px-3 py-2 text-sm text-[#FAF3E0]/80 hover:text-[#FAF3E0] hover:bg-white/[0.05] transition">
      {label}
    </Link>
  );
}

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="block rounded-xl px-3 py-2 text-sm text-[#FAF3E0]/85 hover:text-[#FAF3E0] hover:bg-white/[0.05] transition">
      {label}
    </Link>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-[#FAF3E0]/75 hover:text-[#FAF3E0] transition">
      {label}
    </Link>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.02] px-3 py-1 text-xs text-[#FAF3E0]/80">
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">{children}</h2>
  );
}

function SectionTitleDark({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-black">{children}</h2>
  );
}

function BenefitCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-black/[0.03] p-6">
      <div className="text-lg font-semibold text-black">{title}</div>
      <div className="mt-2 text-sm text-black/70 leading-relaxed">{body}</div>
    </div>
  );
}
