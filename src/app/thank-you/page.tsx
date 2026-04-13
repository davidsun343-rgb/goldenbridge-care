import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Thank You Message */}
          <p className="section-kicker mb-3">Request Received</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 uppercase">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your consultation request has been submitted successfully.
          </p>

          {/* What Happens Next Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8 text-left">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center uppercase">What Happens Next?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">We Review Your Request</h3>
                  <p className="text-gray-600 text-sm">A care coordinator will carefully review your consultation request and specific needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">We Contact You Within 24 Hours</h3>
                  <p className="text-gray-600 text-sm">We&apos;ll call or email you to discuss your loved one&apos;s care requirements in detail.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Personalized Care Plan</h3>
                  <p className="text-gray-600 text-sm">We create a customized care plan tailored to your loved one&apos;s unique needs and preferences.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Detailed Proposal</h3>
                  <p className="text-gray-600 text-sm">You&apos;ll receive a comprehensive proposal with pricing, services, and caregiver matching.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-100 rounded-xl p-6 mb-8 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Need Immediate Assistance?</h3>
            <p className="text-gray-600 mb-4">If you have urgent care needs, please call us directly:</p>
            <a
              href="tel:+14376796446"
              className="inline-block bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors text-lg"
            >
              📞 437-679-6446
            </a>
            <p className="text-sm text-gray-500 mt-3">Available Monday - Friday, 9 AM - 6 PM</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors"
            >
              Return to Home
            </Link>
            <Link
              href="/services"
              className="border border-indigo-700 text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Learn About Our Services
            </Link>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">While you wait, explore more about our care services:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing" className="text-indigo-700 hover:text-indigo-800 font-medium">
              View Pricing →
            </Link>
            <Link href="/about" className="text-indigo-700 hover:text-indigo-800 font-medium">
              About Us →
            </Link>
            <Link href="/services" className="text-indigo-700 hover:text-indigo-800 font-medium">
              All Services →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
