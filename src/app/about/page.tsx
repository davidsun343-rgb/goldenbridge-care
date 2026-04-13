import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <p className="section-kicker mb-3">Who We Are</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 uppercase">
              About GoldenBridge Care
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Founded on the principles of compassion, dignity, and respect, we&apos;ve been 
              providing exceptional elderly care services across the GTA for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-6 italic">
            &ldquo;To provide compassionate, professional elderly care that enables seniors to live safely and independently in their own homes while maintaining their dignity, quality of life, and connection to their communities.&rdquo;
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-4xl">
            We believe that aging should be a journey filled with respect, comfort, and joy. Our dedicated team works tirelessly to ensure that every client receives personalized care that meets their unique needs and preferences.
          </p>
          <div className="flex gap-4">
            <Link href="/services" className="btn-primary">
              Our Services
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>



      {/* Certifications & Accreditations */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-kicker mb-3">Trust & Standards</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase">
              Certifications & Accreditations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of care through continuous education and certification.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="section-kicker mb-3 text-indigo-300">Let’s Talk Care</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
            Ready to Experience the GoldenBridge Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of families who trust us with their most precious loved ones. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Free Consultation
            </Link>
            <Link href="tel:+14376796446" className="border-2 border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Call (437) 679-6446
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const certifications = [
  {
    title: "Provincial License",
    description: "Licensed home care provider in Ontario"
  },
  {
    title: "Joint Commission",
    description: "Accredited for home care services"
  },
  {
    title: "CPR & First Aid",
    description: "All staff certified in emergency response"
  },
  {
    title: "Background Checked",
    description: "Comprehensive screening for all caregivers"
  },
  {
    title: "Insured & Bonded",
    description: "Full liability and caregiver insurance"
  },
  {
    title: "Mental Health First Aid",
    description: "Specialized training in mental health support"
  },
  {
    title: "Dementia Care",
    description: "Certified in Alzheimer's and dementia care"
  },
  {
    title: "Continuing Education",
    description: "Ongoing professional development"
  }
];