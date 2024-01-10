import { Input } from "@/components/ui/input"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
}

export default function MusicPage() {
  return (
    <>
      <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">
          <Input type="search" placeholder="search here ..."></Input>
        </div>
      </div>
    </>
  )
}
