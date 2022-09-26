import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Movie } from 'src/app/models';
@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  language: string;

  constructor() { }

  ngOnInit(): void {
    if(this.movie.languages.length > 0){
      this.language = `Language: ${this.movie.languages[0]}`;
    } else {
      this.language = 'Language: Not Available';
    }
  }

}
