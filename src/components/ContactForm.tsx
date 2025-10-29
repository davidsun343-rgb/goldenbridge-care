'use client';

import { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  relationship: string;
  services: string[];
  urgency: string;
  message: string;
  consent: boolean;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  relationship: '',
  services: [],
  urgency: '',
  message: '',
  consent: false,
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
      if (name === 'services') {
        const currentServices = formData.services;
        const updatedServices = e.target.checked
          ? [...currentServices, value]
          : currentServices.filter(service => service !== value);
        
        setFormData(prev => ({
          ...prev,
          services: updatedServices
        }));
      } else if (name === 'consent') {
        setFormData(prev => ({
          ...prev,
          consent: (e.target as HTMLInputElement).checked
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(initialFormData);
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-sm border p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your consultation request has been submitted successfully. We&apos;ll contact you within 24 hours to discuss your care needs.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-green-800 font-medium">What happens next?</p>
            <ul className="text-green-700 text-sm mt-2 space-y-1">
              <li>• A care coordinator will review your request</li>
              <li>• We&apos;ll call you to discuss your specific needs</li>
              <li>• We&apos;ll create a personalized care plan</li>
              <li>• You&apos;ll receive a detailed proposal</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setSubmitStatus('idle')}
              className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors"
            >
              Submit Another Request
            </button>
            <a
              href="tel:+14373609088"
              className="border border-indigo-700 text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors text-center"
            >
              Call Us Now: (437) 360-9088
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Request a Free Consultation
      </h2>
      <p className="text-gray-600 mb-8">
        Fill out the form below and we&apos;ll contact you within 24 hours to discuss 
        your care needs and create a personalized plan.
      </p>

      {submitStatus === 'error' && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <p className="text-red-800 font-medium">Error submitting form</p>
          </div>
          <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="(437) 360-9088"
          />
        </div>

        <div>
          <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-2">
            Relationship to Care Recipient
          </label>
          <select
            id="relationship"
            name="relationship"
            value={formData.relationship}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="">Select relationship</option>
            <option value="adult-child">Adult Child</option>
            <option value="spouse">Spouse/Partner</option>
            <option value="sibling">Sibling</option>
            <option value="other-family">Other Family Member</option>
            <option value="friend">Friend</option>
            <option value="self">Self</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Services Interested In *
          </label>
          <div className="space-y-2">
            {[
              "Mental Health Support & Calling",
              "Companionship Services",
              "Medical Assistance",
              "Daily Living Support",
              "Transportation Services",
              "Emergency Response",
              "Not Sure - Need Consultation"
            ].map((service) => (
              <label key={service} className="flex items-center">
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={formData.services.includes(service)}
                  onChange={handleInputChange}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-700">{service}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
            How soon do you need care?
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="">Select timeframe</option>
            <option value="immediate">Immediately (within 24-48 hours)</option>
            <option value="this-week">This week</option>
            <option value="next-week">Next week</option>
            <option value="this-month">Within this month</option>
            <option value="planning">Just planning ahead</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Please share any specific care needs, medical conditions, or questions you have..."
          ></textarea>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            checked={formData.consent}
            onChange={handleInputChange}
            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-1"
          />
          <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
            I consent to be contacted by GoldenBridge Care regarding care services. 
            I understand this is not a commitment to purchase services. *
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-700 text-white py-4 px-6 rounded-lg font-semibold hover:bg-indigo-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </span>
          ) : (
            'Submit Request'
          )}
        </button>
      </form>
    </div>
  );
}