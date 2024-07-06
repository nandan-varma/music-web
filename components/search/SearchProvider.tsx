"use client"
import { useRouter } from "next/navigation";
import { createContext, MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import { PlayerContext } from "../player/PlayerProvider";
import { useDebounce } from 'use-debounce';
import { Sample, Search } from "@/data/search";
import { Data, SongsResult } from "@/lib/search";

export const SearchContext = createContext({
    search: '',
    results: Sample().data,
    loading: false,
    error: null,
    searchRef: null as MutableRefObject<any> | null,
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => { },
});

type SearchProviderProps = {
    children: React.ReactNode;
};

export default function SearchProvider({ children }: SearchProviderProps) {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState<any>(Sample().data);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);
    const searchRef = useRef<any>(null);
    const [searchDebounce] = useDebounce(search, 500);
    // const searchDebounce = search;
    const router = useRouter();
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
    const handleSearch = (e: any) => {
        setSearch(e.target.value);
    };
    return (
        <SearchContext.Provider value={{ search, results, loading, error, searchRef, handleSearch }}>
            {children}
        </SearchContext.Provider>
    );
}