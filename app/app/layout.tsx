import '@/styles/globals.css'

export const metadata = {
  title: 'Brand Listening Tool',
  description: 'Monitor brand mentions and analyze sentiment across the web',
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
