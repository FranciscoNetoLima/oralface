import type { Metadata } from 'next';
import content from '@/design-system/site-content.json';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: content.seo.title,
  description: content.seo.description,
  applicationName: content.brand.name,
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: content.seo.ogImage, width: 1200, height: 630, alt: 'Oral Face Odontologia' }]
  },
  icons: {
    icon: [
      { url: '/brand/favicon.ico' },
      { url: '/brand/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: '/brand/apple-touch-icon.png'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&family=Playfair+Display:wght@400;500;600&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
