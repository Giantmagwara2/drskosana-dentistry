'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-brand-primary py-4">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-8 justify-center">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Services', href: '/services' },
              { name: 'Testimonials', href: '/testimonials' },
              { name: 'Gallery', href: '/gallery' },
              { name: 'Technology', href: '/technology' },
              { name: 'Contact', href: '/contact' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white hover:text-brand-light transition-colors"
                  aria-label={`Navigate to ${link.name}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-brand-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto">
            We'd love to hear from you. Contact us for appointments, inquiries, or any questions you might have.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-8">
                Get In Touch
              </h2>

              <div className="space-y-8">
                {[
                  {
                    icon: <Phone size={24} />,
                    title: 'Phone',
                    details: ['013 752 2757', 'Call us during business hours'],
                  },
                  {
                    icon: <Mail size={24} />,
                    title: 'Email',
                    details: ['info@drskosana.co.za', "We'll respond as soon as possible"],
                  },
                  {
                    icon: <MapPin size={24} />,
                    title: 'Location',
                    details: ['123 Dental Plaza, Pretoria, South Africa', 'Easily accessible with ample parking'],
                  },
                  {
                    icon: <Clock size={24} />,
                    title: 'Hours',
                    details: [
                      'Monday - Wednesday, Friday: 08:30 - 17:00',
                      'Thursday: 08:30 - 12:30',
                      'Saturday: 08:00 - 13:00',
                      'Sunday: Closed',
                    ],
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-brand-primary rounded-full p-3 text-white">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-primary mb-1">{item.title}</h3>
                      <p className="text-gray-600 mb-1">{item.details[0]}</p>
                      <p className="text-gray-500 text-sm">{item.details[1]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-brand-primary mb-6">
                  Send Us a Message
                </h2>
                <form>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <Input
                          type="text"
                          placeholder="Your first name"
                          className="w-full"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <Input
                          type="text"
                          placeholder="Your last name"
                          className="w-full"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="Your email address"
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        placeholder="Your phone number"
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea
                        placeholder="How can we help you?"
                        rows={5}
                        className="w-full"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-brand-primary text-white hover:bg-brand-primary/90"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-primary mb-4">
              Find Us
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're conveniently located in Pretoria, with easy access and ample parking.
            </p>
          </div>

          <div className="w-full h-96 bg-gray-200 rounded-lg relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.659569647523!2d28.20119337538037!3d-25.75601698740931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e955c6b4f8a6b5b%3A0x7b7b7b7b7b7b7b7b!2s123%20Dental%20Plaza%2C%20Pretoria!5e0!3m2!1sen!2sza!4v1635456789012"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}