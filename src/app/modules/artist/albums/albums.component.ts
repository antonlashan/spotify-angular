import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { ArtistAlbum } from '../../../states/spotify/spotify.models';
import { ArtistAlbumsState } from '../../../states/spotify/artists-albums.state';
import { GetArtistAlbums } from '../../../states/spotify/spotify.actions';

@Component({
  selector: 'app-artist-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnChanges {
  @Input() artistId: string;
  @Select(ArtistAlbumsState.artistAlbums) albums$: Observable<ArtistAlbum[]>;

  constructor(private store: Store) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.artistId.currentValue) {
      this.store.dispatch(new GetArtistAlbums(this.artistId));
    }
  }

  back() {
    history.back();
  }
}
