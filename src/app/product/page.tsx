import Link from "next/link";
import Image from "next/image";

export default function Product() {
  return (
    <main className="min-h-screen bg-black text-[#FAF3E0]">
      <Header />

      {/* HERO - Full Width Image */}
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop"
            alt="Product"
            fill
            className="object-cover"
            style={{ filter: 'grayscale(100%) brightness(0.35)' }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        <div className="relative z-10 text-center px-6">
          <Pill>The Product</Pill>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            Hydration, simplified.
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-[#FAF3E0]/80 leading-relaxed">
            A revolutionary dissolving strip that delivers essential electrolytes instantly. No water required. No mixing. No waiting.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle>How It Works</SectionTitle>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <StepCard 
              number="01" 
              title="Place" 
              body="Take one strip from the pack. Place it under your tongue."
              detail="Each strip is individually wrapped for freshness and portability."
            />
            <StepCard 
              number="02" 
              title="Dissolve" 
              body="Let it dissolve naturally. Takes about 30 seconds."
              detail="Our formula breaks down instantly on contact."
            />
            <StepCard 
              number="03" 
              title="Perform" 
              body="Feel the difference. Electrolytes absorb directly into your bloodstream."
              detail="Sublingual absorption bypasses digestion for faster results."
            />
          </div>
        </div>
      </section>

      {/* INGREDIENTS */}
      <section className="bg-[#FAF3E0] text-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitleDark>Clean Formula</SectionTitleDark>
          <p className="mt-4 text-black/70 max-w-2xl">
            Every ingredient earns its place. No fillers, no artificial colors, no unnecessary additives.
          </p>
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <IngredientCard name="Sodium" amount="250mg" benefit="Primary electrolyte lost in sweat" />
            <IngredientCard name="Potassium" amount="100mg" benefit="Muscle function & hydration" />
            <IngredientCard name="Magnesium" amount="50mg" benefit="Energy production & recovery" />
            <IngredientCard name="Calcium" amount="25mg" benefit="Muscle contraction support" />
          </div>
          
          <div className="mt-10 flex flex-wrap gap-3">
            {['Sugar Free', 'Vegan', 'Gluten Free', 'Non-GMO', 'No Artificial Colors'].map((badge) => (
              <span key={badge} className="rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-xs text-black/70">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <SectionTitle>Why memo</SectionTitle>
          
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 overflow-x-auto">
            <table className="w-full min-w-[500px] text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 font-medium text-[#FAF3E0]/50">Feature</th>
                  <th className="text-center py-4 font-medium text-[#FAF3E0]">memo</th>
                  <th className="text-center py-4 font-medium text-[#FAF3E0]/50">Powders</th>
                  <th className="text-center py-4 font-medium text-[#FAF3E0]/50">Drinks</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-4 text-[#FAF3E0]/70">Water Required</td>
                  <td className="py-4 text-center text-[#FAF3E0]">No</td>
                  <td className="py-4 text-center text-[#FAF3E0]/40">Yes</td>
                  <td className="py-4 text-center text-[#FAF3E0]/40">Pre-mixed</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 text-[#FAF3E0]/70">Absorption Time</td>
                  <td className="py-4 text-center text-[#FAF3E0]">~30 seconds</td>
                  <td className="py-4 text-center text-[#FAF3E0]/40">15-30 min</td>
                  <td className="py-4 text-center text-[#FAF3E0]/40">15-30 min</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 text-[#FAF3E0]/70">Portable</td>
                  <td className="py-4 text-center text-[#FAF3E0]">Pocket-sized</td>
                  <td className="py-4 text-center text-[#FAF3E0]/40">Bulky</td>
                  <td className="py-4 text-center text-[#FAF3E0]/40">Heavy</td>
                </tr>
                <tr>
                  <td className="py-4 text-[#FAF3E0]/70">Mess-Free</td>
                  <td className="py-4 text-center text-[#FAF3E0]">Always</td>
                  <td className="py-4 text-center text-[#FAF3E0]/40">Rarely</td>
                  <td className="py-4 text-center text-[#FAF3E0]/40">Sometimes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FAF3E0] text-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-3xl border border-black/10 bg-black/[0.03] p-6 sm:p-10 text-center">
            <Pill>Coming Soon</Pill>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold">Be the first to experience memo</h2>
            <p className="mt-4 text-base sm:text-lg text-black/70">
              Join our waitlist for early access and exclusive launch pricing.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-[#FAF3E0] font-medium
                         hover:opacity-90 transition"
            >
              Join the Waitlist
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

function StepCard({ number, title, body, detail }: { number: string; title: string; body: string; detail: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="text-3xl font-light text-[#FAF3E0]/20">{number}</div>
      <div className="mt-2 text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-[#FAF3E0]/75 leading-relaxed">{body}</div>
      <div className="mt-2 text-xs text-[#FAF3E0]/50">{detail}</div>
    </div>
  );
}

function IngredientCard({ name, amount, benefit }: { name: string; amount: string; benefit: string }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-black/[0.03] p-6">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-lg font-semibold text-black">{name}</span>
        <span className="text-sm text-black/50">{amount}</span>
      </div>
      <div className="text-sm text-black/60">{benefit}</div>
    </div>
  );
}
