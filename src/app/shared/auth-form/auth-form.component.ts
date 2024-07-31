import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from '../alert/alert.component';
import { Button } from '../../core/interfaces/buttons.interface';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, AlertComponent],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AuthFormComponent {
  @Input() formGroup!: FormGroup;
  @Input() name!: string;
  @Input() warning!: string;
  @Input() formFields!: { name: string; type: string; placeholder: string }[];
  @Input() buttons!: Button[];
  @Input() redirectLabel!: string;
  @Output() formSubmit = new EventEmitter();
  @Input() errorMessage!: string | null;
  @Input() successMessage!: string | null;

 public getErrorMessage(controlName: string): string {
    const control = this.formGroup.get(controlName);
    if (!control) {
      return '';
    }

    if (
      (control.hasError('required') || control.hasError('name')) &&
      controlName === 'name'
    ) {
      return 'Please enter your name.';
    }
    if (
      (control.hasError('required') || control.hasError('email')) &&
      controlName === 'email'
    ) {
      return 'Please enter a valid email address.';
    }

    if (
      (control.hasError('minlength') ||
        control.hasError('maxlength') ||
        control.hasError('required')) &&
      controlName === 'password'
    ) {
      return 'The password should have a length between 6 and 30 characters.';
    }

    if (controlName === 'confirmPassword') {
      if (control.hasError('notMatch')) {
        return 'Passwords should match.';
      }
    }

    return '';
  }

  onButtonClick(button: Button): void {
    if (button.submit) {
      this.formSubmit.emit();
    }
  }
}
