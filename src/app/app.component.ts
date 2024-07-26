import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CounterComponent } from './counter/counter.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@Component({
  selector: 'app-root',

  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MovieListComponent,
    CounterComponent,
    ColorGameComponent,
    ColorBoxComponent,
    PagenotfoundComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  movies = [
    {
      imagelink:
        'https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG',
      title: 'RRR',
      ratings: '8.8',
      summary:
        'RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.',
    },
    {
      imagelink:
        'https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg',
      title: 'Jai Bheem',
      ratings: '8.8',
      summary:
        'A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case',
    },
    {
      imagelink: 'https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg',
      title: 'Baahubali',
      ratings: '8',
      summary:
        'In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.',
    },
  ];
  // colorList: any;
}
