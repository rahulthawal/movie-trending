import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LatestMovieTrendingRoutingModule } from './latest-movie-trending-routing.module';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  imports: [CommonModule, LatestMovieTrendingRoutingModule],
  declarations: [MoviesComponent]
})
export class LatestMovieTrendingModule {}
