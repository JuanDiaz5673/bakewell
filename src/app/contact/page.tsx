'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

export default function ContactPage() {
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
          <p className="font-script text-2xl sm:text-3xl text-crimson mb-1">say hello</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon-dark italic mb-2">
            Contact <span className="text-crimson not-italic">Us</span>
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
            Have a question, feedback, or want to plan a visit? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-maroon-dark mb-8">
                Visit Our Restaurant
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: 'Address',
                    value: '127-08 Liberty Ave, South Richmond Hill, NY 11419',
                    href: 'https://maps.google.com/?q=127-08+Liberty+Ave+South+Richmond+Hill+NY+11419',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: 'Phone',
                    value: '(718) 322-5600',
                    href: 'tel:+17183225600',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: 'Email',
                    value: 'bakewell.website@gmail.com',
                    href: 'mailto:bakewell.website@gmail.com',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: 'Hours',
                    value: 'Open Daily 9:30 AM – 10 PM',
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-crimson/10 text-crimson flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal">{item.label}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-warm-gray text-sm hover:text-crimson transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-warm-gray text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8 pt-8 border-t border-cream-dark">
                <h3 className="text-sm font-semibold text-charcoal mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { name: 'Facebook', href: 'https://www.facebook.com/bakewel/mentions/', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                    { name: 'Yelp', href: 'https://www.yelp.com/biz/bakewell-bakery-and-restaurant-south-richmond-hill', icon: 'YELP_TEXT' },
                    { name: 'Google', href: 'https://www.google.com/maps/search/Bakewell+127-08+Liberty+Ave+South+Richmond+Hill+NY+11419', icon: 'M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center text-warm-gray hover:bg-crimson hover:text-white transition-all"
                    >
                      {social.icon === 'YELP_TEXT' ? (
                        <span className="font-bold text-sm leading-none">yelp</span>
                      ) : (
                        <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d={social.icon} />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 aspect-video rounded-xl overflow-hidden border border-cream-dark">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-73.833%2C40.683%2C-73.823%2C40.690&layer=mapnik&marker=40.6862%2C-73.8276"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bakewell location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-maroon-dark mb-8">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="bg-cream rounded-xl p-8 sm:p-12 border border-cream-dark text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-charcoal mb-2">Message Sent!</h3>
                  <p className="text-warm-gray">Thank you for reaching out. We&apos;ll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 text-sm text-crimson font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="ct-name" className="block text-sm font-medium text-charcoal mb-1.5">Full Name *</label>
                      <input type="text" id="ct-name" required className="w-full px-4 py-3 bg-white border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all" />
                    </div>
                    <div>
                      <label htmlFor="ct-email" className="block text-sm font-medium text-charcoal mb-1.5">Email *</label>
                      <input type="email" id="ct-email" required className="w-full px-4 py-3 bg-white border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="ct-subject" className="block text-sm font-medium text-charcoal mb-1.5">Subject *</label>
                    <select id="ct-subject" required className="w-full px-4 py-3 bg-white border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all">
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="catering">Catering Question</option>
                      <option value="order">Order Issue</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ct-message" className="block text-sm font-medium text-charcoal mb-1.5">Message *</label>
                    <textarea id="ct-message" rows={6} required className="w-full px-4 py-3 bg-white border border-cream-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all resize-none" placeholder="How can we help you?" />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-crimson text-white font-semibold rounded hover:bg-crimson-dark transition-all hover:shadow-lg hover:shadow-crimson/20 text-lg"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
