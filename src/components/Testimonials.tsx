'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "I've always been anxious about dental visits, but Dr. Skosana and her team made me feel completely at ease. The care was gentle, thorough, and professional. I'm actually looking forward to my next check-up!",
    author: 'John Mokoena',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    quote:
      "My kids ENJOY going to the Dentist...weird I know...thanks to this practice. Dr. Skosana is wonderful with children. The entire team is warm, lovely and works with you to find a time that suits your schedule.",
    author: 'Sarah Naidoo',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    quote:
      "The dental implants I received from Dr. Skosana have completely transformed my smile and my confidence. The procedure was explained clearly, and the results are amazing. I can't thank the team enough!",
    author: 'David Mbeki',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
  },
  {
    id: 4,
    quote:
      "I had an emergency with a broken tooth and Dr. Skosana's practice fit me in immediately. The repair is flawless and you can't tell the difference between the fixed tooth and my natural ones. Excellent service!",
    author: 'Priya Govender',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-primary mb-2">TESTIMONIALS</h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 text-brand-primary hover:bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Current Testimonial */}
          <div className="bg-white rounded-lg shadow-md p-8 mx-10">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Image */}
              <div className="md:w-1/4 flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={`Profile of ${testimonials[currentTestimonial].author}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="md:w-3/4">
                <blockquote className="text-gray-700 text-lg italic mb-4">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="font-bold text-brand-primary text-lg">
                  {testimonials[currentTestimonial].author}
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 text-brand-primary hover:bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-primary"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link href="/testimonials" passHref legacyBehavior>
            <Button className="bg-brand-primary text-white hover:bg-brand-primary/90 uppercase font-montserrat tracking-wide">
              VIEW ALL
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}