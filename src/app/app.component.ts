import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StoreApi } from 'zustand';
import { Movie } from './models';
import { MovieService } from './services/movie.service';
import {store} from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'movieFX';
  movies: Movie[] = [];
  navbarState = store;


  constructor(public movieService: MovieService) {}
  subscriptions: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscriptions.add(
      this.movieService.getMovies().subscribe((movies: Movie[]) => {
        this.movies = movies;
        store.setState({moviesObject: []})
      })
    );
  }

  public setMovies = (movies: Movie[])=>{
    this.movies = movies;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
