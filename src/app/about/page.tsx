import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-[#FAF3E0]">
      <Header />

      {/* HERO - Full Width Image */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop"
            alt="Athlete"
            fill
            className="object-cover"
            style={{ filter: 'grayscale(100%) brightness(0.4)' }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        <div className="relative z-10 text-center px-6">
          <Pill>Our Story</Pill>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            About memo
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-[#FAF3E0]/80 leading-relaxed">
            Born from necessity. Built for performance.
          </p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="bg-[#FAF3E0] text-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              We got tired of carrying bottles and mixing powders.
            </h2>
            
            <div className="mt-8 space-y-6 text-base sm:text-lg text-black/70 leading-relaxed">
              <p>
                It started with a simple question: why does staying hydrated have to be so complicated?
              </p>
              <p>
                We were athletes who trained at 5 AM, entrepreneurs who lived on planes, parents who never had a free hand.
              </p>
              <p>
                So we spent two years developing a dissolving strip that delivers electrolytes instantly—no water, no mixing, no waiting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="relative h-64 sm:h-80 md:h-96">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop"
          alt="Training"
          fill
          className="object-cover"
          style={{ filter: 'grayscale(100%)' }}
        />
      </section>

      {/* VALUES */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle>What We Believe</SectionTitle>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <ValueCard 
              number="01" 
              title="Simplicity" 
              body="The best solutions are the ones you actually use. No complexity, no barriers."
            />
            <ValueCard 
              number="02" 
              title="Performance" 
              body="Every ingredient earns its place. Nothing more, nothing less."
            />
            <ValueCard 
              number="03" 
              title="Freedom" 
              body="Hydration that goes where you go. No bottles, no limits."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FAF3E0] text-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-3xl border border-black/10 bg-black/[0.03] p-6 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Join the Movement</h2>
            <p className="mt-4 text-base sm:text-lg text-black/70">
              Be the first to experience hydration, reimagined.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-[#FAF3E0] font-medium
                         hover:opacity-90 transition"
            >
              Shop Now
            </Link>
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

function ValueCard({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="text-4xl font-light text-[#FAF3E0]/20">{number}</div>
      <div className="mt-2 text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-[#FAF3E0]/75 leading-relaxed">{body}</div>
    </div>
  );
}
