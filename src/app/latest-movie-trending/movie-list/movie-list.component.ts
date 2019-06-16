import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/shared/youtube/youtubeService';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies = [];

  constructor(private youtube: YoutubeService) {}

  ngOnInit() {
    const movies = [];
    this.youtube.getLatestMovies('').subscribe(moviesObject => {
      Object.keys(moviesObject).forEach(moviesObjectKey => {
        if (moviesObjectKey === 'items') {
          movies.push(moviesObject[moviesObjectKey]);
        }
      });
      this.movies = movies;
      console.log(this.movies);
    });
  }
}
