import { Button } from "@/components/ui/button"
import { SearchInput } from "@/components/search/Search"
import { SVGProps } from "react"
import { SearchResults } from "@/components/search/SearchResults"
import { Player } from "@/components/player/Player"

export default function Browse() {
  return (
    <div className="flex flex-col h-full">
      <header className="bg-background border-b p-4 md:p-6">
        <div className="mx-auto max-w-5xl flex items-center gap-4">
          <SearchInput />
          <Button variant="ghost" size="icon" className="rounded-full">
            <SearchIcon className="h-5 w-5" />
          </Button>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <SearchResults />
        <div className="h-36"></div>
      </main>
      <footer className="bg-background border-t p-4 md:p-6 fixed bottom-0 w-full">
        <Player/>
      </footer>
    </div>
  )
}


function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
