import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | AI Automation Solutions',
  description: 'Choose the perfect AI automation plan for your business needs.',
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 