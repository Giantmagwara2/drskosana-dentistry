import Hero from '@/components/Hero';

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-8">Our Services</h1>
        <p className="text-lg text-gray-600 mb-8">
          At Dr. P. Skosana's practice, we offer a range of dental services to meet your needs. Explore our offerings below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="service-card">
            <div className="service-card-overlay">
              {/* Add icon or image here */}
            </div>
            <h3 className="service-title">General Dentistry</h3>
            <p className="text-gray-600">
              Comprehensive dental check-ups, cleanings, and preventive care to maintain your oral health.
            </p>
          </div>
          {/* Service 2 */}
          <div className="service-card">
            <div className="service-card-overlay">
              {/* Add icon or image here */}
            </div>
            <h3 className="service-title">Cosmetic Dentistry</h3>
            <p className="text-gray-600">
              Enhance your smile with teeth whitening, veneers, and other cosmetic treatments.
            </p>
          </div>
          {/* Service 3 */}
          <div className="service-card">
            <div className="service-card-overlay">
              {/* Add icon or image here */}
            </div>
            <h3 className="service-title">Orthodontics</h3>
            <p className="text-gray-600">
              Straighten your teeth with braces or clear aligners for a confident smile.
            </p>
          </div>
          {/* Service 4 */}
          <div className="service-card">
            <div className="service-card-overlay">
              {/* Add icon or image here */}
            </div>
            <h3 className="service-title">Pediatric Dentistry</h3>
            <p className="text-gray-600">
              Specialized dental care for children, ensuring a comfortable and positive experience.
            </p>
          </div>
          {/* Service 5 */}
          <div className="service-card">
            <div className="service-card-overlay">
              {/* Add icon or image here */}
            </div>
            <h3 className="service-title">Periodontics</h3>
            <p className="text-gray-600">
              Treatment for gum diseases and maintenance of periodontal health.
            </p>
          </div>
          {/* Service 6 */}
          <div className="service-card">
            <div className="service-card-overlay">
              {/* Add icon or image here */}
            </div>
            <h3 className="service-title">Implant Dentistry</h3>
            <p className="text-gray-600">
              Restore missing teeth with durable and natural-looking dental implants.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
