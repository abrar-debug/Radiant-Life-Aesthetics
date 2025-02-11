import './globals.css';
import { Inter, Playball } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

// Initialize the fonts
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

export const metadata = {
  title: 'Radiant Life Aesthetics',
  description: 'Premium aesthetic treatments and expert care',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playball.variable}`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
