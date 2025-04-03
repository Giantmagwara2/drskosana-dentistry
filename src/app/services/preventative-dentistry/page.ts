import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preventative Dentistry | Dr. P. Skosana Dental Excellence',
  description: 'Maintain your oral health with our comprehensive preventative dentistry services including regular check-ups and cleanings.',
};

export default function PreventativeDentistryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-brand-primary">Preventative Dentistry</h1>
        <p className="text-gray-600 mt-2">Keep your smile healthy with regular dental check-ups and cleanings.</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700">
          Preventative dentistry focuses on maintaining oral health through routine examinations, cleanings, and patient education.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Procedure</h2>
        <p className="text-gray-700">
          Our approach includes regular dental check-ups, professional cleanings, and personalized advice to prevent dental issues before they arise.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Early detection of problems</li>
          <li>Long-term oral health</li>
          <li>Prevention of cavities and gum disease</li>
          <li>Personalized care and advice</li>
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
