import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ArtistsSearchState } from '../../states/spotify/artists-search.state';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, SearchComponent, SearchResultComponent],
  imports: [
    CommonModule,
    NgxsModule.forFeature([ArtistsSearchState]),
    HomeRoutingModule,
  ],
  // imports: [CommonModule],
})
export class HomeModule {}
