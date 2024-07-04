import { useContext } from "react"
import { SearchContext } from "../search/SearchProvider"
import { Input } from "../ui/input";

export function SearchInput() {
    const { handleSearch } = useContext(SearchContext);
    return (
        <>
            <Input
                autoFocus
                type="search"
                placeholder="Search for songs, albums, and artists"
                className="flex-1 rounded-full bg-muted px-4 py-2 text-sm"
                onChange={handleSearch} />
        </>
    )
}