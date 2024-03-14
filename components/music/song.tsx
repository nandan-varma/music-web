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
import { Songs, SongsResult } from "@/lib/search";
import Image from "next/image";

type SongItemProps = {
    song: SongsResult
};

type SongListProps = {
    songs: Songs
}

export function SongItem({ song }: SongItemProps) {
    return (
        <>
            <Card className="h-96 w-60 ">
                <CardHeader>
                    <CardTitle>{song.title}</CardTitle>
                    <CardDescription>{song.primaryArtists}</CardDescription>
                </CardHeader>
                <CardContent className=" align-bottom">
                    <Image className="h-36 w-36" src={song.image[2].link} alt={song.title} height={'500'} width={'500'}></Image></CardContent>
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
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-3xl"
    >
                <CarouselContent>
                    {songs.results.map((song,i) =>
                        <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
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

export function SongListLoading() {
    return (
        <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-3xl"
      >
                  <CarouselContent>
                      {Array.from({ length: 5 }).map((k,i) =>
                          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                              {/* <SongItem song={} /> */}
                          </CarouselItem>
                      )}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
              </Carousel>
    )
}