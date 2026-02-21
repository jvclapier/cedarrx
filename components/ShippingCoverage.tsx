'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const USShippingMap = dynamic(() => import('./USShippingMap'), { ssr: false });

const LICENSED_STATES = ['MT', 'OR', 'ID', 'UT', 'WY', 'CO', 'AZ', 'OH', 'IA', 'WV', 'KY', 'PA'];
const PENDING_STATES = ['WA', 'NV', 'CA', 'MN', 'MS', 'FL', 'NM'];

const STATE_NAMES: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California',
  CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', FL: 'Florida', GA: 'Georgia',
  HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa',
  KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine', MD: 'Maryland',
  MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi', MO: 'Missouri',
  MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire', NJ: 'New Jersey',
  NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio',
  OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina',
  SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont',
  VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming',
};

export default function ShippingCoverage() {
  return (
    <section id="shipping" className="relative w-full bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-sans text-[13px] font-semibold text-cedar uppercase tracking-widest mb-3">
            Nationwide Reach
          </p>
          <h2 className="font-display font-bold text-[36px] md:text-[44px] text-neutral-dark mb-4">
            Where We Ship
          </h2>
          <p className="font-sans text-[17px] text-neutral-text max-w-2xl mx-auto">
            Cedar Pharmacy is licensed to ship compounded medications to patients across the country. We continue to expand our service area.
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          className="relative mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <USShippingMap />
        </motion.div>

        {/* Legend */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-sm bg-cedar flex-shrink-0" />
            <span className="font-sans text-[14px] text-neutral-text font-medium">Currently Shipping</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-sm bg-amber-600 flex-shrink-0" />
            <span className="font-sans text-[14px] text-neutral-text font-medium">License Pending</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-sm bg-gray-300 flex-shrink-0" />
            <span className="font-sans text-[14px] text-neutral-text font-medium">Not Yet Available</span>
          </div>
        </motion.div>

        {/* State lists */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-cedar/5 border border-cedar/15 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-cedar" />
              <h3 className="font-display font-semibold text-[17px] text-neutral-dark">Currently Licensed</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {LICENSED_STATES.map((abbr) => (
                <span key={abbr} className="bg-cedar text-white font-sans text-[13px] font-semibold px-3 py-1 rounded-full">
                  {abbr}
                  <span className="ml-1 font-normal opacity-80 hidden sm:inline">· {STATE_NAMES[abbr]}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-amber-600" />
              <h3 className="font-display font-semibold text-[17px] text-neutral-dark">Pending Licensure</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {PENDING_STATES.map((abbr) => (
                <span key={abbr} className="bg-amber-600 text-white font-sans text-[13px] font-semibold px-3 py-1 rounded-full">
                  {abbr}
                  <span className="ml-1 font-normal opacity-80 hidden sm:inline">· {STATE_NAMES[abbr]}</span>
                </span>
              ))}
            </div>
            <p className="font-sans text-[13px] text-amber-800 mt-4 leading-relaxed">
              We are actively working to obtain licensure in these states. Check back soon.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
