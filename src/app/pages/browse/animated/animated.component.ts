import { Component, inject } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { AsyncPipe } from '@angular/common';
import { MovieCarouselComponent } from "../../../shared/movie-carousel/movie-carousel.component";

@Component({
  selector: 'app-animated',
  standalone: true,
  imports: [AsyncPipe, MovieCarouselComponent],
  templateUrl: './animated.component.html',
  styleUrl: './animated.component.scss'
})
export class AnimatedComponent {
private readonly movieService = inject(MovieService);
public animated$ = this.movieService.getAnimatedMovies();
}
