import Navbar from '@/components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Cedar Pharmacy',
  description: 'Privacy Policy for Cedar Pharmacy — how we collect, use, and protect your information.',
};

const sections = [
  {
    title: '1. Scope: Website/Portal Privacy Policy vs. HIPAA Notice',
    content: `This Privacy Policy applies to information collected through our website, our refill portal, and related communications.

Cedar Pharmacy is a pharmacy and may collect and use Protected Health Information ("PHI") in connection with providing pharmacy services. When we handle PHI as a covered entity, we do so in accordance with applicable HIPAA requirements and our Notice of Privacy Practices ("NPP"), which describes how we may use and disclose PHI and explains your HIPAA rights. This Privacy Policy does not replace our NPP.`,
  },
  {
    title: '2. Information We Collect',
    content: null,
    subsections: [
      {
        title: 'A. Information you provide directly',
        items: [
          'Contact information (name, mailing address, email, phone number)',
          'Account/portal information (username, password or authentication information, security verification details)',
          'Prescription/refill and service information you submit through our refill portal or other channels',
          'Communications you send us (messages, emails, phone calls, portal requests)',
          'Billing and payment information (processed by payment providers; we may receive limited transaction information, such as payment status and last four digits)',
        ],
      },
      {
        title: 'B. Information collected automatically',
        items: [
          'IP address, device identifiers, browser type, and operating system',
          'Website and portal usage information (pages viewed, access times, referring pages)',
          'Cookies and similar technologies (see Section 9)',
        ],
      },
      {
        title: 'C. Health-related information',
        items: [
          'If you use our refill portal or otherwise request pharmacy services, you may provide health and prescription information. When used for pharmacy services, this information may be treated as PHI.',
        ],
      },
    ],
  },
  {
    title: '3. Where We Provide Services / Shipping',
    content: `Cedar Pharmacy is located in Twin Falls, Idaho. We dispense and ship prescriptions only to patients in states where we are properly licensed, registered, or otherwise authorized to do so, and only as permitted by applicable federal and state law. Our authorized service area may change from time to time as we obtain additional state licenses and registrations.`,
  },
  {
    title: '4. How We Use Information',
    content: 'We use information to:',
    items: [
      'Provide pharmacy services, including processing prescriptions, refills submitted through our refill portal, patient support, counseling, and delivery coordination',
      'Verify identity and prevent fraud or unauthorized access to accounts/portals',
      'Operate and improve our website and refill portal, including troubleshooting, analytics, and security monitoring',
      'Communicate with you about your care and services (e.g., refill status, order updates, delivery notifications, account-related messages)',
      'Send SMS messages related to pharmacy services using PioneerRx and/or its integrated messaging functionality (see Section 6)',
      'Process payments and maintain transaction records',
      'Comply with legal obligations (including pharmacy recordkeeping, auditing, reporting, and responding to lawful requests)',
      'Protect safety and security of our systems, our patients, and the public',
    ],
  },
  {
    title: '5. How We Disclose Information',
    content: 'We may disclose information as follows:',
    subsections: [
      {
        title: 'A. Vendors and service providers',
        content: 'We may share information with vendors that provide services to Cedar Pharmacy, such as refill portal hosting/support and IT/security providers, payment processors, shipping and delivery partners, and communication systems (including PioneerRx and related integrated services used to support pharmacy communications). These vendors are permitted to use information only as needed to provide services to us and must protect it. Where required for PHI, we use Business Associate Agreements (BAAs) or other appropriate safeguards.',
      },
      {
        title: 'B. Disclosures required by law or for regulatory compliance',
        content: 'We may disclose information to comply with applicable laws, regulations, licensing requirements, court orders, subpoenas, or lawful requests by governmental authorities (including boards of pharmacy and other regulators).',
      },
      {
        title: 'C. Safety, fraud prevention, and security',
        content: 'We may disclose information to detect, investigate, or prevent fraud, abuse, security incidents, or illegal activity, and to protect the rights, property, and safety of Cedar Pharmacy, our patients, and others.',
      },
      {
        title: 'D. Business transfers',
        content: 'If Cedar Pharmacy is involved in a merger, acquisition, financing, reorganization, or sale of assets, information may be transferred as part of that transaction, subject to appropriate confidentiality protections.',
      },
      {
        title: 'E. With your direction/authorization',
        content: 'We may share information with third parties when you request or authorize us to do so, or when otherwise permitted or required by law.',
      },
    ],
  },
  {
    title: '6. SMS/Text Messaging (PioneerRx)',
    content: 'Cedar Pharmacy may send text messages using PioneerRx (and/or integrated services) for pharmacy service purposes, such as:',
    items: [
      'Refill reminders or refill status updates',
      'Order status, delivery notifications, and pickup coordination',
      'Account-related notifications and customer service follow-up',
    ],
    footer: 'Opt-in/Opt-out: Where required, we will obtain your consent. You can opt out of non-essential texts at any time by replying STOP (or using any instructions provided in the message) or by contacting us at 208.329.7811 or info.cedarrx@gmail.com. Message/data rates may apply. Message frequency may vary.\n\nImportant: Text messaging is not always a fully secure channel. Please avoid sending highly sensitive medical details by text and use our refill portal or call us when possible.',
  },
  {
    title: '7. Refill Portal Accounts and Security',
    content: `If you create or use a refill portal account, you are responsible for maintaining the confidentiality of your login credentials and for restricting access to your device and account. Notify us immediately if you believe your account has been compromised.`,
  },
  {
    title: '8. Data Security',
    content: `We maintain reasonable administrative, technical, and physical safeguards designed to protect information, including information submitted through our refill portal. However, no security measure is perfect. We cannot guarantee absolute security of information transmitted online.`,
  },
  {
    title: '9. Cookies and Analytics',
    content: 'We may use cookies and similar technologies to:',
    items: [
      'Maintain session and portal functionality',
      'Remember preferences',
      'Understand usage and improve performance and security',
    ],
    footer: 'You can control cookies through your browser settings. Disabling cookies may affect website or portal functionality.',
  },
  {
    title: '10. Data Retention',
    content: `We retain information as long as necessary to provide services, maintain business records, comply with pharmacy recordkeeping and other legal requirements, resolve disputes, and enforce agreements.`,
  },
  {
    title: '11. Children\'s Privacy',
    content: `Our website and refill portal are not directed to children under 13, and we do not knowingly collect personal information from children under 13 through our website/portal. If you believe a child has provided information to us online, contact us so we can address it.`,
  },
  {
    title: '12. Your Choices and Rights',
    content: `Depending on applicable law and the nature of the information, you may have the right to request access, correction, or deletion of certain personal information and to opt out of certain communications.\n\nHIPAA rights (if applicable): If Cedar Pharmacy maintains PHI about you, your rights are described in our Notice of Privacy Practices, including rights to access and request amendments to your PHI and obtain an accounting of certain disclosures.`,
  },
  {
    title: '13. Third-Party Links',
    content: `Our website may contain links to third-party sites. We are not responsible for the privacy practices of third parties.`,
  },
  {
    title: '14. Updates to This Privacy Policy',
    content: `We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised "Last Updated" date.`,
  },
  {
    title: '15. Contact Us',
    content: `If you have questions about this Privacy Policy or our privacy practices, contact:`,
    contact: true,
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-white border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <p className="font-sans text-[13px] font-semibold text-cedar uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-display font-bold text-[36px] md:text-[48px] text-neutral-dark mb-4">
            Privacy Policy
          </h1>
          <p className="font-sans text-[16px] text-neutral-text">
            <span className="font-semibold">Effective Date:</span> January 1, 2026 &nbsp;|&nbsp;{' '}
            <span className="font-semibold">Last Updated:</span> February 17, 2026
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-2xl border border-neutral-100 p-8 mb-4">
            <p className="font-sans text-[16px] text-neutral-text leading-relaxed">
              Cedar Pharmacy (&ldquo;Cedar Pharmacy,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting it. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website, use our refill portal, communicate with us, or use our pharmacy services.
            </p>
          </div>

          <div className="bg-cedar/5 border border-cedar/20 rounded-xl p-6 mb-8">
            <p className="font-sans text-[14px] text-neutral-text leading-relaxed">
              <span className="font-semibold text-cedar">Cedar Pharmacy</span><br />
              1309 Blue Lakes Blvd N, Twin Falls, Idaho 83301<br />
              Phone: <a href="tel:2083297811" className="text-cedar hover:underline">208.329.7811</a><br />
              Email: <a href="mailto:info.cedarrx@gmail.com" className="text-cedar hover:underline">info.cedarrx@gmail.com</a>
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, i) => (
              <div key={i} className="bg-white rounded-2xl border border-neutral-100 p-8">
                <h2 className="font-display font-semibold text-[20px] text-neutral-dark mb-4">
                  {section.title}
                </h2>

                {section.content && (
                  <p className="font-sans text-[15px] text-neutral-text leading-relaxed mb-4 whitespace-pre-line">
                    {section.content}
                  </p>
                )}

                {section.items && (
                  <ul className="space-y-2 mb-4 ml-4">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 font-sans text-[15px] text-neutral-text">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cedar flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.subsections && (
                  <div className="space-y-5">
                    {section.subsections.map((sub, j) => (
                      <div key={j}>
                        <h3 className="font-sans font-semibold text-[15px] text-neutral-dark mb-2">
                          {sub.title}
                        </h3>
                        {('content' in sub) && sub.content && (
                          <p className="font-sans text-[15px] text-neutral-text leading-relaxed">
                            {sub.content as string}
                          </p>
                        )}
                        {('items' in sub) && Array.isArray(sub.items) && (
                          <ul className="space-y-2 ml-4 mt-2">
                            {(sub.items as string[]).map((item, k) => (
                              <li key={k} className="flex items-start gap-2 font-sans text-[15px] text-neutral-text">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cedar flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.footer && (
                  <p className="font-sans text-[14px] text-neutral-text leading-relaxed mt-4 whitespace-pre-line border-t border-neutral-100 pt-4">
                    {section.footer}
                  </p>
                )}

                {section.contact && (
                  <div className="font-sans text-[15px] text-neutral-text leading-relaxed">
                    <p className="font-semibold text-neutral-dark">Cedar Pharmacy</p>
                    <p>Attn: Privacy Officer</p>
                    <p>1309 Blue Lakes Blvd N, Twin Falls, Idaho 83301</p>
                    <p>Phone: <a href="tel:2083297811" className="text-cedar hover:underline">208.329.7811</a></p>
                    <p>Email: <a href="mailto:info.cedarrx@gmail.com" className="text-cedar hover:underline">info.cedarrx@gmail.com</a></p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
