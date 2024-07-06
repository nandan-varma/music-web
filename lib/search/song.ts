import { Image } from "../search";

export interface SongSearchResponse {
    success: boolean;
    data:    Data;
}

export interface Data {
    total:   number;
    start:   number;
    results: Result[];
}

export interface Result {
    id:              string;
    name:            Name;
    type:            ResultType;
    year:            string;
    releaseDate:     null;
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
    image:           DownloadURL[];
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
    role:  Role;
    image: Image[];
    type:  AllType;
    url:   string;
}

export interface DownloadURL {
    quality: "12kbps" | "48kbps" | "96kbps" | "160kbps" | "320kbps";
    url:     string;
}

export enum Role {
    Lyricist = "lyricist",
    Music = "music",
    PrimaryArtists = "primary_artists",
    Singer = "singer",
    Starring = "starring",
}

export enum AllType {
    Artist = "artist",
}

export enum Name {
    Hello = "Hello",
    HelloHello = "Hello Hello",
    HelloRammante = "Hello Rammante",
}

export enum ResultType {
    Song = "song",
}
