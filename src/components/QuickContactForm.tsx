'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function QuickContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    careType: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.name.split(' ')[0] || formData.name,
          lastName: formData.name.split(' ').slice(1).join(' ') || '',
          email: formData.email || 'noemail@provided.com',
          phone: formData.phone,
          relationship: 'Quick Contact Form',
          services: [formData.careType],
          urgency: formData.timeline,
          message: `Quick contact form submission - Care Type: ${formData.careType}, Timeline: ${formData.timeline}`,
          consent: true
        }),
      });

      if (response.ok) {
        router.push('/thank-you');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Request Free Consultation</h3>
      </div>
      
      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input 
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors outline-none"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input 
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="(437) 123-4567"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors outline-none"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email (Optional)
          </label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors outline-none"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type of Care Needed <span className="text-red-500">*</span>
          </label>
          <select 
            name="careType"
            required
            value={formData.careType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors outline-none bg-white"
          >
            <option value="">Select service...</option>
            <option value="Companion Care">Companion Care - $32/hr</option>
            <option value="PSW Care">PSW Care - $35/hr</option>
            <option value="Enhanced Care">Enhanced Care - $42/hr</option>
            <option value="Overnight Care">Overnight Care - $300/night</option>
            <option value="Not Sure">Not Sure Yet</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            When do you need care? <span className="text-red-500">*</span>
          </label>
          <select 
            name="timeline"
            required
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors outline-none bg-white"
          >
            <option value="">Select timeline...</option>
            <option value="Urgent - ASAP">Urgent - As Soon As Possible</option>
            <option value="This Week">Within This Week</option>
            <option value="Next Week">Within Next Week</option>
            <option value="Planning Ahead">Just Planning Ahead</option>
          </select>
        </div>
        
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-700 hover:bg-indigo-800 disabled:bg-gray-400 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors"
        >
          {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
        </button>
        
        <p className="text-xs text-gray-500 text-center leading-relaxed">
          By submitting this form, you agree to be contacted about our services.
        </p>
      </form>
    </div>
  );
}
