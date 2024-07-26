import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent {
  @Output() deleteItem = new EventEmitter<any>();

  @Input() movie = {
    title: 'Vikram',
    imagelink:
      'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
    summary:
      'Members of a black ops team must track and eliminate a gang of masked murderers.',
    ratings: '9.1',
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
