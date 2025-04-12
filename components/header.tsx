"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16.2 7.8c-2-2-5.3-2.4-7.7-.6" />
              <circle cx="17" cy="12" r=".5" />
              <circle cx="7" cy="12" r=".5" />
              <path d="M10 16.5c.8.8 2.2.8 3 0" />
            </svg>
            <span className="text-xl font-bold">Subreddit Finder</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/privacy" className="text-sm font-medium hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="https://ko-fi.com/usmanibrahimmauser" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-1">
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
              Donate
            </Button>
          </Link>
          <ModeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <Link href="https://ko-fi.com/usmanibrahimmauser" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="h-9 w-9">
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
              <span className="sr-only">Donate</span>
            </Button>
          </Link>
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)} className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background md:hidden">
            <div className="container flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16.2 7.8c-2-2-5.3-2.4-7.7-.6" />
                  <circle cx="17" cy="12" r=".5" />
                  <circle cx="7" cy="12" r=".5" />
                  <path d="M10 16.5c.8.8 2.2.8 3 0" />
                </svg>
                <span className="text-xl font-bold">Subreddit Finder</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="container grid gap-6 py-6">
              <Link
                href="/"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/privacy"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
