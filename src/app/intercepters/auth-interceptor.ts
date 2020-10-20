import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      url: environment.spotifyBaseUrl + '/' + req.url,
      headers: req.headers.set(
        'Authorization',
        'Bearer ' + this.auth.accessToken
      ),
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
