import Link from "next/link";
import { HeroVideo } from "../components/HeroVideo";

export default function Home() {
  return (
    <div className="pt-20 bg-white">
      <section className="relative min-h-[82vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <HeroVideo
            src="/videos/hero.mp4"
            poster="/images/nursing-care-costs-scaled-1-1024x682.jpg"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-200 mb-4">
            GoldenBridge Care • Trusted GTA Home Care
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase max-w-4xl leading-tight animate-fade-in-up">
            A Better Life For Those At Home.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-3xl leading-relaxed">
            We help families across the GTA with dependable home care, from companionship and housekeeping to personal support and complex care coordination.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-800 text-center">
              Message Us
            </Link>
            <Link href="tel:+14376796446" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 text-center">
              Call 437-679-6446
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-kicker mb-3">Dependability</p>
            <h2 className="section-title mb-4">Treating Your Family Like Our Own</h2>
            <p className="section-subtitle leading-relaxed">
              We build person-centered care plans and carefully match each client with caregivers until the fit is right. Our goal is to provide confidence, continuity, and dignity in every visit.
            </p>
          </div>
          <img src="/images/Elderly.jpg" alt="Support worker with client" className="w-full h-[380px] object-cover rounded-2xl" />
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img src="/images/nursing-care-costs-scaled-1-1024x682.jpg" alt="Nurse providing home support" className="w-full h-[380px] object-cover rounded-2xl order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <p className="section-kicker mb-3">Consistent, Continuous Care</p>
            <h2 className="section-title mb-4">A Proactive Approach To Daily Health Support</h2>
            <p className="section-subtitle leading-relaxed">
              Our care coordinators actively follow up with clients and families, track changes, and adjust plans before issues grow. You get steady communication and reliable oversight.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-kicker mb-3">Nursing and Home Services</p>
            <h2 className="section-title mb-4">Lean On Us. We&apos;re Here For You.</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              From a helping hand at the grocery store to personal care and overnight support, we tailor care to the real needs of your family.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="/services" className="text-indigo-700 font-semibold hover:text-indigo-800">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-kicker mb-3">How We Help You</p>
            <h2 className="section-title mb-4">What Families Count On</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeHelp.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <div className="w-14 h-14 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center text-indigo-700 text-2xl">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 uppercase text-sm tracking-wide">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-kicker mb-3">How Care Starts</p>
            <h2 className="section-title mb-4">Simple, Fast, Family-Focused</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              We make getting support at home straightforward, with clear communication at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {onboardingSteps.map((step, index) => (
              <div key={step.title} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-indigo-600 font-semibold mb-3">Step {index + 1}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-kicker mb-3">Client Reviews</p>
            <h2 className="section-title mb-4">Trusted By Families Across The GTA</h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-8">
            <div className="grid md:grid-cols-2 items-stretch">
              <img src="/images/Elderly.jpg" alt="Senior and caregiver smiling" className="h-full w-full object-cover min-h-[280px]" />
              <div className="p-8 flex flex-col justify-center">
                <p className="text-yellow-500 text-xl mb-3" aria-label="5 out of 5 stars">★★★★★</p>
                <p className="text-gray-800 text-lg leading-relaxed mb-5">
                  “GoldenBridge has been incredible with my mom. The caregiver is kind, punctual, and always communicates with our family. We finally feel peace of mind.”
                </p>
                <p className="font-bold text-gray-900">— Family in Toronto</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="bg-white border border-gray-200 rounded-xl p-6">
                <p className="text-yellow-500 mb-2" aria-label="5 out of 5 stars">★★★★★</p>
                <p className="text-gray-700 mb-3">{review.text}</p>
                <p className="text-sm font-semibold text-gray-900">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="section-kicker text-indigo-300 mb-3">You Make The Memories</p>
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">We&apos;ll Provide The Support</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Schedule a complimentary care consultation and get a plan tailored to your loved one’s routines, safety needs, and family preferences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="tel:+14376796446" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100">
              437-679-6446
            </Link>
            <Link href="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700">
              Contact Us
            </Link>
          </div>

          <div className="max-w-xl mx-auto rounded-xl border border-white/15 bg-white/5 px-5 py-4">
            <div className="grid sm:grid-cols-3 gap-4 items-center">
              <img src="/images/wsib-logo.svg" alt="WSIB" className="h-9 w-auto mx-auto opacity-90" />
              <img src="/images/schulich-logo.svg" alt="Schulich" className="h-9 w-auto mx-auto opacity-90" />
              <img src="/images/zensurance-logo.svg" alt="Zensurance" className="h-9 w-auto mx-auto opacity-90" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  { title: "Nursing Care", description: "Personalized support plans and day-to-day clinical coordination." },
  { title: "Occupational Therapy", description: "Home-focused routines that support safety and independence." },
  { title: "Personal Care", description: "Hands-on assistance with hygiene, mobility, and daily routines." },
  { title: "Alzheimer’s and Dementia Care", description: "Calm, structured care with memory-informed support." },
  { title: "Palliative Care Support", description: "Comfort-focused care that respects dignity and family goals." },
  { title: "Respite Care", description: "Flexible support so family caregivers can rest and recharge." },
  { title: "Postoperative Care", description: "Safer transition home after surgery with practical recovery support." },
  { title: "Transportation", description: "Accompanied trips to appointments, errands, and community visits." },
  { title: "Companionship", description: "Meaningful social support to reduce isolation and boost wellbeing." },
  { title: "Medication Adherence", description: "Routine reminders and oversight to support medication consistency." },
  { title: "Housekeeping", description: "Light home help to keep living spaces clean and manageable." },
  { title: "Family Managed Home Care", description: "Collaborative care planning with clear communication and flexibility." }
];

const howWeHelp = [
  { icon: "🕒", title: "24/7/365 Service", description: "Open, responsive support whenever your family needs us." },
  { icon: "🧠", title: "Specialty Care", description: "Experienced support for dementia, post-op, and complex care." },
  { icon: "💬", title: "Open Communication", description: "Frequent updates keep your family informed and connected." },
  { icon: "✅", title: "Reliability Pledge", description: "Consistent staffing and active coordination for every plan." }
];

const onboardingSteps = [
  {
    title: "Call Or Message Us",
    description: "Tell us your needs, schedule, and goals. We answer quickly and walk you through options.",
  },
  {
    title: "In-Home Care Assessment",
    description: "We complete a personalized assessment and create a care plan that fits your family&apos;s routine.",
  },
  {
    title: "Start Care With Confidence",
    description: "Your matched caregiver begins support, with ongoing coordination and regular family updates.",
  },
];

const reviews = [
  {
    name: "Daughter in North York",
    text: "The team was responsive from day one, and the care plan was exactly what we needed.",
  },
  {
    name: "Family in Mississauga",
    text: "Professional, compassionate, and reliable. We recommend GoldenBridge without hesitation.",
  },
];
