import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { NavBar } from '@shared/nav-bar';
import { ReactQueryClientProvider } from '@shared/react-query-client-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ISO 4217',
  description: 'ISO 4217 Test app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          <main className="p-20">{children}</main>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
