import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-white/90 relative">
      {/* Gold accent top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/bakewell-logo.jpg"
                alt="Bakewell Bakery & Restaurant"
                width={528}
                height={120}
                className="h-12 sm:h-14 w-auto rounded-sm shadow-md ring-1 ring-white/10"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Authentic Guyanese flavors and freshly baked goods in the heart of South Richmond Hill, NY.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-5">
              {[
                { label: 'Facebook', href: 'https://www.facebook.com/bakewel/mentions/', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { label: 'Yelp', href: 'https://www.yelp.com/biz/bakewell-bakery-and-restaurant-south-richmond-hill', icon: 'YELP_TEXT' },
                { label: 'Google', href: 'https://www.google.com/maps/search/Bakewell+127-08+Liberty+Ave+South+Richmond+Hill+NY+11419', icon: 'M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A10.016 10.016 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all"
                >
                  {social.icon === 'YELP_TEXT' ? (
                    <span className="font-bold text-[11px] leading-none">yelp</span>
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d={social.icon} />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/menu', label: 'Our Menu' },
                { href: '/about', label: 'About Us' },
                { href: '/catering', label: 'Catering' },
                { href: '/order', label: 'Order Online' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Hours</h4>
            <div className="space-y-2.5 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white font-medium">Open Daily 9:30 AM – 10 PM</span>
              </div>
              <p>Every day of the week — breakfast pastries, hearty lunches, and freshly baked bread until close.</p>
            </div>
            <div className="mt-4 p-3 bg-white/5 rounded-lg">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Reservations</p>
              <a href="tel:+17183225600" className="text-sm text-white/70 hover:text-gold transition-colors">
                Call (718) 322-5600
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Visit Us</h4>
            <div className="space-y-3 text-sm text-white/60">
              <a href="tel:+17183225600" className="flex items-start gap-2 hover:text-gold transition-colors">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (718) 322-5600
              </a>
              <a href="mailto:bakewell.website@gmail.com" className="flex items-start gap-2 hover:text-gold transition-colors break-all">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                bakewell.website@gmail.com
              </a>
              <a
                href="https://maps.google.com/?q=127-08+Liberty+Ave+South+Richmond+Hill+NY+11419"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-gold transition-colors"
              >
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                127-08 Liberty Ave<br />South Richmond Hill, NY 11419
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            &copy; 2026 Bakewell. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Website by{' '}
            <span className="text-gold/70">
              Intellizen LLC
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
