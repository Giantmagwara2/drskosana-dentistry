import type { Metadata } from "next";
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils'; // Assuming `cn` is a utility for conditional classnames

export const metadata: Metadata = {
  title: 'Dr. P. Skosana | Dental Excellence',
  description: 'Dr. P. Skosana provides exceptional dental care for the entire family. Experience the difference of personalized, gentle dentistry in a comfortable environment.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Add metadata for SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={cn("min-h-screen flex flex-col bg-brand-light text-brand-neutral")}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
