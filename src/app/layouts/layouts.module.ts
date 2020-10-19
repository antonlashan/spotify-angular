import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainLayoutComponent } from './main-layout/main.component';
import { HomeLayoutComponent } from './home-layout/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [MainLayoutComponent, HomeLayoutComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
})
export class LayoutsModule {}
