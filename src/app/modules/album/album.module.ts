import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { AlbumRoutingModule } from './album-routing.module';
import { DetailsComponent } from './details/details.component';
import { AlbumDetailState } from '../../states/spotify/album-detail.state';
import { TrackComponent } from './track/track.component';

@NgModule({
  declarations: [DetailsComponent, TrackComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    NgxsModule.forFeature([AlbumDetailState]),
  ],
})
export class AlbumModule {}
