import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { AuthFacade } from '../../../facades/auth.facade';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  private readonly authFacade = inject(AuthFacade);
  public showLogoutMenu = false;
  private renderer2 = inject(Renderer2);
  @ViewChild('nav') navElement!: ElementRef;
  @ViewChild('logout') logoutElement!: ElementRef;

  ngOnInit(): void {
    this.renderer2.listen('window', 'scroll', () => {
      if (this.navElement?.nativeElement) {
        if (window.scrollY > 0) {
          this.navElement.nativeElement.classList.add('scrolled');
        } else {
          this.navElement.nativeElement.classList.remove('scrolled');
        }
      }
    });
  }
  public toggleLogoutMenu() {
    this.showLogoutMenu = !this.showLogoutMenu;
  }

  public logoutFromBrowse() {
    this.authFacade.logout();
  }
}
