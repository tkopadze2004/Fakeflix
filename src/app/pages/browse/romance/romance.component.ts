import { Component, inject } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { MovieCarouselComponent } from "../../../shared/movie-carousel/movie-carousel.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-romance',
  standalone: true,
  imports: [MovieCarouselComponent,AsyncPipe],
  templateUrl: './romance.component.html',
  styleUrl: './romance.component.scss'
})
export class RomanceComponent {
  private readonly movieService = inject(MovieService);

  public romance$ = this.movieService.getRomanceMovies();
}
