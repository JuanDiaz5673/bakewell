import Link from 'next/link';
import Image from 'next/image';
import { menuItems, heroImage, categoryImages } from '@/data/menu';
import ReviewCarousel from '@/components/ReviewCarousel';
import ChopSeal from '@/components/ChopSeal';

/* ─────────── Reusable visual elements ─────────── */

function StitchedDivider() {
  return (
    <div className="relative py-8 sm:py-12 bg-warm-white" aria-hidden="true">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center gap-4 sm:gap-6">
        <span className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/40 to-gold/60" />
        <ChopSeal size="sm" />
        <span className="flex-1 h-px bg-gradient-to-l from-transparent via-gold/40 to-gold/60" />
      </div>
    </div>
  );
}

const palmFrondPaths = (
  <>
    <path d="M100 180 V20" />
    <path d="M100 160 Q60 150 30 130 M100 160 Q140 150 170 130" />
    <path d="M100 140 Q60 130 25 105 M100 140 Q140 130 175 105" />
    <path d="M100 120 Q60 110 28 80 M100 120 Q140 110 172 80" />
    <path d="M100 100 Q65 90 35 60 M100 100 Q135 90 165 60" />
    <path d="M100 80 Q70 70 45 40 M100 80 Q130 70 155 40" />
    <path d="M100 60 Q80 50 60 25 M100 60 Q120 50 140 25" />
  </>
);

const marqueePhrases = [
  'Guyanese-Chinese Kitchen',
  'Caribbean Bakery',
  '127-08 Liberty Ave',
  'Open Daily 9:30 — 10 PM',
  'Tennis Rolls Baked Fresh',
  'Roast Lamb Fried Rice',
  'Cassava Pone · Salara',
];

/* ─────────── Page ─────────── */

