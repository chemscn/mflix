import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, MovieCardComponent, RatingComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
