import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { ArtistComponent } from './artist.component';
import { ArtistRoutingModule } from './artist-routing.module';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistAlbumsState } from '../../states/spotify/artists-albums.state';
import { HistoryState } from '../../states/history/history.state';

@NgModule({
  declarations: [ArtistComponent, AlbumsComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    // NgxsModule.forFeature([ArtistAlbumsState, HistoryState]),
    NgxsModule.forFeature([ArtistAlbumsState]),
  ],
})
export class ArtistModule {}
