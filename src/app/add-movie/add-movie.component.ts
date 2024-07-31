import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss',
})
export class AddMovieComponent {
  newMovie: any = {
    name: '',
    poster: '',
    rating: '',
    summary: '',
    trailer: '',
  };
  constructor(public movieService: MovieService, public route: Router) {}

  addMovie(newMovie: any) {
    this.movieService.addMovie(this.newMovie).then(() => {
      this.route.navigate(['movies']);
    });

    // this.movieService.movies.push(
    // imagelink:this.newMovie.imagelink,
    // title:this.newMovie.title,
    // ratings:this.newMovie.ratings,
    // summary : this.newMovie.summary
    // this.newMovie
    // );
  }
}
