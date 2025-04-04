import Hero from '@/components/Hero';

export default function TestimonialsPage() {
  // Define testimonials as an array for dynamic rendering
  const testimonials = [
    {
      quote:
        "Dr. Skosana transformed my smile! The staff is friendly, and the service is exceptional.",
      author: "Jane D.",
    },
    {
      quote:
        "I had a fear of dentists, but Dr. Skosana made me feel comfortable throughout the procedure.",
      author: "John S.",
    },
    {
      quote:
        "Professional and caring staff. Highly recommend for anyone seeking quality dental care.",
      author: "Emily R.",
    },
    {
      quote:
        "The entire experience was seamless, from booking to treatment. Thank you, Dr. Skosana!",
      author: "Sarah L.",
    },
    {
      quote:
        "Dr. Skosana's expertise and gentle approach made all the difference. My teeth have never looked better!",
      author: "Michael T.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-8">
          Patient Testimonials
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Hear from our satisfied patients about their experiences with Dr. P.
          Skosana and our team.
        </p>

        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <p className="text-lg text-gray-800 mb-4">"{testimonial.quote}"</p>
              <p className="text-gray-600">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}