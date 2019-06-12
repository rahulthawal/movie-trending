import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YouTubeService {
  constructor(public http: HttpClient) {}

  // Get the Media Files
  public getLatestMovies(youtubeKey: string): Observable<any> {
    return this.http
      .get(
        'https://www.googleapis.com/youtube/v3/videos?' +
          'part=snippet%2CcontentDetails%2Cstatistics&' +
          'chart=mostPopular&' +
          'regionCode=US' +
          '&key=youtubeKey',
        { responseType: 'json' }
      )
      .pipe(map(response => response));
  }
}
