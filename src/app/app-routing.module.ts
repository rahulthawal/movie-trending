import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'movie',
    pathMatch: 'full'
  },
  {
    path: 'movie',
    loadChildren: './latest-movie-trending/#LatestMovieTrendingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
