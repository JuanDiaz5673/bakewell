'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

const packages = [
  {
    name: 'Gathering',
    guests: '10–20 guests',
    price: 'From $189',
    items: ['Fried chicken or stew chicken', '1 fried rice or chow mein', 'Tennis rolls (1 dozen)', 'Pastry platter (small)', 'Sorrel or mauby'],
    popular: false,
  },
  {
    name: 'Celebration',
    guests: '20–50 guests',
    price: 'From $429',
    items: ['Choice of 2 mains', '2 rice or noodle dishes', 'Tennis rolls (3 dozen)', 'Mixed pastry platter', 'Cassava pone tray', 'Caribbean drinks'],
    popular: true,
  },
  {
    name: 'Grand Feast',
    guests: '50+ guests',
    price: 'Custom quote',
    items: ['Full mains selection', 'Multiple rice and noodle trays', 'Full bread & pastry assortment', 'Black cake & sponge cake', 'Pholourie & savory bites', 'Beverages', 'Serving staff available'],
    popular: false,
  },
];

export default function CateringPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
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
          <p className="font-script text-2xl sm:text-3xl text-crimson mb-1">bring the feast</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon-dark italic mb-2">
            Catering
          </h1>
          <div className="flex items-center justify-center gap-3 my-5 text-gold">
            <span className="h-px w-12 sm:w-20 bg-gold/60" />
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2c-1.5 3 1 5 1 7s-2.5 4-1 7c1.5-3-1-5-1-7s2.5-4 1-7z" />
              <circle cx="12" cy="12" r="1.5" />
            </svg>
            <span className="h-px w-12 sm:w-20 bg-gold/60" />
          </div>
          <p className="text-warm-gray max-w-xl mx-auto">
            From intimate gatherings to grand celebrations &mdash; let Bakewell bring authentic Guyanese flavors and freshly baked goods to your event.
          </p>
        </div>
      </section>

      {/* Packages — Paper Menus */}
      <section className="py-16 sm:py-24 bg-warm-white relative overflow-hidden">
        {/* Diagonal texture wash */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, #2E7D32 0 2px, transparent 2px 22px)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <p className="font-script text-2xl sm:text-3xl text-crimson mb-1">pick a tray</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-maroon-dark italic">
              Our Packages
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4 text-gold">
              <span className="h-px w-12 sm:w-20 bg-gold/60" />
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2c-1.5 3 1 5 1 7s-2.5 4-1 7c1.5-3-1-5-1-7s2.5-4 1-7z" />
                <circle cx="12" cy="12" r="1.5" />
              </svg>
              <span className="h-px w-12 sm:w-20 bg-gold/60" />
            </div>
            <p className="text-warm-gray mt-5 max-w-2xl mx-auto">Choose a package or customize your own. All packages include setup and disposable plates &amp; utensils.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {packages.map((pkg, i) => {
              const rotate = ['-rotate-[1.2deg]', 'rotate-[1.5deg]', '-rotate-[0.8deg]'][i] ?? '';
              const accent = pkg.popular ? '#C65D3C' : i === 0 ? '#2E7D32' : '#D4A843';
              return (
                <article
                  key={pkg.name}
                  className={`group relative ${rotate} hover:rotate-0 transition-transform duration-500`}
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

                  <div
                    className="relative bg-cream border border-charcoal/10 rounded-[2px] p-6 sm:p-8 pt-10 sm:pt-12 shadow-[6px_8px_0_rgba(40,36,33,0.08),0_12px_30px_-12px_rgba(40,36,33,0.25)]"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 20% 20%, rgba(212,168,67,0.06), transparent 60%), radial-gradient(circle at 80% 100%, rgba(198,93,60,0.05), transparent 60%)',
                    }}
                  >
                    {/* Corner ornaments */}
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

                    {pkg.popular && (
                      <span className="absolute -top-3 right-4 px-3 py-1 bg-crimson text-white text-[10px] font-bold uppercase tracking-widest rounded-sm rotate-3 shadow-md">
                        Most Popular
                      </span>
                    )}

                    <h3
                      className="font-display text-3xl font-bold italic"
                      style={{ color: accent }}
                    >
                      {pkg.name}
                    </h3>
                    <p className="font-script text-lg text-warm-gray/80 mt-1">— {pkg.guests} —</p>

                    {/* Hand-drawn wavy underline */}
                    <svg className="mt-2 mb-4" viewBox="0 0 80 8" width="80" height="8" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                      <path d="M2 4 Q12 0 22 4 T42 4 T62 4 T78 4" />
                    </svg>

                    <p className="font-display text-3xl font-bold text-charcoal">{pkg.price}</p>

                    <ul className="mt-6 space-y-3">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-charcoal">
                          {/* Leaf bullet */}
                          <svg
                            className="w-4 h-4 mt-0.5 shrink-0"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            style={{ color: accent }}
                            aria-hidden="true"
                          >
                            <path d="M2 14 Q2 4 14 2 Q14 14 2 14 Z" />
                          </svg>
                          <span className="font-display italic">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#inquiry-form"
                      className={`mt-8 block text-center px-6 py-3 rounded font-semibold transition-all ${
                        pkg.popular
                          ? 'bg-crimson text-white hover:bg-crimson-dark'
                          : 'bg-warm-white text-maroon border-2 border-maroon/20 hover:bg-maroon hover:text-white hover:border-maroon'
                      }`}
                    >
                      Get a Quote
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="font-script text-2xl sm:text-3xl text-maroon text-center mt-14">
            something special? &mdash; we&rsquo;ll make it happen.
          </p>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="py-16 sm:py-24 bg-cream grain relative">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <p className="font-script text-2xl sm:text-3xl text-crimson mb-1">drop us a line</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-maroon-dark italic">Request a Quote</h2>
            <div className="flex items-center justify-center gap-3 mt-4 text-gold">
              <span className="h-px w-12 sm:w-16 bg-gold/60" />
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2c-1.5 3 1 5 1 7s-2.5 4-1 7c1.5-3-1-5-1-7s2.5-4 1-7z" />
                <circle cx="12" cy="12" r="1.5" />
              </svg>
              <span className="h-px w-12 sm:w-16 bg-gold/60" />
            </div>
            <p className="text-warm-gray mt-4">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-xl p-8 sm:p-12 border border-cream-dark text-center">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-2">Thank You!</h3>
              <p className="text-warm-gray">Your catering inquiry has been received. Our team will contact you within 24 hours.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2 text-sm text-crimson font-medium hover:underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 sm:p-10 border border-cream-dark shadow-sm">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">Full Name *</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">Email *</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">Phone *</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all" />
                </div>
                <div>
                  <label htmlFor="event-date" className="block text-sm font-medium text-charcoal mb-1.5">Event Date *</label>
                  <input type="date" id="event-date" required className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all" />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-charcoal mb-1.5">Estimated Guests *</label>
                  <select id="guests" required className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all">
                    <option value="">Select range</option>
                    <option value="10-20">10–20 guests</option>
                    <option value="20-50">20–50 guests</option>
                    <option value="50-100">50–100 guests</option>
                    <option value="100+">100+ guests</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="pkg" className="block text-sm font-medium text-charcoal mb-1.5">Package Interest</label>
                  <select id="pkg" className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all">
                    <option value="">Select package</option>
                    <option value="gathering">Gathering (10–20)</option>
                    <option value="celebration">Celebration (20–50)</option>
                    <option value="grand">Grand Feast (50+)</option>
                    <option value="custom">Custom Package</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">Additional Details</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all resize-none" placeholder="Tell us about your event, dietary preferences, or any special requests..." />
              </div>
              <button
                type="submit"
                className="mt-6 w-full px-8 py-4 bg-crimson text-white font-semibold rounded hover:bg-crimson-dark transition-all hover:shadow-lg hover:shadow-crimson/20 text-lg"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
