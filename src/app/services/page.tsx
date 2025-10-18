import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Elderly Care Services
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Professional, compassionate care tailored to your loved one&apos;s unique needs. 
              Available 24/7 across the Greater Toronto Area.
            </p>
            <Link href="/contact" className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Mental Health & Emotional Support */}
      <section id="mental-health" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Featured Service
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mental Health & Emotional Support
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our trained companions provide professional mental health support through regular check-ins, 
                active listening, and emotional companionship. We understand the importance of mental wellness 
                in aging gracefully.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700"><strong>24/7 Mental Health Helpline</strong> - Crisis support and emotional guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700"><strong>Regular Wellness Calls</strong> - Scheduled check-ins to combat isolation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700"><strong>Grief & Loss Counseling</strong> - Professional support during difficult times</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700"><strong>Depression & Anxiety Support</strong> - Specialized care for mental health conditions</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Link href="/contact" className="btn-primary">
                  Call Now: (416) 555-CARE
                </Link>
                <Link href="/pricing#mental-health" className="btn-secondary">
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Available 24/7</h3>
                <p className="text-gray-600 mb-6">Our mental health support line is always available when you need someone to talk to.</p>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-2xl font-bold text-green-600">(416) 555-CARE</p>
                  <p className="text-sm text-gray-500">24/7 Mental Health Helpline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From daily living assistance to specialized medical support, we provide comprehensive care 
              to help seniors live independently and safely at home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              Emergency Services
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">24/7 Emergency Response</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Immediate assistance when you need it most. Our emergency response team is available 
              around the clock for urgent situations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Hotline</h3>
              <p className="text-gray-600 mb-4">Immediate phone support for urgent situations</p>
              <p className="text-2xl font-bold text-red-600">(416) 555-9911</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapid Response</h3>
              <p className="text-gray-600 mb-4">On-site assistance within 30 minutes</p>
              <p className="text-lg font-semibold text-gray-700">GTA Wide Coverage</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Medical Coordination</h3>
              <p className="text-gray-600 mb-4">Direct coordination with healthcare providers</p>
              <p className="text-lg font-semibold text-gray-700">Seamless Care</p>
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
            Contact us today for a free consultation and personalized care plan 
            tailored to your loved one&apos;s specific needs.
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

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  link: string;
}

const services: Service[] = [
  {
    icon: "👥",
    title: "Companionship Services",
    description: "Friendly, engaging companionship to combat loneliness and social isolation.",
    features: [
      "Daily conversation and social interaction",
      "Accompany to appointments and errands",
      "Light entertainment and activities",
      "Family communication support"
    ],
    link: "#companionship"
  },
  {
    icon: "🏥",
    title: "Medical Assistance",
    description: "Professional support with healthcare needs and medical appointments.",
    features: [
      "Medication reminders and management",
      "Medical appointment coordination",
      "Health monitoring and reporting",
      "Communication with doctors"
    ],
    link: "#medical"
  },
  {
    icon: "🏠",
    title: "Daily Living Support",
    description: "Assistance with activities of daily living to maintain independence.",
    features: [
      "Light housekeeping and organization",
      "Meal preparation and nutrition",
      "Personal hygiene assistance",
      "Mobility and exercise support"
    ],
    link: "#daily-living"
  },
  {
    icon: "🚗",
    title: "Transportation Services",
    description: "Safe, reliable transportation for appointments and social activities.",
    features: [
      "Medical appointment transportation",
      "Grocery shopping assistance",
      "Social outings and visits",
      "Emergency transportation"
    ],
    link: "#transportation"
  },
  {
    icon: "🍽️",
    title: "Nutrition & Meal Support",
    description: "Healthy meal planning, preparation, and nutritional guidance.",
    features: [
      "Customized meal planning",
      "Fresh, healthy meal preparation",
      "Dietary restriction accommodation",
      "Nutrition education and support"
    ],
    link: "#nutrition"
  },
  {
    icon: "🧘",
    title: "Wellness Programs",
    description: "Holistic wellness activities to promote physical and mental health.",
    features: [
      "Gentle exercise and physical therapy",
      "Mindfulness and relaxation techniques",
      "Cognitive stimulation activities",
      "Social group activities"
    ],
    link: "#wellness"
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
    link: "#memory-care"
  },
  {
    icon: "💊",
    title: "Medication Management",
    description: "Professional oversight of medication schedules and compliance.",
    features: [
      "Pill organization and dispensing",
      "Medication reminder systems",
      "Side effect monitoring",
      "Pharmacy coordination"
    ],
    link: "#medication"
  },
  {
    icon: "🛁",
    title: "Personal Care Services",
    description: "Dignified assistance with personal hygiene and grooming needs.",
    features: [
      "Bathing and shower assistance",
      "Grooming and dressing support",
      "Incontinence care",
      "Skin care and wound monitoring"
    ],
    link: "#personal-care"
  },
  {
    icon: "📱",
    title: "Technology Support",
    description: "Help with modern technology to stay connected with family and friends.",
    features: [
      "Smartphone and tablet training",
      "Video calling setup",
      "Social media assistance",
      "Online shopping guidance"
    ],
    link: "#technology"
  },
  {
    icon: "🏃‍♂️",
    title: "Physical Therapy Support",
    description: "Assistance with prescribed exercises and mobility improvement.",
    features: [
      "Exercise routine supervision",
      "Fall prevention training",
      "Mobility equipment assistance",
      "Recovery support coordination"
    ],
    link: "#physical-therapy"
  },
  {
    icon: "🏘️",
    title: "Social Activities & Outings",
    description: "Organized social activities to maintain community connections.",
    features: [
      "Community event participation",
      "Religious service attendance",
      "Shopping and errands",
      "Cultural activities and museums"
    ],
    link: "#social-activities"
  },
  {
    icon: "🌙",
    title: "Overnight Care",
    description: "24-hour supervision and care for those who need continuous support.",
    features: [
      "Overnight safety monitoring",
      "Sleep assistance and comfort",
      "Emergency response availability",
      "Early morning care routines"
    ],
    link: "#overnight-care"
  },
  {
    icon: "🏠",
    title: "Housekeeping & Maintenance",
    description: "Comprehensive home management to maintain a safe living environment.",
    features: [
      "Deep cleaning services",
      "Laundry and organization",
      "Basic home maintenance",
      "Safety hazard identification"
    ],
    link: "#housekeeping"
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
    link: "#respite-care"
  },
  {
    icon: "🚑",
    title: "Post-Hospital Care",
    description: "Specialized transitional care after hospital discharge.",
    features: [
      "Recovery monitoring",
      "Medication compliance",
      "Appointment coordination",
      "Rehabilitation support"
    ],
    link: "#post-hospital"
  }
];

function ServiceCard({ icon, title, description, features, link }: Service) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0 mt-2"></div>
            {feature}
          </li>
        ))}
      </ul>
      <Link 
        href={`/services${link}`} 
        className="text-indigo-700 font-medium hover:text-indigo-800 text-sm"
      >
        Learn more →
      </Link>
    </div>
  );
}