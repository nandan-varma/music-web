'use server'
const emptyResult = {
    "topQuery": {
        "results": [],
        "position": 0
    },
    "songs": {
        "results": [],
        "position": 1
    },
    "albums": {
        "results": [],
        "position": 2
    },
    "artists": {
        "results": [],
        "position": 3
    },
    "playlists": {
        "results": [],
        "position": 4
    }
};
export async function Search(SearchTerm: string) {
    if (SearchTerm && SearchTerm.replace(/\s/g, "") != "") {
        console.log('where');
        var searchUrl = `https://jiosaavn-api-nandan-varma.vercel.app/search/all?query=${SearchTerm}`;
        let res = await fetch(searchUrl);
        if (!res.ok) {
            return emptyResult
        }
        return res.json()
    }
    else {
        return emptyResult
    }
}