import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Ready to learn more about our elderly care services? We're here to help you 
              find the perfect care solution for your loved one.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Request a Free Consultation
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll contact you within 24 hours to discuss 
              your care needs and create a personalized plan.
            </p>

            <form className="space-y-6">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="(416) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-2">
                  Relationship to Care Recipient
                </label>
                <select
                  id="relationship"
                  name="relationship"
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
                <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-2">
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
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-1"
                />
                <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
                  I consent to be contacted by GoldenBridge Care regarding care services. 
                  I understand this is not a commitment to purchase services. *
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-700 text-white py-4 px-6 rounded-lg font-semibold hover:bg-indigo-800 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-900">Emergency Contact</h3>
                  <p className="text-sm text-red-700">Available 24/7 for urgent situations</p>
                </div>
              </div>
              <div className="space-y-2">
                <Link href="tel:+14165559911" className="flex items-center gap-3 text-red-700 hover:text-red-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-semibold">(416) 555-9911</span>
                </Link>
              </div>
            </div>

            {/* Main Contact */}
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Main Office</p>
                    <Link href="tel:+14165554357" className="text-indigo-600 hover:text-indigo-700">
                      (416) 555-CARE (4357)
                    </Link>
                    <p className="text-sm text-gray-500">Monday - Friday: 8 AM - 8 PM</p>
                    <p className="text-sm text-gray-500">Saturday - Sunday: 9 AM - 5 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <Link href="mailto:info@goldenbridgecare.com" className="text-indigo-600 hover:text-indigo-700">
                      info@goldenbridgecare.com
                    </Link>
                    <p className="text-sm text-gray-500">We respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Service Area</p>
                    <p className="text-gray-700">Greater Toronto Area (GTA)</p>
                    <p className="text-sm text-gray-500">Including all surrounding municipalities</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Mental Health Helpline</p>
                    <Link href="tel:+14165554357" className="text-green-600 hover:text-green-700 font-medium">
                      (416) 555-CARE
                    </Link>
                    <p className="text-sm text-gray-500">Available 24/7 for support calls</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer text-gray-700 font-medium">
                    How quickly can you start providing care?
                    <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    For non-emergency situations, we can typically begin services within 24-48 hours. 
                    For urgent needs, we offer same-day emergency response.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer text-gray-700 font-medium">
                    What makes your mental health support different?
                  </summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    Our mental health support includes trained professionals available 24/7, 
                    regular wellness check-ins, and specialized support for depression, anxiety, 
                    and grief counseling.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer text-gray-700 font-medium">
                    Are your caregivers licensed and insured?
                  </summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    Yes, all our caregivers are thoroughly background checked, licensed, 
                    and we carry comprehensive liability insurance for your peace of mind.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer text-gray-700 font-medium">
                    Do you accept insurance?
                  </summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    We work with most insurance providers and can help you understand 
                    your coverage options. We also offer flexible private pay arrangements.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}