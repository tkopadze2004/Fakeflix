import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgClass],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AlertComponent {

  @Input() type: 'success' | 'error'  = 'success'
  @Input() message:string=''
}
