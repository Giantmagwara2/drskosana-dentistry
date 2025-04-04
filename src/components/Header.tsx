'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

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

  // Fix hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-brand-primary py-2 px-4 text-white hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="tel:+27123456789" className="contact-info text-sm flex items-center space-x-2">
              <Phone size={16} />
              <span>+27 12 345 6789</span>
            </a>
            <a href="mailto:info@drskhosana.co.za" className="contact-info text-sm flex items-center space-x-2">
              <Mail size={16} />
              <span>info@drskhosana.co.za</span>
            </a>
          </div>
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
          <Link href="/" className="focus:outline-none">
            <Logo variant="dark" showTagline={true} />
          </Link>

          {/* Desktop Navigation */}
          {isClient && (
            <nav role="navigation" aria-label="Main" className="hidden md:flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-montserrat px-3 py-2 text-sm uppercase tracking-wide text-gray-700 hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-brand-primary text-white hover:bg-brand-primary/90 ml-2 uppercase text-sm font-montserrat">
                Book Appointment
              </Button>
            </nav>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-gray-700 hover:text-brand-primary focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-2 px-4">
            <nav className="flex flex-col space-y-2" role="navigation" aria-label="Mobile Menu">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-montserrat py-2 text-sm uppercase text-gray-700 hover:text-brand-primary border-b border-gray-200"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-brand-primary text-white hover:bg-brand-primary/90 uppercase text-sm font-montserrat">
                  Book Appointment
                </Button>
              </div>
              <div className="py-4 space-y-2">
                <a href="tel:+27123456789" className="contact-info text-sm text-gray-700 flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+27 12 345 6789</span>
                </a>
                <a href="mailto:info@drskhosana.co.za" className="contact-info text-sm text-gray-700 flex items-center space-x-2">
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
