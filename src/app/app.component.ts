import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from './models';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'movieFX';
  movies: Movie[] = [];
  isOpen: boolean = false;
  constructor(public movieService: MovieService) {}
  subscriptions: Subscription = new Subscription();
  ngOnInit(): void {
    this.subscriptions.add(
      this.movieService.getMovies().subscribe((movies: Movie[]) => {
        this.movies = movies;
      })
    );
  }

  public setIsOpen = (value: boolean) => {
    this.isOpen = value;
  };

  public setMovies = (movies: Movie[])=>{
    this.movies = movies;
  }

  public resetMovies = ()=>{
    this.subscriptions.add(
      this.movieService.getMovies().subscribe((movies: Movie[]) => {
        this.movies = movies;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
