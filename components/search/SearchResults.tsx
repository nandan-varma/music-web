"use client"
import { useContext } from "react";
import { SearchContext } from "./SearchProvider";
import { Song } from "../music/song";
import { Album } from "../music/album";

export function SearchResults() {
    const { results } = useContext(SearchContext);
    return (
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
    )
}