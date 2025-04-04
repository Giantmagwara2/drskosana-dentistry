import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Endodontics | Dr. P. Skosana Dental Excellence',
  description:
    'Learn about our advanced endodontic treatments to save natural teeth and relieve pain.',
};

export default function EndodonticsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-brand-primary mb-2">
          Endodontics
        </h1>
        <p className="text-gray-600">
          Save your natural teeth with our advanced root canal treatments.
        </p>
      </header>

      {/* Overview Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand-primary mb-4">
          Overview
        </h2>
        <p className="text-gray-700">
          Our endodontic treatments focus on treating the dental pulp and saving
          natural teeth. Using state-of-the-art technology, we perform root
          canal procedures that relieve pain and prevent further damage.
        </p>
      </section>

      {/* Procedure Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand-primary mb-4">
          Procedure
        </h2>
        <p className="text-gray-700">
          The procedure involves removing infected pulp, cleaning and
          disinfecting the canal, and finally filling and sealing it to prevent
          re-infection.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-brand-primary mb-4">
          Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Relieves tooth pain</li>
          <li>Preserves natural tooth structure</li>
          <li>Prevents further infection</li>
          <li>Improves overall oral health</li>
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