import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Laser Dentistry | Dr. P. Skosana Dental Excellence',
  description: 'Experience minimally invasive dental treatments with our cutting-edge laser dentistry services.',
};

export default function LaserDentistryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-brand-primary">Laser Dentistry</h1>
        <p className="text-gray-600 mt-2">Benefit from precise and minimally invasive dental treatments using laser technology.</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700">
          Laser dentistry uses state-of-the-art laser technology to perform various dental procedures with enhanced precision and reduced discomfort.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Procedure</h2>
        <p className="text-gray-700">
          Treatments may include laser gum surgery, cavity treatment, and teeth whitening, all designed to minimize tissue damage and promote faster healing.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Minimally invasive treatments</li>
          <li>Reduced pain and discomfort</li>
          <li>Faster recovery times</li>
          <li>Enhanced precision in treatment</li>
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
