import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sports Dentistry | Dr. P. Skosana Dental Excellence',
  description: 'Protect your smile during athletic activities with our specialized sports dentistry services.',
};

export default function SportsDentistryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-brand-primary">Sports Dentistry</h1>
        <p className="text-gray-600 mt-2">Keep your smile safe on and off the field with our tailored sports dentistry solutions.</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700">
          Sports dentistry focuses on preventing and managing dental injuries for athletes. Our team works to protect your teeth during high-impact activities.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Procedure</h2>
        <p className="text-gray-700">
          We provide custom-fitted mouthguards and advice on dental care specific to sports-related activities.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Prevents dental trauma</li>
          <li>Customized protection</li>
          <li>Enhances performance with peace of mind</li>
          <li>Comprehensive dental care for athletes</li>
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
