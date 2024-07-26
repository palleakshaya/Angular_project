import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss',
})
export class AddMovieComponent {
  newMovie: any = {
    title: '',
    imagelink: '',
    summary: '',
    ratings: '',
  };
  constructor(public movieService: MovieService) {}

  addMovie() {
    this.movieService.addMovie(this.newMovie);
    // this.movieService.movies.push(
    // imagelink:this.newMovie.imagelink,
    // title:this.newMovie.title,
    // ratings:this.newMovie.ratings,
    // summary : this.newMovie.summary
    // this.newMovie
    // );
  }
}
