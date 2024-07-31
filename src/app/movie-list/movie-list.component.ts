import { Component, Input } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';
import { MovieService } from '../movie.service';
// import { FormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MoviesComponent,
    // FormsModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatButtonModule,
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  movies: any = [];
  isLoading: boolean = true;
  msg = '';
  constructor(public movieService: MovieService) {
    // console.log(this.movieService.movies)
  }
  ngOnInit() {
    this.loadMovies();
  }
  loadMovies() {
    this.movieService
      .getAllMovies()
      .then((data) => {
        this.movies = data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong';
      });
  }

  deleteItem(movie: any) {
    this.movieService.deleteItem(movie).then(() => this.loadMovies());
  }

  // when delete is clicked->delete method is called->internally GET Method called so that data will be fetched from API->with that model get updated so view will be updated automatically.

  // deleteMovie() {

  // ngOnInit(): void {
  //   this.loadMovies();
  // }

  // loadMovies(): void {
  //   this.movieService.getMovieById('all') // Adjust this to your actual method for getting all movies
  //     .subscribe(movies => this.movies = movies);
  // }

  // deleteMovie(id: string): void {
  //   this.movieService.deleteMovieById(id).subscribe(() => {
  //     this.movies = this.movies.filter(movie => movie.id !== id);
  //     alert('Movie deleted successfully!');
  //   });
  // }

  // }
  // deleteMovie() {
  //   throw new Error('Method not implemented.');
  // }
  //   @Input()
  // movies: any;
  // name: any;

  // movies = [
  //   {
  //     title: 'Vikram',
  //     imagelink:
  //       'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
  //     summary:
  //       'Members of a black ops team must track and eliminate a gang of masked murderers.',
  //     ratings: '8.4',
  //   },
  //   {
  //     title: 'RRR',
  //     imagelink:
  //       'https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG',
  //     summary:
  //       'RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.',
  //     ratings: '8.8',
  //   },
  //   {
  //     title: 'Iron man 2',
  //     imagelink:
  //       'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg',
  //     summary:
  //       'With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.',
  //     ratings: '7',
  //   },
  //   {
  //     title: 'No Country for Old Men',
  //     imagelink:
  //       'https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg',
  //     summary:
  //       "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
  //     ratings: '8.1',
  //   },
  //   {
  //     title: 'Jai Bhim',
  //     imagelink:
  //       'https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg',
  //     summary:
  //       'A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case',
  //     ratings: '8.8',
  //   },
  //   {
  //     title: 'The Avengers',
  //     imagelink:
  //       'https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg',
  //     summary:
  //       "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
  //     ratings: '8',
  //   },
  //   {
  //     title: 'Interstellar',
  //     imagelink: 'https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg',
  //     summary:
  //       'When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.',
  //     ratings: '8.6',
  //   },
  //   {
  //     title: 'Baahubali',
  //     imagelink: 'https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg',
  //     summary:
  //       'In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.',
  //     ratings: '8',
  //   },
  //   {
  //     title: 'Ratatouille',
  //     imagelink:
  //       'https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=',
  //     summary:
  //       'Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.',
  //     ratings: '8',
  //   },
  //   {
  //     title: 'Seetharamam',
  //     imagelink:
  //       'https://images.tv9telugu.com/wp-content/uploads/2022/09/seetharamam-1.jpg',
  //     summary:
  //       'An orphaned soldier life changes after he receives a letter from a girl named Sita. He meets her and love blossoms between them. When he returns to her camp in Kashmir, he sends a letter to Sita that will not reach her.',
  //     ratings: '9',
  //   },
  //   {
  //     title: 'Thor: Ragnarok',
  //     imagelink:
  //       'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg',
  //     summary:
  //       'When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.',
  //     ratings: '8.8',
  //   },
  // ];

  // @Input() movies: any;
  // newMovie: any = {
  //   title: '',
  //   imagelink: '',
  //   summary: '',
  //   ratings: '',
  // };
  // addMovie() {
  //   this.movies.push(
  //     // imagelink:this.newMovie.imagelink,
  //     // title:this.newMovie.title,
  //     // ratings:this.newMovie.ratings,
  //     // summary : this.newMovie.summary
  //     this.newMovie
  //   );
  // }
}
