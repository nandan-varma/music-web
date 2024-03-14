// To parse this data:
//
//   import { Convert, SearchResponse } from "./file";
//
//   const searchResponse = Convert.toSearchResponse(json);

export interface SearchResponse {
    status:  string;
    message: null;
    data:    Data;
}

export interface Data {
    topQuery:  Artists;
    songs:     Songs;
    albums:    Albums;
    artists:   Artists;
    playlists: Artists;
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
    position:    number;
    year:        string;
    songIds:     string;
    language:    string;
}

export interface Image {
    quality: Quality;
    link:    string;
}

export enum Quality {
    The150X150 = "150x150",
    The500X500 = "500x500",
    The50X50 = "50x50",
}

export interface Artists {
    results:  ArtistsResult[];
    position: number;
}

export interface ArtistsResult {
    id:          string;
    title:       string;
    image:       Image[];
    url:         string;
    type:        string;
    description: string;
    position:    number;
    language?:   string;
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
    position:       number;
    primaryArtists: string;
    singers:        string;
    language:       string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toSearchResponse(json: string): SearchResponse {
        return JSON.parse(json);
    }

    public static searchResponseToJson(value: SearchResponse): string {
        return JSON.stringify(value);
    }
}