import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | AI Automation Solutions',
  description: 'The terms and conditions for using our AI automation services.',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Terms of Service
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
          <h2 className="text-white">1. Agreement to Terms</h2>
          <p className="text-gray-300">
            By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
          </p>

          <h2 className="text-white">2. Description of Services</h2>
          <p className="text-gray-300">
            AI Automation Solutions provides AI-powered automation services for restaurants and vacation rentals. Our services include but are not limited to:
          </p>
          <ul className="text-gray-300">
            <li>Automated customer service</li>
            <li>Booking management</li>
            <li>Inventory tracking</li>
            <li>Analytics and reporting</li>
            <li>Integration with existing systems</li>
          </ul>

          <h2 className="text-white">3. User Accounts</h2>
          <p className="text-gray-300">When you create an account with us, you must provide accurate and complete information. You are responsible for:</p>
          <ul className="text-gray-300">
            <li>Maintaining the security of your account</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use</li>
          </ul>

          <h2 className="text-white">4. Subscription and Payments</h2>
          <p className="text-gray-300">
            Our services are provided on a subscription basis. By subscribing to our services, you agree to:
          </p>
          <ul className="text-gray-300">
            <li>Pay all fees in accordance with your selected plan</li>
            <li>Provide valid payment information</li>
            <li>Authorize us to charge your payment method</li>
            <li>Understand that subscriptions auto-renew unless cancelled</li>
          </ul>

          <h2 className="text-white">5. Intellectual Property</h2>
          <p className="text-gray-300">
            The service and its original content, features, and functionality are owned by AI Automation Solutions and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2 className="text-white">6. User Content</h2>
          <p className="text-gray-300">
            You retain all rights to any content you submit, post, or display on or through our services. By submitting content, you grant us a worldwide, non-exclusive license to use, reproduce, modify, and distribute your content.
          </p>

          <h2 className="text-white">7. Prohibited Activities</h2>
          <p className="text-gray-300">You agree not to:</p>
          <ul className="text-gray-300">
            <li>Use the service for any illegal purpose</li>
            <li>Violate any laws in your jurisdiction</li>
            <li>Infringe upon the rights of others</li>
            <li>Interfere with or disrupt the service</li>
            <li>Attempt to gain unauthorized access to the service</li>
          </ul>

          <h2 className="text-white">8. Limitation of Liability</h2>
          <p className="text-gray-300">
            In no event shall AI Automation Solutions be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
          </p>

          <h2 className="text-white">9. Termination</h2>
          <p className="text-gray-300">
            We may terminate or suspend your account and access to our services immediately, without prior notice, for any reason, including breach of these Terms.
          </p>

          <h2 className="text-white">10. Changes to Terms</h2>
          <p className="text-gray-300">
            We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-white">11. Contact Information</h2>
          <p className="text-gray-300">
            If you have any questions about these Terms, please contact us at:
          </p>
          <ul className="text-gray-300">
            <li>Email: legal@ai-automation.com</li>
            <li>Address: 123 Tech Street, Innovation City, 12345</li>
          </ul>

          <h2 className="text-white">12. Cookies and Tracking Technologies</h2>
          <p className="text-gray-300">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </div>
      </div>
    </div>
  )
} 