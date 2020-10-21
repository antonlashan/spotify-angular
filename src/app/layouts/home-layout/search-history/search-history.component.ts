import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AddHistory } from '../../../states/history/history.actions';
import { History } from '../../../states/history/history.model';
import { HistoryState } from '../../../states/history/history.state';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss'],
})
export class SearchHistoryComponent {
  @Select(HistoryState.getHistories) histories$: Observable<History[]>;
  open = false;

  constructor(private store: Store) {}

  navigateAlbums(history: History) {
    this.store.dispatch(new AddHistory(history));
  }

  toggleWidget() {
    this.open = !this.open;
  }
}
