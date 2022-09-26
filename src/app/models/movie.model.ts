export interface Movie {
  _id: string;
  title: string;
  fullplot: string;
  plot: string;
  type: string;
  released: string;
  poster: string;
  num_mflix_comments: number;
  rated: string;
  runtime: number;
  genres: string[];
  cast: string[];
  languages: string[];
  directors: string[];
  countries: string[];
  writers: string[];
  awards: Award[];
  lastupdated: string;
  year: number;
  imdb: ImdbRating;
  tomatoes?:any;
}

export interface Award {
  wins: number;
  nominations: number;
  text: string;
}

export interface ImdbRating {
  rating: number;
  votes: number;
  id: number;
}
