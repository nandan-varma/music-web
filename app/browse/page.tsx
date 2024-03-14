'use client'
import { SongList } from "@/components/music/song";
import { Input } from "@/components/ui/input"
import { Search } from "@/data/search";
import { SearchResponse } from "@/lib/search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { KeyboardEvent, useCallback, useEffect, useState } from "react"
import { set } from "react-hook-form";


export default function MusicPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(false);
  
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  const [Data, SetData] = useState<SearchResponse|null>(null);
  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    // if (event.key === 'Enter') {
    //   SetData(await Search(SearchTerm));
    // }
  }
  // const data = JSON.parse(json);
  // console.log(data);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      let searchResult = await Search(searchParams.get('q')??'');
      console.log(searchResult);
      return searchResult;
    };
    fetchData().then(result => SetData(result));
    setLoading(false);
  }, [searchParams]);

  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <Input
            autoFocus className="m-4"
            onChange={(e) => { router.push(pathname + '?' + createQueryString('q', e.currentTarget.value))  }}
            type="search"
            placeholder="Search here ..."
          />
          {loading ? 
          <p>Loading...</p> :
          <SongList songs={Data?.data.songs ?? { results: [], position: 0 }} />}
        </div>
      </div>
    </>
  )
}
