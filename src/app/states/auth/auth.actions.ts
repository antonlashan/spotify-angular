import { IToken } from '../../services/auth.service';

export class Authenticate {
  static readonly type = '[Auth] Authenticate';
  constructor(public payload: IToken) {}
}
