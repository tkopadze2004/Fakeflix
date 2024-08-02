import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { AsyncPipe } from '@angular/common';
import { MovieCarouselComponent } from "../../../shared/movie-carousel/movie-carousel.component";

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [AsyncPipe, MovieCarouselComponent],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UpcomingComponent {
  private readonly movieService = inject(MovieService);
  public upcoming$ = this.movieService.getUpcomingMovies();
}
