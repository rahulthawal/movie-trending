import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LatestMovieTrendingModule } from './latest-movie-trending/latest-movie-trending.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [LatestMovieTrendingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
