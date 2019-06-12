import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestMovieTrendingModule } from './latest-movie-trending/latest-movie-trending.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [LatestMovieTrendingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
