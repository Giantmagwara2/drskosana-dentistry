'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
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

      {/* Contact Information & Form */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-8">
                Get In Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-primary rounded-full p-3 text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-primary mb-1">Phone</h3>
                    <p className="text-gray-600 mb-1">+27 12 345 6789</p>
                    <p className="text-gray-500 text-sm">Call us during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-primary rounded-full p-3 text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-primary mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">info@drskhosana.co.za</p>
                    <p className="text-gray-500 text-sm">We'll respond as soon as possible</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-primary rounded-full p-3 text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-primary mb-1">Location</h3>
                    <p className="text-gray-600 mb-1">123 Dental Plaza, Pretoria, South Africa</p>
                    <p className="text-gray-500 text-sm">Easily accessible with ample parking</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-primary rounded-full p-3 text-white">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-primary mb-1">Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Wednesday, Friday: 08:30 - 17:00</p>
                      <p>Thursday: 08:30 - 12:30</p>
                      <p>Saturday: 08:00 - 13:00</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
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
                      />
                    </div>
                    <Button type="submit" className="w-full bg-brand-primary text-white hover:bg-brand-primary/90">
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
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg">
              Google Map Embed Would Go Here
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
