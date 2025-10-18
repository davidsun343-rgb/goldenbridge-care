import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Quality elderly care shouldn&apos;t be a mystery. Our clear, upfront pricing 
              ensures you know exactly what to expect with no hidden fees.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-500 bg-opacity-30 px-6 py-3 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Free Consultation & Assessment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health Support Pricing */}
      <section id="mental-health" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Featured Service
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mental Health & Emotional Support
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional mental health support with 24/7 availability for when your loved one needs it most.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mentalHealthPlans.map((plan, index) => (
              <MentalHealthCard key={index} {...plan} />
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What&apos;s Included in Mental Health Support</h3>
              <p className="text-gray-600">Comprehensive emotional wellness support tailored to your needs</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mentalHealthFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Service Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Care Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible care options designed to meet different levels of support needs and budgets.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {carePackages.map((pkg, index) => (
              <CarePackageCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* À La Carte Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Individual Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Need specific services? Choose from our à la carte options to create a custom care plan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Companion Services</h3>
              <div className="space-y-4">
                {companionServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">{service.name}</span>
                    <span className="font-semibold text-gray-900">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Medical & Personal Care</h3>
              <div className="space-y-4">
                {medicalServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">{service.name}</span>
                    <span className="font-semibold text-gray-900">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Specialized Care</h3>
              <div className="space-y-4">
                {specializedServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">{service.name}</span>
                    <span className="font-semibold text-gray-900">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Response Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              24/7 emergency support when urgent situations arise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-red-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-3xl font-bold text-red-600 mb-2">{service.price}</p>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <div className="text-xs text-gray-500">{service.details}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Insurance & Payment Options</h2>
              <p className="text-lg text-gray-600 mb-6">
                We work with most insurance providers and offer flexible payment options 
                to make quality care accessible to all families.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Accepted Insurance</h3>
                  <ul className="space-y-2">
                    {acceptedInsurance.map((insurance, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{insurance}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Methods</h3>
                  <ul className="space-y-2">
                    {paymentMethods.map((method, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get a Free Assessment</h3>
              <p className="text-gray-600 mb-6">
                Not sure which services you need? Our care coordinators will assess your situation 
                and recommend the most appropriate and cost-effective care plan.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">1</span>
                  </div>
                  <span className="text-gray-700">Free in-home consultation (60-90 minutes)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <span className="text-gray-700">Personalized care plan with transparent pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">3</span>
                  </div>
                  <span className="text-gray-700">Insurance verification and payment planning</span>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/contact" className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block text-center">
                  Schedule Free Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-700">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions About Pricing?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Our care coordinators are here to help you understand your options and 
            find the most cost-effective care solution.
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

// Mental Health Support Plans
const mentalHealthPlans = [
  {
    name: "Basic Support",
    price: "$150",
    period: "/month",
    description: "Essential mental health check-ins and support",
    features: [
      "Weekly wellness calls (30 min)",
      "24/7 crisis hotline access",
      "Basic mood tracking",
      "Family updates monthly"
    ],
    popular: false
  },
  {
    name: "Comprehensive Care",
    price: "$350",
    period: "/month",
    description: "Full mental health support with regular counseling",
    features: [
      "Bi-weekly counseling sessions (1 hour)",
      "Daily wellness check-ins",
      "24/7 crisis support",
      "Grief and loss counseling",
      "Family therapy sessions",
      "Care plan reviews"
    ],
    popular: true
  },
  {
    name: "Intensive Support",
    price: "$650",
    period: "/month",
    description: "Comprehensive mental health care for complex needs",
    features: [
      "Weekly therapy sessions (1 hour)",
      "Daily emotional support calls",
      "24/7 dedicated crisis line",
      "Specialized treatment programs",
      "Family counseling included",
      "Psychiatric consultation",
      "Medication management support"
    ],
    popular: false
  }
];

const mentalHealthFeatures = [
  "Licensed mental health professionals",
  "Crisis intervention protocols",
  "Depression and anxiety support",
  "Grief and bereavement counseling",
  "Family communication facilitation",
  "Cognitive behavioral therapy techniques",
  "Mindfulness and relaxation training",
  "Medication compliance support"
];

// Care Packages
const carePackages = [
  {
    name: "Essential Care",
    price: "$28",
    period: "/hour",
    description: "Basic companionship and light assistance",
    features: [
      "Friendly companionship",
      "Light housekeeping",
      "Meal preparation",
      "Medication reminders",
      "Transportation to appointments"
    ],
    hours: "Minimum 4 hours/week",
    popular: false
  },
  {
    name: "Complete Care",
    price: "$35",
    period: "/hour",
    description: "Comprehensive daily living support",
    features: [
      "All Essential Care services",
      "Personal hygiene assistance",
      "Medical appointment coordination",
      "Grocery shopping",
      "Light exercise support",
      "Emergency response coordination"
    ],
    hours: "Minimum 10 hours/week",
    popular: true
  },
  {
    name: "Premium Care",
    price: "$45",
    period: "/hour",
    description: "Full-service care with specialized support",
    features: [
      "All Complete Care services",
      "Specialized medical support",
      "24/7 on-call coordination",
      "Advanced mobility assistance",
      "Dementia/Alzheimer's care",
      "Family liaison services"
    ],
    hours: "Minimum 20 hours/week",
    popular: false
  }
];

// Individual Services
const companionServices = [
  { name: "Companionship Visit (2 hours)", price: "$60" },
  { name: "Social Outing Companion", price: "$35/hour" },
  { name: "Meal Preparation", price: "$25/meal" },
  { name: "Light Housekeeping", price: "$30/hour" },
  { name: "Pet Care Support", price: "$20/hour" },
  { name: "Technology Training Session", price: "$45/hour" },
  { name: "Overnight Companionship", price: "$180/night" },
  { name: "Respite Care (4 hours)", price: "$140" }
];

const medicalServices = [
  { name: "Medication Management", price: "$40/visit" },
  { name: "Medical Appointment Transport", price: "$45/trip" },
  { name: "Health Monitoring", price: "$35/visit" },
  { name: "Physical Therapy Support", price: "$50/hour" },
  { name: "Diabetes Care Support", price: "$45/visit" },
  { name: "Memory Care Session", price: "$55/hour" },
  { name: "Post-Hospital Care", price: "$65/visit" },
  { name: "Personal Care Assistance", price: "$40/hour" }
];

const specializedServices = [
  { name: "Overnight Care (12 hours)", price: "$220" },
  { name: "Deep Housekeeping", price: "$80/visit" },
  { name: "Specialized Dementia Care", price: "$60/hour" },
  { name: "Fall Prevention Training", price: "$75/session" },
  { name: "Nutrition Counseling", price: "$65/session" },
  { name: "Respite Care (8 hours)", price: "$280" },
  { name: "Emergency Response Setup", price: "$150/setup" },
  { name: "Care Plan Assessment", price: "$125/assessment" }
];

// Emergency Services
const emergencyServices = [
  {
    name: "Emergency Response",
    price: "$200",
    icon: "🚨",
    description: "Immediate on-site response",
    details: "Within 30 minutes in GTA"
  },
  {
    name: "Crisis Intervention",
    price: "$150",
    icon: "💙",
    description: "Mental health crisis support",
    details: "24/7 professional intervention"
  },
  {
    name: "Medical Emergency",
    price: "$250",
    icon: "🏥",
    description: "Medical emergency coordination",
    details: "Hospital liaison and family notification"
  }
];

// Insurance and Payment
const acceptedInsurance = [
  "Ontario Health Insurance Plan (OHIP)",
  "Private Health Insurance",
  "Veterans Affairs Canada",
  "Workers' Compensation",
  "Long-term Care Insurance",
  "Extended Health Benefits"
];

const paymentMethods = [
  "Monthly billing with automatic payment",
  "Credit card payments",
  "Direct bank transfer",
  "Insurance direct billing",
  "Flexible payment plans available",
  "HSA/FSA accepted"
];

// Component definitions
interface MentalHealthCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

function MentalHealthCard({ name, price, period, description, features, popular }: MentalHealthCardProps) {
  return (
    <div className={`relative bg-white rounded-xl border-2 p-6 ${popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <div className="mb-2">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600">{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Link 
        href="/contact" 
        className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}

interface CarePackageCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  hours?: string;
  popular?: boolean;
}

function CarePackageCard({ name, price, period, description, features, hours, popular }: CarePackageCardProps) {
  return (
    <div className={`relative bg-white rounded-xl border-2 p-6 ${popular ? 'border-green-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Recommended
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <div className="mb-2">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600">{period}</span>
        </div>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-sm text-gray-500">{hours}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Link 
        href="/contact" 
        className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors ${
          popular 
            ? 'bg-green-600 text-white hover:bg-green-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Choose Plan
      </Link>
    </div>
  );
}