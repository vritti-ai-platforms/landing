import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import { Providers } from './providers';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollAnimationInit } from '@/components/ui/ScrollAnimationInit';
import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vritti AI - The Operating System for Modern Business',
  description:
    'A modular platform that manages leads, bookings, and inventory autonomously. Stop micromanaging, start growing.',
  openGraph: {
    title: 'Vritti AI - The Operating System for Modern Business',
    description:
      'A modular platform that manages leads, bookings, and inventory autonomously.',
    url: 'https://vrittiai.com',
    siteName: 'Vritti AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vritti AI - The Operating System for Modern Business',
    description:
      'A modular platform that manages leads, bookings, and inventory autonomously.',
  },
  icons: {
    icon: '/vritti-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('vritti-theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={ibmPlexSans.variable}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ScrollAnimationInit />
        </Providers>
      </body>
    </html>
  );
}
