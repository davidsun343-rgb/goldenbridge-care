import Link from "next/link";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/nursing-care-costs-scaled-1-1024x682.jpg" 
            alt="Professional elderly care services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-600 bg-opacity-90 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                24/7 Mental Health Support Available
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-2xl">
                Compassionate <span className="text-blue-300">Elderly Care</span> at Home
              </h1>
              <p className="mt-6 text-xl text-gray-100 leading-relaxed drop-shadow-lg">
                Professional care services including <strong className="text-white">mental health support</strong>, companionship, 
                medical assistance, and daily living help. Available 24/7 across the Greater Toronto Area.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 text-center shadow-2xl backdrop-blur-sm bg-opacity-90">
                  Get Free Consultation
                </Link>
                <Link href="tel:+14373609088" className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 text-center shadow-2xl backdrop-blur-sm">
                  Call (437) 360-9088
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-100">
                <div className="flex items-center gap-2 bg-black bg-opacity-30 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Licensed & Insured
                </div>
                <div className="flex items-center gap-2 bg-black bg-opacity-30 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Same-Week Start
                </div>
                <div className="flex items-center gap-2 bg-black bg-opacity-30 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  15+ Years Experience
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Emergency Mental Health Support</h3>
                <p className="text-gray-600 mt-2">Available 24/7 when you need it most</p>
              </div>
              
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-red-700">(416) 555-CARE</p>
                  <p className="text-sm text-red-600 font-medium">Crisis Support Hotline</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="font-semibold text-blue-900">Response Time</p>
                  <p className="text-blue-700">Under 30 minutes</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <p className="font-semibold text-green-900">Availability</p>
                  <p className="text-green-700">24/7/365</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <p className="font-semibold text-purple-900">Service Area</p>
                  <p className="text-purple-700">All of GTA</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <p className="font-semibold text-amber-900">Coverage</p>
                  <p className="text-amber-700">Insurance Accepted</p>
                </div>
              </div>
              
              <Link href="/services#mental-health" className="mt-6 w-full bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-800 transition-colors text-center block">
                Learn More About Mental Health Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Elderly Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From mental health support to daily living assistance, we provide everything 
              your loved one needs to live safely and happily at home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.link} className="text-indigo-700 font-medium hover:text-indigo-800 text-sm">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Families Choose GoldenBridge Care
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Over 15 years of experience providing exceptional care with a focus on dignity, 
              respect, and personalized service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{reason.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Families Are Saying
            </h2>
            <p className="text-xl text-gray-600">Real stories from the families we&apos;ve had the honor to serve</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.relationship}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Need Immediate Help?</h2>
            </div>
            <p className="text-xl text-red-100 mb-6">
              Our emergency response team is available 24/7 for urgent situations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+14165559911" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Emergency: (416) 555-9911
              </Link>
              <Link href="tel:+14165554357" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                General: (416) 555-CARE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-700">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us create a personalized 
            care plan for your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const featuredServices = [
  {
    icon: "💙",
    title: "Mental Health Support",
    description: "24/7 emotional support and crisis intervention with licensed professionals.",
    features: [
      "Crisis hotline available 24/7",
      "Regular wellness check-ins",
      "Depression and anxiety support",
      "Grief counseling services"
    ],
    link: "/services#mental-health"
  },
  {
    icon: "👥",
    title: "Companionship Care",
    description: "Friendly, engaging companionship to combat loneliness and isolation.",
    features: [
      "Daily conversation and activities",
      "Social outings and errands",
      "Hobby and interest support",
      "Technology assistance"
    ],
    link: "/services#companionship"
  },
  {
    icon: "🏥",
    title: "Medical Assistance",
    description: "Professional support with healthcare needs and medical coordination.",
    features: [
      "Medication management",
      "Medical appointment coordination",
      "Health monitoring",
      "Communication with healthcare providers"
    ],
    link: "/services#medical"
  },
  {
    icon: "🏠",
    title: "Daily Living Support",
    description: "Assistance with activities of daily living to maintain independence.",
    features: [
      "Light housekeeping",
      "Meal preparation",
      "Personal hygiene assistance",
      "Mobility support"
    ],
    link: "/services#daily-living"
  },
  {
    icon: "🚗",
    title: "Transportation Services",
    description: "Safe, reliable transportation for appointments and social activities.",
    features: [
      "Medical appointment transport",
      "Grocery shopping trips",
      "Social visits and outings",
      "Emergency transportation"
    ],
    link: "/services#transportation"
  },
  {
    icon: "🚨",
    title: "Emergency Response",
    description: "Immediate assistance and coordination during urgent situations.",
    features: [
      "24/7 emergency hotline",
      "Rapid response team",
      "Medical emergency coordination",
      "Family notification services"
    ],
    link: "/services#emergency"
  },
  {
    icon: "🧠",
    title: "Memory Care & Dementia Support",
    description: "Specialized care for individuals with Alzheimer's and dementia.",
    features: [
      "Memory stimulation activities",
      "Cognitive behavioral techniques",
      "Safe environment monitoring",
      "Family education and support"
    ],
    link: "/services#memory-care"
  },
  {
    icon: "🌙",
    title: "Overnight Care",
    description: "24-hour supervision and care for continuous support needs.",
    features: [
      "Overnight safety monitoring",
      "Sleep assistance and comfort",
      "Emergency response availability",
      "Early morning care routines"
    ],
    link: "/services#overnight-care"
  },
  {
    icon: "🧑‍⚕️",
    title: "Respite Care",
    description: "Temporary care relief for family caregivers who need a break.",
    features: [
      "Short-term care coverage",
      "Flexible scheduling options",
      "Trained professional caregivers",
      "Peace of mind for families"
    ],
    link: "/services#respite-care"
  }
];

const whyChooseUs = [
  {
    icon: "🏆",
    title: "15+ Years Experience",
    description: "Over a decade of providing exceptional elderly care services across the GTA."
  },
  {
    icon: "💝",
    title: "Compassionate Care",
    description: "Every caregiver is trained to provide care with dignity, respect, and genuine compassion."
  },
  {
    icon: "🔒",
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your complete peace of mind."
  },
  {
    icon: "⚡",
    title: "24/7 Availability",
    description: "Round-the-clock support available whenever you need us most."
  }
];

const testimonials = [
  {
    quote: "The mental health support Maria received was incredible. The daily check-ins helped her through a very difficult time after my father passed away.",
    name: "Sarah Thompson",
    relationship: "Daughter of client"
  },
  {
    quote: "GoldenBridge Care gave us our lives back. Knowing Dad has professional, caring support allows us to focus on being his children, not just his caregivers.",
    name: "Michael Chen",
    relationship: "Son of client"
  },
  {
    quote: "The 24/7 emergency line has been a lifesaver. When Mom fell last month, they had someone there within 20 minutes and coordinated everything with the hospital.",
    name: "Jennifer Williams",
    relationship: "Daughter of client"
  },
  {
    quote: "The companionship service has been wonderful. Emma comes twice a week and my mother looks forward to their visits so much. She's like family now.",
    name: "Robert Martinez",
    relationship: "Son of client"
  },
  {
    quote: "Professional, reliable, and genuinely caring. The team at GoldenBridge Care treats my husband with such respect and dignity. I couldn't ask for better care.",
    name: "Dorothy Park",
    relationship: "Spouse of client"
  },
  {
    quote: "The mental health counseling has helped my father cope with his diagnosis. Having someone trained in geriatric mental health has made all the difference.",
    name: "Amanda Rodriguez",
    relationship: "Daughter of client"
  }
];
