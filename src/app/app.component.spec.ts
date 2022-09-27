import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieService } from './services/movie.service';
import {mock_movie} from './components/test-mocks/test-mock-value';
import { movie_mocks } from 'server/movie-api/src/movie_mocks';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers:[MovieService],
      declarations: [
        AppComponent,
        NavbarComponent
      ],

    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'movieFX'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('movieFX');
  });

  it('given app component ngOninit runs, expect that it has injected MovieService', async()=>{
    component.ngOnInit();
    expect(component.movieService).toBeDefined();

  })

});
