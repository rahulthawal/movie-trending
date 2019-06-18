import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const youTubeKey = '';
    const youTubeURL =
      'https://www.googleapis.com/youtube/v3/videos?' +
      'part=snippet%2CcontentDetails%2Cstatistics&' +
      'chart=mostPopular&' +
      'regionCode=US' +
      '&key=youTubeKey';
  }
}
