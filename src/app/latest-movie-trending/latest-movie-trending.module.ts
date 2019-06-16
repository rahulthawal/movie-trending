import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LatestMovieTrendingRoutingModule } from './latest-movie-trending-routing.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, LatestMovieTrendingRoutingModule],
  declarations: [MovieListComponent, MovieCardComponent]
})
export class LatestMovieTrendingModule {}
