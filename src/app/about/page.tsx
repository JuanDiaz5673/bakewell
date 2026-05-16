import type { Metadata } from 'next';
import Image from 'next/image';
import ChopSeal, { ChopSealDivider } from '@/components/ChopSeal';

const BASE_URL = 'https://bakewell.website';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Bakewell — a beloved Guyanese bakery and restaurant in South Richmond Hill, NY, serving homemade fried chicken, fried rice, tennis rolls, cassava pone, and Caribbean pastries. Open daily 9:30 AM – 10 PM.',
  openGraph: {
    title: 'About Us | Bakewell',
    description:
      'A South Richmond Hill staple for authentic Guyanese flavors and freshly baked goods. Open daily 9:30 AM – 10 PM.',
    url: `${BASE_URL}/about`,
    images: [{ url: '/kk-hero.png', width: 1200, height: 630, alt: 'About Bakewell' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Bakewell',
    description: 'Authentic Guyanese bakery and restaurant in South Richmond Hill, NY. Open daily 9:30 AM – 10 PM.',
    images: ['/kk-hero.png'],
  },
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

const values = [
  {
    tagline: 'roots',
    title: 'Caribbean Heritage',
    desc: 'Recipes rooted in Guyanese and broader Caribbean traditions — passed down and made the way they should be.',
    rotate: '-rotate-[1.2deg]',
    accent: '#2E7D32',
    // Palm tree with sun
    art: (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Coconut palm — curved trunk with arching, drooping fronds */}
          <path d="M52 112 Q56 86 60 60 Q62 48 66 36" />
          <path d="M50 96 L56 94 M53 80 L59 78 M56 64 L62 62 M59 48 L65 46" strokeWidth="1.1" opacity="0.55" />
          {/* 5 fronds at the crown, sweeping out + down like a coconut palm */}
          <path d="M66 36 Q42 36 14 62" />
          <path d="M66 36 Q52 18 28 18" />
          <path d="M66 36 Q64 10 76 -2" />
          <path d="M66 36 Q82 18 106 18" />
          <path d="M66 36 Q92 36 116 62" />
          {/* Frond leaflet detail */}
          <path d="M28 30 L34 32 M40 30 L46 32 M52 32 L56 36" strokeWidth="1" opacity="0.55" />
          <path d="M80 32 L84 36 M86 30 L92 32" strokeWidth="1" opacity="0.55" />
          {/* Coconut cluster at the crown */}
          <circle cx="62" cy="42" r="3" fill="currentColor" />
          <circle cx="70" cy="44" r="3" fill="currentColor" />
          {/* Ground line */}
          <line x1="30" y1="112" x2="80" y2="112" strokeDasharray="2 4" opacity="0.55" />
        </g>
      </svg>
    ),
  },
  {
    tagline: 'fresh fresh',
    title: 'Fresh Daily',
    desc: 'Tennis rolls, pastries, breads, and cakes baked from scratch every morning. Nothing sits overnight.',
    rotate: 'rotate-[1.4deg]',
    accent: '#D4A843',
    // Three wheat sheaves bound with twine
    art: (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Stems */}
          <path d="M60 100 V40" />
          <path d="M44 100 Q44 80 38 60 Q34 48 36 36" />
          <path d="M76 100 Q76 80 82 60 Q86 48 84 36" />
          {/* Twine */}
          <path d="M40 78 Q60 82 80 78" />
          <path d="M40 80 Q60 84 80 80" />
          {/* Center grain */}
          <path d="M60 40 L52 32 M60 40 L68 32" />
          <path d="M60 32 L52 24 M60 32 L68 24" />
          <path d="M60 24 L54 16 M60 24 L66 16" />
          <path d="M60 16 L56 10 M60 16 L64 10" />
          {/* Left grain */}
          <path d="M36 36 L30 30 M36 36 L42 30" />
          <path d="M36 28 L32 22 M36 28 L40 22" />
          {/* Right grain */}
          <path d="M84 36 L78 30 M84 36 L90 30" />
          <path d="M84 28 L80 22 M84 28 L88 22" />
        </g>
      </svg>
    ),
  },
  {
    tagline: 'pepper hot',
    title: 'Bold Seasoning',
    desc: 'Vibrant, well-seasoned cooking — the kind of bold flavor that Guyanese-Caribbean food is loved for.',
    rotate: '-rotate-[0.6deg]',
    accent: '#C65D3C',
    // Wiri wiri pepper with leaf + spice scatter
    art: (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Hot pepper (wiri wiri / scotch bonnet) — wide top, tapered tip */}
          <path d="M44 38 Q34 56 38 78 Q42 102 60 108 Q78 102 82 78 Q86 56 76 38 Q70 30 60 30 Q50 30 44 38 Z" />
          {/* Inside highlight curve */}
          <path d="M50 50 Q46 70 52 92" strokeWidth="1.3" opacity="0.55" />
          {/* Stem */}
          <path d="M60 30 L60 14" />
          {/* Calyx — leafy collar at top */}
          <path d="M46 22 Q60 12 74 22 Q70 28 60 26 Q50 28 46 22 Z" />
          {/* Tiny leaf flag off stem */}
          <path d="M60 14 Q68 8 74 12" />
        </g>
      </svg>
    ),
  },
  {
    tagline: 'come like family',
    title: 'Neighborhood First',
    desc: 'A community gathering spot on Liberty Avenue — known for warm welcomes and a smile from the counter.',
    rotate: 'rotate-[0.8deg]',
    accent: '#2E7D32',
    // Bakery doorway with warm light + bread
    art: (
      <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* House silhouette — pitched roof + body */}
          <path d="M18 110 L18 56 L60 22 L102 56 L102 110 Z" />
          {/* Roofline */}
          <path d="M18 56 L102 56" strokeWidth="1.4" />
          {/* Door */}
          <path d="M44 110 L44 72 Q60 64 76 72 L76 110" />
          {/* Heart on door — community */}
          <path d="M60 86 C56 80 50 82 50 88 C50 94 60 100 60 100 C60 100 70 94 70 88 C70 82 64 80 60 86 Z" />
          {/* Window squares */}
          <rect x="26" y="68" width="10" height="10" rx="1" />
          <rect x="84" y="68" width="10" height="10" rx="1" />
          {/* Front step */}
          <line x1="40" y1="110" x2="80" y2="110" strokeWidth="3" />
        </g>
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
              { '@type': 'ListItem', position: 2, name: 'About Us', item: `${BASE_URL}/about` },
            ],
          }),
        }}
      />
      {/* Header */}
      <section className="bg-cream py-16 sm:py-24 grain relative overflow-hidden">
        {/* Botanical wash — palm frond top-left */}
        <svg
          aria-hidden="true"
          className="absolute -top-10 -left-10 w-72 h-72 text-maroon/[0.06] -rotate-12"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          <path d="M100 180 V20" />
          <path d="M100 160 Q60 150 30 130 M100 160 Q140 150 170 130" />
          <path d="M100 140 Q60 130 25 105 M100 140 Q140 130 175 105" />
          <path d="M100 120 Q60 110 28 80 M100 120 Q140 110 172 80" />
          <path d="M100 100 Q65 90 35 60 M100 100 Q135 90 165 60" />
          <path d="M100 80 Q70 70 45 40 M100 80 Q130 70 155 40" />
          <path d="M100 60 Q80 50 60 25 M100 60 Q120 50 140 25" />
        </svg>
        {/* Botanical wash — hibiscus bottom-right */}
        <svg
          aria-hidden="true"
          className="absolute -bottom-12 -right-12 w-80 h-80 text-crimson/[0.05] rotate-12"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="font-script text-2xl sm:text-3xl text-crimson mb-1">about the place</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon-dark italic mb-2">
            About <em className="text-crimson">Bakewell</em>
          </h1>
          <ChopSealDivider className="my-5" />
          <p className="text-warm-gray max-w-xl mx-auto">
            A South Richmond Hill cornerstone where the bakery wakes at dawn and the wok fires through the night.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-maroon-dark mb-6">
                More Than a Bakery
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  Bakewell sits in the heart of South Richmond Hill, NY — and it’s more than a bakery and more than a restaurant. It’s a cornerstone of authentic Guyanese flavors and the kind of welcome that turns first-time visitors into regulars.
                </p>
                <p>
                  Our customers come back for the freshness and quality: homemade fried chicken with crisp, juicy meat; chicken chow mein and roast lamb fried rice with the vibrant, bold seasonings that Guyanese cooking is loved for; tennis rolls and cassava pone that taste like home.
                </p>
                <p>
                  What anchors it all is a commitment to doing things the right way — traditional recipes, fresh ingredients, and a kitchen that takes pride in every plate that leaves it.
                </p>
              </div>
            </div>

            {/* Restaurant image */}
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-cream-dark relative">
              <Image
                src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=800&h=600&fit=crop"
                alt="Fresh-baked Caribbean pastries at Bakewell"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values — Paper Signs */}
      <section className="py-16 sm:py-24 bg-cream relative overflow-hidden">
        {/* Diagonal texture wash */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, #2E7D32 0 2px, transparent 2px 22px)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <p className="font-script text-2xl sm:text-3xl text-crimson mb-1">our values</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-maroon-dark italic">
              What We Stand For
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4 text-gold">
              <span className="h-px w-12 sm:w-20 bg-gold/60" />
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2c-1.5 3 1 5 1 7s-2.5 4-1 7c1.5-3-1-5-1-7s2.5-4 1-7z" />
                <circle cx="12" cy="12" r="1.5" />
              </svg>
              <span className="h-px w-12 sm:w-20 bg-gold/60" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {values.map((v) => (
              <article
                key={v.title}
                className={`group relative ${v.rotate} hover:rotate-0 transition-transform duration-500`}
              >
                {/* Twine pin */}
                <span
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-maroon-dark z-20 shadow-sm"
                  aria-hidden="true"
                />
                <span
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold z-20"
                  aria-hidden="true"
                />

                {/* Paper card */}
                <div
                  className="relative bg-warm-white border border-charcoal/10 rounded-[2px] p-5 sm:p-6 pt-9 sm:pt-10 shadow-[6px_8px_0_rgba(40,36,33,0.08),0_12px_30px_-12px_rgba(40,36,33,0.25)]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 20% 20%, rgba(212,168,67,0.06), transparent 60%), radial-gradient(circle at 80% 100%, rgba(198,93,60,0.05), transparent 60%)',
                  }}
                >
                  {/* Corner ornaments */}
                  <svg className="absolute top-2 left-2 w-3 h-3 text-gold/60" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                    <path d="M2 2 H6 M2 2 V6 M2 2 L6 6" />
                  </svg>
                  <svg className="absolute top-2 right-2 w-3 h-3 text-gold/60" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                    <path d="M14 2 H10 M14 2 V6 M14 2 L10 6" />
                  </svg>
                  <svg className="absolute bottom-2 left-2 w-3 h-3 text-gold/60" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                    <path d="M2 14 H6 M2 14 V10 M2 14 L6 10" />
                  </svg>
                  <svg className="absolute bottom-2 right-2 w-3 h-3 text-gold/60" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                    <path d="M14 14 H10 M14 14 V10 M14 14 L10 10" />
                  </svg>

                  {/* Script tagline */}
                  <p className="font-script text-lg text-warm-gray/80 text-center mb-1">— {v.tagline} —</p>

                  {/* Illustration */}
                  <div className="flex justify-center my-3" style={{ color: v.accent }}>
                    {v.art}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-charcoal text-center mb-2">
                    {v.title}
                  </h3>

                  {/* Hand-drawn wavy underline */}
                  <svg className="mx-auto mb-3" viewBox="0 0 80 8" width="64" height="6" fill="none" stroke={v.accent} strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M2 4 Q12 0 22 4 T42 4 T62 4 T78 4" />
                  </svg>

                  <p className="text-xs sm:text-sm text-warm-gray leading-relaxed text-center">
                    {v.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Liberty Avenue feature */}
      <section className="py-16 sm:py-24 bg-maroon-dark text-white grain relative overflow-hidden">
        {/* Palm frond silhouettes */}
        <svg className="absolute -top-6 -left-6 w-60 h-60 text-gold/15 -rotate-12" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
          <path d="M100 180 V40" />
          <path d="M100 150 Q60 140 30 120 M100 150 Q140 140 170 120" />
          <path d="M100 130 Q60 120 25 95 M100 130 Q140 120 175 95" />
          <path d="M100 110 Q60 100 28 70 M100 110 Q140 100 172 70" />
          <path d="M100 90 Q65 80 35 50 M100 90 Q135 80 165 50" />
          <path d="M100 70 Q75 60 55 30 M100 70 Q125 60 145 30" />
        </svg>
        <svg className="absolute -bottom-6 -right-6 w-60 h-60 text-crimson/20 rotate-[195deg]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
          <path d="M100 180 V40" />
          <path d="M100 150 Q60 140 30 120 M100 150 Q140 140 170 120" />
          <path d="M100 130 Q60 120 25 95 M100 130 Q140 120 175 95" />
          <path d="M100 110 Q60 100 28 70 M100 110 Q140 100 172 70" />
          <path d="M100 90 Q65 80 35 50 M100 90 Q135 80 165 50" />
        </svg>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="font-script text-2xl sm:text-3xl text-gold-light mb-3">In the Heart of</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            <span className="gold-shimmer">Liberty Avenue</span>
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            South Richmond Hill is the Guyanese soul of Queens — and Bakewell has been part of that story for years. Stop in for a hot meal, grab a bag of tennis rolls on the way home, or order ahead for the family. You’ll always leave full and welcomed.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+17183225600"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-crimson text-white font-semibold rounded hover:bg-crimson-dark transition-all"
            >
              Call (718) 322-5600
            </a>
            <a
              href="https://maps.google.com/?q=127-08+Liberty+Ave+South+Richmond+Hill+NY+11419"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 font-semibold rounded border border-white/20 hover:bg-white/20 transition-all"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
