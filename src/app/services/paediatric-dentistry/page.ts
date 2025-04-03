import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paediatric Dentistry | Dr. P. Skosana Dental Excellence',
  description: 'Specialized dental care for children ensuring a positive and comfortable experience.',
};

export default function PaediatricDentistryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-brand-primary">Paediatric Dentistry</h1>
        <p className="text-gray-600 mt-2">Caring for your child's smile from infancy to adolescence.</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700">
          Our paediatric dentistry services focus on providing gentle, compassionate care for children. We create a friendly and stress-free environment to ensure every visit is positive.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Procedure</h2>
        <p className="text-gray-700">
          Procedures are tailored to each child's needs, from routine check-ups and cleanings to early interventions and preventive treatments.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Early detection of dental issues</li>
          <li>Preventive care for long-term health</li>
          <li>Comfortable and friendly environment</li>
          <li>Customized care plans</li>
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
