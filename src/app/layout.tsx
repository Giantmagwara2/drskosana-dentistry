import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes"; // For dark/light mode support
import clsx from "clsx"; // For dynamic class merging

export const metadata: Metadata = {
  title: "Dr P.I. Skosana | Dental Excellence",
  description:
    "Dr P.I. Skosana provides exceptional dental care for the entire family. Experience the difference of personalized, gentle dentistry in a comfortable environment.",
  keywords: [
    "dentist",
    "dental care",
    "family dentist",
    "cosmetic dentistry",
    "Pretoria dentist",
    "Dr P.I. Skosana",
  ],
  authors: [{ name: "Dr P.I. Skosana", url: "https://drpiskosana.netlify.app" }],
  openGraph: {
    title: "Dr P.I. Skosana | Dental Excellence",
    description:
      "Dr P.I. Skosana provides exceptional dental care for the entire family. Experience the difference of personalized, gentle dentistry in a comfortable environment.",
    url: "https://drpiskosana.netlify.app",
    siteName: "Dr P.I. Skosana | Dental Excellence",
    images: [
      {
        url: "/images/og-image.jpg", // Ensure this image exists in /public/images/
        width: 1200,
        height: 630,
        alt: "Dr P.I. Skosana Dental Excellence",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          "min-h-screen flex flex-col bg-brand-light text-brand-neutral",
          "dark:bg-brand-dark dark:text-brand-light"
        )}
      >
        {/* Theme Provider for Dark/Light Mode */}
        <ThemeProvider attribute="class">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}