import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  constructor(public http: HttpClient) {}
  // Get the Latest Movies
  public getLatestMovies(youtubeKey: string) {
    return this.http.get(
      'https://www.googleapis.com/youtube/v3/videos?' +
        'part=snippet%2CcontentDetails%2Cstatistics&' +
        'chart=mostPopular&' +
        'regionCode=US' +
        '&key=' +
        youtubeKey,
      { responseType: 'json' }
    );
  }
}
