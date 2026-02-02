'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Code, Layout, Settings } from 'lucide-react';

export default function DevToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on server or before hydration to avoid mismatch
  // Also only show in development
  if (!mounted || process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-cedar text-white rounded-full shadow-cedar-lg flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <Palette className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl p-4 w-72"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-neutral-dark text-[18px] font-semibold mb-4">
              🛠️ Dev Tools
            </h3>

            <div className="space-y-2">
              <a
                href="/studio"
                className="flex items-center gap-3 p-3 rounded-lg bg-cream hover:bg-cedar hover:text-white transition-all group"
              >
                <Layout className="w-5 h-5" />
                <div>
                  <div className="font-semibold text-[14px]">Design Studio</div>
                  <div className="text-[12px] opacity-70">Test component iterations</div>
                </div>
              </a>

              <a
                href="https://tailwindcss.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-cream hover:bg-cedar hover:text-white transition-all"
              >
                <Code className="w-5 h-5" />
                <div>
                  <div className="font-semibold text-[14px]">Tailwind Docs</div>
                  <div className="text-[12px] opacity-70">Styling reference</div>
                </div>
              </a>

              <a
                href="https://www.framer.com/motion/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-cream hover:bg-cedar hover:text-white transition-all"
              >
                <Settings className="w-5 h-5" />
                <div>
                  <div className="font-semibold text-[14px]">Framer Motion</div>
                  <div className="text-[12px] opacity-70">Animation docs</div>
                </div>
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-border">
              <div className="text-[12px] text-neutral-text">
                <strong>Design Agent:</strong> Use <code className="bg-cream px-2 py-1 rounded">@.DESIGN</code> to build new sections
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
