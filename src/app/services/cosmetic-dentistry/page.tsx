import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Cosmetic Dentistry | Dr. P.I Skosana Dental Excellence',
  description:
    'Transform your smile with our cosmetic dentistry services including teeth whitening, veneers, and more.',
};

export default function CosmeticDentistryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-brand-primary mb-2">
          Cosmetic Dentistry
        </h1>
        <p className="text-gray-600">
          Enhance your smile with our range of cosmetic treatments.
        </p>
      </header>

      {/* Overview Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand-primary mb-4">
          Overview
        </h2>
        <p className="text-gray-700">
          Our cosmetic dentistry services are designed to improve the appearance
          of your smile. Whether you need teeth whitening, veneers, or bonding,
          we offer personalized solutions to boost your confidence.
        </p>
      </section>

      {/* Procedure Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand-primary mb-4">
          Procedure
        </h2>
        <p className="text-gray-700">
          Treatments begin with a thorough consultation, followed by customized
          procedures that cater to your individual needs and aesthetic goals.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand-primary mb-4">
          Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Improved appearance</li>
          <li>Boost in self-confidence</li>
          <li>Long-lasting results</li>
          <li>Minimally invasive procedures</li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <footer className="mt-12 text-center">
        <Link href="/contact">
          <Button className="bg-brand-primary text-white hover:bg-brand-primary/90">
            Book an Appointment
          </Button>
        </Link>
      </footer>
    </div>
  );
}