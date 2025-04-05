'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses or single Airbnb listings/restaurants with low call volumes.',
      price: {
        monthly: 79,
        annual: 79 * 12 * 0.9, // 10% discount for annual
      },
      features: [
        'Handle up to 1,000 minutes/month',
        'Multilingual support (English + Italian)',
        'Basic booking automation',
        'Real-time transcription and response',
      ],
      addons: [
        {
          name: 'Additional Languages',
          price: 10,
          description: 'Add more languages (€10/month per language)',
        },
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Growth',
      description: 'Ideal for medium-sized businesses or multiple Airbnb listings/restaurants with moderate call volumes.',
      price: {
        monthly: 129,
        annual: 129 * 12 * 0.9, // 10% discount for annual
      },
      features: [
        'Handle up to 5,000 minutes/month',
        'Multilingual support (English + Italian + Spanish + French)',
        'Advanced booking automation with calendar integration',
        'CRM integration (Google Sheets/Airtable)',
      ],
      addons: [
        {
          name: 'Priority Support',
          price: 20,
          description: 'Faster response times for technical issues',
        },
        {
          name: 'Unlimited Minutes',
          price: 50,
          description: 'Handle high call volumes without limits',
        },
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Premium',
      description: 'Designed for large businesses or high-volume Airbnb hosts/restaurants needing advanced features.',
      price: {
        monthly: 199,
        annual: 199 * 12 * 0.9, // 10% discount for annual
      },
      features: [
        'Handle unlimited minutes/month',
        'Multilingual support (5+ languages)',
        'Advanced analytics and reporting',
        'Dedicated account manager',
      ],
      addons: [
        {
          name: 'Custom Voice Models',
          price: 50,
          description: 'Use branded or personalized voice models',
          oneTime: true,
        },
        {
          name: 'Advanced API Integrations',
          price: 100,
          description: 'Gain access to advanced API features',
        },
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative self-center bg-white rounded-lg p-0.5 flex sm:mt-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`${billingCycle === 'monthly'
                ? 'bg-blue-600 text-white'
                : 'text-gray-500 hover:text-gray-900'
                } relative w-1/2 rounded-md py-2 text-sm font-semibold whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`${billingCycle === 'annual'
                ? 'bg-blue-600 text-white'
                : 'text-gray-500 hover:text-gray-900'
                } relative w-1/2 rounded-md py-2 text-sm font-semibold whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8`}
            >
              Annual billing
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border ${plan.popular ? 'border-blue-600 shadow-xl' : 'border-gray-200'
                } p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                    Most popular
                  </span>
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-gray-500">{plan.description}</p>
                <p className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">
                    €{billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual / 12}
                  </span>
                  <span className="text-gray-500">/month</span>
                </p>
                {billingCycle === 'annual' && (
                  <p className="mt-2 text-sm text-green-600">Save 10% with annual billing</p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.addons && plan.addons.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Available Add-ons:</h4>
                  <ul className="space-y-3">
                    {plan.addons.map((addon) => (
                      <li key={addon.name} className="flex items-start">
                        <span className="text-sm text-gray-500">
                          {addon.name}: €{addon.price}
                          {addon.oneTime ? ' (one-time)' : '/month'} - {addon.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                className={`w-full rounded-md px-4 py-2 text-sm font-semibold text-white ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Can I change my plan later?</h3>
              <p className="mt-2 text-gray-500">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">What payment methods do you accept?</h3>
              <p className="mt-2 text-gray-500">
                We accept all major credit cards, PayPal, and bank transfers for annual plans.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">What is your refund policy?</h3>
              <p className="mt-2 text-gray-500">
                We offer a 30-day money-back guarantee for all plans. If you're not satisfied, contact our support team for a full refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 