export default function Home() {
  const featured = menuItems.filter((i) => i.signature).slice(0, 4);

  return (
    <>
      {/* Marquee keyframes (inlined so this stays a single-file change) */}
      <style>{`
        @keyframes bakewell-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden">
        <Image
          src={heroImage}
          alt="Cassava pone fresh from Bakewell's oven"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-dark/55 via-transparent to-crimson-dark/25" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-10 sm:pb-14 min-h-[58vh] sm:min-h-[62vh] flex flex-col justify-end">
          {/* Kitchen pill */}
          <div className="inline-flex items-center gap-2 self-start text-cream/80 mb-5 sm:mb-6">
            <span className="h-px w-6 bg-gold/60" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-gold-light font-semibold">
              Guyanese · Chinese · Bakery
            </span>
            <span className="h-px w-6 bg-gold/60" />
          </div>

          {/* Logo */}
          <div className="mb-5 sm:mb-6 max-w-md">
            <Image
              src="/bakewell-logo.jpg"
              alt="Bakewell Bakery & Restaurant"
              width={528}
              height={120}
              priority
              className="w-[220px] sm:w-[280px] lg:w-[340px] h-auto rounded shadow-2xl shadow-black/50 ring-1 ring-gold/40"
            />
          </div>

          {/* Headline */}
          <p className="font-script text-2xl sm:text-3xl text-gold-light mb-1">
            taste the moment
          </p>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.95] mb-4 sm:mb-5 max-w-3xl">
            Authentic Guyanese
            <span className="block italic text-gold-light">Flavors &amp; Bakes</span>
          </h1>

          <p className="text-sm sm:text-lg text-white/85 max-w-xl mb-5 sm:mb-7 leading-relaxed">
            Wok-tossed fried rice, Caribbean pastries baked at dawn, and the kind of welcome that makes Liberty Avenue feel like home.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-7 sm:mb-8">
            <a
              href="tel:+17183225600"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-crimson text-white font-semibold rounded hover:bg-crimson-dark transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-crimson/40 text-base sm:text-lg ring-1 ring-gold/30"
            >
              Reserve by Phone
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded border border-white/40 hover:bg-white/20 hover:border-white/60 transition-all text-base sm:text-lg"
            >
              See the Menu
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Stats + halal */}
          <div className="flex flex-wrap items-end gap-x-6 gap-y-3 sm:gap-x-10 pt-4 sm:pt-5 border-t border-white/15">
            {[
              { value: 'Daily', label: '9:30 AM – 10 PM' },
              { value: 'Two', label: 'Kitchens, One Family' },
              { value: 'Fresh', label: 'Baked Each Morning' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white italic">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-gold-light/85 uppercase tracking-[0.2em] mt-0.5">{stat.label}</div>
              </div>
            ))}
            <Image
              src="/halal-logo.png"
              alt="Halal Certified"
              width={120}
              height={120}
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain ml-auto drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ───────── MARQUEE BAND ───────── */}
      <div className="bg-maroon-dark text-cream border-y border-gold/40 overflow-hidden">
        <div className="flex w-max py-3 sm:py-4 [animation:bakewell-marquee_45s_linear_infinite]">
          {[...marqueePhrases, ...marqueePhrases].map((phrase, i) => (
            <span
              key={`${phrase}-${i}`}
              className="flex items-center gap-10 sm:gap-14 px-5 sm:px-7 text-[10px] sm:text-xs uppercase tracking-[0.4em] font-semibold text-cream/90"
            >
              {phrase}
              <span className="text-gold text-base">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ───────── TWO KITCHENS, ONE FAMILY ───────── */}
      <section className="relative bg-warm-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-10 sm:pb-14 text-center">
          <p className="font-script text-2xl sm:text-3xl text-crimson mb-1">side by side</p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-maroon-dark leading-tight">
            Two Kitchens, <em className="text-crimson">One Family</em>
          </h2>
          <p className="text-warm-gray mt-5 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            The bakery wakes at dawn. The wok fires by midday. One door, one counter, two halves of a Liberty Avenue tradition.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <div className="grid md:grid-cols-2 gap-6 md:gap-0 relative">
            {/* BAKERY SIDE */}
            <article className="relative bg-cream border border-cream-dark md:border-r-0 rounded-l-lg md:rounded-r-none rounded-r-lg p-8 sm:p-10 md:p-12 shadow-[0_18px_40px_-24px_rgba(46,125,50,0.35)] overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'repeating-linear-gradient(135deg, #2E7D32 0 2px, transparent 2px 22px)' }}
              />
              <div className="relative">
                <p className="font-script text-xl sm:text-2xl text-crimson mb-1">the bakery</p>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-maroon-dark italic mb-5">
                  Caribbean Baking
                </h3>

                <svg viewBox="0 0 120 80" className="w-32 h-20 mb-6 text-maroon" aria-hidden="true">
                  <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 64 Q40 36 78 64 L74 76 H12 Z" />
                    <path d="M18 56 L20 70 M30 50 L30 72 M44 48 L44 74 M58 50 L58 72 M70 56 L68 70" />
                    <path d="M86 60 L100 36 L114 60 Z" />
                    <path d="M93 60 L107 60" />
                    <path d="M96 50 L98 50 M104 50 L106 50" />
                  </g>
                </svg>

                <p className="text-warm-gray leading-relaxed mb-6">
                  Soft tennis rolls, golden plait bread, pine tarts, salara, and cassava pone — Caribbean baking the way Guyanese grandmothers taught it. Fresh every morning.
                </p>

                <ul className="space-y-2 mb-7 text-charcoal">
                  {[
                    'Tennis Rolls',
                    'Cassava Pone',
                    'Pine Tart & Salara',
                    'Plait Bread, Hops Bread',
                    'Custard Block & Black Cake',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <svg className="w-3.5 h-3.5 text-maroon shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path d="M2 14 Q2 4 14 2 Q14 14 2 14 Z" />
                      </svg>
                      <span className="font-display italic text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/menu#pastries"
                  className="inline-flex items-center gap-3 text-sm font-semibold text-maroon hover:text-crimson transition-colors group"
                >
                  Bakery Counter
                  <span className="h-px w-8 bg-maroon group-hover:bg-crimson group-hover:w-12 transition-all" />
                </Link>
              </div>
            </article>

            {/* KITCHEN SIDE */}
            <article className="relative bg-maroon-dark text-cream rounded-r-lg md:rounded-l-none rounded-l-lg p-8 sm:p-10 md:p-12 grain overflow-hidden shadow-[0_18px_40px_-24px_rgba(46,125,50,0.35)]">
              <svg className="absolute -top-12 -right-12 w-80 h-80 text-gold/10" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="100" cy="100" r="80" />
                <circle cx="100" cy="100" r="60" />
              </svg>

              <div className="relative">
                <p className="font-script text-xl sm:text-2xl text-gold-light mb-1">the kitchen</p>
                <h3 className="font-display text-3xl sm:text-4xl font-bold italic mb-5">
                  Guyanese-Chinese Cooking
                </h3>

                <svg viewBox="0 0 120 80" className="w-32 h-20 mb-6 text-gold" aria-hidden="true">
                  <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 36 Q60 78 106 36" />
                    <ellipse cx="60" cy="36" rx="46" ry="6" />
                    <path d="M104 36 L116 32" />
                    <path d="M40 30 Q42 22 36 16 Q44 10 38 4" />
                    <path d="M60 30 Q62 22 56 16 Q64 10 58 4" />
                    <path d="M80 30 Q82 22 76 16 Q84 10 78 4" />
                  </g>
                </svg>

                <p className="text-cream/80 leading-relaxed mb-6">
                  Big-flame Guyanese-Chinese cooking — chicken fried rice with that real wok char, roast lamb fried rice, chow mein, lo mein, and homemade fried chicken that built our reputation.
                </p>

                <ul className="space-y-2 mb-7">
                  {[
                    'Homemade Fried Chicken',
                    'Chicken Fried Rice',
                    'Roast Lamb Fried Rice',
                    'Chow Mein & Lo Mein',
                    'Curry & Stew Chicken',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-cream">
                      <svg className="w-3.5 h-3.5 text-gold shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
                      </svg>
                      <span className="font-display italic text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/menu#mains"
                  className="inline-flex items-center gap-3 text-sm font-semibold text-gold-light hover:text-white transition-colors group"
                >
                  Kitchen Menu
                  <span className="h-px w-8 bg-gold-light group-hover:bg-white group-hover:w-12 transition-all" />
                </Link>
              </div>
            </article>

          </div>
        </div>
      </section>

      <StitchedDivider />

      {/* ───────── WELCOME / ABOUT ───────── */}
      <section id="about" className="scroll-mt-24 py-16 sm:py-24 bg-warm-white relative overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute -top-10 -left-10 w-80 h-80 text-maroon/[0.06] -rotate-12"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          {palmFrondPaths}
        </svg>
        <svg
          aria-hidden="true"
          className="absolute -bottom-12 -right-12 w-96 h-96 text-crimson/[0.05] rotate-12"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          <circle cx="100" cy="100" r="6" />
          <path d="M100 100 Q70 60 80 20 Q100 50 100 100" />
          <path d="M100 100 Q130 60 120 20 Q100 50 100 100" />
          <path d="M100 100 Q60 100 30 70 Q70 90 100 100" />
          <path d="M100 100 Q140 100 170 70 Q130 90 100 100" />
          <path d="M100 100 Q90 140 110 180 Q100 150 100 100" />
          <path d="M100 100 V130" />
        </svg>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-start">
            <div>
              <p className="font-script text-2xl sm:text-3xl text-crimson mb-2">our story</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-maroon-dark leading-tight mb-6">
                Welcome to <em className="text-crimson">Bakewell</em>
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed text-base sm:text-lg">
                <p>
                  On Liberty Avenue, in the heart of <span className="text-maroon font-medium">Little Guyana</span>, Bakewell holds two kitchens in one storefront. The bakery turns out tennis rolls, salara, and cassava pone before the sun is fully up. The wok fires through lunch and into the night — fried rice, chow mein, and homemade fried chicken that locals drive across Queens for.
                </p>
                <p>
                  It&rsquo;s the kind of place where the regulars get a nod from behind the counter and the first-timers leave promising to come back.
                </p>
              </div>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-maroon font-semibold border-2 border-maroon/20 rounded hover:bg-maroon hover:text-white hover:border-maroon transition-all"
              >
                Our Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <div className="hidden lg:flex flex-col items-center gap-4 pt-12">
              <span className="block w-px h-16 bg-gradient-to-b from-transparent to-gold/60" />
              <ChopSeal size="md" />
              <span className="block w-px h-72 bg-gradient-to-b from-gold/60 via-gold/40 to-transparent" />
            </div>

            <aside className="relative bg-cream rounded-sm border border-maroon/20 p-6 sm:p-8 shadow-[8px_10px_0_rgba(46,125,50,0.08)]">
              <span className="absolute -top-3 -left-2 w-16 h-5 bg-gold/40 -rotate-6" aria-hidden="true" />
              <span className="absolute -top-3 -right-2 w-16 h-5 bg-gold/40 rotate-6" aria-hidden="true" />

              <p className="font-script text-2xl text-crimson text-center mb-1">on the counter today</p>
              <div className="flex items-center justify-center gap-2 mb-5">
                <span className="h-px w-8 bg-maroon/30" />
                <ChopSeal size="sm" />
                <span className="h-px w-8 bg-maroon/30" />
              </div>

              <ul className="space-y-3">
                {([
                  ['Bakery', 'Tennis rolls, soft & warm'],
                  ['Bakery', 'Cassava pone'],
                  ['Bakery', 'Pine tarts & salara'],
                  ['Kitchen', 'Homemade fried chicken'],
                  ['Kitchen', 'Roast lamb fried rice'],
                  ['Kitchen', 'Chicken chow mein'],
                ] as const).map(([tag, item]) => (
                  <li key={item} className="flex items-start gap-3 text-charcoal">
                    <span
                      className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded mt-1 shrink-0 ${
                        tag === 'Bakery'
                          ? 'bg-gold/20 text-gold-dark'
                          : 'bg-crimson/15 text-crimson'
                      }`}
                    >
                      {tag}
                    </span>
                    <span className="font-display italic text-base sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="font-script text-base text-warm-gray text-center mt-5">
                …and whatever just came out the oven.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <StitchedDivider />

      {/* ───────── COUNTER FAVORITES (editorial) ───────── */}
      <section className="relative py-12 sm:py-16 bg-cream overflow-hidden grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
            <p className="font-script text-xl sm:text-2xl text-crimson mb-0.5">a tasting flight</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-dark italic">
              Counter Favorites
            </h2>
            <p className="text-warm-gray mt-3 text-sm sm:text-base">
              The plates that built our name on Liberty Avenue. Bakery and kitchen, side by side.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-5 lg:gap-6">
            {featured[0] && (
              <article className="lg:col-span-7 group relative bg-white border border-cream-dark rounded-sm overflow-hidden shadow-md hover:shadow-2xl hover:shadow-maroon/10 transition-all">
                <div className="relative aspect-[16/10] lg:aspect-[16/9] overflow-hidden">
                  <Image
                    src={featured[0].image || categoryImages[featured[0].category] || ''}
                    alt={featured[0].name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(min-width: 1024px) 58vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-crimson text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm">
                    Signature
                  </span>
                  <span className="absolute bottom-3 left-3 font-display text-5xl sm:text-6xl font-bold italic text-gold-light/90 leading-none drop-shadow-lg">
                    01
                  </span>
                </div>
                <div className="p-5 sm:p-6 grid sm:grid-cols-[1fr_auto] gap-4 items-start">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-dark mb-1.5">
                      {featured[0].category}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal italic mb-2 leading-tight">
                      {featured[0].name}
                    </h3>
                    <p className="text-warm-gray leading-relaxed text-sm">
                      {featured[0].description}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-script text-base text-crimson leading-none">per plate</p>
                    <p className="font-display text-3xl sm:text-4xl font-bold text-crimson italic">
                      ${featured[0].price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </article>
            )}

            <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {featured.slice(1, 4).map((item, idx) => (
                <article
                  key={item.name}
                  className="group relative bg-white border border-cream-dark rounded-sm overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition-all"
                >
                  <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden">
                    <Image
                      src={item.image || categoryImages[item.category] || ''}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 100vw"
                    />
                    <span className="absolute top-2 left-2 font-display text-2xl font-bold italic text-white/95 leading-none drop-shadow-md">
                      {`0${idx + 2}`}
                    </span>
                  </div>
                  <div className="p-3.5 sm:p-4 flex-1">
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gold-dark mb-1">
                      {item.category}
                    </p>
                    <h3 className="font-display text-base sm:text-lg font-bold text-charcoal italic leading-tight mb-0.5">
                      {item.name}
                    </h3>
                    <p className="font-display text-lg font-bold text-crimson italic mb-1.5">
                      ${item.price.toFixed(2)}
                    </p>
                    <p className="text-xs text-warm-gray leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 px-6 py-3 bg-maroon text-cream font-semibold rounded hover:bg-maroon-dark transition-all ring-1 ring-gold/30 group"
            >
              See the Full Menu
              <span className="font-script text-gold-light text-base">— seventy plus plates</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── THE BAKEWELL WAY (paper signs) ───────── */}
      <section className="py-16 sm:py-24 bg-warm-white relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(135deg, #2E7D32 0 2px, transparent 2px 22px)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <p className="font-script text-2xl sm:text-3xl text-crimson mb-1">made wid love</p>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-maroon-dark italic">
              The Bakewell Way
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="h-px w-12 sm:w-20 bg-gold/60" />
              <ChopSeal size="sm" />
              <span className="h-px w-12 sm:w-20 bg-gold/60" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                num: '01',
                tagline: 'roots',
                title: 'Heritage Recipes',
                desc: "Recipes brought from Guyanese kitchens — bold, well-seasoned, the way they’ve been cooked for generations.",
                rotate: '-rotate-[1.2deg]',
                accent: '#2E7D32',
                art: (
                  <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24" aria-hidden="true">
                    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {/* Palmate cassava leaf — 5 lobes radiating from (60,70), with vein down each */}
                      <path d="M60 110 L60 72" />
                      <g transform="translate(60 72)">
                        <g>
                          <ellipse cx="0" cy="-30" rx="10" ry="28" />
                          <line x1="0" y1="0" x2="0" y2="-56" strokeWidth="1.2" opacity="0.6" />
                        </g>
                        <g transform="rotate(-42)">
                          <ellipse cx="0" cy="-28" rx="9" ry="26" />
                          <line x1="0" y1="0" x2="0" y2="-52" strokeWidth="1.2" opacity="0.6" />
                        </g>
                        <g transform="rotate(42)">
                          <ellipse cx="0" cy="-28" rx="9" ry="26" />
                          <line x1="0" y1="0" x2="0" y2="-52" strokeWidth="1.2" opacity="0.6" />
                        </g>
                        <g transform="rotate(-78)">
                          <ellipse cx="0" cy="-24" rx="8" ry="22" />
                          <line x1="0" y1="0" x2="0" y2="-44" strokeWidth="1.2" opacity="0.6" />
                        </g>
                        <g transform="rotate(78)">
                          <ellipse cx="0" cy="-24" rx="8" ry="22" />
                          <line x1="0" y1="0" x2="0" y2="-44" strokeWidth="1.2" opacity="0.6" />
                        </g>
                      </g>
                    </g>
                  </svg>
                ),
              },
              {
                num: '02',
                tagline: 'fresh fresh',
                title: 'Baked at Sunrise',
                desc: 'Tennis rolls, plait bread, pine tarts, salara — the oven is hot by 6am so the counter is full when the door opens.',
                rotate: 'rotate-[1.5deg]',
                accent: '#D4A843',
                art: (
                  <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24" aria-hidden="true">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="60" cy="44" r="14" />
                      <path d="M60 22 V14 M60 74 V66" />
                      <path d="M38 44 H30 M90 44 H82" />
                      <path d="M44 28 L38 22 M76 28 L82 22 M44 60 L38 66 M76 60 L82 66" />
                      <path d="M22 92 Q60 70 98 92 L94 104 H26 Z" />
                      <path d="M34 84 L36 96 M48 78 L48 98 M62 76 L62 100 M76 78 L76 98 M88 84 L86 96" />
                    </g>
                  </svg>
                ),
              },
              {
                num: '03',
                tagline: 'come like family',
                title: 'A Warm Welcome',
                desc: "A smile from behind the counter, hassle-free delivery, and the feeling you’ve been coming here for years — from your very first visit.",
                rotate: '-rotate-[0.8deg]',
                accent: '#C65D3C',
                art: (
                  <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24" aria-hidden="true">
                    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {/* Hibiscus bloom — 5 round petals on rotated ellipses around (60,60) */}
                      <g transform="translate(60 60)">
                        <ellipse cx="0" cy="-28" rx="20" ry="24" />
                        <g transform="rotate(72)"><ellipse cx="0" cy="-28" rx="20" ry="24" /></g>
                        <g transform="rotate(144)"><ellipse cx="0" cy="-28" rx="20" ry="24" /></g>
                        <g transform="rotate(216)"><ellipse cx="0" cy="-28" rx="20" ry="24" /></g>
                        <g transform="rotate(288)"><ellipse cx="0" cy="-28" rx="20" ry="24" /></g>
                      </g>
                      {/* Center stamen */}
                      <circle cx="60" cy="60" r="6" fill="currentColor" stroke="none" />
                      <circle cx="60" cy="60" r="3" fill="#FDFEF5" stroke="none" />
                    </g>
                  </svg>
                ),
              },
            ].map((card) => (
              <article
                key={card.title}
                className={`group relative ${card.rotate} hover:rotate-0 transition-transform duration-500`}
              >
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-maroon-dark z-20 shadow-sm" aria-hidden="true" />
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold z-20" aria-hidden="true" />

                <div
                  className="relative bg-cream border border-charcoal/10 rounded-[2px] p-6 sm:p-8 pt-10 sm:pt-12 shadow-[6px_8px_0_rgba(40,36,33,0.08),0_12px_30px_-12px_rgba(40,36,33,0.25)]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 20% 20%, rgba(212,168,67,0.06), transparent 60%), radial-gradient(circle at 80% 100%, rgba(198,93,60,0.05), transparent 60%)',
                  }}
                >
                  <svg className="absolute top-2 left-2 w-4 h-4 text-gold/60" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                    <path d="M2 2 H6 M2 2 V6 M2 2 L6 6" />
                  </svg>
                  <svg className="absolute top-2 right-2 w-4 h-4 text-gold/60" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                    <path d="M14 2 H10 M14 2 V6 M14 2 L10 6" />
                  </svg>
                  <svg className="absolute bottom-2 left-2 w-4 h-4 text-gold/60" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                    <path d="M2 14 H6 M2 14 V10 M2 14 L6 10" />
                  </svg>
                  <svg className="absolute bottom-2 right-2 w-4 h-4 text-gold/60" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                    <path d="M14 14 H10 M14 14 V10 M14 14 L10 10" />
                  </svg>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-display text-5xl sm:text-6xl font-bold italic leading-none" style={{ color: card.accent }}>
                      {card.num}
                    </span>
                    <span className="font-script text-xl text-warm-gray/80 mb-1">— {card.tagline}</span>
                  </div>

                  <div className="flex justify-center my-4" style={{ color: card.accent }}>{card.art}</div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal text-center mb-3">
                    {card.title}
                  </h3>

                  <svg className="mx-auto mb-4" viewBox="0 0 80 8" width="80" height="8" fill="none" stroke={card.accent} strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M2 4 Q12 0 22 4 T42 4 T62 4 T78 4" />
                  </svg>

                  <p className="text-sm sm:text-base text-warm-gray leading-relaxed text-center">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="font-script text-2xl sm:text-3xl text-maroon text-center mt-12">
            stop by &mdash; you&rsquo;ll see what we mean.
          </p>
        </div>
      </section>

      {/* ───────── TESTIMONIALS ───────── */}
      <section id="reviews" className="scroll-mt-24 py-16 sm:py-24 bg-cream grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <p className="font-script text-2xl sm:text-3xl text-crimson mb-1">people talk</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-maroon-dark italic">
              From Our <em>Guestbook</em>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-3">
              <span className="h-px w-10 bg-gold/60" />
              <ChopSeal size="sm" />
              <span className="h-px w-10 bg-gold/60" />
            </div>
            <p className="text-sm text-warm-gray-light mt-4">Real words from real customers on Liberty Avenue.</p>
          </div>

          <ReviewCarousel />
        </div>
      </section>

      {/* ───────── CTA BANNER ───────── */}
      <section className="py-14 sm:py-24 bg-maroon-dark text-white relative overflow-hidden grain">
        <svg
          className="absolute -top-6 -left-6 w-60 h-60 text-gold/15 -rotate-12"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {palmFrondPaths}
        </svg>
        <svg
          className="absolute -bottom-6 -right-6 w-60 h-60 text-crimson/20 rotate-[195deg]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {palmFrondPaths}
        </svg>

        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-crimson/10 -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold/5 translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="font-script text-2xl sm:text-3xl text-gold-light mb-2">come hungry</p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 italic">
            Let&rsquo;s <span className="gold-shimmer not-italic">Eat.</span>
          </h2>

          <div className="inline-flex flex-wrap items-center justify-center gap-3 my-4">
            <span className="h-px w-12 bg-gold/40" />
            <ChopSeal size="sm" />
            <span className="text-[10px] sm:text-xs tracking-[0.3em] text-gold/80 uppercase font-semibold">
              Est. South Richmond Hill
            </span>
            <ChopSeal size="sm" />
            <span className="h-px w-12 bg-gold/40" />
          </div>

          <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto mb-7 sm:mb-9">
            Reserve a table, call in an order, or stop by Liberty Avenue. We&rsquo;re open every day, 9:30 AM to 10 PM.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17183225600"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-crimson text-white font-semibold rounded hover:bg-crimson-dark transition-all hover:-translate-y-0.5 hover:shadow-xl text-lg ring-1 ring-gold/30"
            >
              Call (718) 322-5600
            </a>
            <Link
              href="/catering"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded border border-white/30 hover:bg-white/20 transition-all text-lg"
            >
              Catering Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── VISIT CARD ───────── */}
      <section id="locations" className="scroll-mt-24 py-16 sm:py-24 bg-warm-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="font-script text-2xl sm:text-3xl text-crimson mb-1">stop by</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-maroon-dark italic">
              Find <em>Bakewell</em>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="h-px w-12 sm:w-20 bg-gold/60" />
              <ChopSeal size="sm" />
              <span className="h-px w-12 sm:w-20 bg-gold/60" />
            </div>
          </div>

          <div className="grid lg:grid-cols-[5fr_7fr] gap-8 lg:gap-10 items-stretch">
            <div className="relative">
              <div className="relative bg-cream border-2 border-maroon/15 rounded-sm p-7 sm:p-9 shadow-[10px_12px_0_rgba(46,125,50,0.10),0_18px_36px_-18px_rgba(40,36,33,0.30)] h-full flex flex-col">
                <div className="flex items-center justify-between mb-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-maroon">
                    Visit Card · No. 11419
                  </p>
                  <ChopSeal size="md" />
                </div>

                <div className="mb-6 pb-6 border-b border-dashed border-maroon/20">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-dark mb-2">Address</p>
                  <a
                    href="https://maps.google.com/?q=127-08+Liberty+Ave+South+Richmond+Hill+NY+11419"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <p className="font-display text-2xl sm:text-3xl font-bold text-charcoal italic leading-tight group-hover:text-crimson transition-colors">
                      127-08 Liberty Avenue
                    </p>
                    <p className="text-sm sm:text-base text-warm-gray mt-1">
                      South Richmond Hill · Queens · NY 11419
                    </p>
                  </a>
                </div>

                <div className="mb-6 pb-6 border-b border-dashed border-maroon/20">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-dark">Hours</p>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-maroon">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Open Daily
                    </span>
                  </div>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-charcoal italic">
                    9:30 AM <span className="text-warm-gray font-script font-normal italic">—</span> 10 PM
                  </p>
                  <p className="text-sm text-warm-gray mt-1">Every day of the week, holidays included.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6 pb-6 border-b border-dashed border-maroon/20">
                  <a href="tel:+17183225600" className="block group">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-dark mb-1">Phone</p>
                    <p className="font-display text-xl font-bold text-charcoal italic group-hover:text-crimson transition-colors">
                      (718) 322-5600
                    </p>
                  </a>
                  <a href="mailto:bakewell.website@gmail.com" className="block group">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-dark mb-1">Email</p>
                    <p className="font-display text-base font-bold text-charcoal italic group-hover:text-crimson transition-colors break-all">
                      bakewell.website@gmail.com
                    </p>
                  </a>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-dark mb-2">We Deliver</p>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    Direct delivery via phone, or order through{' '}
                    <a
                      href="https://www.ubereats.com/store/bakewell/UepXkhlfXk6O8kVx22Fqxg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-maroon font-semibold hover:text-crimson transition-colors"
                    >
                      Uber Eats
                    </a>
                    ,{' '}
                    <a
                      href="https://www.grubhub.com/restaurant/bakewell-127-08-liberty-ave-jamaica-south-richmond-hill/7911688"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-maroon font-semibold hover:text-crimson transition-colors"
                    >
                      Grubhub
                    </a>
                    , or{' '}
                    <a
                      href="https://postmates.com/store/bakewell/UepXkhlfXk6O8kVx22Fqxg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-maroon font-semibold hover:text-crimson transition-colors"
                    >
                      Postmates
                    </a>
                    .
                  </p>
                </div>

                <div className="mt-auto pt-7">
                  <p className="font-script text-xl text-crimson text-center">we&rsquo;ll save you a roll.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-maroon-dark p-3 rounded-sm shadow-2xl shadow-maroon/30 h-full flex flex-col">
                <div className="flex items-center justify-between px-3 py-2 text-cream">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold">
                    Liberty Ave · Queens
                  </p>
                  <ChopSeal size="sm" />
                </div>
                <div className="flex-1 min-h-[380px] sm:min-h-[460px] rounded-sm overflow-hidden bg-cream-dark">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-73.833%2C40.683%2C-73.823%2C40.690&layer=mapnik&marker=40.6862%2C-73.8276"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bakewell location on Google Maps"
                  />
                </div>
                <p className="text-center text-cream/70 font-script text-base sm:text-lg mt-2 mb-1">
                  on the corner of 127th &amp; Liberty
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Preserve #contact anchor for legacy nav links */}
        <div id="contact" />
      </section>
    </>
  );
}
