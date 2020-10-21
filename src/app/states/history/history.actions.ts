import { History } from './history.model';

export class AddHistory {
  static readonly type = '[History] Add';
  constructor(public payload: History) {}
}
