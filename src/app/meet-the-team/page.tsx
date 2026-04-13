import Link from "next/link";

const team = [
  {
    name: "Sarah Mitchell, RN",
    role: "Director of Care",
    bio: "With over 15 years in community nursing, Sarah oversees all care plans and ensures every client receives the highest standard of support.",
    initials: "SM",
  },
  {
    name: "James Okafor, PSW",
    role: "Senior Personal Support Worker",
    bio: "James has dedicated a decade to in-home personal support, known for his warm approach and deep commitment to client dignity.",
    initials: "JO",
  },
  {
    name: "Linda Tran",
    role: "Client Care Coordinator",
    bio: "Linda is often the first voice families hear. She matches clients with the right caregivers and ensures every transition is smooth.",
    initials: "LT",
  },
  {
    name: "Michael Roberts",
    role: "Operations Manager",
    bio: "Michael keeps everything running — from scheduling and compliance to caregiver support and family communication.",
    initials: "MR",
  },
];

export default function MeetTheTeamPage() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-kicker text-indigo-300 mb-3">Our People</p>
          <h1 className="section-title text-white mb-6">Meet The Team</h1>
          <p className="section-subtitle text-gray-300 max-w-2xl mx-auto">
            Behind every great care experience is a dedicated team. Get to know the people who show up every day for your loved ones.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="card text-center">
                <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-2xl font-bold mx-auto mb-5">
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="bg-gray-50 py-16 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-4">Our Values</h2>
          <p className="section-subtitle mb-10">Everything we do is guided by compassion, reliability, and respect.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "Compassion", desc: "We treat every client like family." },
              { label: "Reliability", desc: "Consistent care you can count on, every day." },
              { label: "Respect", desc: "Dignity and independence are always preserved." },
            ].map((v) => (
              <div key={v.label} className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 uppercase tracking-wide text-sm mb-2">{v.label}</h4>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-extrabold uppercase mb-4">Ready To Meet Us In Person?</h2>
        <p className="text-indigo-100 mb-8 max-w-xl mx-auto">Reach out today and we&apos;ll connect you with the right person on our team.</p>
        <Link href="/contact" className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-bold hover:bg-indigo-50 transition-colors">
          Contact Us
        </Link>
      </section>
    </div>
  );
}
