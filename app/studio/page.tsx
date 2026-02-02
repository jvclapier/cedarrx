'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, X, Download } from 'lucide-react';
import { HeroV1, HeroV2, HeroV3 } from '@/components/variations/HeroVariations';
import { ServicesV1, ServicesV2, ServicesV3 } from '@/components/variations/ServicesVariations';
import { WhyCedarRXV1, WhyCedarRXV2, WhyCedarRXV3 } from '@/components/variations/WhyCedarRXVariations';
import { HowItWorksV1, HowItWorksV2, HowItWorksV3 } from '@/components/variations/HowItWorksVariations';
import { TestimonialsV1, TestimonialsV2, TestimonialsV3 } from '@/components/variations/TestimonialsVariations';
import { FooterV1, FooterV2, FooterV3 } from '@/components/variations/FooterVariations';

const defaultHeroConfig = {
  eyebrow: 'Twin Falls, Idaho',
  title: 'Your Expert',
  titleAccent: 'Compounding Pharmacy',
  description: 'Personalized medications crafted by expert pharmacists for your unique health needs. Experience care that\'s as unique as you are.',
  primaryCta: { text: 'Refill Prescription', href: '/refill' },
  secondaryCta: { text: 'Contact Us', href: '/contact' },
  contactInfo: {
    phone: '208-329-7811',
    address: '1309 Blue Lakes Blvd. N, Twin Falls, ID 83301'
  }
};

const sections = [
  { 
    id: 'hero', 
    name: 'Hero',
    variations: [
      { id: 'v1', name: 'V1: Sleek & Modern', component: HeroV1 },
      { id: 'v2', name: 'V2: Creative & Geometric', component: HeroV2 },
      { id: 'v3', name: 'V3: Super Imaginative', component: HeroV3 },
    ],
    defaultConfig: defaultHeroConfig
  },
  { 
    id: 'services', 
    name: 'Services',
    variations: [
      { id: 'v1', name: 'V1: Sleek & Modern', component: ServicesV1 },
      { id: 'v2', name: 'V2: Creative & Geometric', component: ServicesV2 },
      { id: 'v3', name: 'V3: Super Imaginative', component: ServicesV3 },
    ],
    defaultConfig: {}
  },
  { 
    id: 'why-cedarrx', 
    name: 'Why CedarRX',
    variations: [
      { id: 'v1', name: 'V1: Sleek & Modern', component: WhyCedarRXV1 },
      { id: 'v2', name: 'V2: Creative & Geometric', component: WhyCedarRXV2 },
      { id: 'v3', name: 'V3: Super Imaginative', component: WhyCedarRXV3 },
    ],
    defaultConfig: {}
  },
  { 
    id: 'how-it-works', 
    name: 'How It Works',
    variations: [
      { id: 'v1', name: 'V1: Sleek & Modern', component: HowItWorksV1 },
      { id: 'v2', name: 'V2: Creative & Geometric', component: HowItWorksV2 },
      { id: 'v3', name: 'V3: Super Imaginative', component: HowItWorksV3 },
    ],
    defaultConfig: {}
  },
  { 
    id: 'testimonials', 
    name: 'Testimonials',
    variations: [
      { id: 'v1', name: 'V1: Sleek & Modern', component: TestimonialsV1 },
      { id: 'v2', name: 'V2: Creative & Geometric', component: TestimonialsV2 },
      { id: 'v3', name: 'V3: Super Imaginative', component: TestimonialsV3 },
    ],
    defaultConfig: {}
  },
  { 
    id: 'footer', 
    name: 'Footer',
    variations: [
      { id: 'v1', name: 'V1: Sleek & Modern', component: FooterV1 },
      { id: 'v2', name: 'V2: Creative & Geometric', component: FooterV2 },
      { id: 'v3', name: 'V3: Super Imaginative', component: FooterV3 },
    ],
    defaultConfig: {}
  },
];

