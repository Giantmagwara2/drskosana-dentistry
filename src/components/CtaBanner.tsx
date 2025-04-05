'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CtaBanner() {
  return (
    <div
      className="banner-with-bg py-20 relative"
      style={{ backgroundImage: `url('/path/to/your/new-image.jpg')` }}
    >
      {/* Overlay for better text visibility */}
      <div className="banner-overlay absolute inset-0 bg-black opacity-50" />

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Confidence begins with a great{' '}
            <span className="font-lobster text-brand-accent">smile</span>
          </h2>

          {/* Call-to-Action Button */}
          <Link href="/contact" passHref legacyBehavior>
            <Button
              size="lg"
              className="bg-brand-primary border-2 border-white text-white hover:bg-brand-primary/90 uppercase font-montserrat tracking-wide"
            >
              REQUEST AN APPOINTMENT
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}