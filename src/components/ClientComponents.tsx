'use client'; // This marks the component as a Client Component

import dynamic from 'next/dynamic';

// Lazy load non-critical components
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false });
const CtaBanner = dynamic(() => import('@/components/CtaBanner'), { ssr: false });

export default function ClientComponents() {
  return (
    <>
      <Testimonials />
      <CtaBanner />
    </>
  );
}