import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { IMovie } from '../app.component';
import { NewMovie } from '../movie';

@Component({
  selector: 'app-add-movie-form-module',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './add-movie-form-module.component.html',
  styleUrl: './add-movie-form-module.component.scss',
})
export class AddMovieFormModuleComponent {
  movies: Array<IMovie> = [];
  movieForm: FormGroup;
  // newMovie: any = {
  //   name: '',
  //   poster: '',
  //   rating: '',
  //   summary: '',
  //   trailer: '',
  // };

  constructor(
    public movieService: MovieService,
    public router: Router,
    public fb: FormBuilder
  ) {
    this.movies = this.movieService.getNewMovie();
    this.movieForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      poster: ['', [Validators.required, this.urlValidator]],
      rating: [
        '',
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      summary: [
        '',
        [
          Validators.required,
          Validators.minLength(50),
          Validators.maxLength(1000),
        ],
      ],
      trailer: ['', [Validators.required, this.urlValidator]],
    });
  }
  urlValidator(control: AbstractControl) {
    const urlPattern =
      /^(https?:\/\/)?([\w-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;
    return urlPattern.test(control.value) ? null : { invalidUrl: true };
  }

  addMovie() {
    console.log(this.movieForm.value);
    if (this.movieForm.valid) {
      let newMovie: NewMovie = this.movieForm.value;

      this.movieService.addMovie(newMovie).then(() => {
        this.router.navigate(['movies']);
      });
    }
  }
  get name() {
    return this.movieForm.get('name');
  }

  get rating() {
    return this.movieForm.get('rating');
  }
  get poster() {
    return this.movieForm.get('poster');
  }
  get trailer() {
    return this.movieForm.get('trailer');
  }
  get summary() {
    return this.movieForm.get('summary');
  }
}
