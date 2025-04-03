import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Endodontics | Dr. P. Skosana Dental Excellence',
  description: 'Learn about our advanced endodontic treatments to save natural teeth and relieve pain.',
};

export default function EndodonticsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-brand-primary">Endodontics</h1>
        <p className="text-gray-600 mt-2">Save your natural teeth with our advanced root canal treatments.</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700">
          Our endodontic treatments focus on treating the dental pulp and saving natural teeth. Using state-of-the-art technology, we perform root canal procedures that relieve pain and prevent further damage.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Procedure</h2>
        <p className="text-gray-700">
          The procedure involves removing infected pulp, cleaning and disinfecting the canal, and finally filling and sealing it to prevent re-infection.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Relieves tooth pain</li>
          <li>Preserves natural tooth structure</li>
          <li>Prevents further infection</li>
          <li>Improves overall oral health</li>
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
