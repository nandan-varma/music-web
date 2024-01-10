import { Metadata } from "next"
import { PlusCircledIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { AlbumArtwork } from "@/components/album-artwork"
import { PodcastEmptyPlaceholder } from "@/components/podcast-empty-placeholder"
import { listenNowAlbums, madeForYouAlbums } from "@/data/albums"

export const metadata: Metadata = {
  title: "Music App",
  description: "Music i found in the internet",
}

export default function MusicPage() {
  return (
    <>
    </>
  )
}
