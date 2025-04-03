import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Prosthodontics | Dr. P. Skosana Dental Excellence',
  description: 'Explore our prosthodontic services including crowns, bridges, and dentures for restoring smiles.',
};

export default function ProsthodonticsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-brand-primary">Prosthodontics</h1>
        <p className="text-gray-600 mt-2">Restore your smile with our custom crowns, bridges, and dentures.</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700">
          Our prosthodontic treatments are designed to restore function and aesthetics. We offer personalized solutions including crowns, bridges, and dentures tailored to your needs.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Procedure</h2>
        <p className="text-gray-700">
          Treatments involve precise dental impressions, digital design, and the fabrication of restorations that fit perfectly and look natural.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Restores chewing function</li>
          <li>Enhances aesthetics</li>
          <li>Custom-fitted for comfort</li>
          <li>Long-lasting solutions</li>
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
