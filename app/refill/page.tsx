'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function RefillPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-8 md:pt-20 md:pb-12">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            className="font-display font-bold text-[36px] md:text-[48px] text-neutral-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Refill Your Prescription
          </motion.h1>
          <motion.p 
            className="font-sans text-[18px] text-neutral-text max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Quickly and easily refill your prescriptions online. Simply fill out the form below 
            and we&apos;ll have your medication ready.
          </motion.p>
          <motion.div 
            className="flex items-center justify-center gap-2 text-cedar font-sans font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Phone className="w-5 h-5" />
            <span>Need Help? Call us: </span>
            <a href="tel:2083297781" className="hover:text-cedar-forest transition-colors underline">
              208-329-7781
            </a>
          </motion.div>
        </div>
      </section>

      {/* Refill Widget Section */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 min-h-[400px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Digital Pharmacist widget - injected as raw HTML to match their exact embed format */}
            <div dangerouslySetInnerHTML={{ __html: `
              <script>pid="2083297781"; configid="2083297781";</script>
              <div class="refillApp">
                <div>
                  <script src="https://api-web.rxwiki.com/refill/shared_config/embedRefillApp.js"></script>
                </div>
              </div>
            `}} />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
