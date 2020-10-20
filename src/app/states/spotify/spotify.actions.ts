export class SearchArtists {
  static readonly type = '[Spotify] SearchArtists';
  constructor(public query: string) {}
}

export class GetArtistAlbums {
  static readonly type = '[Spotify] GetArtistAlbums';
  constructor(public id: string) {}
}
