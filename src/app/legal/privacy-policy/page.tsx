import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | AI Automation Solutions',
  description: 'Our commitment to protecting your privacy and personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-xl text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none prose-invert">
          <h2 className="text-white">1. Introduction</h2>
          <p className="text-gray-300">
            At AI Automation Solutions, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-white">2. Information We Collect</h2>
          <h3 className="text-white">2.1 Personal Information</h3>
          <p className="text-gray-300">We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="text-gray-300">
            <li>Register for an account</li>
            <li>Subscribe to our newsletter</li>
            <li>Request a demo</li>
            <li>Contact us for support</li>
            <li>Fill out a form on our website</li>
          </ul>

          <h3 className="text-white">2.2 Automatically Collected Information</h3>
          <p className="text-gray-300">When you visit our website, we automatically collect certain information about your device, including:</p>
          <ul className="text-gray-300">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Access times</li>
            <li>Pages visited</li>
          </ul>

          <h2 className="text-white">3. How We Use Your Information</h2>
          <p className="text-gray-300">We use the information we collect to:</p>
          <ul className="text-gray-300">
            <li>Provide and maintain our services</li>
            <li>Improve and personalize your experience</li>
            <li>Communicate with you about our services</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-white">4. Information Sharing</h2>
          <p className="text-gray-300">We do not sell or rent your personal information to third parties. We may share your information with:</p>
          <ul className="text-gray-300">
            <li>Service providers who assist in our operations</li>
            <li>Professional advisors</li>
            <li>Law enforcement when required by law</li>
          </ul>

          <h2 className="text-white">5. Data Security</h2>
          <p className="text-gray-300">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-white">6. Your Rights</h2>
          <p className="text-gray-300">You have the right to:</p>
          <ul className="text-gray-300">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Withdraw consent</li>
          </ul>

          <h2 className="text-white">7. Cookies</h2>
          <p className="text-gray-300">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2 className="text-white">8. Changes to This Policy</h2>
          <p className="text-gray-300">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-white">9. Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul className="text-gray-300">
            <li>Email: privacy@ai-automation.com</li>
            <li>Address: 123 Tech Street, Innovation City, 12345</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 