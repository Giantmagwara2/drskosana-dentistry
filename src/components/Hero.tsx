'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-100 h-[500px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/663227978/2245847193.jpeg')",
          backgroundPosition: "left center"
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 via-brand-primary/60 to-transparent">
        <div className="container mx-auto h-full flex items-center">
          <div className="max-w-xl p-8 text-white">
            <h1 className="text-4xl md:text-5xl font-playfair mb-4">
              The <span className="font-lobster text-brand-accent">prettiest</span> thing you can wear is your <span className="font-lobster text-brand-accent">smile</span>
            </h1>
            <p className="text-lg mb-8 font-montserrat">
              Dr. P. Skhosana provides exceptional dental care for the entire family. Experience the difference of personalized, gentle dentistry in a comfortable environment.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/about">
                <Button size="lg" className="bg-brand-primary border-2 border-white text-white hover:bg-brand-primary/90 w-full sm:w-auto">
                  ABOUT US
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  REQUEST AN APPOINTMENT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
