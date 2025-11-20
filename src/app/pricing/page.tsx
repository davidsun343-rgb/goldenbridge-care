import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-20">
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

      {/* Core Service Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Care Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional care services with 3-hour visit minimums and weekly minimums for staffing stability.
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
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialty Services & Blocks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Overnight care, live-in support, and convenient add-on services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Overnight & Live-in Care</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Overnight (12h, non-medical)</span>
                  <span className="font-semibold text-gray-900">$260/night</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Awake Night (10h, frequent assistance)</span>
                  <span className="font-semibold text-gray-900">$300/night</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Live-in (24h presence, 8h sleep)</span>
                  <span className="font-semibold text-gray-900">$420–$460/day</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Hospital Discharge Starter</span>
                  <span className="font-semibold text-gray-900">$199 flat</span>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                <p>Quiet hours, safety checks, basic assistance</p>
                <p>Live-in rate depends on care intensity (quote after assessment)</p>
                <p>Hospital starter includes: care plan + first 3-hour visit + pharmacy pickup + safety check</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">À La Carte Add-ons</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Transportation (to appointments)</span>
                  <span className="font-semibold text-gray-900">$15/trip + $0.75/km</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Care Plan Assessment (in-home)</span>
                  <span className="font-semibold text-gray-900">$99</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Complex-care uplift</span>
                  <span className="font-semibold text-gray-900">+$3/hr</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Stat holiday uplift</span>
                  <span className="font-semibold text-gray-900">+25%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Last-minute booking (&lt;24h)</span>
                  <span className="font-semibold text-gray-900">+$20 flat</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Cancellation &lt;24h</span>
                  <span className="font-semibold text-gray-900">50% (max 4 hrs)</span>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                <p>Assessment credited if you book 10+ hrs/week</p>
                <p>Complex care: two-person assist, lifts, behavior risks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Options</h2>
              <p className="text-lg text-gray-600 mb-6">
                Clients pay GoldenBridge Care directly. Some insurance plans may provide reimbursement 
                when you submit receipts. We offer flexible payment options to make quality care accessible.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Potential Reimbursement Options</h3>
                  <p className="text-sm text-gray-600 mb-3 italic">
                    Note: Clients pay us directly and may submit receipts to their insurer if their plan allows reimbursement.
                  </p>
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
            <Link href="tel:+14376796446" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-colors">
              Call (437) 679-6446
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Care Packages
const carePackages = [
  {
    name: "Companion Care",
    price: "$34",
    period: "/hour",
    description: "Friendly companionship and light assistance",
    features: [
      "Friendly companionship",
      "Light housekeeping",
      "Meal preparation", 
      "Medication reminders",
      "Light errands",
      "Walk support",
      "Social outings"
    ],
    hours: "6 hours/week minimum • 3 hours/visit minimum",
    popular: false
  },
  {
    name: "Personal Care (PSW)",
    price: "$38",
    period: "/hour", 
    description: "All Companion Care plus personal care assistance",
    features: [
      "All Companion Care services",
      "Bathing and toileting assistance",
      "Dressing and grooming",
      "Transfers and mobility support",
      "Basic exercises",
      "Skin checks",
      "Dementia-informed routines"
    ],
    hours: "8 hours/week minimum • 3 hours/visit minimum",
    popular: true
  },
  {
    name: "Enhanced Support (PSW+)",
    price: "$42",
    period: "/hour",
    description: "Comprehensive care with advanced support",
    features: [
      "All Personal Care services",
      "Two-person transfers (when needed)",
      "Advanced dementia cueing",
      "Post-hospital routines",
      "Safety monitoring",
      "Caregiver coaching"
    ],
    hours: "10 hours/week minimum • 3 hours/visit minimum",
    popular: false
  }
];

// Insurance and Payment
const acceptedInsurance = [
  "Long-Term Care Insurance",
  "Veterans Affairs Canada (VAC)",
  "WSIB (if applicable)",
  "Motor Vehicle Accident (MVA) Insurance",
  "Health Spending Accounts (HSA/LSA)"
];

const paymentMethods = [
  "Monthly billing with automatic payment",
  "Credit card payments", 
  "Direct bank transfer",
  "Flexible payment plans available",
  "HSA/FSA accepted"
];

// Component definitions
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