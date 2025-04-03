import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cosmetic Dentistry | Dr. P. Skosana Dental Excellence',
  description: 'Transform your smile with our cosmetic dentistry services including teeth whitening, veneers, and more.',
};

export default function CosmeticDentistryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-brand-primary">Cosmetic Dentistry</h1>
        <p className="text-gray-600 mt-2">Enhance your smile with our range of cosmetic treatments.</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700">
          Our cosmetic dentistry services are designed to improve the appearance of your smile. Whether you need teeth whitening, veneers, or bonding, we offer personalized solutions to boost your confidence.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Procedure</h2>
        <p className="text-gray-700">
          Treatments begin with a thorough consultation, followed by customized procedures that cater to your individual needs and aesthetic goals.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Improved appearance</li>
          <li>Boost in self-confidence</li>
          <li>Long-lasting results</li>
          <li>Minimally invasive procedures</li>
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
