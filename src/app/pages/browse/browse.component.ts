import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, NavbarComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss',
})
export class BrowseComponent {
  movi = inject(MovieService);
  getTrendingMovies$ = this.movi.getAnimatedMovies();
}
