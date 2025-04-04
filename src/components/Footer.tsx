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
                <a href="tel:+27835406225" className="contact-info">
                  <Phone size={20} />
                  <span>+27 83 540 6225</span>
                </a>
                <a 
                  href="https://wa.me/27835406225" 
                  target="_blank" 
                  className="contact-info text-green-500 hover:text-green-600">
                  <span>WhatsApp Us</span>
                </a>
                <div className="contact-info">
                  <Mail size={20} />
                  <a href="mailto:info@drskhosana.co.za">info@drskhosana.co.za</a>
                </div>
                <div className="contact-info">
                  <MapPin size={20} />
                  <span>Office No 211, Upperground KaMkholo Building, Brown St, Mbombela, 1200</span>
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

            {/* Location and Credentials */}
            <div>
              <h3 className="text-xl font-bold mb-6 font-playfair">Dr. P.I. Skosana Credentials</h3>
              <div className="space-y-2">
                <div className="font-semibold">Practice # 0157465</div>
                <div className="font-semibold">HPC SA Nr.0082 325</div>
                <div className="font-semibold">BDS (MEDUNSA)</div>
                <div className="font-semibold">Dip Ortho (UWC)</div>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-4 font-playfair">Locations</h3>
              <div className="space-y-4">
                <div className="contact-info">
                  <MapPin size={20} />
                  <span>Office No 211, Upperground KaMkholo Building, Brown St, Mbombela, 1200</span>
                </div>
                <div className="contact-info">
                  <MapPin size={20} />
                  <span>Shop 4 Kelly Complex, Kabokweni Road, Kabokweni, 1245, Mbombela</span>
                </div>
                <div className="contact-info">
                  <MapPin size={20} />
                  <span>Qedusizi Medical Centre, Msogwaba Main Road, Msogwaba, Mbombela</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-brand-primary bg-opacity-90 py-4 text-white text-center text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {currentYear} Dr. P.I. Skosana. All rights reserved.</p>
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
