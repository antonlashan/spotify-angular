import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

interface IToken {
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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: AuthHttpClient) {}

  get isAuthorized(): boolean {
    return !!localStorage.getItem('access_token');
  }

  set accessToken(t: string) {
    localStorage.setItem('access_token', t);
  }

  get accessToken(): string {
    return localStorage.getItem('access_token');
  }

  async checkAuthorized() {
    if (!this.isAuthorized) {
      await this.authorize();
    }
  }

  async authorize(): Promise<IToken> {
    return new Promise((resolve, reject) => {
      this.http
        .post<IToken>(
          environment.spotifyAuthUrl,
          'grant_type=client_credentials',
          {
            headers: {
              Authorization: environment.spotifyAuthToken,
              'content-type': 'application/x-www-form-urlencoded',
            },
          }
        )
        .subscribe(
          (res) => {
            this.accessToken = res.access_token;
            resolve(res);
          },
          (e) => {
            reject(e);
          },
          () => {
            resolve(null);
          }
        );
    });
  }
}
