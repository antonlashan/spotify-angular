import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  searchArtists(query: string): Observable<any[]> {
    return this.http.get<any[]>(`search/?q=${query}&type=artist&limit=50`);
  }

  getArtist(id: string): Observable<any> {
    return this.http.get<any>(`artists/${id}`);
  }

  getAlbums(id: string): Observable<any[]> {
    return this.http.get<any[]>(`artists/${id}/albums?include_groups=album`);
  }
}
