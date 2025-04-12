"use client"

import type React from "react"

import { useState } from "react"
import { Search, ExternalLink } from "lucide-react"
import { findRelatedSubreddits } from "@/lib/subreddit-actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Subreddit {
  name: string
  subscribers: number
  description: string
  url: string
  similarityScore: number
}

export default function SubredditFinder() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Subreddit[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchedSubreddit, setSearchedSubreddit] = useState("")

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!query.trim()) return

    setLoading(true)
    setError(null)

    try {
      // Handle different input formats: "example", "r/example", or "https://www.reddit.com/r/example"
      let cleanedQuery = query.trim()

      // Handle full URL format
      if (cleanedQuery.includes("reddit.com/r/")) {
        const urlParts = cleanedQuery.split("/r/")
        if (urlParts.length > 1) {
          cleanedQuery = urlParts[1].split("/")[0]
        }
      }
      // Handle r/example format
      else if (cleanedQuery.startsWith("r/")) {
        cleanedQuery = cleanedQuery.substring(2)
      }

      setSearchedSubreddit(cleanedQuery)
      const relatedSubreddits = await findRelatedSubreddits(cleanedQuery)
      setResults(relatedSubreddits)
      setCurrentPage(1) // Reset to first page when new search is performed
    } catch (err) {
      setError("Failed to find related subreddits. Please try again.")
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = results.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(results.length / itemsPerPage)

  // Generate page numbers for pagination
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="space-y-8">
      <form onSubmit={handleSearch} className="flex w-full max-w-2xl mx-auto space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter a subreddit (e.g., 'programming', 'r/programming', or URL)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
            aria-label="Subreddit search"
          />
        </div>
        <Button type="submit" disabled={loading || !query.trim()}>
          {loading ? "Searching..." : "Find Related"}
        </Button>
      </form>

      {error && (
        <div className="p-4 text-center text-red-500 bg-red-50 dark:bg-red-950/30 rounded-lg" role="alert">
          {error}
        </div>
      )}

      {loading ? (
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader className="pb-2">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-24" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : results.length > 0 ? (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Related Subreddits to r/{searchedSubreddit}</h2>
            <p className="text-muted-foreground">Found {results.length} related communities</p>
          </div>

          <div className="flex justify-between items-center">
            <Tabs defaultValue="grid" className="w-full">
              <div className="flex justify-center mb-4">
                <TabsList>
                  <TabsTrigger value="grid">Grid View</TabsTrigger>
                  <TabsTrigger value="list">List View</TabsTrigger>
                </TabsList>
              </div>

              <div className="flex justify-end mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Show:</span>
                  <Select
                    value={itemsPerPage.toString()}
                    onValueChange={(value) => {
                      setItemsPerPage(Number.parseInt(value))
                      setCurrentPage(1) // Reset to first page when changing items per page
                    }}
                  >
                    <SelectTrigger className="w-[80px]">
                      <SelectValue placeholder="12" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12">12</SelectItem>
                      <SelectItem value="24">24</SelectItem>
                      <SelectItem value="48">48</SelectItem>
                      <SelectItem value="96">96</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <TabsContent value="grid" className="mt-0">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {currentItems.map((subreddit) => (
                    <Card key={subreddit.name} className="h-full overflow-hidden hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">
                            <a
                              href={`https://reddit.com${subreddit.url}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline text-primary inline-flex items-center gap-1"
                            >
                              r/{subreddit.name}
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          </CardTitle>
                          {subreddit.similarityScore && (
                            <Badge variant="outline" className="ml-2">
                              {Math.round(subreddit.similarityScore * 100)}% match
                            </Badge>
                          )}
                        </div>
                        <CardDescription>{subreddit.subscribers.toLocaleString()} subscribers</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm line-clamp-3">{subreddit.description || "No description available."}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="list" className="mt-0">
                <div className="space-y-3">
                  {currentItems.map((subreddit) => (
                    <Card key={subreddit.name} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-1">
                            <h3 className="text-lg font-semibold">
                              <a
                                href={`https://reddit.com${subreddit.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline text-primary inline-flex items-center gap-1"
                              >
                                r/{subreddit.name}
                                <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            </h3>
                            {subreddit.similarityScore && (
                              <Badge variant="outline">{Math.round(subreddit.similarityScore * 100)}% match</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {subreddit.subscribers.toLocaleString()} subscribers
                          </p>
                          <p className="text-sm">{subreddit.description || "No description available."}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>

                {pageNumbers.length <= 7 ? (
                  // Show all page numbers if there are 7 or fewer
                  pageNumbers.map((number) => (
                    <PaginationItem key={number}>
                      <PaginationLink onClick={() => paginate(number)} isActive={currentPage === number}>
                        {number}
                      </PaginationLink>
                    </PaginationItem>
                  ))
                ) : (
                  // Show limited page numbers with ellipsis for larger sets
                  <>
                    {/* Always show first page */}
                    <PaginationItem>
                      <PaginationLink onClick={() => paginate(1)} isActive={currentPage === 1}>
                        1
                      </PaginationLink>
                    </PaginationItem>

                    {/* Show ellipsis if current page is > 3 */}
                    {currentPage > 3 && (
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )}

                    {/* Show current page and surrounding pages */}
                    {pageNumbers
                      .filter(
                        (number) =>
                          number !== 1 &&
                          number !== totalPages &&
                          (number === currentPage - 1 || number === currentPage || number === currentPage + 1),
                      )
                      .map((number) => (
                        <PaginationItem key={number}>
                          <PaginationLink onClick={() => paginate(number)} isActive={currentPage === number}>
                            {number}
                          </PaginationLink>
                        </PaginationItem>
                      ))}

                    {/* Show ellipsis if current page is < totalPages - 2 */}
                    {currentPage < totalPages - 2 && (
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )}

                    {/* Always show last page */}
                    <PaginationItem>
                      <PaginationLink onClick={() => paginate(totalPages)} isActive={currentPage === totalPages}>
                        {totalPages}
                      </PaginationLink>
                    </PaginationItem>
                  </>
                )}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      ) : query && !loading ? (
        <div className="text-center p-8">
          <p className="text-muted-foreground">Enter a subreddit name to find related communities</p>
        </div>
      ) : null}

      {!query && !loading && (
        <Card className="bg-muted/50 border-primary/20">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-center">How It Works</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Enter the name of a subreddit you enjoy (with or without "r/" or full URL)</li>
              <li>Click "Find Related" to discover similar communities</li>
              <li>Explore the results to find new subreddits that match your interests</li>
            </ol>
            <p className="text-sm text-center text-muted-foreground pt-2">
              Our algorithm analyzes content patterns, user overlap, and topic similarity to find the most relevant
              recommendations for any subreddit you search.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
