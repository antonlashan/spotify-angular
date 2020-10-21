import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLayoutComponent } from './layouts/home-layout/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: 'artists',
    component: MainLayoutComponent,
    data: { title: 'Artists Page' },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/artist/artist.module').then((m) => m.ArtistModule),
      },
    ],
  },
  {
    path: 'album-details',
    component: MainLayoutComponent,
    data: { title: 'Album details' },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/album/album.module').then((m) => m.AlbumModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
