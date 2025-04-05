import { Metadata } from 'next'
import PricingPage from './page'

export const metadata: Metadata = {
  title: 'Pricing | AI Automation Solutions',
  description: 'Choose the perfect AI automation solution for your business with our flexible pricing plans.',
}

export default function PricingLayout() {
  return <PricingPage />
} 