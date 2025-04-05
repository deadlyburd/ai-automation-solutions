import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    // Here you would typically:
    // 1. Validate the input
    // 2. Send an email notification
    // 3. Store the submission in a database
    // 4. Integrate with a CRM system

    // For now, we'll just log the submission
    console.log('Contact form submission:', {
      name,
      email,
      company,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { message: 'Thank you for your message. We will get back to you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form submission:', error)
    return NextResponse.json(
      { message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
} 