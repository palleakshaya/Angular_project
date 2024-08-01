import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { CounterComponent } from '../counter/counter.component';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    CounterComponent,
    MatButtonModule,
    MatIconButton,
    RouterLink,
    MatIconModule,
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent {
  @Input() id: any;
  getMovieByIdex(idx: any) {
    // throw new Error('Method not implemented.');
  }
  @Output() deleteItem = new EventEmitter<any>();
  @Output() editItem = new EventEmitter<any>();

  @Input() movie = {
    name: '',
    poster: '',
    rating: '',
    summary: '',
    trailer: '',
  };
  show = true;
  msg: string = '';

  showContent() {
    this.show = this.show ? false : true;
    // if (this.show) {
    //   this.show = false;
    // } else {
    //   this.show = true;
    // }

    // this.show = !this.show  - Another method
  }
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  deleteMovie() {
    // this.movieService.deleteItem(this.id);
    // this.router.navigate(['/movies']);

    this.deleteItem.emit(this.movie);
  }
  editMovie() {
    this.editItem.emit(this.movie);
  }
  ngOnInt() {
    this.loadMovies();
  }
  loadMovies() {
    this.movieService
      .getAllMovies()
      .then((data) => {
        this.movie = data;
        // this.isLoading = false;
      })
      .catch(() => {
        // this.isLoading = false;
        this.msg = 'Something went wrong';
      });
  }
}
