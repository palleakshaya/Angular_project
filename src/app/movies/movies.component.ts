import { Component, Input } from '@angular/core';
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
  @Input() movie = {
    imagelink:
      'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
    title: 'Vikram',
    ratings: '9.1',
    summary:
      'Members of a black ops team must track and eliminate a gang of masked murderers.',
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
}
