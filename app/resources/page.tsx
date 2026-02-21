import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import { FileText, Download, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Patient Resources | Cedar Pharmacy',
  description: 'Instructional guides and resources for Cedar Pharmacy patients — injection guides, medication inserts, and more.',
};

const guides = [
  {
    title: 'GLP-1 Medication Insert',
    description: 'Complete instructions and important information for your GLP-1 compounded medication, including storage, handling, and dosing guidance.',
    file: '/images/GLP1-Insert cedar.pdf',
    category: 'Medication Guide',
    icon: '💉',
  },
  {
    title: 'Intramuscular Injection Guide',
    description: 'Step-by-step instructions for administering intramuscular (IM) injections safely at home, including site selection and technique.',
    file: '/images/Intramuscular Injections cedar.pdf',
    category: 'Injection Guide',
    icon: '📋',
  },
  {
    title: 'Subcutaneous Injection Guide',
    description: 'Step-by-step instructions for administering subcutaneous (SQ) injections safely at home, with diagrams and best practices.',
    file: '/images/Subcutaneous Injections cedar.pdf',
    category: 'Injection Guide',
    icon: '📋',
  },
  {
    title: 'Temperature Sensitive Medication Insert',
    description: 'Important storage and handling instructions for temperature-sensitive compounded medications, including shipping and refrigeration guidance.',
    file: '/images/Temp Sensitive Insert cedar.pdf',
    category: 'Storage Guide',
    icon: '🌡️',
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-18 bg-white border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <p className="font-sans text-[13px] font-semibold text-cedar uppercase tracking-widest mb-3">
            Patient Resources
          </p>
          <h1 className="font-display font-bold text-[36px] md:text-[52px] text-neutral-dark mb-5">
            Instructional Guides
          </h1>
          <p className="font-sans text-[17px] text-neutral-text max-w-2xl mx-auto leading-relaxed">
            Everything you need to use your Cedar Pharmacy medications safely and effectively. Download or view any guide below.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-neutral-100 p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Category badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="bg-cedar/10 text-cedar font-sans text-[12px] font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                    {guide.category}
                  </span>
                  <FileText className="w-5 h-5 text-neutral-text opacity-40 group-hover:opacity-70 transition-opacity" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="font-display font-semibold text-[20px] text-neutral-dark mb-3 group-hover:text-cedar transition-colors">
                    {guide.title}
                  </h2>
                  <p className="font-sans text-[15px] text-neutral-text leading-relaxed mb-6">
                    {guide.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={guide.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-cedar text-white font-sans text-[14px] font-semibold px-5 py-2.5 rounded-lg hover:bg-cedar-forest transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Guide
                  </a>
                  <a
                    href={guide.file}
                    download
                    className="flex items-center gap-2 border border-cedar text-cedar font-sans text-[14px] font-semibold px-5 py-2.5 rounded-lg hover:bg-cedar/5 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl border border-neutral-100 p-8 inline-block max-w-xl">
              <p className="font-sans text-[15px] text-neutral-text leading-relaxed mb-3">
                Have questions about your medication or need additional guidance?
              </p>
              <a
                href="tel:2083297811"
                className="inline-flex items-center gap-2 text-cedar font-sans font-semibold text-[15px] hover:underline"
              >
                Call us at 208-329-7811
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
