import { Component, Input } from '@angular/core';
import { MoviesComponent } from "../movies/movies.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MoviesComponent,FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
//   @Input() 
// movies: any;
// name: any;


@Input() movies: any;
newMovie:any={
  imagelink:"",
  title:"",
  ratings:"",
  summary:""
};
addMovie()
{
 
  this.movies.push(
    // imagelink:this.newMovie.imagelink,
    // title:this.newMovie.title,
    // ratings:this.newMovie.ratings,
    // summary : this.newMovie.summary
    this.newMovie
  );
}
 


  
}
