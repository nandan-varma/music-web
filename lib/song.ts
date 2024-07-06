import { Image } from "./search";
import { DownloadURL } from "./search/song";

export interface SongDataResponse {
    success: boolean;
    data:    Datum[];
}

export interface Datum {
    id:              string;
    name:            string;
    type:            string;
    year:            string;
    releaseDate:     Date;
    duration:        number;
    label:           string;
    explicitContent: boolean;
    playCount:       number;
    language:        string;
    hasLyrics:       boolean;
    lyricsId:        null;
    url:             string;
    copyright:       string;
    album:           Album;
    artists:         Artists;
    image:           Image[];
    downloadUrl:     DownloadURL[];
}

export interface Album {
    id:   string;
    name: string;
    url:  string;
}

export interface Artists {
    primary:  All[];
    featured: any[];
    all:      All[];
}

export interface All {
    id:    string;
    name:  string;
    role:  string;
    image: DownloadURL[];
    type:  string;
    url:   string;
}