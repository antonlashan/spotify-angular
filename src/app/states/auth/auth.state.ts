import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { Authenticate } from './auth.actions';
import { IToken } from './auth.model';

export class AuthStateModel {
  token: IToken;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
  },
})
@Injectable()
export class AuthState {
  constructor(private auth: AuthService) {}

  @Selector()
  static getToken(state: AuthStateModel) {
    return state.token;
  }

  @Action(Authenticate)
  authenticate({ setState }: StateContext<AuthStateModel>) {
    return this.auth.authorize().pipe(
      tap((result) => {
        setState({ token: result });
      })
    );
  }
}
