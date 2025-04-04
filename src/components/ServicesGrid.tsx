'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Services data
const services = [
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    image: 'https://ext.same-assets.com/663227978/713766770.jpeg',
    description:
      'Enhance your smile with teeth whitening, veneers, and other cosmetic treatments.',
    href: '/services/cosmetic-dentistry',
  },
  {
    id: 'dental-restorations',
    title: 'Dental Restorations',
    image: 'https://ext.same-assets.com/663227978/1839654736.jpeg',
    description:
      'Restore your smile with custom solutions including fillings, crowns, and bridges.',
    href: '/services/dental-restorations',
  },
  {
    id: 'endodontics',
    title: 'Endodontics',
    image: 'https://ext.same-assets.com/663227978/1088353602.jpeg',
    description:
      'Save your natural teeth with advanced root canal treatments.',
    href: '/services/endodontics',
  },
  {
    id: 'laser-dentistry',
    title: 'Laser Dentistry',
    image: 'https://ext.same-assets.com/663227978/3518642573.jpeg',
    description:
      'Experience minimally invasive dental treatments using laser technology.',
    href: '/services/laser-dentistry',
  },
  {
    id: 'oral-surgery',
    title: 'Oral Surgery',
    image: 'https://ext.same-assets.com/663227978/1351361799.jpeg',
    description:
      'Expert surgical procedures to address complex dental issues.',
    href: '/services/oral-surgery',
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    image: 'https://ext.same-assets.com/663227978/3696077145.jpeg',
    description:
      'Straighten your teeth with braces or clear aligners for a confident smile.',
    href: '/services/orthodontics',
  },
  {
    id: 'paediatric-dentistry',
    title: 'Paediatric Dentistry',
    image: 'https://ext.same-assets.com/663227978/4160880848.jpeg',
    description:
      'Specialized dental care for children ensuring a positive experience.',
    href: '/services/paediatric-dentistry',
  },
  {
    id: 'periodontics',
    title: 'Periodontics',
    image: 'https://ext.same-assets.com/663227978/1644989503.jpeg',
    description:
      'Manage gum diseases with specialized treatments for healthy gums.',
    href: '/services/periodontics',
  },
  {
    id: 'preventative-dentistry',
    title: 'Preventative Dentistry',
    image: 'https://ext.same-assets.com/663227978/3783852295.jpeg',
    description:
      'Maintain oral health with regular check-ups, cleanings, and patient education.',
    href: '/services/preventative-dentistry',
  },
  {
    id: 'prosthodontics',
    title: 'Prosthodontics',
    image: 'https://ext.same-assets.com/663227978/3110383078.jpeg',
    description:
      'Restore function and aesthetics with crowns, bridges, and dentures.',
    href: '/services/prosthodontics',
  },
  {
    id: 'sports-dentistry',
    title: 'Sports Dentistry',
    image: 'https://ext.same-assets.com/663227978/500898923.jpeg',
    description:
      'Protect your smile during athletic activities with custom-fitted mouthguards.',
    href: '/services/sports-dentistry',
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-white">
      {/* Header Section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="uppercase text-sm tracking-wider font-montserrat text-brand-primary mb-2">
            Services
          </div>
          <h2 className="text-3xl font-bold text-brand-primary mb-4">
            What Dental Excellence Can Do For You
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto font-montserrat">
            Using the most advanced digital technology and equipment, Dental Excellence
            aims to give service worth smiling about.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="relative h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity">
                  <span className="uppercase font-montserrat text-sm">
                    View Service
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-brand-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link href={service.href}>
                  <Button className="bg-brand-primary text-white hover:bg-brand-primary/90 w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}