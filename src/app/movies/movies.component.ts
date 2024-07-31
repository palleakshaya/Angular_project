import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { CounterComponent } from '../counter/counter.component';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

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

  @Input() movie = {
    name: '',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
    rating: '9.1',
    summary:
      'Members of a black ops team must track and eliminate a gang of masked murderers.',
    trailer: '',
  };
  show = true;

  showContent() {
    this.show = this.show ? false : true;
    // if (this.show) {
    //   this.show = false;
    // } else {
    //   this.show = true;
    // }

    // this.show = !this.show  - Another method
  }
  deleteMovie() {
    this.deleteItem.emit(this.movie);
  }
}
