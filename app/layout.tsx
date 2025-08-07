import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SAP BW COPA Realignment SOPs - Complete Guide',
  description: 'Comprehensive guide for SAP BW COPA Realignment Standard Operating Procedures',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}