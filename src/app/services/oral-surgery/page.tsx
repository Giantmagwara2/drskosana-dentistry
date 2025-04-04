import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Oral Surgery | Dr. P. Skosana Dental Excellence',
  description:
    'Our oral surgery services offer safe and effective treatments for complex dental issues.',
};

export default function OralSurgeryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-brand-primary mb-2">
          Oral Surgery
        </h1>
        <p className="text-gray-600">
          Expert surgical procedures to address complex dental issues.
        </p>
      </header>

      {/* Overview Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand-primary mb-4">
          Overview
        </h2>
        <p className="text-gray-700">
          Our oral surgery services include extractions, corrective jaw surgery,
          and other surgical interventions performed by experienced specialists.
        </p>
      </section>

      {/* Procedure Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand-primary mb-4">
          Procedure
        </h2>
        <p className="text-gray-700">
          Each procedure is tailored to the patient's specific needs with a
          focus on safety, comfort, and optimal recovery.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand-primary mb-4">
          Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Minimally invasive techniques</li>
          <li>Expert surgical care</li>
          <li>Improved functionality and comfort</li>
          <li>Comprehensive post-operative support</li>
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