import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About GoldenBridge Care
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Founded on the principles of compassion, dignity, and respect, we&apos;ve been 
              providing exceptional elderly care services across the GTA for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide compassionate, professional elderly care that enables seniors to live 
                safely and independently in their own homes while maintaining their dignity, 
                quality of life, and connection to their communities.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that aging should be a journey filled with respect, comfort, and joy. 
                Our dedicated team works tirelessly to ensure that every client receives 
                personalized care that meets their unique needs and preferences.
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-700 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-700 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Families Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-700 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-700 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and ensure the highest quality of care for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>2010:</strong> Founded by Maria Santos, a registered nurse with 20 years 
                  of experience in geriatric care, after witnessing the gap in quality home care services.
                </p>
                <p>
                  <strong>2015:</strong> Expanded to include mental health support services, recognizing 
                  the critical importance of emotional wellness in elderly care.
                </p>
                <p>
                  <strong>2018:</strong> Launched our 24/7 emergency response program, becoming the 
                  first in the GTA to offer round-the-clock care coordination.
                </p>
                <p>
                  <strong>2020:</strong> During the pandemic, we pioneered virtual companion services 
                  and enhanced our mental health support programs.
                </p>
                <p>
                  <strong>2023:</strong> Achieved provincial recognition for excellence in elderly care 
                  and expanded our team to include specialized mental health professionals.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A Legacy of Compassionate Care
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small nursing service has grown into the GTA&apos;s most trusted 
                elderly care provider. Our journey has been guided by one simple principle: 
                treating every client like family.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We&apos;ve witnessed countless precious moments - from helping clients maintain their 
                independence to providing comfort during challenging times. Each story reinforces 
                our commitment to excellence in care.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we&apos;re proud to serve hundreds of families across the GTA, but our mission 
                remains unchanged: to provide care that honors the dignity and enhances the 
                quality of life for every senior we serve.
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-blue-900 font-medium italic">
                  &ldquo;Every person deserves to age with dignity, surrounded by compassion and respect. 
                  This belief drives everything we do at GoldenBridge Care.&rdquo;
                </p>
                <p className="text-blue-700 font-medium mt-2">- Maria Santos, Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced leadership team brings decades of combined expertise in healthcare, 
              social work, and elderly care services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.credentials}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Accreditations */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Accreditations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of care through continuous education and certification.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-16 bg-indigo-700">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the GoldenBridge Difference?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of families who trust us with their most precious loved ones. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Free Consultation
            </Link>
            <Link href="tel:+14165554357" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-colors">
              Call (416) 555-CARE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const values = [
  {
    icon: "💝",
    title: "Compassion",
    description: "We approach every client with genuine care, empathy, and understanding of their unique needs and circumstances."
  },
  {
    icon: "🏆",
    title: "Excellence",
    description: "We strive for the highest standards in all aspects of our care, continuously improving our services and training."
  },
  {
    icon: "🤝",
    title: "Respect",
    description: "We honor the dignity, independence, and personal choices of every individual we serve."
  },
  {
    icon: "💎",
    title: "Integrity",
    description: "We operate with complete transparency, honesty, and ethical standards in all our interactions."
  }
];

const team = [
  {
    name: "Maria Santos",
    role: "Founder & CEO",
    credentials: "RN, BSN, MSN in Gerontology",
    description: "With over 25 years in healthcare and a specialization in geriatric nursing, Maria founded GoldenBridge Care to fill the gap in quality home care services."
  },
  {
    name: "Dr. James Chen",
    role: "Medical Director",
    credentials: "MD, Geriatric Medicine Specialist",
    description: "Board-certified geriatrician with 15 years of experience. Oversees all medical protocols and caregiver training programs."
  },
  {
    name: "Sarah Williams",
    role: "Director of Mental Health Services",
    credentials: "MSW, LCSW, Certified Grief Counselor",
    description: "Licensed clinical social worker specializing in elderly mental health. Leads our innovative mental health support programs."
  },
  {
    name: "David Thompson",
    role: "Operations Director",
    credentials: "MBA Healthcare Management",
    description: "Ensures seamless service delivery and coordinates our 24/7 emergency response team across the GTA."
  },
  {
    name: "Lisa Park",
    role: "Care Coordinator Supervisor",
    credentials: "RN, Case Management Certification",
    description: "Registered nurse with expertise in care coordination. Oversees caregiver assignments and ensures quality standards."
  },
  {
    name: "Michael Rodriguez",
    role: "Training & Development Manager",
    credentials: "Certified Nursing Assistant Instructor",
    description: "Leads our comprehensive caregiver training program and ensures all staff maintain current certifications."
  }
];

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