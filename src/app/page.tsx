import dynamic from 'next/dynamic';
import Head from 'next/head';
import Hero from '@/components/Hero';
import DoctorIntro from '@/components/DoctorIntro';
import ServicesGrid from '@/components/ServicesGrid';

// Lazy load non-critical components
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false });
const CtaBanner = dynamic(() => import('@/components/CtaBanner'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. P. Skosana | Dental Excellence</title>
        <meta name="description" content="Exceptional dental care by Dr. P. Skosana. Advanced dentistry services in Pretoria." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Dr. P. Skosana | Dental Excellence" />
        <meta property="og:description" content="Exceptional dental care with advanced digital technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drpiskosana.netlify.app/" />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Head>

      <main className="bg-brand-light text-foreground">
        <Hero />
        <DoctorIntro />
        <ServicesGrid />
        <Testimonials />
        <CtaBanner />
      </main>
    </>
  );
}
