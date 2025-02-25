import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';
import { fromEvent } from 'rxjs';
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  tap,
} from 'rxjs/operators';

import { SearchArtists } from '../../../states/spotify/spotify.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('search') input: ElementRef;

  constructor(private store: Store) {}

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.dispatch(this.input.nativeElement.value.trim());
        })
      )
      .subscribe();
  }

  private dispatch(val: string) {
    if (val) {
      this.store.dispatch(new SearchArtists(val));
    }
  }
}
