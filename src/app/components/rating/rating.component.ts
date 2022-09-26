import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ImdbRating } from 'src/app/models';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent implements OnInit {
  @Input() imdb: ImdbRating;
  filledStars: number[];
  unfilledStars: number[];
  ratingText:string;
  maxStars: number = 10;

  constructor() { }

  ngOnInit(): void {
    this.filledStars = Array.from(Array(Math.round(this.imdb.rating)).keys())
    this.unfilledStars = Array.from(Array(Math.round(this.maxStars- this.imdb.rating)).keys())
    this.ratingText = `${this.imdb.rating}/${this.maxStars}`
  }

}
