import type { Metadata } from 'next';

const BASE_URL = 'https://bakewell.website';

export const metadata: Metadata = {
  title: 'Order Online',
  description:
    'Order Bakewell online for pickup or call ahead. Authentic Guyanese fried chicken, fried rice, tennis rolls, pastries, and Caribbean baked goods from South Richmond Hill, NY.',
  openGraph: {
    title: 'Order Online | Bakewell',
    description:
      'Order Guyanese food and Caribbean pastries from Bakewell. Pickup or call ahead from South Richmond Hill, NY.',
    url: `${BASE_URL}/order`,
    images: [{ url: '/kk-hero.png', width: 1200, height: 630, alt: 'Order Bakewell Online' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Order Online | Bakewell',
    description: 'Order Guyanese food and Caribbean pastries from Bakewell.',
    images: ['/kk-hero.png'],
  },
  alternates: {
    canonical: `${BASE_URL}/order`,
  },
};

export default function OrderLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 2, name: 'Order Online', item: `${BASE_URL}/order` },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
