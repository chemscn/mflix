import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatingComponent } from '../rating/rating.component';
import { mock_movie, mock_movie_without_language } from '../test-mocks/test-mock-value';

import { MovieCardComponent } from './movie-card.component';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCardComponent, RatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);

  });

  it('should create', () => {
    component = fixture.componentInstance;
    component.movie = mock_movie;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('given that movie input of component doesnt contain a language property, should display Language: Not Available',()=>{
    component = fixture.componentInstance;
    component.movie = mock_movie_without_language;
    fixture.detectChanges();
    const div = fixture.nativeElement as HTMLDivElement;
    expect(div.innerText).toContain('Language: Not Available');
  });
  it('given that movie card is clicked, should display detail-container',()=>{
    component = fixture.componentInstance;
    component.movie = mock_movie;
    component.showMovieDetails();
    fixture.detectChanges();
    const div = fixture.nativeElement as HTMLDivElement;
    expect(div.querySelector(`.detail-container`)).toBeDefined();
  });

});
