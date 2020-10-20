import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/states/spotify/spotify.models';

import { ArtistsSearchState } from '../../../states/spotify/artists-search.state';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  @Select(ArtistsSearchState.getArtists) artists$: Observable<Artist[]>;

  ngOnInit(): void {}
}
