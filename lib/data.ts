export type Song = {
    Name: string,
    Artist: string,
    Icon: string,
    DownloadUrl: string,
}

export let sampleSong: Song = {
    Name: "Some Name",
    Artist: "Some Artist",
    Icon: "https://c.saavncdn.com/723/Ranvijay-s-Entry-Medley-From-ANIMAL-Hindi-2023-20231214141003-150x150.jpg",
    DownloadUrl: "https://aac.saavncdn.com/723/21882a1ce4d186dc29888c56d35114c1_160.mp4"
}

export let sampleSongList: Song[] = Array(10).fill(sampleSong);