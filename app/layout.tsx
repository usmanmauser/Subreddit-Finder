import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Subreddit Finder | Find Related Reddit Communities",
  description:
    "Discover related subreddits based on your interests. The ultimate tool to find similar Reddit communities to your favorite subreddits.",
  keywords:
    "subreddit finder, reddit communities, related subreddits, find subreddits, reddit search tool, similar subreddits",
  metadataBase: new URL("https://subreddit-finder.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Subreddit Finder | Find Related Reddit Communities",
    description:
      "Discover related subreddits based on your interests. The ultimate tool to find similar Reddit communities to your favorite subreddits.",
    url: "https://subreddit-finder.vercel.app",
    siteName: "Subreddit Finder",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subreddit Finder | Find Related Reddit Communities",
    description:
      "Discover related subreddits based on your interests. The ultimate tool to find similar Reddit communities to your favorite subreddits.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Subreddit Finder",
              url: "https://subreddit-finder.vercel.app",
              description:
                "Discover related subreddits based on your interests. The ultimate tool to find similar Reddit communities to your favorite subreddits.",
              applicationCategory: "UtilityApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'
