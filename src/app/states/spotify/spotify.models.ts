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
