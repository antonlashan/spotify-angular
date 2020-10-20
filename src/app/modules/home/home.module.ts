import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [HomeComponent, SearchComponent, SearchResultComponent],
  // imports: [CommonModule, NgxsModule.forFeature([])],
  imports: [CommonModule],
})
export class HomeModule {}
