import { HttpClient } from '@angular/common/http';
import { movie_mocks } from 'server/movie-api/src/movie_mocks';
import { of } from 'rxjs';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let movieService: MovieService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    movieService = new MovieService(httpClientSpy);
  });

  it('should be created', () => {
    expect(movieService).toBeTruthy();
  });

  it('given getMovies() is called from movieService, should return all movies', () => {
    const mock_movies: any = movie_mocks;

    httpClientSpy.get.and.returnValue(of(mock_movies));

    movieService.getMovies().subscribe({
      next: (movies) => {
        expect(movies).withContext('expected movies').toEqual(mock_movies);
        expect(movies.length).toBe(28);
      },
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });

  it('given getMovies() is called with genre param, should return movies with param only', () => {
    const mock_movies_by_genre: any = movie_mocks.filter((movie) => {
      return movie.genres.indexOf('Drama') > -1;
    });;

    httpClientSpy.get.and.returnValue(of(mock_movies_by_genre));

    movieService.getMovies('drama').subscribe({
      next: (movies) => {
        expect(movies).withContext('expected movies').toEqual(mock_movies_by_genre);
        expect(movies.length).toBe(11);
      },
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });
});
