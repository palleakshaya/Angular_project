import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IMovie } from '../app.component';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NewMovie } from '../movie';

@Component({
  selector: 'app-edit-movie-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './edit-movie-form.component.html',
  styleUrl: './edit-movie-form.component.scss',
})
export class EditMovieFormComponent {
  movies: Array<IMovie> = [];
  movieForm: FormGroup;
  movieId: any;
  msg: string = '';
  movie: any = [];

  constructor(
    public movieService: MovieService,
    public router: Router,
    public fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.movieForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      poster: '', // [Validators.required]],
      rating: [
        '',
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      summary: '',
      //[
      //     Validators.required,
      //     Validators.minLength(50),
      //     Validators.maxLength(1000),],
      // ],
      trailer: '', // [Validators.required]],
    });
  }
  // urlValidator(control: AbstractControl) {
  //   const urlPattern =
  //     /^(https?:\/\/)?([\w-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;
  //   return urlPattern.test(control.value) ? null : { invalidUrl: true };
  // }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') as string; // Get movie ID from URL

    this.movieService
      .getMovieById(id)
      .then((data) => {
        this.movies = data; // Populate the movie object with data
        this.movieId = data.id;
        this.movieForm.patchValue(data);
      })
      .catch(() => {
        this.msg = 'Something went wrong';
      });
  }

  // editMovie() {
  //   this.movieService
  //     .updateMovie(this.movieId, this.movie)
  //     .then(() => {
  //       this.router.navigate(['/movies']); // Navigate back to the movie list after editing
  //     })
  //     .catch(() => {
  //       this.msg = 'Failed to update movie';
  //     });
  // }

  onSave() {
    if (this.movieForm.valid) {
      const updatedMovie: IMovie = { ...this.movie, ...this.movieForm.value };
      if (this.movieId) {
        this.movieService
          .updateMovie(this.movieId, updatedMovie)
          .then(() => {
            this.router.navigate(['/movies']);
          })
          .catch((error) => {
            console.log('Update failed');
            this.msg = 'Failed to update the movie';
          });
      }
      // this.router.navigate(['/movies']);
    } else {
      this.msg = 'Invalid Form';
    }
  }
  get name() {
    return this.movieForm.get('name');
  }
  get rating() {
    return this.movieForm.get('rating');
  }

  // ngOnInit() {
  //   this.loadMovies(this.movieId);
  // }
  // loadMovies(id: string) {
  //   this.movieService.getAllMovies().then((data) => {
  //     this.movies = data;
  //     // this.isLoading = false;
  //   });
  //   // .catch(() => {
  //   //   // this.isLoading = false;
  //   //   this.msg = 'Something went wrong';
  // //   // });
  // // }

  // saveMovie() {
  //   if (this.movieForm.valid) {
  //     let newMovie: NewMovie = this.movieForm.value;

  //     this.movieService.addMovie(newMovie).then(() => {
  //       this.router.navigate(['movies']);
  //     });
  //   }
  // }
  // cancelEdit() {
  //   this.router.navigate(['/movies']);
  // }
}
