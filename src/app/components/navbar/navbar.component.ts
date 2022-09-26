import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isOpen: boolean = false;
  @Output() openedEvent = new EventEmitter();
  @Output() updateMovies = new EventEmitter();
  subscriptions: Subscription = new Subscription();
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
    this.subscriptions.add(
      this.movieService.getMovies(genre).subscribe((movies) => {
        this.updateMovies.emit(movies);
      })
    );
  };

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
