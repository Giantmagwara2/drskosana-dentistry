// src/app/technology/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Dental Technology | Dr. P.I Skosana',
  description:
    'Discover the advanced dental technologies and treatments offered by Dr. P.I Skosana for optimal oral health.',
};

// Define technology features as an array for dynamic rendering
const technologyFeatures = [
  {
    title: 'Digital X-Rays',
    description:
      'Our digital X-ray system reduces radiation exposure and provides immediate, clear images for accurate diagnoses.',
  },
  {
    title: 'Intraoral Cameras',
    description:
      'Intraoral cameras allow us to capture detailed images inside your mouth, enhancing patient education and treatment planning.',
  },
  {
    title: 'Laser Dentistry',
    description:
      'Laser technology enables precise and minimally invasive treatments, promoting faster healing and reduced discomfort.',
  },
  {
    title: 'CAD/CAM Systems',
    description:
      'Computer-Aided Design and Computer-Aided Manufacturing (CAD/CAM) systems allow for same-day restorations, improving convenience and efficiency.',
  },
];

export default function TechnologyPage() {
  return (
    <div className="technology-page bg-brand-light py-16">
      {/* Header Section */}
      <header className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-4">
          Advanced Dental Technology
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At Dr. P.I Skosana's practice, we utilize the latest dental technologies to provide our patients with the highest quality care.
        </p>
      </header>

      {/* Technology Features Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologyFeatures.map((feature, index) => (
            <div
              key={index}
              className="feature bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              <h2 className="text-xl font-bold text-brand-primary mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-brand-primary text-center mb-8">
          Benefits of Our Technology
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
          {[
            'Enhanced diagnostic accuracy',
            'Minimally invasive procedures',
            'Reduced treatment times',
            'Improved patient comfort',
            'Comprehensive patient education',
          ].map((benefit, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-brand-primary">✓</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section className="container mx-auto px-4 mt-16 text-center">
        <p className="text-lg text-gray-600 mb-6">
          Ready to experience the benefits of advanced dental technology?
        </p>
        <Link href="/contact">
          <Button className="bg-brand-primary text-white hover:bg-brand-primary/90">
            Schedule Your Appointment
          </Button>
        </Link>
      </section>
    </div>
  );
}