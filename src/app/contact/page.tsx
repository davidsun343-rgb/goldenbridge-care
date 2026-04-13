import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <section className="relative overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0">
          <img
            src="/images/contact-hero.jpg"
            alt="Compassionate elderly care support"
            className="h-full w-full object-cover object-[30%_35%] lg:object-[22%_35%]"
          />
          <div className="absolute inset-0 bg-gray-900/35" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div className="text-white">
              <p className="section-kicker text-indigo-200 mb-3">Contact GoldenBridge Care</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-100 max-w-2xl">
                Ready to learn more about our elderly care services? We&apos;re here to help you find the right care solution for your loved one.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-white/60 p-6 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700 mb-3">Quick Contact</p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Call Us</p>
                  <Link href="tel:+14376796446" className="text-2xl font-bold text-gray-900 hover:text-indigo-700 transition-colors">
                    (437) 679-6446
                  </Link>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Address</p>
                  <p className="font-semibold text-gray-900 leading-relaxed">
                    2967 Dundas St. W. #26
                    <br />
                    Toronto, ON M6P 1Z2
                  </p>
                </div>
                <div className="pt-2">
                  <Link href="mailto:info@goldenbridgecare.ca" className="text-indigo-700 font-semibold hover:text-indigo-800 transition-colors">
                    info@goldenbridgecare.ca
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Emergency Contact */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Emergency Contact</h3>
                  <p className="text-sm text-gray-600">Available 24/7 for urgent situations</p>
                </div>
              </div>
              <div className="space-y-2">
                <Link href="tel:+14376796446" className="flex items-center gap-3 text-indigo-700 hover:text-indigo-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-semibold">437-679-6446</span>
                </Link>
              </div>
            </div>

            {/* Main Contact */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 uppercase">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Main Office</p>
                    <Link href="tel:+14376796446" className="text-indigo-600 hover:text-indigo-700">
                      437-679-6446
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
                    <Link href="mailto:info@goldenbridgecare.ca" className="text-indigo-600 hover:text-indigo-700">
                      info@goldenbridgecare.ca
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
                    <p className="text-sm text-gray-600 mt-1">
                      North York, Downtown Toronto, Mississauga, Richmond Hill, Scarborough, 
                      Vaughan, Markham, Brampton, Etobicoke, York, East York, Pickering, 
                      Ajax, Whitby, Oshawa, Oakville, Burlington, and surrounding areas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 uppercase">Frequently Asked Questions</h3>
              
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
                    What services do you provide?
                    <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    We provide comprehensive non-medical home care including companionship, 
                    daily living assistance, transportation, and health support services 
                    tailored to your loved one&apos;s needs.
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
      </section>
    </div>
  );
}