import Image from 'next/image'
import Link from 'next/link'

const solutions = [
  {
    title: 'Restaurant Automation',
    description: 'Streamline your restaurant operations with AI-powered solutions for order management, inventory tracking, and customer service.',
    image: '/restaurant-automation.jpg',
    features: [
      'Smart Order Management',
      'Inventory Optimization',
      'Customer Service Automation',
      'Analytics & Reporting'
    ],
    price: 'Starting at $299/month'
  },
  {
    title: 'Vacation Rental Management',
    description: 'Automate your vacation rental business with smart booking systems, guest communication, and property management tools.',
    image: '/vacation-rental.jpg',
    features: [
      'Automated Booking System',
      'Guest Communication',
      'Property Management',
      'Revenue Optimization'
    ],
    price: 'Starting at $199/month'
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored AI automation solutions designed to meet your specific business needs and challenges.',
    image: '/custom-solutions.jpg',
    features: [
      'Custom Workflow Automation',
      'Integration Services',
      'Scalable Solutions',
      'Dedicated Support'
    ],
    price: 'Custom pricing'
  }
]

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/solutions-hero.jpg"
            alt="AI Solutions"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI Automation Solutions
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Transform your business with our cutting-edge AI automation solutions. Streamline operations, boost efficiency, and enhance customer experience.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-900">
                    {solution.price}
                  </span>
                  <Link
                    href={`/solutions/${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-400">Contact us today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 