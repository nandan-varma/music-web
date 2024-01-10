import { Song, sampleSong } from "@/lib/data";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button";

type SongItemProps = {
    song: Song
};

type SongListProps = {
    songs: Song[]
}

export function SongItem({ song }: SongItemProps) {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>{song.Name}</CardTitle>
                    <CardDescription>{song.Artist}</CardDescription>
                </CardHeader>
                <CardContent>Something</CardContent>
                <CardFooter>
                    <Button>Play</Button>
                </CardFooter>
            </Card>
        </>
    )
}

export function SongList({ songs }: SongListProps) {
    return (
        <>
            <Carousel className="w-full max-w-screen-lg">
                <CarouselContent>
                    {songs.map((song) =>
                        <CarouselItem key={song.Name} className="md:basis-1/2 lg:basis-1/3">
                            <SongItem song={song} />
                        </CarouselItem>
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}