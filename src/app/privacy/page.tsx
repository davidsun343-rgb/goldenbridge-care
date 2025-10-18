export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg text-gray-700">
            <p className="text-sm text-gray-500 mb-8">Last updated: October 17, 2025</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Introduction</h2>
            <p>
              GoldenBridge Care ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you use our elderly care services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">Personal Information</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Contact information (name, address, phone number, email)</li>
              <li>Emergency contact details</li>
              <li>Health information and medical history</li>
              <li>Insurance information</li>
              <li>Care preferences and needs assessment</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">Usage Information</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Website usage data and analytics</li>
              <li>Communication logs and recordings (for quality assurance)</li>
              <li>Service usage patterns and feedback</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide and coordinate care services</li>
              <li>Communicate with you and your family members</li>
              <li>Process payments and insurance claims</li>
              <li>Improve our services and develop new offerings</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Ensure safety and emergency response</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Healthcare providers involved in your care</li>
              <li>Insurance companies for billing purposes</li>
              <li>Emergency services when necessary</li>
              <li>Family members you've designated as contacts</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or 
              destruction. This includes encryption, secure data storage, and regular security audits.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt out of non-essential communications</li>
              <li>Receive a copy of your information</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p><strong>Email:</strong> privacy@goldenbridgecare.com</p>
              <p><strong>Phone:</strong> (416) 555-CARE</p>
              <p><strong>Mail:</strong> 123 Care Street, Toronto, ON M5V 3A8</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}