import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IToken } from '../states/auth/auth.model';

export const S_ACCESS_TOKEN = 'auth.token.access_token';

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
    return JSON.parse(localStorage.getItem(S_ACCESS_TOKEN));
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
