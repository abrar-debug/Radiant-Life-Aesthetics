import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playball } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const playball = Playball({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-playball',
});

export const metadata: Metadata = {
  title: 'Radiant Life Aesthetics',
  description: 'Premium aesthetic treatments and expert care',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playball.variable}`}>{children}</body>
    </html>
  );
}