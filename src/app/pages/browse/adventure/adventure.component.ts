import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { MovieCarouselComponent } from "../../../shared/movie-carousel/movie-carousel.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-adventure',
  standalone: true,
  imports: [MovieCarouselComponent,AsyncPipe],
  templateUrl: './adventure.component.html',
  styleUrl: './adventure.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AdventureComponent {
  private readonly movieService = inject(MovieService);

  public adventure$ = this.movieService.getAdventureMovies();

}
