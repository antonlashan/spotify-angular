import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Album, ArtistAlbums, Artists } from '../states/spotify/spotify.models';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  searchArtists(query: string): Observable<Artists> {
    return this.http.get<Artists>(`search/?q=${query}&type=artist&limit=50`);
  }

  getAlbumsByArtist(id: string): Observable<ArtistAlbums> {
    return this.http.get<ArtistAlbums>(
      `artists/${id}/albums?album_type=album&album_group=single&limit=50`
    );
  }

  getAlbum(id: string): Observable<Album> {
    return this.http.get<Album>(`albums/${id}?album_type=album`);
  }
}
