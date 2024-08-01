import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { BanerFacade } from '../../../facades/baner.facade';
import { map } from 'rxjs';
import { Movie } from '../../../core/interfaces/movie.interface';

@Component({
  selector: 'app-baner',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './baner.component.html',
  styleUrl: './baner.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BanerComponent {
  moviservice = inject(BanerFacade);
  currentBannerMovie!: Movie;

  currentBannerMovie$ = this.moviservice.fetchNewBannerMovie().pipe(
    map((movie) => {
      this.currentBannerMovie = movie;
      return movie;
    })
  );
}
