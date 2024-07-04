'use client'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import SearchProvider, { SearchContext } from "@/components/search/SearchProvider"
import { SearchInput } from "@/components/music/search"
import { useContext } from "react"
import { Song } from "@/components/music/song"
import { Album } from "@/components/music/album"

export default function Browse() {
  const { search, results, loading, error, searchRef, handleSearch, handleSelect } = useContext(SearchContext);
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
        <div className="mx-auto max-w-5xl grid gap-6">
          <div>
            <h2 className="text-lg font-semibold">Songs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {results?.songs.results.map((song) => (
                <Song key={song.id} Song={song} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Albums</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {results?.albums.results.map((album) => (
                <Album key={album.id} Album={album} />
              ))}
            </div>
          </div>
        </div>
      <div className="h-24"></div>
      </main>
      <footer className="bg-background border-t p-4 md:p-6 fixed bottom-0 w-full">
        <div className="mx-auto max-w-5xl flex items-center gap-4">
          <div className="flex items-center gap-4">
            <img src="/placeholder.svg" alt="Album Cover" width={64} height={64} className="rounded-md" />
            <div>
              <h3 className="text-base font-semibold line-clamp-1">Bohemian Rhapsody</h3>
              <p className="text-sm text-muted-foreground line-clamp-1">Queen</p>
            </div>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <Button variant="ghost" size="icon">
              <RewindIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <PlayIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ForwardIcon className="h-5 w-5" />
            </Button>
            <Slider
              className="flex-1 [&>span:first-child]:h-1 [&>span:first-child]:bg-muted [&_[role=slider]]:bg-primary [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-primary [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]:focus-visible]:scale-105 [&_[role=slider]:focus-visible]:transition-transform"
              defaultValue={[40]}
            />
            <Button variant="ghost" size="icon">
              <Volume2Icon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ForwardIcon(props) {
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
      <polyline points="15 17 20 12 15 7" />
      <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
    </svg>
  )
}


function PlayIcon(props) {
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
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}


function RewindIcon(props) {
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
      <polygon points="11 19 2 12 11 5 11 19" />
      <polygon points="22 19 13 12 22 5 22 19" />
    </svg>
  )
}


function SearchIcon(props) {
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


function Volume2Icon(props) {
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
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  )
}