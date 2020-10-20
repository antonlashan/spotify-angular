import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [HomeComponent, SearchComponent, SearchResultComponent],
  imports: [CommonModule],
})
export class HomeModule {}
