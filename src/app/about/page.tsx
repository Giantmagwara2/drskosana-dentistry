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
            Meet Dr. P.I. Skosana and learn about our commitment to providing exceptional dental care.
          </p>
        </div>
      </div>

      {/* About Dr. Skosana Section */}
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
                Dr. P.I. Skosana
              </h2>
              <p className="text-gray-600 font-medium">
                Practice # 0157465 | HPC SA Nr.0082 325
              </p>
              <p className="text-gray-600 mb-4">
                BDS (MEDUNSA) | Dip Ortho (UWC)
              </p>
              <p className="text-gray-600 mb-4">
                After completing his dental education and training, Dr. Skosana has dedicated his career to providing exceptional dental care for patients of all ages. With a passion for creating beautiful smiles, he continuously expands his knowledge and skills through advanced courses in various dental specialties.
              </p>
              <p className="text-gray-600 mb-4">
                Dr. Skosana has attended extensive training in the latest dental techniques and technologies, including Zoom Teeth Whitening, Myobrace, CAD/CAM dentistry, and other advanced procedures. This commitment to continuing education ensures that his patients receive the most up-to-date and effective treatments available.
              </p>
              <p className="text-gray-600 mb-8">
                With a gentle approach and dedication to patient comfort, Dr. Skosana creates a welcoming environment where patients can feel at ease. He believes in taking the time to understand each patient's unique needs and concerns, developing personalized treatment plans that deliver optimal results.
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
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-brand-secondary mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver personalized, comprehensive dental care using the latest technologies and techniques, ensuring optimal oral health and beautiful smiles for all our patients. We are committed to continuous education and implementing advanced dental practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Locations */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-primary text-center mb-8">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-brand-primary mb-2">Main Surgery</h3>
              <p className="text-gray-600">Office No 211 Upperground KaMkholo Building, Brown St, Mbombela, 1200</p>
              <p className="text-gray-600">Cell: <a href="https://wa.me/27835406225" className="text-brand-primary font-semibold">083 540 6225</a></p>
            </div>
            {/* Location 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-brand-primary mb-2">Kabokweni Branch</h3>
              <p className="text-gray-600">Shop 4 Kelly Complex, Kabokweni Road, Kabokweni, 1245, Mbombela</p>
              <p className="text-gray-600">Tel: +27 13 796 1691</p>
            </div>
            {/* Location 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-brand-primary mb-2">Msogwaba Branch</h3>
              <p className="text-gray-600">Qedusizi Medical Centre, Msogwaba Main Road, Msogwaba, Mbombela</p>
              <p className="text-gray-600">Phone: +27 81 441 7053</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="py-16 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-primary">Our Approach to Dental Care</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">Patient-Centered Focus</h3>
              <p className="text-gray-600">We prioritize personalized treatment for each patient.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">Advanced Technology</h3>
              <p className="text-gray-600">We use state-of-the-art dental technology for precision and comfort.</p>
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

      <CtaBanner />
    </>
  );
}
