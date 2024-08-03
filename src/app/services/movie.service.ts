import { Observable } from "rxjs";
import { ApiService } from "../core/services/api.service";
import { Injectable } from "@angular/core";
import { MovieResponse } from "../core/interfaces/movie.interface";

@Injectable({providedIn:"root"})
export class MovieService extends ApiService {

  getTrendingMovies(): Observable<MovieResponse> {
    return this.get('/trending/movie/week', { language: 'en-US', sort_by: 'popularity.desc' });
  }

  getTopRatedMovies(): Observable<MovieResponse> {
    return this.get('/movie/top_rated', { region: 'US', sort_by: 'popularity.desc' });
  }

  getActionMovies(): Observable<MovieResponse> {
    return this.get('/discover/movie', { with_genres: 27, sort_by: 'popularity.desc', language: 'en-US' });
  }

  getUpcomingMovies(): Observable<MovieResponse> {
    return this.get('/movie/upcoming', { language: 'en-US' });
  }

  getNetflixTVShows(): Observable<MovieResponse> {
    return this.get('/discover/tv', { with_networks: 213, sort_by: 'popularity.desc', language: 'en-US' });
  }
  getAdventureMovies():Observable<MovieResponse> {
    return this.get('/discover/movie', { with_genres: 12, sort_by: 'popularity.desc', language: 'en-US' });
  }

  getComedyMovies(): Observable<MovieResponse> {
    return this.get('/discover/movie', { with_genres: 35, sort_by: 'popularity.desc', language: 'en-US' });
  }


  getHorrorMovies(): Observable<MovieResponse> {
    return this.get('/discover/movie', { with_genres: 27, sort_by: 'popularity.desc', language: 'en-US' });
  }

  getRomanceMovies(): Observable<MovieResponse> {
    return this.get('/discover/movie', { with_genres: 10749, sort_by: 'popularity.desc', language: 'en-US' });
  }

  getAnimatedMovies(): Observable<MovieResponse> {
    return this.get('/discover/movie', { with_genres: 16, sort_by: 'popularity.desc', language: 'en-US' });
  }
}
