import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MovieListComponent,
  },
  {
    path: 'films',
    redirectTo: '/movies',
    pathMatch: 'full',
  },
  {
    path: 'color',
    component: ColorGameComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];
