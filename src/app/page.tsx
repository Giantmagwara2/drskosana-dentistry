import Head from 'next/head';
import Hero from '@/components/Hero';
import DoctorIntro from '@/components/DoctorIntro';
import ServicesGrid from '@/components/ServicesGrid';
import ClientComponents from '@/components/ClientComponents'; // Import the new Client Component

export default function Home() {
  return (
    <>
      {/* SEO and Metadata */}
      <Head>
        <title>Dr. P.I Skosana | Dental Excellence</title>
        <meta name="description" content="Exceptional dental care by Dr. P.I Skosana. Advanced dentistry services in Pretoria." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Dr. P.I Skosana | Dental Excellence" />
        <meta property="og:description" content="Exceptional dental care with advanced digital technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drpiskosana.netlify.app/" />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Head>

      {/* Main Content */}
      <main className="bg-brand-light text-foreground">
        {/* Hero Section */}
        <Hero />

        {/* Doctor Introduction */}
        <DoctorIntro />

        {/* Services Grid */}
        <ServicesGrid />

        {/* Client Components (Testimonials and CTA Banner) */}
        <ClientComponents />
      </main>
    </>
  );
}