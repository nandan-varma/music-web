import { AlbumsResult } from "@/lib/search";
import { Button } from "../ui/button";
import { PlayIcon } from "./song";

type AlbumProps = {
    Album: AlbumsResult;
}

export function Album({ Album }: AlbumProps) {
    return (
        <>
            <div className="bg-muted rounded-lg overflow-hidden group">
                <div className="relative aspect-square">
                    <img
                        src={Album.image[2].url}
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
                    <h3 className="text-base font-semibold line-clamp-1">{Album.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{Album.artist}</p>
                </div>
            </div>
        </>
    );
}