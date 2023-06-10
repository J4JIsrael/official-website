import { Footer, Header } from '@j4j/components';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'J4J Community',
  description: 'Welcome to J4J Community',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl" className="overflow-x-hidden">
      <body className=" overflow-x-hidden bg-background">
        <div className="relative z-0">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
