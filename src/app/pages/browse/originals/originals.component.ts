import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { MovieCarouselComponent } from "../../../shared/movie-carousel/movie-carousel.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-originals',
  standalone: true,
  imports: [MovieCarouselComponent,AsyncPipe],
  templateUrl: './originals.component.html',
  styleUrl: './originals.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OriginalsComponent {
  private readonly movieService = inject(MovieService);

  public originals$ = this.movieService.getNetflixTVShows();
}
