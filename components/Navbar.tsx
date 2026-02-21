'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks: { name: string; href: string; external?: boolean }[] = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Why CedarRX', href: '#why-cedarrx' },
  { name: 'Resources', href: '/resources', external: true },
  { name: 'Contact', href: '#footer' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Check if we're on the homepage
    if (window.location.pathname !== '/') {
      // Navigate to homepage with anchor
      window.location.href = '/' + href;
      return;
    }
    
    // On homepage, just scroll to the section
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <a href="/" className="flex items-center gap-3">
              <img 
                src="/images/cedar_logo_transparent.png"
                alt="CedarRX Logo"
                className="h-12 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={link.external ? undefined : (e) => handleNavClick(e, link.href)}
                  className={`font-sans text-[15px] font-medium transition-colors ${
                    isScrolled 
                      ? 'text-neutral-dark hover:text-cedar' 
                      : 'text-neutral-dark hover:text-cedar'
                  }`}
                >
                  {link.name}
                </a>
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
                href="/transfer"
                className="bg-cedar text-white px-5 py-2.5 rounded-lg font-sans text-[14px] font-semibold hover:bg-cedar-forest transition-colors"
              >
                Transfer Prescription
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
                    <a
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-3 font-sans text-[16px] font-medium text-neutral-dark hover:text-cedar hover:bg-cream rounded-lg transition-colors"
                      onClick={link.external ? () => setIsMobileMenuOpen(false) : (e) => handleNavClick(e, link.href)}
                    >
                      {link.name}
                    </a>
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
                    href="/transfer"
                    className="block w-full text-center bg-cedar text-white px-6 py-3 rounded-lg font-sans text-[15px] font-semibold hover:bg-cedar-forest transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Transfer Prescription
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
