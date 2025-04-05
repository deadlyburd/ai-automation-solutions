import { Metadata } from 'next'
import AboutPage from './page'

export const metadata: Metadata = {
  title: 'About Us | AI Automation Solutions',
  description: 'Learn about our mission, values, and the team behind our AI automation solutions for restaurants and vacation rentals.',
}

export default function AboutLayout() {
  return <AboutPage />
} 