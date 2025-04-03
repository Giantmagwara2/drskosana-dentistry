'use client';

import Link from 'next/link';

// Services data
const services = [
  {
    id: 'endodontics',
    title: 'Endodontics',
    image: 'https://ext.same-assets.com/663227978/1088353602.jpeg',
    href: '/services/endodontics'
  },
  {
    id: 'prosthodontics',
    title: 'Prosthodontics',
    image: 'https://ext.same-assets.com/663227978/3110383078.jpeg',
    href: '/services/prosthodontics'
  },
  {
    id: 'paediatric-dentistry',
    title: 'Paediatric Dentistry',
    image: 'https://ext.same-assets.com/663227978/4160880848.jpeg',
    href: '/services/paediatric-dentistry'
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    image: 'https://ext.same-assets.com/663227978/713766770.jpeg',
    href: '/services/cosmetic-dentistry'
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    image: 'https://ext.same-assets.com/663227978/3696077145.jpeg',
    href: '/services/orthodontics'
  },
  {
    id: 'preventative-dentistry',
    title: 'Preventative Dentistry',
    image: 'https://ext.same-assets.com/663227978/3783852295.jpeg',
    href: '/services/preventative-dentistry'
  },
  {
    id: 'periodontics',
    title: 'Periodontics',
    image: 'https://ext.same-assets.com/663227978/1644989503.jpeg',
    href: '/services/periodontics'
  },
  {
    id: 'sports-dentistry',
    title: 'Sports Dentistry',
    image: 'https://ext.same-assets.com/663227978/500898923.jpeg',
    href: '/services/sports-dentistry'
  },
  {
    id: 'oral-surgery',
    title: 'Oral Surgery',
    image: 'https://ext.same-assets.com/663227978/1351361799.jpeg',
    href: '/services/oral-surgery'
  },
  {
    id: 'dental-restorations',
    title: 'Dental Restorations',
    image: 'https://ext.same-assets.com/663227978/1839654736.jpeg',
    href: '/services/dental-restorations'
  },
  {
    id: 'laser-dentistry',
    title: 'Laser Dentistry',
    image: 'https://ext.same-assets.com/663227978/3518642573.jpeg',
    href: '/services/laser-dentistry'
  }
];

export default function ServicesGrid() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="uppercase text-sm tracking-wider font-montserrat text-brand-primary mb-2">Services</div>
          <h2 className="text-3xl font-bold text-brand-primary mb-4">
            WHAT DENTAL EXCELLENCE CAN DO FOR YOU
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto font-montserrat">
            Using the most advanced digital technology and equipment Dental Excellence
            aims to give service worth smiling about.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link key={service.id} href={service.href}>
              <div className="service-card rounded-lg overflow-hidden shadow-md">
                <div className="relative h-56">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="service-card-overlay">
                    <div className="text-white text-center">
                      <span className="uppercase font-montserrat text-sm">View Service</span>
                    </div>
                  </div>
                  <div className="service-title">{service.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
