import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { SpotifyService } from '../../services/spotify.service';
import { GetArtistAlbums } from './spotify.actions';
import { ArtistAlbum } from './spotify.models';

interface ArtistAlbumsStateModel {
  albums: ArtistAlbum[];
}

@State<ArtistAlbumsStateModel>({
  name: 'artistAlbums',
  defaults: { albums: null },
})
@Injectable()
export class ArtistAlbumsState {
  constructor(private spotify: SpotifyService) {}

  @Selector()
  static artistAlbums(state: ArtistAlbumsStateModel) {
    return state.albums;
  }

  @Action(GetArtistAlbums)
  getAlbums(
    { setState }: StateContext<ArtistAlbumsStateModel>,
    { id }: GetArtistAlbums
  ) {
    return this.spotify.getAlbums(id).pipe(
      tap((result) => {
        setState({
          albums: result.items,
        });
      })
    );
  }
}
