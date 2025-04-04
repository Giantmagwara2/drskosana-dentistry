import Hero from '@/components/Hero';
import DoctorIntro from '@/components/DoctorIntro';
import ServicesGrid from '@/components/ServicesGrid';
import Testimonials from '@/components/Testimonials';
import CtaBanner from '@/components/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <DoctorIntro />
      <ServicesGrid />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
