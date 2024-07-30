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

  // movie!: IMovie;
  trustedUrl!: SafeUrl;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer
  ) {
    let idx = this.route.snapshot.paramMap.get('id') || 0; // From URL
    console.log(idx);
    this.movie = this.movieService.getMovieByIdex(idx);
    console.log(this.movie);

    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.movie.trailer
    );
  }
}
