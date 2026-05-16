import type { Metadata } from 'next';

const BASE_URL = 'https://bakewell.website';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Bakewell — visit us at 127-08 Liberty Ave, South Richmond Hill, NY 11419. Call (718) 322-5600 or email bakewell.website@gmail.com. Open daily 9:30 AM – 10 PM.',
  openGraph: {
    title: 'Contact | Bakewell',
    description:
      'Visit Bakewell at 127-08 Liberty Ave, South Richmond Hill, NY 11419. Call (718) 322-5600. Open daily 9:30 AM – 10 PM.',
    url: `${BASE_URL}/contact`,
    images: [{ url: '/kk-hero.png', width: 1200, height: 630, alt: 'Contact Bakewell' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Bakewell',
    description: 'Visit us at 127-08 Liberty Ave, South Richmond Hill, NY. Call (718) 322-5600.',
    images: ['/kk-hero.png'],
  },
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE_URL}/contact` },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
