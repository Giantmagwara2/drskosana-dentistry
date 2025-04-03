import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dental Restorations | Dr. P. Skosana Dental Excellence',
  description: 'Restore your smile with our custom dental restorations including fillings, crowns, and bridges.',
};

export default function DentalRestorationsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-brand-primary">Dental Restorations</h1>
        <p className="text-gray-600 mt-2">Enhance your smile with our durable and natural-looking restorations.</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700">
          Our dental restoration services include fillings, crowns, and bridges designed to restore function and aesthetics.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Procedure</h2>
        <p className="text-gray-700">
          Procedures are customized to ensure the best fit, appearance, and longevity. Digital impressions and CAD/CAM technology are used for precision.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Improved appearance</li>
          <li>Enhanced functionality</li>
          <li>Long-lasting results</li>
          <li>Custom-tailored treatment</li>
        </ul>
      </section>
      <footer className="mt-12">
        <Link href="/contact" className="text-brand-primary underline">
          Book an Appointment
        </Link>
      </footer>
    </div>
  );
}
