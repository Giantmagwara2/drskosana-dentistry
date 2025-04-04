import Hero from '@/components/Hero';

export default function ServicesPage() {
  // Define services as an array for dynamic rendering
  const services = [
    {
      title: 'General Dentistry',
      description:
        'Comprehensive dental check-ups, cleanings, and preventive care to maintain your oral health.',
      icon: '/images/icons/general-dentistry.svg', // Replace with actual icon path
    },
    {
      title: 'Cosmetic Dentistry',
      description:
        'Enhance your smile with teeth whitening, veneers, and other cosmetic treatments.',
      icon: '/images/icons/cosmetic-dentistry.svg', // Replace with actual icon path
    },
    {
      title: 'Orthodontics',
      description:
        'Straighten your teeth with braces or clear aligners for a confident smile.',
      icon: '/images/icons/orthodontics.svg', // Replace with actual icon path
    },
    {
      title: 'Pediatric Dentistry',
      description:
        'Specialized dental care for children, ensuring a comfortable and positive experience.',
      icon: '/images/icons/pediatric-dentistry.svg', // Replace with actual icon path
    },
    {
      title: 'Periodontics',
      description:
        'Treatment for gum diseases and maintenance of periodontal health.',
      icon: '/images/icons/periodontics.svg', // Replace with actual icon path
    },
    {
      title: 'Implant Dentistry',
      description:
        'Restore missing teeth with durable and natural-looking dental implants.',
      icon: '/images/icons/implant-dentistry.svg', // Replace with actual icon path
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-8">Our Services</h1>
        <p className="text-lg text-gray-600 mb-8">
          At Dr. P.I Skosana's practice, we offer a range of dental services to meet your needs. Explore our offerings below:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="service-card-overlay flex justify-center items-center h-32 bg-brand-light rounded-lg mb-4">
                <img
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="service-title text-xl font-bold text-brand-primary mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}