import type { Metadata } from 'next';

const BASE_URL = 'https://bakewell.website';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Browse the full Bakewell menu — Guyanese mains, fried rice and noodles, fresh-baked pastries and breads, cakes, and Caribbean drinks. Open daily 9:30 AM – 10 PM in South Richmond Hill, NY.',
  openGraph: {
    title: 'Menu | Bakewell',
    description:
      'Browse Bakewell\'s full menu — Guyanese mains, fresh-baked pastries, and Caribbean drinks. Open daily 9:30 AM – 10 PM.',
    url: `${BASE_URL}/menu`,
    images: [{ url: '/kk-hero.png', width: 1200, height: 630, alt: 'Bakewell Menu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menu | Bakewell',
    description: 'Guyanese mains, fresh-baked pastries, and Caribbean drinks. Open daily 9:30 AM – 10 PM.',
    images: ['/kk-hero.png'],
  },
  alternates: {
    canonical: `${BASE_URL}/menu`,
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 2, name: 'Menu', item: `${BASE_URL}/menu` },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
