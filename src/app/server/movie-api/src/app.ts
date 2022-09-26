import express, { Application, Request, Response } from "express";
import { movie_mocks as movies } from "./movie_mocks";
import cors from "cors";
import path from "path";
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  req.body;
  res.sendFile(path.join(`${__dirname}/home.html`));
});

var corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) cho
};

app.get("/movies", cors(corsOptions), (req: Request, res: Response) => {
  const genre = req.query.genre as string;
  if (genre) {
    const genreString = genre.split("");
    genreString[0] = genreString[0].toUpperCase();
    const titleCaseGenre = genreString.join("");
    const moviesFilteredByGenre = movies.filter((movie) => {
      return movie.genres.indexOf(titleCaseGenre) > -1;
    });
    res.send(moviesFilteredByGenre);
    //res.send()
  } else {
    res.send(movies);
    res.sendStatus(200);
  }
});

app.listen(3001, () => {
  console.log("Server now running on http://localhost:3001");
});
