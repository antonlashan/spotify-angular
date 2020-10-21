import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { MainLayoutComponent } from './main-layout/main.component';
import { HomeLayoutComponent } from './home-layout/home.component';
import { HeaderComponent } from './header/header.component';
import { SearchHistoryComponent } from './home-layout/search-history/search-history.component';
import { HistoryState } from '../states/history/history.state';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeLayoutComponent,
    HeaderComponent,
    SearchHistoryComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class LayoutsModule {}
