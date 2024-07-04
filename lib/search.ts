export interface SearchResponse {
    success: boolean;
    data:    Data;
}

export interface Data {
    topQuery:  TopQuery;
    songs:     Songs;
    albums:    Albums;
    artists:   Artists;
    playlists: Albums;
}

export interface Albums {
    results:  AlbumsResult[];
    position: number;
}

export interface AlbumsResult {
    id:          string;
    title:       string;
    image:       Image[];
    artist:      string;
    url:         string;
    type:        string;
    description: string;
    year:        string;
    songIds:     string;
    language:    string;
}

export interface Image {
    quality: "50x50" | "150x150" | "500x500";
    url:     string;
}


export interface Artists {
    results:  ArtistsResult[];
    position: number;
}

export interface ArtistsResult {
    id:          string;
    title:       string;
    image:       Image[];
    type:        string;
    description: string;
    position:    number;
}

export interface Songs {
    results:  SongsResult[];
    position: number;
}

export interface SongsResult {
    id:             string;
    title:          string;
    image:          Image[];
    album:          string;
    url:            string;
    type:           string;
    description:    string;
    primaryArtists: string;
    singers:        string;
    language:       string;
}

export interface TopQuery {
    results:  TopQueryResult[];
    position: number;
}

export interface TopQueryResult {
    id:          string;
    title:       string;
    image:       Image[];
    url:         string;
    type:        string;
    language:    string;
    description: string;
}
