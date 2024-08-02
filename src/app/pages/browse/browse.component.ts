import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BanerComponent } from './baner/baner.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { TrendingComponent } from './trending/trending.component';
import { OriginalsComponent } from './originals/originals.component';
import { ActionComponent } from './action/action.component';
import { RomanceComponent } from "./romance/romance.component";
import { HorrorComponent } from "./horror/horror.component";
import { AdventureComponent } from "./adventure/adventure.component";

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [
    AsyncPipe,
    NavbarComponent,
    BanerComponent,
    TopRatedComponent,
    TrendingComponent,
    OriginalsComponent,
    ActionComponent,
    RomanceComponent,
    HorrorComponent,
    AdventureComponent
],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowseComponent {}
