import { Component, inject } from '@angular/core';
import { MovieCarouselComponent } from "../../../shared/movie-carousel/movie-carousel.component";
import { MovieService } from '../../../services/movie.service';
import { AsyncPipe, JsonPipe, KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Movie, MovieResponse } from '../../../core/interfaces/movie.interface';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [MovieCarouselComponent, AsyncPipe, NgIf, NgFor, KeyValuePipe, JsonPipe],
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  service = inject(MovieService);

  ragac$=this.service.getAdventureMovies()
}
