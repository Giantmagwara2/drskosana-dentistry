import Hero from '@/components/Hero';

export default function TestimonialsPage() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-8">Patient Testimonials</h1>
        <p className="text-lg text-gray-600 mb-8">
          Hear from our satisfied patients about their experiences with Dr. P. Skosana and our team.
        </p>
        <div className="space-y-12">
          {/* Testimonial 1 */}
          <div className="testimonial">
            <p className="text-lg text-gray-800 mb-4">
              "Dr. Skosana transformed my smile! The staff is friendly, and the service is exceptional."
            </p>
            <p className="text-gray-600">- Jane D.</p>
          </div>
          {/* Testimonial 2 */}
          <div className="testimonial">
            <p className="text-lg text-gray-800 mb-4">
              "I had a fear of dentists, but Dr. Skosana made me feel comfortable throughout the procedure."
            </p>
            <p className="text-gray-600">- John S.</p>
          </div>
          {/* Testimonial 3 */}
          <div className="testimonial">
            <p className="text-lg text-gray-800 mb-4">
              "Professional and caring staff. Highly recommend for anyone seeking quality dental care."
            </p>
            <p className="text-gray-600">- Emily R.</p>
          </div>
        </div>
      </div>
    </>
  );
}
