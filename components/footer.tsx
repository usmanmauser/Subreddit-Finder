import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">© {currentYear} Subreddit Finder. All rights reserved.</p>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
          <Link
            href="https://ko-fi.com/usmanibrahimmauser"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Donate
          </Link>
        </nav>
      </div>
    </footer>
  )
}
