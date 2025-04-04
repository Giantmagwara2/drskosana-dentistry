'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DoctorIntro() {
  return (
    <div className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="heading-primary mb-2 uppercase text-sm tracking-wider font-montserrat">Dental Excellence</div>
            <h2 className="text-3xl font-bold mb-6 text-brand-primary">
              IS RUN BY DENTIST<br />Dr. P.I Skosana
            </h2>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-300 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Doctor Profile Image
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <p className="mb-6 text-gray-700 leading-relaxed">
              At Dental Excellence, Dr. P.I Skosana provides comprehensive dental care using advanced technology. From restorations to cosmetic dentistry, each treatment is tailored to ensure the best results for her patients.
            </p>

            <p className="mb-6 text-gray-700 leading-relaxed">
              Dr. Skosana continuously enhances her expertise through specialized training in cutting-edge procedures like Zoom Teeth Whitening, Myobrace, and CAD/CAM dentistry.
            </p>

            <p className="mb-8 text-gray-700 leading-relaxed">
              Your smile is our passion - <em className="smile-quote">The prettiest thing you can wear is your smile.</em>
            </p>

            <Link href="/about">
              <Button className="bg-brand-primary text-white hover:bg-brand-primary/90 uppercase font-montserrat tracking-wide">
                FIND OUT MORE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
