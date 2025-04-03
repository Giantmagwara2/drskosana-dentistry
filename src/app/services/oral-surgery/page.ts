import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Oral Surgery | Dr. P. Skosana Dental Excellence',
  description: 'Our oral surgery services offer safe and effective treatments for complex dental issues.',
};

export default function OralSurgeryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-brand-primary">Oral Surgery</h1>
        <p className="text-gray-600 mt-2">Expert surgical procedures to address complex dental issues.</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700">
          Our oral surgery services include extractions, corrective jaw surgery, and other surgical interventions performed by experienced specialists.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Procedure</h2>
        <p className="text-gray-700">
          Each procedure is tailored to the patient's specific needs with a focus on safety, comfort, and optimal recovery.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Minimally invasive techniques</li>
          <li>Expert surgical care</li>
          <li>Improved functionality and comfort</li>
          <li>Comprehensive post-operative support</li>
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
