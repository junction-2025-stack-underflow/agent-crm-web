import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Homeseek',
  description:
    'Simplify selling the properties you represent by finding the clients that are more likig to make a step to make an offer more than any other using advanced recommandation techs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <Navbar />
        <div
          style={{
            width: '100%',
            paddingInline: '120px',
            display: 'flex',
            flexGrow: 1,
            minHeight: 0,
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
