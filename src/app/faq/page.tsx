'use client';

import Link from "next/link";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  // Getting Started
  {
    category: "Getting Started",
    question: "How quickly can care services begin?",
    answer: "We can typically start care services within 24-48 hours of your initial consultation. For urgent situations, we offer same-day placement whenever possible. We understand that care needs can arise suddenly, and we're prepared to respond quickly."
  },
  {
    category: "Getting Started",
    question: "Do you offer free consultations?",
    answer: "Yes! We provide completely free, no-obligation consultations to assess your loved one's care needs. During this consultation, we'll discuss their specific requirements, answer all your questions, and create a personalized care plan with transparent pricing."
  },
  {
    category: "Getting Started",
    question: "What areas do you serve?",
    answer: "We provide care services throughout the Greater Toronto Area (GTA), including Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, and surrounding communities. Contact us to confirm service availability in your specific area."
  },
  
  // Pricing & Payment
  {
    category: "Pricing & Payment",
    question: "What are your rates and minimum hours?",
    answer: "Our rates are: Companion Care at $32/hour (3-hour minimum), Personal Support Worker (PSW) Care at $35/hour (6-hour minimum), and Enhanced Care at $42/hour (10-hour minimum). Overnight care is available at $300 per night. We require weekly minimums to ensure staffing stability and consistency for your loved one."
  },
  {
    category: "Pricing & Payment",
    question: "Do you accept insurance?",
    answer: "Yes, we accept most insurance plans. We can provide detailed invoices and documentation for insurance reimbursement. Many of our clients successfully claim their care expenses through their health insurance. We recommend checking with your insurance provider about your specific coverage."
  },
  {
    category: "Pricing & Payment",
    question: "Are there any hidden fees?",
    answer: "No hidden fees, ever. Our pricing is completely transparent. The hourly rate you're quoted includes all standard care services. The only additional costs would be for specialized services or equipment that you specifically request and approve in advance."
  },
  {
    category: "Pricing & Payment",
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit/debit cards, e-transfer, and pre-authorized payments. We can also set up convenient automatic billing to make payments hassle-free for you."
  },

  // Caregivers
  {
    category: "Caregivers",
    question: "Are your caregivers trained and certified?",
    answer: "Yes! Every member of our team is selectively chosen, professionally trained, and certified. All caregivers are CPR certified, and our PSWs hold valid Personal Support Worker certifications. We conduct thorough background checks, verify credentials, and provide ongoing training to ensure the highest quality care."
  },
  {
    category: "Caregivers",
    question: "Will we have the same caregiver every time?",
    answer: "We strive to provide consistency by matching you with a dedicated primary caregiver. However, we also assign backup caregivers to ensure uninterrupted service if your primary caregiver is unavailable due to illness or vacation. This ensures your loved one always receives the care they need."
  },
  {
    category: "Caregivers",
    question: "What if we don't connect well with our assigned caregiver?",
    answer: "Your satisfaction is our priority. If the caregiver match isn't ideal, simply let us know and we'll arrange a replacement at no additional cost. We want to ensure you and your loved one feel completely comfortable with your care team."
  },
  {
    category: "Caregivers",
    question: "Are caregivers bonded and insured?",
    answer: "Yes, all our caregivers are fully bonded and insured. GoldenBridge Care carries comprehensive liability insurance to protect our clients and provide you with complete peace of mind."
  },

  // Services
  {
    category: "Services",
    question: "What services are included in companion care?",
    answer: "Companion care includes friendly conversation, meal preparation, light housekeeping, medication reminders, accompaniment to appointments, recreational activities, and emotional support. It's perfect for seniors who need social interaction and assistance with daily tasks but don't require medical care."
  },
  {
    category: "Services",
    question: "What's the difference between PSW care and companion care?",
    answer: "PSW (Personal Support Worker) care includes all companion care services PLUS personal care assistance like bathing, dressing, grooming, mobility assistance, and toileting support. PSWs have specialized training for hands-on physical care. Companion caregivers focus on social, emotional, and household support."
  },
  {
    category: "Services",
    question: "Do you provide medical care or nursing services?",
    answer: "We provide personal care services and daily living assistance, but we do not provide medical procedures or nursing services. Our PSWs can assist with medication reminders, mobility, and personal hygiene, but for medical care needs, we recommend coordinating with healthcare professionals."
  },
  {
    category: "Services",
    question: "Can you help with dementia or Alzheimer's care?",
    answer: "Yes! Many of our caregivers have specialized training in dementia and Alzheimer's care. We understand the unique challenges and use proven techniques to provide compassionate, patient-centered care that maintains dignity and quality of life."
  },
  {
    category: "Services",
    question: "Do you offer overnight care?",
    answer: "Yes, we offer overnight care at $300 per night. This includes a caregiver staying in the home overnight to provide assistance as needed and ensure safety. It's ideal for families who need nighttime support or supervision for their loved ones."
  },
  {
    category: "Services",
    question: "Is 24/7 mental health support really available?",
    answer: "Absolutely. We provide a 24/7 mental health helpline at (437) 679-6446 for emotional crises, urgent concerns, or when someone just needs to talk. Our team is trained to provide compassionate support and can arrange immediate care if needed."
  },

  // Scheduling & Flexibility
  {
    category: "Scheduling & Flexibility",
    question: "Can I change or cancel scheduled care visits?",
    answer: "Yes, we understand that plans change. We ask for 24 hours' notice for cancellations or rescheduling when possible. This helps us manage our caregiver schedules fairly. For urgent changes, please contact us immediately and we'll do our best to accommodate."
  },
  {
    category: "Scheduling & Flexibility",
    question: "Do you offer short-term or temporary care?",
    answer: "Yes! We offer flexible care arrangements including short-term care for post-surgery recovery, temporary care while family caregivers are on vacation (respite care), or trial periods before committing to long-term care."
  },
  {
    category: "Scheduling & Flexibility",
    question: "Can care hours be adjusted as needs change?",
    answer: "Absolutely. Care needs often evolve over time. We regularly review care plans with families and can increase or decrease hours as needed. Our goal is to provide exactly the right level of support at every stage."
  },

  // Safety & Quality
  {
    category: "Safety & Quality",
    question: "How do you ensure quality of care?",
    answer: "We maintain quality through careful caregiver selection, ongoing training, regular supervision, and family feedback. We conduct quality check-ins, encourage open communication, and have a care coordinator available to address any concerns immediately."
  },
  {
    category: "Safety & Quality",
    question: "What happens in case of emergency?",
    answer: "All our caregivers are trained in emergency response and CPR. They have access to our 24/7 support line and clear protocols for contacting emergency services, family members, and medical professionals. Your loved one's safety information and emergency contacts are always accessible."
  },
  {
    category: "Safety & Quality",
    question: "How do you handle COVID-19 and infection control?",
    answer: "Our caregivers follow strict infection control protocols including proper hand hygiene, wearing masks when appropriate, and staying home if they're feeling unwell. We stay updated on public health guidelines and prioritize the safety of our clients and staff."
  },

  // Family Involvement
  {
    category: "Family Involvement",
    question: "Can family members be present during care visits?",
    answer: "Of course! Many families choose to be present, especially during initial visits. We encourage family involvement and see it as a partnership in providing the best possible care. You're welcome to be as involved as you'd like."
  },
  {
    category: "Family Involvement",
    question: "How will we receive updates about our loved one's care?",
    answer: "We provide regular updates through your preferred communication method - phone calls, emails, or text messages. Caregivers can maintain care logs, and we're always available to discuss your loved one's progress, changes, or any concerns you may have."
  },
  {
    category: "Family Involvement",
    question: "What if I have concerns about the care being provided?",
    answer: "Please contact us immediately. We take all concerns seriously and will address them promptly. Your satisfaction and your loved one's wellbeing are our top priorities. We have a care coordinator available to resolve any issues quickly."
  }
];

