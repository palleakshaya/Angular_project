import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { authGuard } from './auth.guard';
import { AddMovieFormModuleComponent } from './add-movie-form-module/add-movie-form-module.component';
import { EditMovieFormComponent } from './edit-movie-form/edit-movie-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    // component: MovieListComponent,
    children: [
      { path: '', component: MovieListComponent },
      {
        path: 'add-movie',
        component: AddMovieFormModuleComponent,
        // canActivate: [authGuard],
      },
      {
        path: 'edit-movie',
        component: EditMovieFormComponent,
        // canActivate: [authGuard],
      },

      { path: 'edit-movie/:id', component: EditMovieFormComponent },

      { path: ':id', component: MovieDetailsComponent },
    ],
  },
  {
    path: 'films',
    redirectTo: '/movies',
    pathMatch: 'full',
  },
  // {
  //   path: 'movies/add-movie',
  //   component: AddMovieComponent,
  // },
  // {
  //   path: 'movies/:id',
  //   component: MovieDetailsComponent,
  // },
  {
    path: 'color',
    component: ColorGameComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];
