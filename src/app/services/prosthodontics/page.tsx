import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Prosthodontics | Dr. P. Skosana Dental Excellence',
  description:
    'Explore our prosthodontic services including crowns, bridges, and dentures for restoring smiles.',
};

export default function ProsthodonticsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-brand-primary mb-2">
          Prosthodontics
        </h1>
        <p className="text-gray-600">
          Restore your smile with our custom crowns, bridges, and dentures.
        </p>
      </header>

      {/* Overview Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand-primary mb-4">
          Overview
        </h2>
        <p className="text-gray-700">
          Our prosthodontic treatments are designed to restore function and
          aesthetics. We offer personalized solutions including crowns, bridges,
          and dentures tailored to your needs.
        </p>
      </section>

      {/* Procedure Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand-primary mb-4">
          Procedure
        </h2>
        <p className="text-gray-700">
          Treatments involve precise dental impressions, digital design, and the
          fabrication of restorations that fit perfectly and look natural.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand-primary mb-4">
          Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Restores chewing function</li>
          <li>Enhances aesthetics</li>
          <li>Custom-fitted for comfort</li>
          <li>Long-lasting solutions</li>
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