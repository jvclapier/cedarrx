'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail, Facebook, Instagram } from 'lucide-react';

const config = {
  contact: {
    phone: '208-329-7811',
    fax: '866-291-0552',
    email: 'info@cedarrx.com',
    address: '1309 Blue Lakes Blvd. N',
    city: 'Twin Falls, ID 83301'
  },
  hours: {
    weekday: 'Mon - Fri: 9am - 6pm',
    weekend: 'Sat - Sun: Closed'
  },
  services: [
    { name: 'Compounding', href: '/services/compounding' },
    { name: 'Weight Loss', href: '/services/weight-loss' },
    { name: 'Dermatology', href: '/services/dermatology' },
    { name: 'ED Treatment', href: '/services/erectile-dysfunction' },
    { name: 'Home Delivery', href: '/services/home-delivery' },
  ],
  quickLinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Refill Prescription', href: '/refill' },
    { name: 'Transfer Prescription', href: '/transfer' },
    { name: 'Resources', href: '/resources' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ],
  social: [
    { name: 'Facebook', href: 'https://facebook.com/cedarrx', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/cedarrx', icon: Instagram },
  ]
};

export default function Footer() {
  return (
    <footer className="relative w-full bg-cedar-forest py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-cream text-[24px] font-bold mb-4">
              CedarRX
            </h3>
            <p className="text-cream/70 text-[14px] leading-relaxed mb-6">
              Your expert compounding pharmacy in Twin Falls, Idaho. Personalized medications for your unique health needs.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {config.social.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-cream/10 rounded-lg flex items-center justify-center text-cream hover:bg-cedar transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-cream text-[16px] font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {config.services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-cream/70 text-[14px] hover:text-cream transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream text-[16px] font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {config.quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-cream/70 text-[14px] hover:text-cream transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-cream text-[16px] font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-cream/70 text-[14px]">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>{config.contact.address}</div>
                  <div>{config.contact.city}</div>
                </div>
              </li>
              <li>
                <a 
                  href={`tel:${config.contact.phone}`}
                  className="flex items-center gap-2 text-cream/70 text-[14px] hover:text-cream transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {config.contact.phone}
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${config.contact.email}`}
                  className="flex items-center gap-2 text-cream/70 text-[14px] hover:text-cream transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {config.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-cream/70 text-[14px]">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>{config.hours.weekday}</div>
                  <div>{config.hours.weekend}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-cream/60 text-[14px] text-center md:text-left">
              © {new Date().getFullYear()} CedarRX. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6">
              {config.legal.map((link, index) => (
                <span key={link.name} className="flex items-center gap-6">
                  <a 
                    href={link.href}
                    className="text-cream/60 text-[14px] hover:text-cream transition-colors"
                  >
                    {link.name}
                  </a>
                  {index < config.legal.length - 1 && (
                    <span className="text-cream/30">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
