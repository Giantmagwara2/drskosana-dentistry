'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CtaBanner from '@/components/CtaBanner';

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-brand-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto">
            Meet Dr. P. Skhosana and learn about our commitment to providing exceptional dental care.
          </p>
        </div>
      </div>

      {/* About Dr. Skhosana Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-96 bg-gray-200 rounded-lg relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Doctor Profile Image
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-6">
                Dr. P. Skhosana
              </h2>
              <p className="text-gray-600 mb-4">
                After completing her dental education and training, Dr. Skhosana has dedicated her career to providing exceptional dental care for patients of all ages. With a passion for creating beautiful smiles, she continuously expands her knowledge and skills through advanced courses in various dental specialties.
              </p>
              <p className="text-gray-600 mb-4">
                Dr. Skhosana has attended extensive training in the latest dental techniques and technologies, including Zoom Teeth Whitening, Myobrace, CAD/CAM dentistry, and other advanced procedures. This commitment to continuing education ensures that her patients receive the most up-to-date and effective treatments available.
              </p>
              <p className="text-gray-600 mb-8">
                With a gentle approach and dedication to patient comfort, Dr. Skhosana creates a welcoming environment where patients can feel at ease. She believes in taking the time to understand each patient's unique needs and concerns, developing personalized treatment plans that deliver optimal results.
              </p>
              <div className="italic text-brand-primary mb-8">
                "Your smile is our passion - The prettiest thing you can wear is your smile."
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision & Mission */}
      <div className="py-16 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-primary mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Dental Excellence, we are committed to providing the highest quality dental care in a comfortable, welcoming environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-brand-primary mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To be the leading dental practice known for exceptional care, innovative treatments, and beautiful, healthy smiles. We envision a community where dental anxiety is replaced with confidence, and everyone has access to the dental care they deserve.
              </p>
              <p className="text-gray-600">
                We strive to create an environment where patients of all ages feel comfortable, respected, and valued, fostering long-term relationships built on trust and exceptional results.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-brand-secondary mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To deliver personalized, comprehensive dental care using the latest technologies and techniques, ensuring optimal oral health and beautiful smiles for all our patients. We are committed to continuous education and implementing advanced dental practices.
              </p>
              <p className="text-gray-600">
                We aim to provide a positive dental experience that exceeds expectations, educating our patients about oral health while delivering treatments with compassion, integrity, and the highest standards of excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
              Our Approach to Dental Care
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-2">Patient-Centered Focus</h3>
                <p className="text-gray-600">
                  We place our patients at the center of everything we do. By listening carefully to your concerns and goals, we develop personalized treatment plans that address your specific needs and preferences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-2">Comprehensive Care</h3>
                <p className="text-gray-600">
                  From preventive cleanings to advanced restorative and cosmetic treatments, we offer a wide range of services to meet all your dental needs under one roof. Our comprehensive approach ensures continuity of care and consistent results.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-2">Advanced Technology</h3>
                <p className="text-gray-600">
                  We invest in state-of-the-art dental technology to enhance diagnosis, improve treatment precision, and ensure your comfort. Digital imaging, laser treatments, and CAD/CAM technology are just some of the advanced tools we utilize.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-2">Gentle Touch</h3>
                <p className="text-gray-600">
                  We understand that dental visits can cause anxiety for many people. Our gentle approach, combined with amenities designed for your comfort, helps create a relaxing experience. We take the time to ensure you feel at ease throughout your visit.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link href="/contact">
                <Button className="bg-brand-primary text-white hover:bg-brand-primary/90">
                  Schedule Your Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CtaBanner />
    </>
  );
}
