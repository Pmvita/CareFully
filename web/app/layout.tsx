import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carefully - Find Trusted Babysitters & Nannies',
  description: 'Book trusted babysitters and nannies. Caregivers set their own rates as independent contractors. Secure booking with deposits.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
