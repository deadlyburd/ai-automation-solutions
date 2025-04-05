'use client'

import { useState } from 'react'
import Image from 'next/image'

const products = {
  'freak-family-pack': {
    name: 'FREAK FAMILY PACK',
    price: 79.99,
    description: 'Complete collection for all your needs',
    images: [
      '/products/freak-family-pack-1.jpg',
      '/products/freak-family-pack-2.jpg',
      '/products/freak-family-pack-3.jpg',
      '/products/freak-family-pack-4.jpg'
    ],
    variants: [
      { name: 'Regular', color: '#FF5733', price: 79.99 },
      { name: 'Large', color: '#3366FF', price: 89.99 },
      { name: 'Extra Large', color: '#33FF57', price: 99.99 }
    ],
    features: [
      'Bio-based ingredients',
      'Sustainable packaging',
      'Natural formulation',
      'Cruelty-free'
    ],
    application: [
      'Apply to clean, damp hair',
      'Work through from roots to ends',
      'Style as desired'
    ],
    ingredients: [
      'Aqua',
      'Natural oils',
      'Plant extracts',
      'Bio-based preservatives'
    ]
  },
  'starter-pack': {
    name: 'STARTER PACK',
    price: 29.99,
    description: 'Perfect for beginners',
    images: [
      '/products/starter-pack-1.jpg',
      '/products/starter-pack-2.jpg',
      '/products/starter-pack-3.jpg'
    ],
    variants: [
      { name: 'Regular', color: '#3366FF', price: 29.99 },
      { name: 'Large', color: '#33FF57', price: 39.99 }
    ],
    features: [
      'Essential ingredients',
      'Beginner-friendly',
      'Natural formulation',
      'Cruelty-free'
    ],
    application: [
      'Perfect for first-time users',
      'Easy application process',
      'Quick results'
    ],
    ingredients: [
      'Aqua',
      'Essential oils',
      'Natural extracts',
      'Bio-preservatives'
    ]
  },
  'premium-pack': {
    name: 'PREMIUM PACK',
    price: 49.99,
    description: 'Advanced formula for professionals',
    images: [
      '/products/premium-pack-1.jpg',
      '/products/premium-pack-2.jpg',
      '/products/premium-pack-3.jpg'
    ],
    variants: [
      { name: 'Professional', color: '#33FF57', price: 49.99 },
      { name: 'Studio', color: '#FF5733', price: 59.99 }
    ],
    features: [
      'Professional grade',
      'Advanced formula',
      'Maximum performance',
      'Sustainable'
    ],
    application: [
      'Suitable for professional use',
      'Advanced techniques',
      'Long-lasting results'
    ],
    ingredients: [
      'Premium aqua',
      'Professional-grade oils',
      'Enhanced extracts',
      'Natural preservatives'
    ]
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const product = products[params.slug as keyof typeof products]

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="aspect-w-1 aspect-h-1 bg-gray-100">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={800}
                height={800}
                className="w-full h-full object-center object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-w-1 aspect-h-1 bg-gray-100 ${selectedImage === index ? 'ring-2 ring-black' : ''
                    }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-center object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-xl text-gray-500">{product.description}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Select Size</h2>
              <div className="grid grid-cols-2 gap-4">
                {product.variants.map((variant, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVariant(index)}
                    className={`p-4 border-2 ${selectedVariant === index
                      ? 'border-black'
                      : 'border-gray-200'
                      }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: variant.color }}
                      />
                      <div className="flex-1">
                        <p className="font-medium">{variant.name}</p>
                        <p className="text-gray-500">€{variant.price}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Quantity</h2>
              <div className="inline-flex items-center border-2 border-gray-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-xl"
                >
                  −
                </button>
                <span className="px-6 py-2 text-lg font-medium border-x-2 border-gray-200">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-xl"
                >
                  +
                </button>
              </div>
            </div>

            <button className="w-full bg-black text-white py-4 text-lg font-medium hover:bg-gray-900 transition-colors">
              Add to Cart - €{(product.variants[selectedVariant].price * quantity).toFixed(2)}
            </button>

            {/* Product Details */}
            <div className="border-t border-gray-200 pt-8 mt-8 space-y-8">
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Application</h2>
                <ul className="space-y-3">
                  {product.application.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-gray-600">{step}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Features</h2>
                <ul className="grid grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Ingredients</h2>
                <div className="bg-gray-50 p-6">
                  <ul className="grid grid-cols-2 gap-4">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-gray-600">• {ingredient}</li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 