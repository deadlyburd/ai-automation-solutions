import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | AI Automation Solutions',
  description: 'Learn about our mission and team dedicated to transforming businesses through AI automation.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 