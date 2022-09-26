import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  _baseUrl: string = 'http://localhost:3001';

  getMovies = (genre?: string):Observable<Movie[]>=>{
    const url = genre ? `${this._baseUrl}/movies/?genre=${genre}`: `${this._baseUrl}/movies`;
    return this.http.get<Movie[]>(url)
  }
}
