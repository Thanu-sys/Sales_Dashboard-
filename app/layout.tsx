import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Sales Dashboard',
  description: 'Next.js 15 + TypeScript + Tailwind + Recharts demo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="max-w-5xl mx-auto p-6">{children}</div>
      </body>
    </html>
  );
}