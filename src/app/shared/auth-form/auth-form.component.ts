import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss',
})
export class AuthFormComponent {
  @Input() formGroup!: FormGroup;
  @Input() title!: string;
  @Input() warning!: string;
  @Input() formFields!: { name: string; type: string; placeholder: string }[];
  @Input() buttons!: {
    text: string;
    type: string;
    cssClass: string;
    imgSrc?: string;
  }[];
  @Input() redirectLabel!: string;
  @Output() formSubmit = new EventEmitter();

  getErrorMessage(controlName: string): string {
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

  onButtonClick(): void {
    this.formSubmit.emit();
  }
}
