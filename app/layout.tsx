import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PrayerTimesBar } from '../components/prayer-times-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Masjid Taqwa - Islamic Center',
  description: 'Welcome to Masjid Taqwa - A place of worship, learning, and community',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrayerTimesBar />
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}