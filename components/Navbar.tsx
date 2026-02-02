'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Compounding', href: '/services/compounding' },
      { name: 'Weight Loss', href: '/services/weight-loss' },
      { name: 'Dermatology', href: '/services/dermatology' },
      { name: 'Sexual Health', href: '/services/sexual-health' },
      { name: 'Free Delivery', href: '/services/delivery' },
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-cedar rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-[18px]">C</span>
              </div>
              <div>
                <span className={`font-display font-bold text-[20px] ${
                  isScrolled ? 'text-cedar' : 'text-cedar'
                }`}>
                  CedarRX
                </span>
                <span className={`hidden sm:block text-[11px] font-sans ${
                  isScrolled ? 'text-neutral-text' : 'text-neutral-text'
                }`}>
                  Compounding Pharmacy
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className={`flex items-center gap-1 font-sans text-[15px] font-medium transition-colors ${
                      isScrolled 
                        ? 'text-neutral-dark hover:text-cedar' 
                        : 'text-neutral-dark hover:text-cedar'
                    }`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        className="absolute top-full left-0 pt-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="bg-white rounded-xl shadow-lg border border-neutral-border overflow-hidden min-w-[200px]">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block px-5 py-3 text-[14px] font-sans text-neutral-dark hover:bg-cream hover:text-cedar transition-colors"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:208-329-7811"
                className={`flex items-center gap-2 font-sans text-[14px] font-medium transition-colors ${
                  isScrolled 
                    ? 'text-neutral-dark hover:text-cedar' 
                    : 'text-neutral-dark hover:text-cedar'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>208-329-7811</span>
              </a>
              <a
                href="/refill"
                className="bg-cedar text-white px-5 py-2.5 rounded-lg font-sans text-[14px] font-semibold hover:bg-cedar-forest transition-colors"
              >
                Refill Rx
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-neutral-dark' : 'text-neutral-dark'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-neutral-text hover:text-cedar"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-2">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <a
                        href={link.href}
                        className="block px-4 py-3 font-sans text-[16px] font-medium text-neutral-dark hover:text-cedar hover:bg-cream rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                      {link.dropdown && (
                        <div className="pl-4 space-y-1 mt-1">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-2 font-sans text-[14px] text-neutral-text hover:text-cedar hover:bg-cream rounded-lg transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* CTA Section */}
                <div className="mt-8 pt-8 border-t border-neutral-border space-y-4">
                  <a
                    href="tel:208-329-7811"
                    className="flex items-center gap-3 px-4 py-3 font-sans text-[15px] font-medium text-neutral-dark hover:text-cedar transition-colors"
                  >
                    <Phone className="w-5 h-5 text-cedar" />
                    <span>208-329-7811</span>
                  </a>
                  <a
                    href="/refill"
                    className="block w-full text-center bg-cedar text-white px-6 py-3 rounded-lg font-sans text-[15px] font-semibold hover:bg-cedar-forest transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Refill Prescription
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}
