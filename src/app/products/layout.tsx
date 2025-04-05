import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products | Freaks of Nature',
  description: 'Discover our range of bio-based products that make a difference.',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 