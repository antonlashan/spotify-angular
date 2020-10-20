export interface ArtistImage {
  height: number;
  url: string;
  width: number;
}

export interface Artist {
  external_urls: {
    spotify: string;
  };
  genres: string[];
  href: string;
  id: string;
  images: ArtistImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface Paging<T> {
  href: string;
  items: T;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface Artists {
  artists: Paging<Artist[]>;
}

export interface AlbumArtist {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ArtistAlbum {
  artists: AlbumArtist[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: ArtistImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export type ArtistAlbums = Paging<ArtistAlbum[]>;
