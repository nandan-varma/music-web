import { Convert, SearchResponse, Data, Artists } from "@/lib/search";

export async function Search(SearchTerm: string): Promise<SearchResponse | null> {
    if (SearchTerm && SearchTerm.replace(/\s/g, "") != "") {
        var searchUrl = `https://jiosaavn-api-nandan-varma.vercel.app/search/all?query=${SearchTerm}`;
        let res = await fetch(searchUrl);
        console.log(SearchTerm);
        let response = await res.json() as SearchResponse;
        return response;
    }
    else {
        return null;
    }
}