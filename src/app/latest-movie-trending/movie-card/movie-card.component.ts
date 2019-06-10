import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const youTubeKey = environment.youTubeKey;
    const youTubeURL =
      'https://www.googleapis.com/youtube/v3/videos?' +
      'part=snippet%2CcontentDetails%2Cstatistics&' +
      'chart=mostPopular&' +
      'regionCode=US' +
      '&key=youTubeKey';
  }
}
