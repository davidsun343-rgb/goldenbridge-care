import Link from "next/link";

const posts = [
  {
    slug: "#",
    date: "March 18, 2025",
    category: "Home Care Tips",
    title: "10 Signs Your Loved One May Need In-Home Support",
    excerpt:
      "It can be hard to know when a parent or family member needs extra help at home. Here are the key signs caregivers and families should watch for.",
  },
  {
    slug: "#",
    date: "February 4, 2025",
    category: "Caregiver Resources",
    title: "How To Talk To Your Parent About Accepting Home Care",
    excerpt:
      "Starting the conversation about home care can feel daunting. We share practical tips for approaching it with empathy and respect.",
  },
  {
    slug: "#",
    date: "January 12, 2025",
    category: "Senior Wellness",
    title: "The Benefits of Companionship Care For Seniors Living Alone",
    excerpt:
      "Social isolation is one of the biggest health risks for seniors. Learn how companion caregivers help and what to look for in a quality program.",
  },
  {
    slug: "#",
    date: "December 1, 2024",
    category: "GoldenBridge News",
    title: "Introducing Our New Service Area: Now Serving Oakville & Burlington",
    excerpt:
      "We're excited to announce GoldenBridge Care is now serving families in Oakville and Burlington as part of our continued GTA expansion.",
  },
  {
    slug: "#",
    date: "October 22, 2024",
    category: "Home Care Tips",
    title: "Personal Support Workers vs. Nurses: What's The Difference?",
    excerpt:
      "Many families aren't sure which type of caregiver their loved one needs. We break down roles, responsibilities, and how to choose.",
  },
  {
    slug: "#",
    date: "September 5, 2024",
    category: "Senior Wellness",
    title: "5 Home Modifications That Make Aging In Place Safer",
    excerpt:
      "Simple changes like grab bars, better lighting, and ramp access can dramatically reduce fall risk and extend independence at home.",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-kicker text-indigo-300 mb-3">Resources & News</p>
          <h1 className="section-title text-white mb-6">GoldenBridge Blog</h1>
          <p className="section-subtitle text-gray-300 max-w-2xl mx-auto">
            Practical advice, caregiving resources, and company news to help families navigate home care with confidence.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.title} className="card flex flex-col">
                <div className="mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-2">{post.date}</p>
                <h2 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{post.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">{post.excerpt}</p>
                <Link
                  href={post.slug}
                  className="text-indigo-700 font-semibold text-sm hover:text-indigo-900 transition-colors"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-extrabold uppercase mb-4">Have A Question We Haven&apos;t Answered?</h2>
        <p className="text-indigo-100 mb-8 max-w-xl mx-auto">Our team is happy to help — reach out any time.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-bold hover:bg-indigo-50 transition-colors">
            Contact Us
          </Link>
          <Link href="/faq" className="border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
            View FAQ
          </Link>
        </div>
      </section>
    </div>
  );
}
