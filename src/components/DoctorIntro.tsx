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
              IS RUN BY DENTIST<br />DR P. SKHOSANA
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
              With the <strong className="text-brand-primary">Dental Excellence</strong> practice situated in Pretoria, experienced dentist Dr P. Skhosana offers the full range of dentistry services from restorations and oral surgery to orthodontics and cosmetic dentistry. Using the most advanced digital technology and equipment, Dental Excellence aims to give service worth smiling about.
            </p>

            <p className="mb-6 text-gray-700 leading-relaxed">
              After completing her dental education and training, Dr. Skhosana has also attended various courses to better her skills and provide a wide range of services for her patients including Zoom Teeth Whitening, Myobrace, CAD/CAM dentistry and other advanced procedures. Using the latest digital dental technology together with the finest quality materials helps her fulfill her passion in delivering exceptional dental care.
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
