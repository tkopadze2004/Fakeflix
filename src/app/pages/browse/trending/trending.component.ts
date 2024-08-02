import { Component, inject } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { MovieCarouselComponent } from "../../../shared/movie-carousel/movie-carousel.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [MovieCarouselComponent,AsyncPipe],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.scss'
})
export class TrendingComponent {
  private readonly movieService = inject(MovieService);

  public trending$ = this.movieService.getTrendingMovies();
}
