import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { AsyncPipe } from '@angular/common';
import { MovieCarouselComponent } from '../../../shared/movie-carousel/movie-carousel.component';

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [AsyncPipe, MovieCarouselComponent],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ActionComponent {
  private readonly movieService = inject(MovieService);
  public actionMovies$ = this.movieService.getActionMovies();
}
