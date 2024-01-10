'use client'
import { SongItem, SongList } from "@/components/music/song";
import { Input } from "@/components/ui/input"
import { Search } from "@/data/search";
import { sampleSong, sampleSongList } from "@/lib/data";
import { KeyboardEvent, useState } from "react"


export default function MusicPage() {
  const [SearchTerm, SetSearchTerm] = useState('');
  const [Data, SetData] = useState(null);
  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      SetData(await Search(SearchTerm));
    }
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <Input
            autoFocus className="m-4"
            onChange={(e) => { SetSearchTerm(e.target.value) }}
            value={SearchTerm}
            onKeyDown={handleKeyDown}
            type="search"
            placeholder="Search here ..."
          />
          <SongList songs={sampleSongList} />
        </div>
      </div>
    </>
  )
}
