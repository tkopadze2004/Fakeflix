import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { MovieCarouselComponent } from "../../../shared/movie-carousel/movie-carousel.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-comedy',
  standalone: true,
  imports: [MovieCarouselComponent,AsyncPipe],
  templateUrl: './comedy.component.html',
  styleUrl: './comedy.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ComedyComponent {
  private readonly movieService = inject(MovieService);
  public comedy$ = this.movieService.getComedyMovies();
}
