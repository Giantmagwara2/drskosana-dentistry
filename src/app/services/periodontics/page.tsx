import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Periodontics | Dr. P. Skosana Dental Excellence',
  description: 'Manage and treat gum diseases with our specialized periodontic services for healthy gums and supporting structures.',
};

export default function PeriodonticsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-brand-primary">Periodontics</h1>
        <p className="text-gray-600 mt-2">Protect your gums with our expert treatment for periodontal disease.</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700">
          Periodontics involves the prevention, diagnosis, and treatment of gum disease. Our treatments are designed to preserve the integrity of your gums and bone structure.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Procedure</h2>
        <p className="text-gray-700">
          Treatments include scaling and root planing, surgical interventions if necessary, and ongoing maintenance to prevent disease progression.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Reduces gum inflammation</li>
          <li>Prevents tooth loss</li>
          <li>Improves overall oral health</li>
          <li>Enhances the appearance of your smile</li>
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