const categories = Array.from(new Set(faqs.map(faq => faq.category)));

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-20 bg-white">
      <section className="relative bg-white border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-6 border border-indigo-200">
              <svg className="w-4 h-4 text-indigo-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-indigo-700 uppercase tracking-wide">Got Questions? We Have Answers</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900 uppercase">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about our elderly care services. 
              Clear answers to help you make the best decision for your loved one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-800 transition-all"
              >
                Ask Your Question
              </Link>
              <a 
                href="tel:+14376796446" 
                className="border-2 border-indigo-700 text-indigo-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all"
              >
                📞 Call (437) 679-6446
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">15+</span>
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Years of</div>
              <div className="text-gray-600 font-medium">Experience</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Available</div>
              <div className="text-gray-600 font-medium">24/7/365</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-1">100%</div>
              <div className="text-gray-600 font-medium">Certified Team</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Serving</div>
              <div className="text-gray-600 font-medium">All of GTA</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Your Questions Answered
            </h2>
            <p className="text-gray-600 text-lg">
              {faqs.length} common questions about our elderly care services
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? "border-indigo-300 shadow-xl shadow-indigo-100" 
                    : "border-gray-200 hover:border-gray-300 hover:shadow-lg"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-start justify-between gap-4 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-colors group"
                >
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full uppercase tracking-wide">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      openIndex === index 
                        ? "bg-indigo-600 rotate-180" 
                        : "bg-gray-100 group-hover:bg-indigo-100"
                    }`}>
                      <svg
                        className={`w-5 h-5 transition-colors ${
                          openIndex === index ? "text-white" : "text-gray-600 group-hover:text-indigo-600"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6 pt-2 bg-gray-50">
                    <div className="border-l-4 border-indigo-600 pl-6 py-2">
                      <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            <span className="text-sm font-medium">We&apos;re Here to Help</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase">
            Still Have Questions?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            We&apos;re here to help! Get in touch with our care coordinators for personalized answers 
            and expert guidance tailored to your specific situation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="bg-indigo-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Request Free Consultation
            </Link>
            <a
              href="tel:+14376796446"
              className="border-2 border-gray-300 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (437) 679-6446
            </a>
          </div>
          
          <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20">
            <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-200 font-medium">Available Monday - Friday, 9 AM - 6 PM</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore More Resources
            </h2>
            <p className="text-xl text-gray-600">
              Continue learning about our services and how we can help your family
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services" className="group bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-indigo-300 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">Our Services</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Explore comprehensive care services including mental health support, companionship, and daily assistance.</p>
              <div className="flex items-center text-indigo-600 font-semibold group-hover:gap-2 transition-all">
                <span>Learn More</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
            
            <Link href="/pricing" className="group bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-green-300 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">Pricing Plans</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Transparent pricing with no hidden fees. Find the perfect care package for your budget and needs.</p>
              <div className="flex items-center text-green-600 font-semibold group-hover:gap-2 transition-all">
                <span>View Pricing</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
            
            <Link href="/about" className="group bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">About Us</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Meet our certified care team and learn about our commitment to exceptional elderly care services.</p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                <span>Our Story</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
