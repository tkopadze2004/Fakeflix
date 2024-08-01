import { inject, Injectable } from "@angular/core";
import { MovieService } from "../services/movie.service";
import { map, Observable } from "rxjs";
import { Movie } from "../core/interfaces/movie.interface";


@Injectable({providedIn:"root"})
export class BanerFacade {
  private readonly movieService=inject(MovieService)

  fetchNewBannerMovie(): Observable<Movie> {
    return this.movieService.getNetflixTVShows().pipe(
      map((response) => {
        const randomIndex = Math.floor(Math.random() * response.results.length);
        return response.results[randomIndex];
      })
    );
  }
}
