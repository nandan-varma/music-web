"use client"
import { SVGProps, useContext, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { PlayerContext } from "./PlayerProvider";

export function Player() {

    const { currentSong } = useContext(PlayerContext);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(100);
    const AudioRef = useRef<HTMLAudioElement>(null);
    const [audioSrc, setAudioSrc] = useState<string>("https://aac.saavncdn.com/092/b3acb226721d5e51e788e9838f0261c3_160.mp4");

    const handlePlayPause = () => {
        setIsPlaying((isPlaying) => !isPlaying);
        if (isPlaying) {
            AudioRef.current?.pause();
        } else {
            AudioRef.current?.play();
        }
        setProgress(AudioRef.current?.currentTime || 0);
        setDuration(AudioRef.current?.duration || 100);
    }

    const handleSeek = (value: number) => {
        AudioRef.current!.currentTime = value;
        setProgress(value);
    }

    const handleBackward = () => {
        AudioRef.current!.currentTime = 0;
        setProgress(0);
    }

    useEffect(() => {
        // increase seconds in progress while playing
        if (isPlaying) {
            AudioRef.current?.play();
            const interval = setInterval(() => {
                setProgress((progress) => progress + 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            AudioRef.current?.pause();
        }
        setProgress(AudioRef.current?.currentTime || 0);
        setDuration(AudioRef.current?.duration || 100);
    }, [isPlaying])

    useEffect(() => {
        console.log(currentSong);
        if (currentSong && AudioRef.current) {
            setAudioSrc(currentSong?.data[0].downloadUrl.find((url) => url.quality === "160kbps")?.url!);
            AudioRef.current.load();
            AudioRef.current.play();
            setIsPlaying(true);
        }
    }, [currentSong])

    return (
        <div className="mx-auto max-w-5xl flex items-center gap-4">
            <audio ref={AudioRef} src={audioSrc} controls className="hidden" />
            <div className="flex items-center gap-4 w-96">
                <img src="https://v0.dev/placeholder.svg" alt="Album Cover" width={64} height={64} className="rounded-md" />
                <div>
                    <h3 className="text-base font-semibold line-clamp-1">Now Playing Placeholder</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">Album Placeholder</p>
                </div>
            </div>
            <Slider
                className="w-96 m-6"
                defaultValue={[40]}
                value={[progress]}
                max={duration}
                step={1}
                onValueChange={(e) => { handleSeek(e[0]) }}
            />
            <div className="flex items-center gap-4 ml-auto">
                <Button variant="ghost" size="icon" onClick={handleBackward}>
                    <RewindIcon className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={handlePlayPause}>
                    {isPlaying ?
                        <PauseIcon className="h-5 w-5" />
                        : <PlayIcon className="h-5 w-5" />}
                </Button>
                <Button variant="ghost" size="icon">
                    <ForwardIcon className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                    <Volume2Icon className="h-5 w-5" />
                </Button>
            </div>
        </div>
    )
}


function ForwardIcon(props: SVGProps<SVGSVGElement>) {
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


function PlayIcon(props: SVGProps<SVGSVGElement>) {
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

function PauseIcon(props: SVGProps<SVGSVGElement>) {
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
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
        </svg>
    )
}


function RewindIcon(props: SVGProps<SVGSVGElement>) {
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

function Volume2Icon(props: SVGProps<SVGSVGElement>) {
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