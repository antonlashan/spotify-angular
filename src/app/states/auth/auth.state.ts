import { Injectable } from '@angular/core';
import { Action, NgxsOnInit, State, StateContext } from '@ngxs/store';
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
export class AuthState implements NgxsOnInit {
  constructor(private auth: AuthService) {}

  ngxsOnInit({ dispatch }: StateContext<AuthStateModel>) {
    this.auth
      .authorize()
      .pipe(
        tap((token) => {
          dispatch(new Authenticate(token));
        })
      )
      .subscribe();
  }

  @Action(Authenticate)
  async authStateChanged(
    { setState }: StateContext<AuthStateModel>,
    action: Authenticate
  ) {
    setState({ token: action.payload });
  }
}
