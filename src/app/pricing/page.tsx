import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <section className="py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm md:text-base tracking-[0.2em] text-indigo-700 font-semibold mb-4 uppercase">
              Clear Rates. Reliable Support.
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 uppercase">
              Pricing You Can Plan Around
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              We keep rates straightforward and explain every option in advance so your family can choose care with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-800 transition-colors text-center">
                Book Free Consultation
              </Link>
              <Link href="tel:+14376796446" className="border-2 border-indigo-700 text-indigo-700 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors text-center">
                Call (437) 679-6446
              </Link>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 bg-gray-100 px-5 py-3 rounded-full">
              <svg className="w-5 h-5 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium text-gray-700">Free consultation and care assessment</span>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/Elderly.jpg"
              alt="Care coordinator discussing support options"
              className="w-full h-[420px] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10"></div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-5">
          {serviceHighlights.map((item) => (
            <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="text-sm font-semibold text-indigo-700 uppercase tracking-wide mb-2">{item.title}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-indigo-700 uppercase tracking-[0.16em] mb-3">Care Packages</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase">
              Core Service Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All packages include a 3-hour visit minimum, personalized care planning, and consistent caregiver matching.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {carePackages.map((pkg, index) => (
              <CarePackageCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-indigo-700 uppercase tracking-[0.16em] mb-3">Specialty Care</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase">
              Specialty Services & Blocks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible overnight and live-in options, plus practical add-ons for day-to-day care needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 uppercase">Overnight & Live-in Care</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Overnight (12h, non-medical)</span>
                  <span className="font-semibold text-gray-900">$300/night</span>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-6 uppercase">À La Carte Add-ons</h3>
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

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold text-indigo-700 uppercase tracking-[0.16em] mb-3">Billing & Insurance</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase">Payment Options</h2>
              <p className="text-lg text-gray-600 mb-8">
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
                      <li key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2">
                        <svg className="w-5 h-5 text-indigo-700" fill="currentColor" viewBox="0 0 20 20">
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
                      <li key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2">
                        <svg className="w-5 h-5 text-indigo-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-indigo-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 uppercase">Get a Free Assessment</h3>
              <p className="text-gray-600 mb-6">
                Not sure which services you need? Our care coordinators will assess your situation 
                and recommend the most appropriate and cost-effective care plan.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <span className="text-indigo-100">Free in-home consultation (60-90 minutes)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <span className="text-indigo-100">Personalized care plan with transparent pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <span className="text-indigo-100">Insurance verification and payment planning</span>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/contact" className="w-full bg-white text-indigo-700 py-4 px-6 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-block text-center">
                  Schedule Free Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-indigo-300 uppercase tracking-[0.16em] mb-3">Need Help Choosing?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
            Questions About Pricing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our care coordinators are here to help you understand your options and 
            find the most cost-effective care solution.
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

// Care Packages
const carePackages = [
  {
    name: "Companion Care",
    price: "$32",
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
    hours: "3 hours/week minimum • 3 hours/visit minimum",
    popular: false
  },
  {
    name: "Personal Care (PSW)",
    price: "$35",
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
    hours: "6 hours/week minimum • 3 hours/visit minimum",
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
    <div className={`relative bg-white rounded-xl border-2 p-6 ${popular ? 'border-indigo-600 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Requested
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 uppercase">{name}</h3>
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
            <svg className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
            ? 'bg-indigo-700 text-white hover:bg-indigo-800' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get This Plan
      </Link>
    </div>
  );
}

const serviceHighlights = [
  {
    title: "Dependability",
    description: "Consistent staffing and proactive replacement coverage keep your plan on track."
  },
  {
    title: "Continuous Care",
    description: "Regular follow-ups and coordinator check-ins help families stay informed and supported."
  },
  {
    title: "Flexible Support",
    description: "From companionship to complex care, plans scale with your loved one’s needs."
  }
];