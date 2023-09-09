import './globals.css';
import { League_Spartan } from 'next/font/google';
import React from 'react';
import Footer from './components/Footer';
import { GlobalContextProvider } from './context/store';

const leagueSpartan = League_Spartan({ weight: ['700', '600', '400', '300'], subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Dine Restaurant',
    template: '%s | Dine Restaurant',
  },
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GlobalContextProvider>
      <html lang="en">
        <body className={leagueSpartan.className}>
          {children}
          <Footer />
        </body>
      </html>
    </GlobalContextProvider>
  );
}
