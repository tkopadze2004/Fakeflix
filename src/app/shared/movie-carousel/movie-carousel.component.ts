import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  HostListener,
  inject,
} from '@angular/core';
import { DatePipe, DecimalPipe, NgClass} from '@angular/common';
import { Movie } from '../../core/interfaces/movie.interface';

@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [NgClass, DatePipe, DecimalPipe],
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCarouselComponent implements AfterViewInit {
  private renderer = inject(Renderer2);
  private cdr = inject(ChangeDetectorRef);
  public isExpanded: boolean = false;
  public selectedMovie: Movie | null = null;

  @Input() movies: Movie[] = [];
  @Input() section!: string;
  @Input() itemWidth: number = 222;
  @Input() itemsToScroll: number = 6;
  @Input() imageBaseUrl: string = 'https://image.tmdb.org/t/p/w780/';

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.adjustItemsToScroll();
    const scrollContainerEl = this.scrollContainer.nativeElement;
    if (scrollContainerEl) {
      this.renderer.listen(scrollContainerEl, 'scroll', () => {
        const isScrolledToLeft = scrollContainerEl.scrollLeft === 0;
        this.isExpanded = !isScrolledToLeft;
        this.cdr.detectChanges();
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.adjustItemsToScroll();
  }

  private adjustItemsToScroll(): void {
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 600) {
      this.itemsToScroll = 1;
    } else if (viewportWidth < 900) {
      this.itemsToScroll = 2;
    } else {
      this.itemsToScroll = 5;
    }
    this.cdr.detectChanges();
  }

  scrollLeft(): void {
    this.scroll('left');
  }

  scrollRight(): void {
    this.scroll('right');
  }

  private scroll(direction: 'left' | 'right'): void {
    const scrollAmount = this.itemWidth * this.itemsToScroll;
    const scrollContainerEl = this.scrollContainer.nativeElement;
    const currentScrollLeft = scrollContainerEl.scrollLeft;

    let newScrollLeft =
      direction === 'left'
        ? currentScrollLeft - scrollAmount
        : currentScrollLeft + scrollAmount;

    newScrollLeft = Math.max(
      0,
      Math.min(
        newScrollLeft,
        scrollContainerEl.scrollWidth - scrollContainerEl.clientWidth
      )
    );

    const start = currentScrollLeft;
    const end = newScrollLeft;
    const duration = 500;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      scrollContainerEl.scrollLeft = start + (end - start) * progress;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  getImageUrl(backdropPath: string): string {
    return `${this.imageBaseUrl}${backdropPath}`;
  }

  getTitleOrName(movie: Movie): string {
    return movie.title || movie.name || 'Unknown Title';
  }

  showMovieInfo(movie: Movie): void {
    this.selectedMovie = movie;
    this.cdr.detectChanges();
  }

  closeMovieInfo(): void {
    this.selectedMovie = null;
    this.cdr.detectChanges();
  }
}
