import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Navigate } from '@ngxs/router-plugin';

import { Artist } from '../../../states/spotify/spotify.models';
import { ArtistsSearchState } from '../../../states/spotify/artists-search.state';
import { AddHistory } from 'src/app/states/history/history.actions';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  @Select(ArtistsSearchState.getArtists) artists$: Observable<Artist[]>;

  constructor(private store: Store) {}
  navigateAlbums(id: string) {
    const artists = this.store.selectSnapshot(ArtistsSearchState.getArtists);
    const artist = artists.find((a) => a.id === id);

    this.store.dispatch(new AddHistory({ id: artist.id, name: artist.name }));
  }
}
