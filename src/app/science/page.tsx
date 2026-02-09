import Link from "next/link";

export default function Science() {
  return (
    <main className="min-h-screen bg-black text-[#FAF3E0]">
      <Header />

      {/* HERO - Full Width */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center bg-gradient-to-b from-black via-black/95 to-black">
        <div className="relative z-10 text-center px-6">
          <Pill>The Science</Pill>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            Sublingual Delivery
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-[#FAF3E0]/80 leading-relaxed">
            Why the area under your tongue is one of the most efficient absorption sites in your body.
          </p>
        </div>
      </section>

      {/* ABSORPTION SPEED */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle>Absorption Speed</SectionTitle>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="rounded-3xl border border-white/20 bg-white/[0.05] p-6 sm:p-8">
              <div className="text-4xl sm:text-5xl font-semibold">~30s</div>
              <div className="mt-2 text-lg font-medium">memo strips</div>
              <div className="mt-1 text-xs text-[#FAF3E0]/50 uppercase tracking-wider">Sublingual</div>
            </div>
            
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="text-4xl sm:text-5xl font-semibold text-[#FAF3E0]/40">15-30m</div>
              <div className="mt-2 text-lg font-medium text-[#FAF3E0]/60">Drinks</div>
              <div className="mt-1 text-xs text-[#FAF3E0]/30 uppercase tracking-wider">Digestive</div>
            </div>
            
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="text-4xl sm:text-5xl font-semibold text-[#FAF3E0]/40">30-60m</div>
              <div className="mt-2 text-lg font-medium text-[#FAF3E0]/60">Pills</div>
              <div className="mt-1 text-xs text-[#FAF3E0]/30 uppercase tracking-wider">Digestive</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#FAF3E0] text-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitleDark>How It Works</SectionTitleDark>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <StepCard 
              number="01" 
              title="Rich Blood Supply" 
              body="Dense network of blood vessels allows rapid absorption directly into your bloodstream."
            />
            <StepCard 
              number="02" 
              title="Bypasses First-Pass" 
              body="Unlike pills, sublingual delivery avoids the liver's first-pass effect, increasing bioavailability."
            />
            <StepCard 
              number="03" 
              title="Thin Membrane" 
              body="The tissue under your tongue is thin and permeable, allowing molecules to pass through efficiently."
            />
          </div>
        </div>
      </section>

      {/* ELECTROLYTES */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle>The Electrolytes</SectionTitle>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Card 
              title="Sodium" 
              body="Primary electrolyte lost in sweat. Critical for fluid balance and muscle function."
            />
            <Card 
              title="Potassium" 
              body="Works with sodium for cellular hydration. Essential for heart rhythm and preventing cramps."
            />
            <Card 
              title="Magnesium" 
              body="Supports muscle relaxation, energy production, and overall electrolyte balance."
            />
          </div>
        </div>
      </section>

      {/* WHAT WE LEAVE OUT */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle>What We Leave Out</SectionTitle>
          
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-[#FAF3E0]/70">
              <div className="flex items-center gap-2">
                <span className="text-[#FAF3E0]/30">✕</span> No added sugars
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FAF3E0]/30">✕</span> No artificial colors
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FAF3E0]/30">✕</span> No artificial sweeteners
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FAF3E0]/30">✕</span> No fillers
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FAF3E0]/30">✕</span> No caffeine
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FAF3E0]/30">✕</span> No proprietary blends
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FAF3E0] text-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-3xl border border-black/10 bg-black/[0.03] p-6 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Experience the Difference</h2>
            <p className="mt-4 text-base sm:text-lg text-black/70">
              Try memo and feel what fast hydration really means.
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

function SectionTitleDark({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-black">{children}</h2>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-[#FAF3E0]/75 leading-relaxed">{body}</div>
    </div>
  );
}

function StepCard({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-black/[0.03] p-6">
      <div className="text-4xl font-light text-black/20">{number}</div>
      <div className="mt-2 text-lg font-semibold text-black">{title}</div>
      <div className="mt-2 text-sm text-black/70 leading-relaxed">{body}</div>
    </div>
  );
}
