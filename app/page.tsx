import type { Metadata } from "next"
import SubredditFinder from "@/components/subreddit-finder"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Subreddit Finder | Discover Related Reddit Communities",
  description:
    "Find related subreddits based on your interests. Discover new communities similar to your favorite subreddits with our powerful search tool.",
  keywords:
    "subreddit finder, reddit communities, related subreddits, find subreddits, reddit search tool, similar subreddits",
}

export default function Home() {
  return (
    <div className="relative">
      {/* Hero section with gradient background */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Subreddit Finder</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Discover related communities based on your favorite subreddits
            </p>
            <SubredditFinder />
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Why Use Subreddit Finder?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-primary/20">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Discover New Communities</h3>
              <p className="text-muted-foreground">
                Find subreddits you never knew existed that match your interests perfectly.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m15.5 9-4.5 4.5L7.5 11" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Easy to Use</h3>
              <p className="text-muted-foreground">
                Simply enter a subreddit name and instantly get relevant recommendations.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Expand Your Network</h3>
              <p className="text-muted-foreground">
                Connect with like-minded communities and expand your Reddit experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ section */}
      <div className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mx-auto grid max-w-3xl gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">How does Subreddit Finder work?</h3>
                <p className="text-muted-foreground">
                  Our algorithm analyzes content patterns, user overlap, and topic similarity to find the most relevant
                  recommendations for any subreddit you search.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Is this an official Reddit tool?</h3>
                <p className="text-muted-foreground">
                  No, Subreddit Finder is an independent tool created to help Reddit users discover related communities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">How accurate are the recommendations?</h3>
                <p className="text-muted-foreground">
                  Our recommendations are based on multiple factors including content similarity and user participation
                  patterns, providing highly relevant suggestions in most cases.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
