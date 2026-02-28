import Link from "next/link";
import QuickContactForm from "@/components/QuickContactForm";

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
                personal care assistance, and daily living help. Available across the Greater Toronto Area.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 text-center shadow-2xl backdrop-blur-sm bg-opacity-90">
                  Get Free Consultation
                </Link>
                <Link href="tel:+14376796446" className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 text-center shadow-2xl backdrop-blur-sm">
                  Call (437) 679-6446
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-100">
                <div className="flex items-center gap-2 bg-black bg-opacity-30 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 1.944l6.6 2.474A1 1 0 0118 5.354V10c0 4.7-2.89 8.93-7.2 10.49a2.6 2.6 0 01-1.6 0C4.89 18.93 2 14.7 2 10V5.354a1 1 0 01.4-.936L9 1.944a1.5 1.5 0 011 0zM8.293 10.293a1 1 0 00-1.414 1.414l1.9 1.9a1 1 0 001.414 0l3.9-3.9a1 1 0 10-1.414-1.414L9.486 11.486l-1.193-1.193z" clipRule="evenodd" />
                  </svg>
                  Incorporated • Insured • WSIB
                </div>
                <div className="flex items-center gap-2 bg-black bg-opacity-30 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2C5.03 2 1 6.03 1 11c0 1.17.23 2.29.64 3.32L1 18l3.68-.64C5.71 17.77 6.83 18 8 18h2c4.97 0 9-4.03 9-9S14.97 2 10 2zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 12h-8v-1.5c0-1.33 2.67-2 4-2s4 .67 4 2V16z"/>
                  </svg>
                  All CPR Certified
                </div>
                <div className="flex items-center gap-2 bg-black bg-opacity-30 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                  PSW Professionals
                </div>
                <div className="flex items-center gap-2 bg-black bg-opacity-30 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  15+ Years Experience
                </div>
              </div>
            </div>

            <QuickContactForm />
          </div>
        </div>
      </section>

      {/* Team Qualifications Highlight */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Fully Qualified & Certified Care Team
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Every member of our team is selectively chosen, professionally trained and certified to provide the highest quality care
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2C5.03 2 1 6.03 1 11c0 1.17.23 2.29.64 3.32L1 18l3.68-.64C5.71 17.77 6.83 18 8 18h2c4.97 0 9-4.03 9-9S14.97 2 10 2zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 12h-8v-1.5c0-1.33 2.67-2 4-2s4 .67 4 2V16z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">100% CPR Certified Staff</h3>
              </div>
              <p className="text-blue-100">
                Every single team member is CPR certified and trained in emergency response procedures. 
                Your loved ones are always in safe, capable hands.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">PSW Professionals</h3>
              </div>
              <p className="text-blue-100">
                Our team consists exclusively of certified Personal Support Workers (PSWs) who are professionally trained
                and qualified to provide the highest standard of elderly care services.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Trusted Caregivers</h3>
              </div>
              <p className="text-blue-100">
                Every team member has completed a Vulnerable Sector Check, full background screening, 
                and reference verification for your peace of mind.
              </p>
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
              From daily living assistance to specialized care, we provide everything 
              your loved one needs to live safely and happily at home.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="group bg-white rounded-lg border-2 border-gray-200 p-8 hover:border-indigo-300 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={service.link} className="inline-flex items-center text-indigo-700 font-semibold hover:text-indigo-800 transition-colors">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 bg-gray-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gray-100">
          <img 
            src="/images/Elderly.jpg" 
            alt="Elderly care background"
            className="w-full h-full object-cover object-top opacity-35"
          />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Families Choose GoldenBridge Care
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Over 15 years of experience providing exceptional care with a focus on dignity, 
              respect, and personalized service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Google Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
              Trusted by Families Across the GTA
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-semibold text-gray-900">5.0</span>
            </div>
            <a 
              href="https://www.google.com/search?q=GoldenBridge+Care" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg transition-colors"
            >
              Read all reviews on Google
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                &ldquo;The mental health support has been incredible for my mother. After my father passed, she was struggling with depression. The daily check-ins and compassionate care helped her regain her joy. She&rsquo;s now attending her book club again and planning visits with her grandchildren.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Margaret S.</p>
                  <p className="text-sm text-gray-500">Google Review</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                &ldquo;When Dad fell at 2am, I was terrified. I called their 24/7 emergency line and they were absolutely professional. The dispatcher stayed calm, walked me through everything, and had a caregiver at our door in 18 minutes. They coordinated with paramedics and stayed until we knew Dad was safe.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                  J
                </div>
                <div>
                  <p className="font-semibold text-gray-900">James K.</p>
                  <p className="text-sm text-gray-500">Google Review</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://www.google.com/search?q=GoldenBridge+Care#lrd=0x0:0x0,1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Leave a Review
            </a>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm font-semibold tracking-wide text-gray-600 uppercase mb-6">
            Credentials & Affiliations
          </p>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/wsib-logo.svg"
                alt="WSIB Ontario logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
              <p className="mt-3 text-sm text-gray-700 font-medium">Registered with WSIB Ontario</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/schulich-logo.svg"
                alt="Schulich School of Business logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
              <p className="mt-3 text-sm text-gray-700 font-medium">Founder is a Schulich School of Business alumnus</p>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500 max-w-3xl mx-auto">
            WSIB and Schulich marks belong to their respective owners and are displayed for factual identification only; no endorsement or affiliation is implied.
          </p>
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
    icon: "🧴",
    title: "Personal Care Services",
    description: "Compassionate assistance with personal hygiene and daily care routines.",
    features: [
      "Bathing and grooming assistance",
      "Dressing and clothing support",
      "Personal hygiene maintenance",
      "Dignity-focused care approach"
    ],
    link: "/services#personal-care"
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
      "Appointment transportation",
      "Grocery shopping trips",
      "Social visits and outings",
      "Personal errands assistance"
    ],
    link: "/services#transportation"
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
    icon: "🩺",
    title: "All CPR Certified",
    description: "Every team member is CPR certified and trained in emergency response procedures."
  },
  {
    icon: "👥",
    title: "PSW Professionals",
    description: "All our caregivers are certified Personal Support Workers (PSWs) professionally trained to provide expert elderly care."
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
