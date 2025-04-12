import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Subreddit Finder | Our Mission and Features",
  description:
    "Learn about Subreddit Finder, how it works, and our mission to help Reddit users discover related communities.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">About Subreddit Finder</h1>
          <p className="text-xl text-muted-foreground">Helping Reddit users discover new communities since 2023</p>
        </div>

        <Card>
          <CardContent className="p-6 md:p-8">
            <div className="space-y-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p>
                  Subreddit Finder was created with a simple goal: to help Reddit users discover new communities that
                  align with their interests. We believe that Reddit's true value lies in its diverse communities, and
                  we want to make it easier for users to find the ones that resonate with them.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold">How It Works</h2>
                <p>Our tool uses a sophisticated algorithm that analyzes various factors to find related subreddits:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Content similarity between subreddits</li>
                  <li>User participation patterns</li>
                  <li>Topic relevance and keyword matching</li>
                  <li>Community size and activity levels</li>
                </ul>
                <p>
                  When you search for a subreddit, our system quickly identifies communities that share similar
                  characteristics, providing you with a curated list of recommendations that you might enjoy.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold">Features</h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Simple, intuitive interface for finding related subreddits</li>
                  <li>Support for different input formats (subreddit name, r/subreddit, or full URL)</li>
                  <li>Detailed information about each recommended community</li>
                  <li>Similarity scores to help you find the most relevant matches</li>
                  <li>Multiple view options to browse recommendations</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold">Who We Are</h2>
                <p>
                  Subreddit Finder is an independent project created by Reddit enthusiasts who wanted to make it easier
                  to discover new communities. We're not affiliated with Reddit, Inc., but we're passionate about the
                  platform and its diverse ecosystem of communities.
                </p>
              </section>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground">
                  Have questions or feedback?{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    Contact us
                  </Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
