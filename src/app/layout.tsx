import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { menuItems } from '@/data/menu';

const BASE_URL = 'https://bakewell.website';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Bakewell | Authentic Guyanese Bakery & Restaurant — South Richmond Hill, NY',
    template: '%s | Bakewell',
  },
  description:
    'Authentic Guyanese flavors and freshly baked goods in South Richmond Hill, NY. Homemade fried chicken, fried rice, tennis rolls, cassava pone, and more. Open daily 9:30 AM – 10 PM.',
  keywords: [
    'Guyanese restaurant South Richmond Hill',
    'Guyanese bakery Queens',
    'tennis rolls NYC',
    'cassava pone Queens',
    'fried chicken Liberty Ave',
    'Caribbean bakery Queens',
    'Bakewell',
    'Bakewell bakery and restaurant',
    'Guyanese food near me',
    'chicken fried rice Queens',
    'Caribbean pastries NYC',
  ],
  openGraph: {
    title: 'Bakewell | Authentic Guyanese Bakery & Restaurant',
    description:
      'Authentic Guyanese bakery and restaurant in South Richmond Hill, NY. Homemade fried chicken, vibrant rice dishes, tennis rolls, cassava pone. Open daily 9:30 AM – 10 PM.',
    url: BASE_URL,
    siteName: 'Bakewell',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/kk-hero.png',
        width: 1200,
        height: 630,
        alt: 'Bakewell — Authentic Guyanese Bakery & Restaurant in South Richmond Hill, NY',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bakewell | Authentic Guyanese Bakery & Restaurant',
    description:
      'Authentic Guyanese bakery and restaurant in South Richmond Hill, NY. Open daily 9:30 AM – 10 PM.',
    images: ['/kk-hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

function buildJsonLd() {
  const menuSections = Object.entries(
    menuItems.reduce<Record<string, typeof menuItems>>((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {})
  ).map(([category, items]) => ({
    '@type': 'MenuSection',
    name: category,
    hasMenuItem: items.map((item) => ({
      '@type': 'MenuItem',
      name: item.name,
      description: item.description,
      offers: {
        '@type': 'Offer',
        price: item.price.toFixed(2),
        priceCurrency: 'USD',
      },
    })),
  }));

  const restaurant = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${BASE_URL}/#restaurant`,
    name: 'Bakewell',
    description:
      'Authentic Guyanese bakery and restaurant in South Richmond Hill, NY. Homemade fried chicken, fried rice, chow mein, tennis rolls, cassava pone, and Caribbean pastries.',
    url: BASE_URL,
    telephone: '+1-718-322-5600',
    email: 'bakewell.website@gmail.com',
    image: `${BASE_URL}/kk-hero.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '127-08 Liberty Ave',
      addressLocality: 'South Richmond Hill',
      addressRegion: 'NY',
      postalCode: '11419',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.6862,
      longitude: -73.8276,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:30',
      closes: '22:00',
    },
    servesCuisine: ['Guyanese', 'Caribbean', 'Bakery'],
    priceRange: '$$',
    acceptsReservations: true,
    paymentAccepted: 'Cash, Credit Card',
    currenciesAccepted: 'USD',
    hasMenu: {
      '@type': 'Menu',
      name: 'Bakewell Menu',
      url: `${BASE_URL}/menu`,
      hasMenuSection: menuSections,
    },
    sameAs: [
      'https://www.facebook.com/bakewel/mentions/',
      'https://www.yelp.com/biz/bakewell-bakery-and-restaurant-south-richmond-hill',
    ],
  };

  const breadcrumbHome = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
    ],
  };

  return [restaurant, breadcrumbHome];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = buildJsonLd();

  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Fira+Sans:wght@300;400;500;600;700&family=Gloria+Hallelujah&display=swap"
          rel="stylesheet"
        />
        {jsonLd.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[99999] focus:bg-crimson focus:text-white focus:px-6 focus:py-3 focus:text-sm focus:font-semibold">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 pt-[67px] sm:pt-[75px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
