import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MovieCarouselComponent } from "../../../shared/movie-carousel/movie-carousel.component";
import { MovieService } from '../../../services/movie.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-horror',
  standalone: true,
  imports: [MovieCarouselComponent,AsyncPipe],
  templateUrl: './horror.component.html',
  styleUrl: './horror.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HorrorComponent {
  private readonly movieService = inject(MovieService);

  public horror$ = this.movieService.getHorrorMovies();
}
