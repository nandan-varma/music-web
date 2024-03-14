'use client'
import { SongsResult } from '@/lib/search';
import React, { createContext, useState } from 'react';

// Create a context for the Music Player Provider
export const PlayerContext = createContext<{
    song: SongsResult | null;
    setSong: React.Dispatch<React.SetStateAction<SongsResult | null>>;
}>({
    song: null,
    setSong: () => {},
});

// Define the Music Player Provider component
const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [song, setSong] = useState<SongsResult | null>(null);

    return (
        <PlayerContext.Provider value={{ song, setSong }}>
            {children}
        </PlayerContext.Provider>
    );
};

export default PlayerProvider;
