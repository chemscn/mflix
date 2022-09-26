import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isOpen: boolean = false;
  @Output() openedEvent = new EventEmitter();
  @Output() updateMovies = new EventEmitter();
  genres: string[] = [
    'Drama',
    'History',
    'War',
    'Comedy',
    'Fantasy',
    'Documentary',
    'Short',
    'Western',
    'Family',
    'Adventure',
    'Animation',
    'Romance',
    'Horror',
    'Action',
    'Crime',
    'Sport',
    'Thriller',
    'Mystery',
  ];
  constructor(public movieService: MovieService) {}

  ngOnInit(): void {}

  public toggleSidebar = () => {
    this.isOpen = !this.isOpen;
    this.openedEvent.emit(this.isOpen);
  };

  public getMoviesByGenre = (genre: string) => {
    this.movieService.getMovies(genre).subscribe((movies) => {
      this.updateMovies.emit(movies);
    });
  };
}
