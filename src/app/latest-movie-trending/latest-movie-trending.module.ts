import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LatestMovieTrendingRoutingModule } from './latest-movie-trending-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  imports: [CommonModule, SharedModule, LatestMovieTrendingRoutingModule],
  declarations: [MovieListComponent]
})
export class LatestMovieTrendingModule {}
