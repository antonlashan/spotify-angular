import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { SpotifyService } from '../../services/spotify.service';
import { SearchArtists } from './spotify.actions';
import { Artist } from './spotify.models';

interface ArtistsSearchStateModel {
  artists: Artist[];
}

@State<ArtistsSearchStateModel>({
  name: 'search',
  defaults: { artists: null },
})
@Injectable()
export class ArtistsSearchState {
  constructor(private spotify: SpotifyService) {}

  @Selector()
  static getArtists(state: ArtistsSearchStateModel) {
    return state.artists;
  }

  @Action(SearchArtists)
  searchArtists(
    { setState }: StateContext<ArtistsSearchStateModel>,
    { query }: SearchArtists
  ) {
    return this.spotify.searchArtists(query).pipe(
      tap((result) => {
        setState({
          artists: result.artists.items,
        });
      })
    );
  }
}
