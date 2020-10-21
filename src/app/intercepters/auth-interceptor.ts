import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { switchMap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Authenticate } from '../states/auth/auth.actions';
import { IToken } from '../states/auth/auth.model';
import { AuthState } from '../states/auth/auth.state';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.store.selectSnapshot(AuthState.getToken);

    if (token) {
      return this.send(req, next, token);
    } else {
      return this.store.dispatch(new Authenticate()).pipe(
        switchMap(() => {
          const newToken = this.store.selectSnapshot(AuthState.getToken);
          return this.send(req, next, newToken);
        })
      );
    }
  }

  private send(req: HttpRequest<any>, next: HttpHandler, token: IToken) {
    const authReq = req.clone({
      url: environment.spotifyBaseUrl + '/' + req.url,
      headers: req.headers.set('Authorization', 'Bearer ' + token.access_token),
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
