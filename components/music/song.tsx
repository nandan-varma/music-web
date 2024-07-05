import { SongsResult } from "@/lib/search";
import { Button } from "../ui/button";

type SongProps = {
    Song: SongsResult;
}

export function Song({ Song }: SongProps) {
    return (
        <div className="bg-muted rounded-lg overflow-hidden group">
            <div className="relative aspect-square">
                <img
                    src={Song.image[2].url}
                    alt="Album Cover"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                />
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute bottom-2 right-2 bg-background/50 hover:bg-background rounded-full"
                >
                    <PlayIcon className="h-5 w-5" />
                </Button>
            </div>
            <div className="p-4">
                <h3 className="text-base font-semibold line-clamp-1">{Song.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1">{Song.album}</p>
            </div>
        </div>
    )
}

export function PlayIcon(props: any) {
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
