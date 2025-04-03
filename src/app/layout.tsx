import type { Metadata } from "next";
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Dr. P. Skhosana | Dental Excellence',
  description: 'Dr. P. Skhosana provides exceptional dental care for the entire family. Experience the difference of personalized, gentle dentistry in a comfortable environment.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
