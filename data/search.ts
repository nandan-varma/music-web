import { SearchResponse, Data, Artists } from "@/lib/search";

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

export function Sample(): SearchResponse {
    let sample : SearchResponse = {
        "success": true,
        "data": {
          "topQuery": {
            "results": [
              {
                "id": "1029814",
                "title": "Hello Brother",
                "image": [
                  {
                    "quality": "50x50",
                    "url": "https://c.saavncdn.com/814/Hello-Brother-2000-50x50.jpg"
                  },
                  {
                    "quality": "150x150",
                    "url": "https://c.saavncdn.com/814/Hello-Brother-2000-150x150.jpg"
                  },
                  {
                    "quality": "500x500",
                    "url": "https://c.saavncdn.com/814/Hello-Brother-2000-500x500.jpg"
                  }
                ],
                "url": "https://www.jiosaavn.com/album/hello-brother/dLgAJYAcReo_",
                "type": "album",
                "language": "telugu",
                "description": "1994 · Telugu Film"
              }
            ],
            "position": 0
          },
          "songs": {
            "results": [
              {
                "id": "RCqwzFLD",
                "title": "Hello",
                "image": [
                  {
                    "quality": "50x50",
                    "url": "https://c.saavncdn.com/933/Hello-Telugu-2017-20171210-50x50.jpg"
                  },
                  {
                    "quality": "150x150",
                    "url": "https://c.saavncdn.com/933/Hello-Telugu-2017-20171210-150x150.jpg"
                  },
                  {
                    "quality": "500x500",
                    "url": "https://c.saavncdn.com/933/Hello-Telugu-2017-20171210-500x500.jpg"
                  }
                ],
                "album": "Hello!",
                "url": "https://www.jiosaavn.com/song/hello/IisaRg52e3c",
                "type": "song",
                "description": "Hello! · Armaan Malik",
                "primaryArtists": "Armaan Malik",
                "singers": "Armaan Malik",
                "language": "telugu"
              },
              {
                "id": "8o0eLGyX",
                "title": "Hello",
                "image": [
                  {
                    "quality": "50x50",
                    "url": "https://c.saavncdn.com/432/Hello-Punjabi-2021-20211123132715-50x50.jpg"
                  },
                  {
                    "quality": "150x150",
                    "url": "https://c.saavncdn.com/432/Hello-Punjabi-2021-20211123132715-150x150.jpg"
                  },
                  {
                    "quality": "500x500",
                    "url": "https://c.saavncdn.com/432/Hello-Punjabi-2021-20211123132715-500x500.jpg"
                  }
                ],
                "album": "Hello",
                "url": "https://www.jiosaavn.com/song/hello/SAdbVDh3Tms",
                "type": "song",
                "description": "Hello · Nirvair Pannu",
                "primaryArtists": "Nirvair Pannu",
                "singers": "Nirvair Pannu",
                "language": "punjabi"
              },
              {
                "id": "JUbDJBSi",
                "title": "Hello",
                "image": [
                  {
                    "quality": "50x50",
                    "url": "https://c.saavncdn.com/067/25-English-2015-20231220040330-50x50.jpg"
                  },
                  {
                    "quality": "150x150",
                    "url": "https://c.saavncdn.com/067/25-English-2015-20231220040330-150x150.jpg"
                  },
                  {
                    "quality": "500x500",
                    "url": "https://c.saavncdn.com/067/25-English-2015-20231220040330-500x500.jpg"
                  }
                ],
                "album": "25",
                "url": "https://www.jiosaavn.com/song/hello/Oj0JdT5yZFo",
                "type": "song",
                "description": "Adele · 25",
                "primaryArtists": "Adele",
                "singers": "Adele, Adele Adkins",
                "language": "english"
              }
            ],
            "position": 1
          },
          "albums": {
            "results": [
              {
                "id": "1029814",
                "title": "Hello Brother",
                "image": [
                  {
                    "quality": "50x50",
                    "url": "https://c.saavncdn.com/814/Hello-Brother-2000-50x50.jpg"
                  },
                  {
                    "quality": "150x150",
                    "url": "https://c.saavncdn.com/814/Hello-Brother-2000-150x150.jpg"
                  },
                  {
                    "quality": "500x500",
                    "url": "https://c.saavncdn.com/814/Hello-Brother-2000-500x500.jpg"
                  }
                ],
                "artist": "K. S. Chithra, S.P. Balasubrahmanyam, Raj-Koti",
                "url": "https://www.jiosaavn.com/album/hello-brother/dLgAJYAcReo_",
                "type": "album",
                "description": "1994 · Telugu Film · K. S. Chithra, S.P. Balasubrahmanyam, Raj-Koti",
                "year": "1994",
                "songIds": "0VFDKT00, h4MElUhV, JlH7soSO, lDnlQgKc, MiIVQSrN, x-bry8Li",
                "language": "telugu"
              },
              {
                "id": "31000848",
                "title": "Hello",
                "image": [
                  {
                    "quality": "50x50",
                    "url": "https://c.saavncdn.com/432/Hello-Punjabi-2021-20211123132715-50x50.jpg"
                  },
                  {
                    "quality": "150x150",
                    "url": "https://c.saavncdn.com/432/Hello-Punjabi-2021-20211123132715-150x150.jpg"
                  },
                  {
                    "quality": "500x500",
                    "url": "https://c.saavncdn.com/432/Hello-Punjabi-2021-20211123132715-500x500.jpg"
                  }
                ],
                "artist": "Nirvair Pannu",
                "url": "https://www.jiosaavn.com/album/hello/wv5G,4ZSxL4_",
                "type": "album",
                "description": "2021 · Punjabi Album · Nirvair Pannu",
                "year": "2021",
                "songIds": "8o0eLGyX",
                "language": "punjabi"
              },
              {
                "id": "53258270",
                "title": "Hello Brother",
                "image": [
                  {
                    "quality": "50x50",
                    "url": "https://c.saavncdn.com/434/Hello-Brother-Hindi-1999-20240408213727-50x50.jpg"
                  },
                  {
                    "quality": "150x150",
                    "url": "https://c.saavncdn.com/434/Hello-Brother-Hindi-1999-20240408213727-150x150.jpg"
                  },
                  {
                    "quality": "500x500",
                    "url": "https://c.saavncdn.com/434/Hello-Brother-Hindi-1999-20240408213727-500x500.jpg"
                  }
                ],
                "artist": "Himesh Reshammiya, Sajid-Wajid Khan",
                "url": "https://www.jiosaavn.com/album/hello-brother/NRThTMVXgEY_",
                "type": "album",
                "description": "1999 · Hindi Film · Himesh Reshammiya, Sajid-Wajid Khan",
                "year": "1999",
                "songIds": "vDETp60M, 4MXcIFib, RQnSRJRg, _SBz5Q7W, OhSdXKyq, aM6JNEpc, MjfkfNzQ, E8mr02I8, 8YisfxjD, nLqemut4, i_A-esvQ",
                "language": "hindi"
              }
            ],
            "position": 2
          },
          "artists": {
            "results": [
              {
                "id": "3074434",
                "title": "Hello Kanthasamy",
                "image": [
                  {
                    "quality": "50x50",
                    "url": "https://www.jiosaavn.com/_i/3.0/artist-default-film.png"
                  },
                  {
                    "quality": "150x150",
                    "url": "https://www.jiosaavn.com/_i/3.0/artist-default-film.png"
                  },
                  {
                    "quality": "500x500",
                    "url": "https://www.jiosaavn.com/_i/3.0/artist-default-film.png"
                  }
                ],
                "type": "artist",
                "description": "Actor",
                "position": 1
              },
              {
                "id": "5502143",
                "title": "Hello Atlantic",
                "image": [
                  {
                    "quality": "50x50",
                    "url": "https://www.jiosaavn.com/_i/3.0/artist-default-music.png"
                  },
                  {
                    "quality": "150x150",
                    "url": "https://www.jiosaavn.com/_i/3.0/artist-default-music.png"
                  },
                  {
                    "quality": "500x500",
                    "url": "https://www.jiosaavn.com/_i/3.0/artist-default-music.png"
                  }
                ],
                "type": "artist",
                "description": "Singer",
                "position": 2
              },
              {
                "id": "3163978",
                "title": "Hello I'm Adele",
                "image": [
                  {
                    "quality": "50x50",
                    "url": "https://c.saavncdn.com/605/Someone-Like-You-English-2017-50x50.jpg"
                  },
                  {
                    "quality": "150x150",
                    "url": "https://c.saavncdn.com/605/Someone-Like-You-English-2017-150x150.jpg"
                  },
                  {
                    "quality": "500x500",
                    "url": "https://c.saavncdn.com/605/Someone-Like-You-English-2017-500x500.jpg"
                  }
                ],
                "type": "artist",
                "description": "Singer",
                "position": 3
              }
            ],
            "position": 4
          },
          "playlists": {
            "results": [],
            "position": 3
          }
        }
      };
    return sample;
}