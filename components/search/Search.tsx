"use client"
import { useContext, useEffect } from "react"
import { SearchContext } from "./SearchProvider"
import { Input } from "../ui/input";
import { SongSearchResponse } from "@/lib/search/song";

export function SearchInput() {
    const { handleSearch } = useContext(SearchContext);
    useEffect(() => {
        async function fetch_data() {
            let sample_data = await fetch("https://saavn.dev/api/search/songs?query=hello");
            let data = await sample_data.json();
            let song_data: SongSearchResponse = data;
            console.log(song_data);
        }
        fetch_data();
    }
        ,
        []
    )
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