import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Subreddit Finder",
  description:
    "Get in touch with the Subreddit Finder team. We'd love to hear your feedback, questions, or suggestions.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Contact Us</h1>
          <p className="text-xl text-muted-foreground">We'd love to hear from you</p>
        </div>

        <Card>
          <CardContent className="p-6 md:p-8">
            <div className="space-y-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p>
                  Have questions, feedback, or suggestions about Subreddit Finder? We'd love to hear from you! While
                  we're a small team, we do our best to respond to all inquiries as quickly as possible.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold">Email Us</h2>
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                  <a href="mailto:usmanibrahimmauser@gmail.com" className="text-primary hover:underline">
                    usmanibrahimmauser@gmail.com
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  We aim to respond to all inquiries within 2-3 business days.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold">Support Our Work</h2>
                <p>
                  Subreddit Finder is a free tool maintained by a small team. If you find our service valuable, consider
                  supporting us with a donation.
                </p>
                <div className="flex justify-center mt-4">
                  <a
                    href="https://ko-fi.com/usmanibrahimmauser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                      <line x1="6" y1="1" x2="6" y2="4" />
                      <line x1="10" y1="1" x2="10" y2="4" />
                      <line x1="14" y1="1" x2="14" y2="4" />
                    </svg>
                    Support us on Ko-fi
                  </a>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold">Feedback</h2>
                <p>
                  We're constantly working to improve Subreddit Finder. Your feedback helps us make the tool better for
                  everyone. Let us know if you have suggestions for new features, improvements to existing
                  functionality, or if you've encountered any issues.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
