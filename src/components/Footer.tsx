'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="bg-brand-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div>
              <div className="mb-6">
                <Logo variant="light" showTagline={true} />
              </div>
              <div className="space-y-4">
                <a href="tel:+27123456789" className="contact-info">
                  <Phone size={20} />
                  <span>+27 12 345 6789</span>
                </a>
                <div className="contact-info">
                  <Mail size={20} />
                  <a href="mailto:info@drskhosana.co.za">info@drskhosana.co.za</a>
                </div>
                <div className="contact-info">
                  <MapPin size={20} />
                  <span>123 Dental Plaza, Pretoria, South Africa</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 font-playfair">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-brand-accent transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-brand-accent transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-brand-accent transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-brand-accent transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-brand-accent transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-brand-accent transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-xl font-bold mb-6 font-playfair">Opening Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Wednesday, Friday</span>
                  <span>08:30 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Thursday</span>
                  <span>08:30 - 12:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>08:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>CLOSED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-brand-primary bg-opacity-90 py-4 text-white text-center text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {currentYear} Dr. P. Skhosana. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-brand-accent transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-brand-accent transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
