import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  movieData: any = [];
  posterData: any = [];
  movieSearch: string;

  constructor(private movieService: MovieService) {}

  getMovieData(){
    this.movieService.getMovie(this.movieSearch).subscribe(
      (response) => {
        this.movieData = response;
        console.log(response);
      }
    )
  }

}
