import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  tap,
} from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('search') input: ElementRef;

  constructor(private spotifyService: SpotifyService) {}

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(500),
        distinctUntilChanged(),
        tap((text) => {
          console.log(this.input.nativeElement.value);
          this.spotifyService
            .searchArtists(this.input.nativeElement.value)
            .subscribe((data) => {
              console.log(data);
            });
        })
      )
      .subscribe();
  }
}
