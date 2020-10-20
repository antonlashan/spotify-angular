export class SearchArtists {
  static readonly type = '[Spotify] SearchArtists';
  constructor(public query: string) {}
}
