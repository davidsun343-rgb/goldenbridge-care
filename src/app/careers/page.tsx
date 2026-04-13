import Link from "next/link";

const openings = [
  {
    title: "Personal Support Worker (PSW)",
    type: "Full-Time / Part-Time",
    location: "GTA — Multiple Locations",
    desc: "Provide compassionate personal care, companionship, and daily living support to clients in their homes.",
  },
  {
    title: "Registered Nurse (RN / RPN)",
    type: "Part-Time / PRN",
    location: "Toronto & Surrounding Areas",
    desc: "Conduct assessments, manage care plans, and deliver skilled nursing services to home care clients.",
  },
  {
    title: "Client Care Coordinator",
    type: "Full-Time",
    location: "Remote / Hybrid",
    desc: "Be the bridge between families and our care team. Match clients with caregivers and ensure seamless onboarding.",
  },
  {
    title: "Companion Caregiver",
    type: "Part-Time / Flexible",
    location: "GTA — Multiple Locations",
    desc: "Provide social engagement, light housekeeping, errands, and emotional support to seniors and adults at home.",
  },
];

export default function CareersPage() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero */}
      <section className="relative text-white py-20 px-6 border-b border-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/careers-hero.jpg"
            alt="Care team in Toronto"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/35" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="section-kicker text-indigo-300 mb-3">Join Our Team</p>
          <h1 className="section-title text-white mb-6">Careers At GoldenBridge</h1>
          <p className="section-subtitle text-gray-300 max-w-2xl mx-auto">
            We&apos;re looking for caring, dedicated people who want to make a real difference in the lives of seniors and their families.
          </p>
          <p className="text-sm text-gray-400 mt-6 uppercase tracking-[0.16em]">Serving Families Across The GTA</p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-6 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-kicker mb-3">Why GoldenBridge</p>
            <h2 className="section-title mb-4">A Team That Supports You</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We keep things simple: supportive leadership, reliable scheduling, and meaningful work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Flexible Scheduling", desc: "Shifts that work with your availability and commitments." },
              { label: "Growth Opportunities", desc: "Mentorship, hands-on training, and advancement support." },
              { label: "Competitive Pay", desc: "Fair compensation that reflects your skill and dedication." },
              { label: "Supportive Culture", desc: "A respectful team environment where your work is valued." },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-gray-200 p-6 bg-gray-50">
                <h3 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-2">{item.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-kicker mb-3">Now Hiring</p>
            <h2 className="section-title mb-4">Open Positions</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Explore current opportunities and apply in a few minutes.
            </p>
          </div>
          <div className="space-y-6">
            {openings.map((job) => (
              <div key={job.title} className="border border-gray-200 rounded-2xl p-6 md:p-7 bg-white shadow-sm hover:shadow-md hover:border-indigo-300 transition-all">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-indigo-50 text-indigo-700 font-semibold px-3 py-1 rounded-full">{job.type}</span>
                    <span className="text-xs bg-gray-100 text-gray-600 font-semibold px-3 py-1 rounded-full">{job.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{job.desc}</p>
                </div>
                <div className="mt-5 pt-5 border-t border-gray-100 flex justify-end">
                  <Link
                    href="/contact"
                    className="shrink-0 bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors text-center text-sm"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-extrabold uppercase mb-4">Don&apos;t See The Right Fit?</h2>
        <p className="text-indigo-100 mb-8 max-w-xl mx-auto">Send us your resume anyway — we&apos;re always growing and love meeting passionate caregivers.</p>
        <Link href="/contact" className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-bold hover:bg-indigo-50 transition-colors">
          Get In Touch
        </Link>
      </section>
    </div>
  );
}
