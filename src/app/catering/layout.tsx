import type { Metadata } from 'next';

const BASE_URL = 'https://bakewell.website';

export const metadata: Metadata = {
  title: 'Catering',
  description:
    'Bakewell catering for events, parties, and gatherings in South Richmond Hill, NY and Queens. Authentic Guyanese-Caribbean trays, fresh pastry platters, and bread orders for 10 to 200+ guests.',
  openGraph: {
    title: 'Catering | Bakewell',
    description:
      'Guyanese-Caribbean catering for events, parties, and gatherings. Trays, pastry platters, and bread orders for any size group.',
    url: `${BASE_URL}/catering`,
    images: [{ url: '/kk-hero.png', width: 1200, height: 630, alt: 'Bakewell Catering' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catering | Bakewell',
    description: 'Guyanese-Caribbean catering for 10 to 200+ guests in Queens, NY.',
    images: ['/kk-hero.png'],
  },
  alternates: {
    canonical: `${BASE_URL}/catering`,
  },
};

export default function CateringLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 2, name: 'Catering', item: `${BASE_URL}/catering` },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
