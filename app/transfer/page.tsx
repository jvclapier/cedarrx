'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';

interface FormData {
  // Patient Info
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  // Current Pharmacy
  pharmacyName: string;
  pharmacyPhone: string;
  pharmacyAddress: string;
  // Prescription Details
  medications: string;
  doctorName: string;
  doctorPhone: string;
  // Additional
  notes: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  pharmacyName: '',
  pharmacyPhone: '',
  pharmacyAddress: '',
  medications: '',
  doctorName: '',
  doctorPhone: '',
  notes: '',
};

export default function TransferPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('There was an error submitting your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-neutral-border bg-white font-sans text-[15px] text-neutral-dark placeholder:text-neutral-text/50 focus:outline-none focus:ring-2 focus:ring-cedar/20 focus:border-cedar transition-all";
  const labelClasses = "block font-sans text-[14px] font-semibold text-neutral-dark mb-2";

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            className="font-display font-bold text-[36px] md:text-[48px] text-neutral-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transfer a Prescription
          </motion.h1>
          <motion.p 
            className="font-sans text-[18px] text-neutral-text max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Complete our secure form below to transfer your prescription to Cedar Pharmacy. 
            We'll handle everything with your current pharmacy.
          </motion.p>
          <motion.div 
            className="flex items-center justify-center gap-2 text-cedar font-sans font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Phone className="w-5 h-5" />
            <span>Need Help? Call us: </span>
            <a href="tel:2083297811" className="hover:text-cedar-forest transition-colors underline">
              208-329-7811
            </a>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div 
                className="mb-8 p-4 bg-cedar/10 border border-cedar/20 rounded-lg flex items-start gap-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle className="w-6 h-6 text-cedar flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans font-semibold text-cedar">Request Submitted Successfully!</p>
                  <p className="font-sans text-[14px] text-neutral-text mt-1">
                    We've received your transfer request and will contact you within 1-2 business days.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div 
                className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans font-semibold text-red-600">Submission Error</p>
                  <p className="font-sans text-[14px] text-neutral-text mt-1">{errorMessage}</p>
                </div>
              </motion.div>
            )}

            {/* Patient Information */}
            <div className="mb-10">
              <h2 className="font-display font-bold text-[24px] text-neutral-dark mb-6 pb-2 border-b border-neutral-border">
                Patient Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className={labelClasses}>First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClasses}>Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label htmlFor="dateOfBirth" className={labelClasses}>Date of Birth *</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClasses}>Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="(208) 555-1234"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email" className={labelClasses}>Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="john.doe@email.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className={labelClasses}>Street Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="123 Main Street"
                  />
                </div>
                <div>
                  <label htmlFor="city" className={labelClasses}>City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Twin Falls"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="state" className={labelClasses}>State *</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="ID"
                      maxLength={2}
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className={labelClasses}>ZIP Code *</label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="83301"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Current Pharmacy */}
            <div className="mb-10">
              <h2 className="font-display font-bold text-[24px] text-neutral-dark mb-6 pb-2 border-b border-neutral-border">
                Current Pharmacy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pharmacyName" className={labelClasses}>Pharmacy Name *</label>
                  <input
                    type="text"
                    id="pharmacyName"
                    name="pharmacyName"
                    value={formData.pharmacyName}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Current Pharmacy Name"
                  />
                </div>
                <div>
                  <label htmlFor="pharmacyPhone" className={labelClasses}>Pharmacy Phone *</label>
                  <input
                    type="tel"
                    id="pharmacyPhone"
                    name="pharmacyPhone"
                    value={formData.pharmacyPhone}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="(208) 555-5678"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="pharmacyAddress" className={labelClasses}>Pharmacy Address</label>
                  <input
                    type="text"
                    id="pharmacyAddress"
                    name="pharmacyAddress"
                    value={formData.pharmacyAddress}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="456 Pharmacy Ave, City, State ZIP"
                  />
                </div>
              </div>
            </div>

            {/* Prescription Details */}
            <div className="mb-10">
              <h2 className="font-display font-bold text-[24px] text-neutral-dark mb-6 pb-2 border-b border-neutral-border">
                Prescription Details
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="medications" className={labelClasses}>Medication Name(s) *</label>
                  <textarea
                    id="medications"
                    name="medications"
                    value={formData.medications}
                    onChange={handleChange}
                    required
                    rows={3}
                    className={inputClasses}
                    placeholder="Please list all medications you'd like to transfer (one per line)"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="doctorName" className={labelClasses}>Doctor's Name</label>
                    <input
                      type="text"
                      id="doctorName"
                      name="doctorName"
                      value={formData.doctorName}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Dr. Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="doctorPhone" className={labelClasses}>Doctor's Phone</label>
                    <input
                      type="tel"
                      id="doctorPhone"
                      name="doctorPhone"
                      value={formData.doctorPhone}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="(208) 555-9012"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mb-10">
              <h2 className="font-display font-bold text-[24px] text-neutral-dark mb-6 pb-2 border-b border-neutral-border">
                Additional Notes
              </h2>
              <div>
                <label htmlFor="notes" className={labelClasses}>Anything else we should know?</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className={inputClasses}
                  placeholder="Any special instructions, allergies, or additional information..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cedar text-white py-4 rounded-lg font-sans text-[16px] font-semibold hover:bg-cedar-forest transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Transfer Request'
                )}
              </button>
              <p className="text-center font-sans text-[13px] text-neutral-text mt-4">
                By submitting this form, you authorize Cedar Pharmacy to contact your current pharmacy 
                and healthcare provider to transfer your prescription(s).
              </p>
            </div>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
