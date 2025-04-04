import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Orthodontics | Dr. P. Skosana Dental Excellence',
  description:
    'Straighten your teeth with braces or clear aligners for a confident, healthy smile.',
};

export default function OrthodonticsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-brand-primary mb-2">
          Orthodontics
        </h1>
        <p className="text-gray-600">
          Achieve a perfectly aligned smile with our orthodontic solutions.
        </p>
      </header>

      {/* Overview Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand-primary mb-4">
          Overview
        </h2>
        <p className="text-gray-700">
          Our orthodontic services include traditional braces and modern clear
          aligners designed to straighten your teeth and improve oral function.
        </p>
      </section>

      {/* Procedure Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand-primary mb-4">
          Procedure
        </h2>
        <p className="text-gray-700">
          Treatments start with a comprehensive evaluation, followed by a
          customized treatment plan to ensure optimal alignment and results.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand-primary mb-4">
          Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Improved dental alignment</li>
          <li>Enhanced oral health</li>
          <li>Increased confidence</li>
          <li>Customized treatment plans</li>
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