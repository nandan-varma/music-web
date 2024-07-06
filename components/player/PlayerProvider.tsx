'use client'
import { getSongData } from '@/data/search';
import { SongDataResponse } from '@/lib/song';
import React, { createContext, useEffect, useState } from 'react';

// Create a context for the Music Player Provider
export const PlayerContext = createContext<{
    PlayList: string[];
    setPlayList: React.Dispatch<React.SetStateAction<string[]>>;
    PlaySong: (song: string) => void;
    currentSong: SongDataResponse | null;
}>({
    PlayList: [],
    setPlayList: () => { },
    PlaySong: (song: string) => { },
    currentSong: null
});

// Define the Music Player Provider component
const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [PlayList, setPlayList] = useState<string[]>([]);
    const [currentSong, setCurrentSong] = useState<SongDataResponse | null>(null);

    useEffect(() => {
        if (PlayList.length > 0) {
            getSongInfo(PlayList[0]).then((response) => {
                setCurrentSong(response);
            });
        }
    }, [PlayList]);

    const PlaySong = (songID: string) => {
        setPlayList([songID]);
    }

    const getSongInfo = async (songID: string) => {
        const response = await getSongData(songID);
        return response
    }

    return (
        <PlayerContext.Provider value={{ PlayList, setPlayList, PlaySong, currentSong }}>
            {children}
        </PlayerContext.Provider>
    );
};

export default PlayerProvider;
