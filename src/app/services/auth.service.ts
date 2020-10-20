import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export const S_ACCESS_TOKEN = 'auth.token.access_token';

export interface IToken {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthHttpClient extends HttpClient {
  constructor(handler: HttpBackend) {
    super(handler);
  }
}

@Injectable()
export class AuthService {
  constructor(private http: AuthHttpClient) {}

  get accessToken(): string {
    return localStorage.getItem(S_ACCESS_TOKEN);
  }

  authorize(): Observable<IToken> {
    return this.http.post<IToken>(
      environment.spotifyAuthUrl,
      'grant_type=client_credentials',
      {
        headers: {
          Authorization: environment.spotifyAuthToken,
          'content-type': 'application/x-www-form-urlencoded',
        },
      }
    );
  }
}
