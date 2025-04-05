import { Metadata } from 'next'
import ContactPage from './page'

export const metadata: Metadata = {
  title: 'Contact Us | AI Automation Solutions',
  description: 'Get in touch with us to learn more about our AI automation solutions for restaurants and vacation rentals.',
}

export default function ContactLayout() {
  return <ContactPage />
} 