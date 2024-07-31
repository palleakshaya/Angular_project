import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  movie: any;
  isLoading: boolean = true;
  msg = '';

  // movie!: IMovie;
  trustedUrl!: SafeUrl;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL
    this.movieService
      .getMovieById(id)
      .then((data) => {
        this.movie = data;
        this.isLoading = false;
        this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.movie.trailer
        );
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong';
      });
  }
}