export default function Studio() {
  const [selectedSection, setSelectedSection] = useState('hero');
  const [selectedVariations, setSelectedVariations] = useState<Record<string, string>>({});
  const [liveVariations, setLiveVariations] = useState<Record<string, string>>({});
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showGrid, setShowGrid] = useState(false);
  const [showConfigEditor, setShowConfigEditor] = useState(false);
  const [config, setConfig] = useState(defaultHeroConfig);
  const [showExportModal, setShowExportModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Load saved variations from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('cedarrx-variations');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSelectedVariations(parsed.selected || {});
        setLiveVariations(parsed.live || {});
      } catch (e) {
        console.error('Failed to load variations', e);
      }
    }
    
    // Set default to v1 for all sections
    const defaults: Record<string, string> = {};
    sections.forEach(section => {
      if (!selectedVariations[section.id]) {
        defaults[section.id] = 'v1';
      }
    });
    setSelectedVariations(prev => ({ ...defaults, ...prev }));
  }, []);

  // Save variations to localStorage
  const saveVariations = () => {
    localStorage.setItem('cedarrx-variations', JSON.stringify({
      selected: selectedVariations,
      live: liveVariations
    }));
  };

  const currentSection = sections.find(s => s.id === selectedSection);
  const currentVariationId = selectedVariations[selectedSection] || 'v1';
  const currentVariation = currentSection?.variations.find((v: any) => v.id === currentVariationId);
  const SelectedComponent = currentVariation?.component;

  const viewportWidths = {
    desktop: '100%',
    tablet: '768px',
    mobile: '375px'
  };

  const handleVariationSelect = (sectionId: string, variationId: string) => {
    setSelectedVariations(prev => ({
      ...prev,
      [sectionId]: variationId
    }));
  };

  const setAsLive = (sectionId: string, variationIdOverride?: string) => {
    const variationId = variationIdOverride || selectedVariations[sectionId] || 'v1';
    
    // Update state
    const newLiveVariations = {
      ...liveVariations,
      [sectionId]: variationId
    };
    setLiveVariations(newLiveVariations);
    
    // Save directly to localStorage with the correct new value
    localStorage.setItem('cedarrx-variations', JSON.stringify({
      selected: selectedVariations,
      live: newLiveVariations
    }));
  };

  const removeFromLive = (sectionId: string) => {
    // Create new object without the section
    const newLiveVariations = { ...liveVariations };
    delete newLiveVariations[sectionId];
    
    setLiveVariations(newLiveVariations);
    
    // Save to localStorage
    localStorage.setItem('cedarrx-variations', JSON.stringify({
      selected: selectedVariations,
      live: newLiveVariations
    }));
  };

  const toggleLive = (sectionId: string, variationId?: string) => {
    const currentLive = liveVariations[sectionId];
    const targetVariation = variationId || selectedVariations[sectionId] || 'v1';
    
    // If this exact variation is already live, remove it
    if (currentLive === targetVariation) {
      removeFromLive(sectionId);
    } else {
      // Otherwise, set it as live
      setAsLive(sectionId, targetVariation);
    }
  };

  const handleConfigChange = (key: string, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleNestedConfigChange = (parent: string, key: string, value: any) => {
    setConfig(prev => ({
      ...prev,
      [parent]: { ...(prev as any)[parent], [key]: value }
    }));
  };

  // Generate export configuration
  const generateExportConfig = () => {
    // Check if hero config has been modified from defaults
    const heroConfigModified = JSON.stringify(config) !== JSON.stringify(defaultHeroConfig);
    
    const exportData = {
      selectedVariations: {
        hero: selectedVariations.hero || 'v1',
        services: selectedVariations.services || 'v1',
        'why-cedarrx': selectedVariations['why-cedarrx'] || 'v1',
        'how-it-works': selectedVariations['how-it-works'] || 'v1',
        testimonials: selectedVariations.testimonials || 'v1',
        footer: selectedVariations.footer || 'v1',
      },
      ...(heroConfigModified && {
        heroConfig: {
          eyebrow: config.eyebrow,
          title: config.title,
          titleAccent: config.titleAccent,
          description: config.description,
          primaryCta: config.primaryCta,
          secondaryCta: config.secondaryCta,
          contactInfo: config.contactInfo,
        }
      })
    };
    
    return JSON.stringify(exportData, null, 2);
  };

  const copyToClipboard = async () => {
    const exportText = generateExportConfig();
    try {
      await navigator.clipboard.writeText(exportText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-dark">
      {/* Studio Header */}
      <div className="sticky top-0 z-50 bg-cedar-forest border-b border-cream/20">
        <div className="max-w-[1800px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-cream text-[20px] font-bold font-display">CedarRX Studio</h1>
              <p className="text-cream/60 text-[12px] font-sans">18 Unique Design Iterations</p>
            </div>

            <div className="flex items-center gap-4">
              {currentSection && (
                liveVariations[selectedSection] ? (
                  <button
                    onClick={() => removeFromLive(selectedSection)}
                    className="px-6 py-2 bg-red-500 text-white rounded-lg text-[14px] font-bold hover:bg-red-600 transition-colors"
                  >
                    ❌ Remove from Live
                  </button>
                ) : (
                  <button
                    onClick={() => setAsLive(selectedSection)}
                    className="px-6 py-2 bg-terra text-white rounded-lg text-[14px] font-bold hover:bg-burgundy transition-colors"
                  >
                    🚀 Set as Live
                  </button>
                )
              )}
              
              {selectedSection === 'hero' && (
                <button
                  onClick={() => setShowConfigEditor(!showConfigEditor)}
                  className={`px-4 py-2 rounded-lg text-[14px] font-medium transition-colors ${
                    showConfigEditor 
                      ? 'bg-cream text-cedar-forest' 
                      : 'bg-cream/10 text-cream hover:bg-cream/20'
                  }`}
                >
                  {showConfigEditor ? '✏️ Editor On' : '✏️ Config'}
                </button>
              )}

              <button
                onClick={() => setShowGrid(!showGrid)}
                className={`px-4 py-2 rounded-lg text-[14px] font-medium transition-colors ${
                  showGrid 
                    ? 'bg-cream text-cedar-forest' 
                    : 'bg-cream/10 text-cream hover:bg-cream/20'
                }`}
              >
                {showGrid ? '📐 Grid' : '📐'}
              </button>

              <button
                onClick={() => setShowExportModal(true)}
                className="px-4 py-2 bg-cream/10 text-cream hover:bg-cream/20 rounded-lg text-[14px] font-medium transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export
              </button>

              <div className="flex gap-2 bg-cream/10 rounded-lg p-1">
                {(['desktop', 'tablet', 'mobile'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    className={`px-4 py-2 rounded-md text-[14px] font-medium transition-colors capitalize ${
                      viewMode === mode
                        ? 'bg-cream text-cedar-forest'
                        : 'text-cream hover:bg-cream/10'
                    }`}
                  >
                    {mode === 'desktop' && '💻'}
                    {mode === 'tablet' && '📱'}
                    {mode === 'mobile' && '📱'}
                  </button>
                ))}
              </div>

              <a
                href="/"
                className="px-4 py-2 bg-cedar text-white rounded-lg text-[14px] font-medium hover:bg-cedar-light transition-colors"
              >
                ← Back
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Left Sidebar */}
        <div className="w-64 bg-cedar-forest border-r border-cream/20 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-cream text-[14px] font-semibold mb-3 uppercase tracking-wide">
              Sections
            </h2>
            <div className="space-y-1">
              {sections.map((section) => {
                const isLive = liveVariations[section.id];
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      setSelectedSection(section.id);
                      setConfig(section.defaultConfig);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-[14px] font-medium transition-all ${
                      selectedSection === section.id
                        ? 'bg-cedar text-white shadow-lg'
                        : 'text-cream/70 hover:bg-cream/10 hover:text-cream'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{section.name}</span>
                      <div className="flex items-center gap-2">
                        {isLive && <span className="text-[10px] bg-terra text-white px-2 py-0.5 rounded-full">LIVE</span>}
                        <span className="text-[10px] bg-cream/20 px-2 py-0.5 rounded-full">
                          3
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Variation Selector */}
            {currentSection && (
              <div className="mt-6">
                <h3 className="text-cream text-[12px] font-semibold mb-2 uppercase tracking-wide">
                  Iterations
                </h3>
                <div className="space-y-1">
                  {currentSection.variations.map((variation: any) => {
                    const isLive = liveVariations[selectedSection] === variation.id;
                    return (
                      <div key={variation.id} className="flex items-center gap-2">
                        <button
                          onClick={() => handleVariationSelect(selectedSection, variation.id)}
                          className={`flex-1 text-left px-3 py-2 rounded-lg text-[13px] transition-all ${
                            currentVariationId === variation.id
                              ? 'bg-cream/20 text-cream'
                              : 'text-cream/60 hover:bg-cream/10 hover:text-cream'
                          }`}
                        >
                          {variation.name}
                        </button>
                        <button
                          onClick={() => {
                            handleVariationSelect(selectedSection, variation.id);
                            toggleLive(selectedSection, variation.id);
                          }}
                          className={`px-2 py-2 rounded-lg text-[11px] font-medium transition-all ${
                            isLive
                              ? 'bg-red-500 text-white hover:bg-red-600'
                              : 'bg-cream/10 text-cream/60 hover:bg-terra/50 hover:text-white'
                          }`}
                          title={isLive ? 'Remove from Live' : 'Set as Live'}
                        >
                          {isLive ? '✓' : '🚀'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="mt-8 p-4 bg-cream/5 rounded-lg border border-cream/10">
              <h3 className="text-cream text-[12px] font-semibold mb-3">📊 Stats</h3>
              <div className="space-y-2 text-[11px] text-cream/60">
                <div>Total Sections: {sections.length}</div>
                <div>Total Iterations: {sections.length * 3}</div>
                <div>Live Sections: {Object.keys(liveVariations).length}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Preview */}
        <div className="flex-1 overflow-y-auto bg-[#2A2A2A] p-8">
          <div className="flex justify-center">
            <motion.div
              className="bg-cream shadow-2xl overflow-hidden relative"
              style={{ width: viewportWidths[viewMode], maxWidth: '100%' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {showGrid && (
                <div 
                  className="absolute inset-0 pointer-events-none z-50"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(45, 95, 79, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(45, 95, 79, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}
                />
              )}

              <AnimatePresence mode="wait">
                {SelectedComponent && (
                  <motion.div
                    key={`${selectedSection}-${currentVariationId}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {selectedSection === 'hero' ? (
                      <SelectedComponent config={config} />
                    ) : (
                      <SelectedComponent />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Right Sidebar - Config Editor (Hero only) */}
        <AnimatePresence>
          {showConfigEditor && selectedSection === 'hero' && (
            <motion.div
              className="w-80 bg-cedar-forest border-l border-cream/20 overflow-y-auto"
              initial={{ x: 320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 320, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <h2 className="text-cream text-[16px] font-semibold mb-4">✏️ Config Editor</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-cream text-[12px] font-medium mb-2 block">Eyebrow</label>
                    <input
                      type="text"
                      value={config.eyebrow}
                      onChange={(e) => handleConfigChange('eyebrow', e.target.value)}
                      className="w-full bg-cream/10 border border-cream/20 rounded-lg px-3 py-2 text-cream text-[14px] focus:outline-none focus:border-cedar-teal"
                    />
                  </div>
                  <div>
                    <label className="text-cream text-[12px] font-medium mb-2 block">Title</label>
                    <input
                      type="text"
                      value={config.title}
                      onChange={(e) => handleConfigChange('title', e.target.value)}
                      className="w-full bg-cream/10 border border-cream/20 rounded-lg px-3 py-2 text-cream text-[14px] focus:outline-none focus:border-cedar-teal"
                    />
                  </div>
                  <div>
                    <label className="text-cream text-[12px] font-medium mb-2 block">Title Accent</label>
                    <input
                      type="text"
                      value={config.titleAccent}
                      onChange={(e) => handleConfigChange('titleAccent', e.target.value)}
                      className="w-full bg-cream/10 border border-cream/20 rounded-lg px-3 py-2 text-cream text-[14px] focus:outline-none focus:border-cedar-teal"
                    />
                  </div>
                  <div>
                    <label className="text-cream text-[12px] font-medium mb-2 block">Description</label>
                    <textarea
                      value={config.description}
                      onChange={(e) => handleConfigChange('description', e.target.value)}
                      rows={3}
                      className="w-full bg-cream/10 border border-cream/20 rounded-lg px-3 py-2 text-cream text-[14px] focus:outline-none focus:border-cedar-teal resize-none"
                    />
                  </div>
                  <button
                    onClick={() => setConfig(defaultHeroConfig)}
                    className="w-full mt-6 bg-cream/10 hover:bg-cream/20 text-cream px-4 py-3 rounded-lg text-[13px] font-medium transition-colors"
                  >
                    Reset to Default
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Export Modal */}
      <AnimatePresence>
        {showExportModal && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/70"
              onClick={() => setShowExportModal(false)}
            />
            
            {/* Modal */}
            <motion.div
              className="relative bg-cedar-forest rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-cream/20">
                <div>
                  <h2 className="text-cream text-[20px] font-bold">Export Configuration</h2>
                  <p className="text-cream/60 text-[13px] mt-1">Copy this and share it to update the live site</p>
                </div>
                <button
                  onClick={() => setShowExportModal(false)}
                  className="p-2 text-cream/60 hover:text-cream hover:bg-cream/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[50vh]">
                <div className="bg-neutral-dark rounded-xl p-4 font-mono text-[13px] text-cream/90 overflow-x-auto">
                  <pre className="whitespace-pre-wrap">{generateExportConfig()}</pre>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-6 border-t border-cream/20 bg-cedar-forest/50">
                <p className="text-cream/50 text-[12px]">
                  Paste this in chat to apply changes to the codebase
                </p>
                <button
                  onClick={copyToClipboard}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg text-[14px] font-semibold transition-all ${
                    copied 
                      ? 'bg-green-500 text-white' 
                      : 'bg-terra text-white hover:bg-burgundy'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy to Clipboard
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
