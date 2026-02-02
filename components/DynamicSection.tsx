'use client';

import { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Loading placeholder that matches on server and client
function SectionPlaceholder() {
  return <div className="min-h-[200px]" />;
}

// Dynamically import all components with SSR disabled to prevent hydration mismatches
const Hero = dynamic(() => import('@/components/Hero'), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const Services = dynamic(() => import('@/components/Services'), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const WhyCedarRX = dynamic(() => import('@/components/WhyCedarRX'), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const Testimonials = dynamic(() => import('@/components/Testimonials'), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const Footer = dynamic(() => import('@/components/Footer'), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});

// Hero variations
const HeroV1 = dynamic(() => import('@/components/variations/HeroVariations').then(mod => ({ default: mod.HeroV1 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const HeroV2 = dynamic(() => import('@/components/variations/HeroVariations').then(mod => ({ default: mod.HeroV2 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const HeroV3 = dynamic(() => import('@/components/variations/HeroVariations').then(mod => ({ default: mod.HeroV3 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});

// Services variations
const ServicesV1 = dynamic(() => import('@/components/variations/ServicesVariations').then(mod => ({ default: mod.ServicesV1 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const ServicesV2 = dynamic(() => import('@/components/variations/ServicesVariations').then(mod => ({ default: mod.ServicesV2 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const ServicesV3 = dynamic(() => import('@/components/variations/ServicesVariations').then(mod => ({ default: mod.ServicesV3 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const ServicesV4 = dynamic(() => import('@/components/variations/ServicesVariations').then(mod => ({ default: mod.ServicesV4 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const ServicesV5 = dynamic(() => import('@/components/variations/ServicesVariations').then(mod => ({ default: mod.ServicesV5 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const ServicesV6 = dynamic(() => import('@/components/variations/ServicesVariations').then(mod => ({ default: mod.ServicesV6 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const ServicesV7 = dynamic(() => import('@/components/variations/ServicesVariations').then(mod => ({ default: mod.ServicesV7 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const ServicesV8 = dynamic(() => import('@/components/variations/ServicesVariations').then(mod => ({ default: mod.ServicesV8 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const ServicesV9 = dynamic(() => import('@/components/variations/ServicesVariations').then(mod => ({ default: mod.ServicesV9 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const ServicesV10 = dynamic(() => import('@/components/variations/ServicesVariations').then(mod => ({ default: mod.ServicesV10 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const ServicesV11 = dynamic(() => import('@/components/variations/ServicesVariations').then(mod => ({ default: mod.ServicesV11 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const ServicesV12 = dynamic(() => import('@/components/variations/ServicesVariations').then(mod => ({ default: mod.ServicesV12 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const ServicesV13 = dynamic(() => import('@/components/variations/ServicesVariations').then(mod => ({ default: mod.ServicesV13 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});

// WhyCedarRX variations
const WhyCedarRXV1 = dynamic(() => import('@/components/variations/WhyCedarRXVariations').then(mod => ({ default: mod.WhyCedarRXV1 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const WhyCedarRXV2 = dynamic(() => import('@/components/variations/WhyCedarRXVariations').then(mod => ({ default: mod.WhyCedarRXV2 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const WhyCedarRXV3 = dynamic(() => import('@/components/variations/WhyCedarRXVariations').then(mod => ({ default: mod.WhyCedarRXV3 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});

// HowItWorks variations
const HowItWorksV1 = dynamic(() => import('@/components/variations/HowItWorksVariations').then(mod => ({ default: mod.HowItWorksV1 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const HowItWorksV2 = dynamic(() => import('@/components/variations/HowItWorksVariations').then(mod => ({ default: mod.HowItWorksV2 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const HowItWorksV3 = dynamic(() => import('@/components/variations/HowItWorksVariations').then(mod => ({ default: mod.HowItWorksV3 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});

// Testimonials variations
const TestimonialsV1 = dynamic(() => import('@/components/variations/TestimonialsVariations').then(mod => ({ default: mod.TestimonialsV1 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const TestimonialsV2 = dynamic(() => import('@/components/variations/TestimonialsVariations').then(mod => ({ default: mod.TestimonialsV2 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const TestimonialsV3 = dynamic(() => import('@/components/variations/TestimonialsVariations').then(mod => ({ default: mod.TestimonialsV3 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});

// Footer variations
const FooterV1 = dynamic(() => import('@/components/variations/FooterVariations').then(mod => ({ default: mod.FooterV1 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const FooterV2 = dynamic(() => import('@/components/variations/FooterVariations').then(mod => ({ default: mod.FooterV2 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});
const FooterV3 = dynamic(() => import('@/components/variations/FooterVariations').then(mod => ({ default: mod.FooterV3 })), { 
  ssr: false,
  loading: () => <SectionPlaceholder />
});

const variationComponents: Record<string, Record<string, any>> = {
  hero: { v1: HeroV1, v2: HeroV2, v3: HeroV3 },
  services: { v1: ServicesV1, v2: ServicesV2, v3: ServicesV3, v4: ServicesV4, v5: ServicesV5, v6: ServicesV6, v7: ServicesV7, v8: ServicesV8, v9: ServicesV9, v10: ServicesV10, v11: ServicesV11, v12: ServicesV12, v13: ServicesV13 },
  'why-cedarrx': { v1: WhyCedarRXV1, v2: WhyCedarRXV2, v3: WhyCedarRXV3 },
  'how-it-works': { v1: HowItWorksV1, v2: HowItWorksV2, v3: HowItWorksV3 },
  testimonials: { v1: TestimonialsV1, v2: TestimonialsV2, v3: TestimonialsV3 },
  footer: { v1: FooterV1, v2: FooterV2, v3: FooterV3 },
};

const fallbackComponents: Record<string, any> = {
  hero: Hero,
  services: Services,
  'why-cedarrx': WhyCedarRX,
  'how-it-works': HowItWorks,
  testimonials: Testimonials,
  footer: Footer,
};

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

interface DynamicSectionProps {
  section: 'hero' | 'services' | 'why-cedarrx' | 'how-it-works' | 'testimonials' | 'footer';
}

// Default variations for the live site
const defaultVariations: Record<string, string> = {
  hero: 'v2',
  services: 'v9',
  'why-cedarrx': 'v2',
  'how-it-works': 'v2',
  testimonials: 'v1',
  footer: 'v3',
};

export default function DynamicSection({ section }: DynamicSectionProps) {
  const [variationId, setVariationId] = useState<string>(defaultVariations[section] || 'v1');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    try {
      const saved = localStorage.getItem('cedarrx-variations');
      if (saved) {
        const parsed = JSON.parse(saved);
        const liveVariation = parsed.live?.[section];
        if (liveVariation) {
          setVariationId(liveVariation);
          return;
        }
      }
    } catch (e) {
      console.error('Failed to load variation', e);
    }
    
    // Use default variation if nothing is set in localStorage
    setVariationId(defaultVariations[section] || 'v1');
  }, [section]);

  // Render placeholder on server and before localStorage is read
  if (!mounted) {
    return <SectionPlaceholder />;
  }

  // Get the component for the selected variation
  const Component = variationComponents[section]?.[variationId];

  if (!Component) {
    return null;
  }

  // Pass config for hero section
  if (section === 'hero') {
    return (
      <div id={section}>
        <Component config={defaultHeroConfig} />
      </div>
    );
  }

  return (
    <div id={section}>
      <Component />
    </div>
  );
}
