"use client"
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { PlayerContext } from "../PlayerProvider";
import { useDebounce } from 'use-debounce';
import { Sample, Search } from "@/data/search";
import { Data, SongsResult } from "@/lib/search";

export const SearchContext = createContext({
    search: '',
    results: Sample().data,
    loading: false,
    error: null,
    searchRef: null,
    handleSearch: () => { },
    handleSelect: () => { },
});

type SearchProviderProps = {
    children: React.ReactNode;
};

export default function SearchProvider({ children }: SearchProviderProps) {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState<Data | undefined>(Sample().data);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const searchRef = useRef(null);
    const [searchDebounce] = useDebounce(search, 500);
    const router = useRouter();
    const { setSong } = useContext(PlayerContext);
    const searchSongs = async () => {
        setLoading(true);
        try {
            const res = await Search(searchDebounce);
            const data = res?.data
            setResults(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (searchDebounce) {
            searchSongs();
        }
    }, [searchDebounce]);
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    const handleSelect = (song: SongsResult) => {
        setSong(song);
        router.push(`/song/${song.id}`);
    };
    return (
        <SearchContext.Provider value={{ search, results, loading, error, searchRef, handleSearch, handleSelect }}>
            {children}
        </SearchContext.Provider>
    );
}