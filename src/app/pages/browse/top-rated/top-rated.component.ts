import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MovieCarouselComponent } from '../../../shared/movie-carousel/movie-carousel.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-top-rated',
  standalone: true,
  imports: [MovieCarouselComponent, AsyncPipe],
  templateUrl: './top-rated.component.html',
  styleUrl: './top-rated.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopRatedComponent {
  private readonly movieService = inject(MovieService);

  public topRated$ = this.movieService.getTopRatedMovies();
}
