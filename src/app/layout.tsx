import type { Metadata } from 'next';
import { Space_Grotesk, Inter, Cairo } from 'next/font/google';
import '@/app/globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rabie Abdelrahman | Laravel 12 Backend Engineer',
  description:
    'Portfolio & Case Studies of Rabie Abdelrahman - Laravel 12 Backend Engineer specializing in PHP 8.2, Python AI microservices, and high-concurrency API architectures.',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const { locale = 'en' } = await params;
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${spaceGrotesk.variable} ${inter.variable} ${cairo.variable}`}
    >
      <body className="bg-[#0d0e12] text-white antialiased">{children}</body>
    </html>
  );
}
