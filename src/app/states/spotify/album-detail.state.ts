import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { SpotifyService } from '../../services/spotify.service';
import { GetAlbumDetail } from './spotify.actions';
import { Album } from './spotify.models';

interface AlbumDetailStateModel {
  albumDetail: Album;
}

@State<AlbumDetailStateModel>({
  name: 'albumDetail',
  defaults: { albumDetail: null },
})
@Injectable()
export class AlbumDetailState {
  constructor(private spotify: SpotifyService) {}

  @Selector()
  static albumDetail(state: AlbumDetailStateModel) {
    return state.albumDetail;
  }

  @Action(GetAlbumDetail)
  getAlbumDetail(
    { setState }: StateContext<AlbumDetailStateModel>,
    { id }: GetAlbumDetail
  ) {
    return this.spotify.getAlbum(id).pipe(
      tap((result) => {
        setState({
          albumDetail: result,
        });
      })
    );
  }
}
