'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

// Navigation links configuration
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Technology', href: '/technology' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Fix hydration issues by ensuring client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-brand-primary py-2 px-4 text-white hidden md:flex">
        <div className="container mx-auto flex justify-between items-center">
          {/* Contact Details */}
          <div className="flex space-x-6">
            <a
              href="tel:+27123456789"
              className="contact-info text-sm flex items-center space-x-2"
              aria-label="Call us at +27 12 345 6789"
            >
              <Phone size={16} />
              <span>+27 12 345 6789</span>
            </a>
            <a
              href="mailto:info@drskhosana.co.za"
              className="contact-info text-sm flex items-center space-x-2"
              aria-label="Email us at info@drskhosana.co.za"
            >
              <Mail size={16} />
              <span>info@drskhosana.co.za</span>
            </a>
          </div>

          {/* Address */}
          <div className="contact-info text-sm flex items-center space-x-2">
            <MapPin size={16} />
            <span>123 Dental Plaza, Pretoria, South Africa</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
          {/* Logo */}
          <Link href="/" className="focus:outline-none" aria-label="Homepage">
            <Logo variant="dark" showTagline={true} />
          </Link>

          {/* Desktop Navigation */}
          {isClient && (
            <nav role="navigation" aria-label="Main Navigation" className="hidden md:flex space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-montserrat px-3 py-2 text-sm uppercase tracking-wide text-gray-700 hover:text-brand-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  aria-label={`Navigate to ${link.name}`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                className="bg-brand-primary text-white hover:bg-brand-primary/90 ml-2 uppercase text-sm font-montserrat focus:outline-none focus:ring-2 focus:ring-brand-primary"
                aria-label="Book an appointment"
              >
                Book Appointment
              </Button>
            </nav>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-gray-700 hover:text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 border-t border-gray-200">
            <nav role="navigation" aria-label="Mobile Navigation" className="flex flex-col space-y-2">
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-montserrat py-2 text-sm uppercase text-gray-700 hover:text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                  aria-label={`Navigate to ${link.name}`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Book Appointment Button */}
              <div className="pt-4">
                <Button
                  className="w-full bg-brand-primary text-white hover:bg-brand-primary/90 uppercase text-sm font-montserrat focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  aria-label="Book an appointment"
                >
                  Book Appointment
                </Button>
              </div>

              {/* Contact Details in Mobile View */}
              <div className="pt-4 space-y-2">
                <a
                  href="tel:+27123456789"
                  className="contact-info text-sm text-gray-700 flex items-center space-x-2"
                  aria-label="Call us at +27 12 345 6789"
                >
                  <Phone size={16} />
                  <span>+27 12 345 6789</span>
                </a>
                <a
                  href="mailto:info@drskhosana.co.za"
                  className="contact-info text-sm text-gray-700 flex items-center space-x-2"
                  aria-label="Email us at info@drskhosana.co.za"
                >
                  <Mail size={16} />
                  <span>info@drskhosana.co.za</span>
                </a>
                <div className="contact-info text-sm text-gray-700 flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>123 Dental Plaza, Pretoria, South Africa</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}