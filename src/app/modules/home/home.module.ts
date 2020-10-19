import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [HomeComponent, SearchComponent],
  imports: [CommonModule],
})
export class HomeModule {}
