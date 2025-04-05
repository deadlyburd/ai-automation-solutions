import Link from 'next/link'
import Image from 'next/image'

const products = [
  {
    id: 'freak-family-pack',
    name: 'FREAK FAMILY PACK',
    description: 'Complete collection for all your needs',
    price: 79.99,
    image: '/products/freak-family-pack-1.jpg',
    color: '#FF5733',
  },
  {
    id: 'starter-pack',
    name: 'STARTER PACK',
    description: 'Perfect for beginners',
    price: 29.99,
    image: '/products/starter-pack.jpg',
    color: '#3366FF',
  },
  {
    id: 'premium-pack',
    name: 'PREMIUM PACK',
    description: 'Advanced formula for professionals',
    price: 49.99,
    image: '/products/premium-pack.jpg',
    color: '#33FF57',
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            FREAK FAMILY
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Bio-based ingredients that make a difference
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="group">
                <div className="aspect-w-1 aspect-h-1 bg-gray-100 mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-center object-cover group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-500 mb-4">{product.description}</p>
                  <p className="text-xl font-medium" style={{ color: product.color }}>
                    €{product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bio-based Section */}
      <div className="bg-[#1a1a1a] text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                BIO-BASED INGREDIENTS
              </h2>
              <p className="text-xl text-gray-300">
                Our products are crafted with sustainable, bio-based ingredients that respect both you and the environment.
                We believe in creating products that not only perform exceptionally but also contribute to a healthier planet.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Natural</h3>
                <p className="text-gray-400">Plant-based formulation</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">♻️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainable</h3>
                <p className="text-gray-400">Eco-friendly packaging</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🐰</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Cruelty-free</h3>
                <p className="text-gray-400">Never tested on animals</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Clean</h3>
                <p className="text-gray-400">Pure ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 