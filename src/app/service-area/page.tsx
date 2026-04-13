import Link from "next/link";

const areas = [
  "Etobicoke",
  "North York",
  "Scarborough",
  "York",
  "East York",
  "Toronto",
  "Mississauga",
  "Brampton",
  "Markham",
  "Richmond Hill",
  "Vaughan",
  "Oakville",
  "Burlington",
  "Ajax",
  "Pickering",
  "Whitby",
];

const services = [
  "Nursing care",
  "Personal care",
  "Alzheimer's and dementia care",
  "Palliative care",
  "Family-managed home care",
  "Special needs care",
  "Housekeeping",
  "Respite care",
  "Postoperative care",
  "Transportation",
  "Companionship",
  "Medication adherence support",
  "Acquired brain injury care",
  "And other in-home assistance",
];

const skylineImage = "/images/toronto-skyline.jpg";

export default function ServiceAreaPage() {
  return (
    <div className="pt-20 bg-white">
      <section className="relative min-h-[70vh] overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src={skylineImage}
            alt="Toronto skyline"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-28">
          <p className="section-kicker text-indigo-200 mb-3">Service Area</p>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase max-w-4xl leading-tight mb-6">
            Home Care Across The Greater Toronto Area
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl leading-relaxed">
            We support older adults and families with dependable in-home care throughout Toronto and surrounding communities.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-indigo-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-indigo-800 transition-colors text-center">
              Check Your Area
            </Link>
            <Link href="tel:+14376796446" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center">
              Call 437-679-6446
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <p className="section-kicker mb-3">Why Families Choose Us</p>
              <h2 className="section-title mb-5">Care That Fits Real Life In The GTA</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  The GTA is fast-paced and diverse. Families are balancing work, caregiving, and daily life, and it can feel overwhelming. Our team steps in with practical, reliable support that makes home life easier and safer.
                </p>
                <p>
                  We provide both skilled and non-medical care, with flexible plans built around your schedule, routines, and health needs. Whether support is needed a few hours a week or every day, we tailor care so it feels consistent and personal.
                </p>
                <p>
                  Communication is a major part of quality home care, and our multilingual team helps families feel truly supported. <strong className="text-gray-900">Language capabilities: Hindi, Mandarin, Farsi, French</strong> and more based on caregiver availability.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              <img
                src="/images/gta-care-section.png"
                alt="Care support in GTA"
                className="w-full h-[360px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-kicker mb-3">Greater Toronto Area</p>
            <h2 className="section-title mb-4">Cities & Communities We Serve</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              If your area is not listed below, reach out anyway. We also support surrounding neighborhoods.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {areas.map((area) => (
              <div
                key={area}
                className="bg-white border border-gray-200 rounded-xl py-4 px-3 text-center text-gray-800 font-semibold text-sm hover:border-indigo-300 transition-colors"
              >
                {area}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">
            + surrounding areas. <Link href="/contact" className="text-indigo-700 underline">Ask us about your location.</Link>
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-kicker mb-3">Our Services</p>
            <h2 className="section-title mb-4">In-Home Support We Provide</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              If you&apos;re wondering whether we can help with a specific need, chances are we can. Here are some of the services families ask us for most often.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {services.map((service) => (
              <div key={service} className="border border-gray-200 rounded-xl px-4 py-3 text-gray-700 bg-white">
                {service}
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-extrabold uppercase text-gray-900 mb-3">Not Sure Where To Start?</h3>
            <p className="text-gray-600 mb-6">
              Tell us what kind of support you need, and we&apos;ll guide you to the right care plan.
            </p>
            <Link href="/contact" className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-800 transition-colors inline-block">
              Talk To Our Team
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-extrabold uppercase mb-4">Ready To Learn More?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">If you&apos;d like to confirm service in your area or ask about care options, contact us any time. We&apos;re here to help you make the right care decision for yourself or a loved one.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-indigo-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-indigo-800 transition-colors">
            Message Us
          </Link>
          <Link href="tel:+14376796446" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Call 437-679-6446
          </Link>
        </div>
      </section>
    </div>
  );
}
