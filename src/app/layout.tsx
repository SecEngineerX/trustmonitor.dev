// layout.tsx
"use client";
import '@/styles/globals.css';
import '@/styles/typography.css';
import '@/styles/variables.css';
import { useEffect } from 'react';
import { initCopyProtection } from '@/utils/copyProtection';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initCopyProtection();
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>{children}</body>
    </html>
  );
}
