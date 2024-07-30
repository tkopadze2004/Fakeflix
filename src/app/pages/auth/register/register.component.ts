import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthFormComponent } from '../../../shared/auth-form/auth-form.component';
import { passwordMatchValidator } from '../../../core/validators/password.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, RouterLink, AuthFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm!: FormGroup;
  formFields = [
    { name: 'name', type: 'text', placeholder: 'Your Name' },
    { name: 'email', type: 'email', placeholder: 'E-mail' },
    { name: 'password', type: 'password', placeholder: 'Password' },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Repeat your password',
    },
  ];
  buttons = [{ text: 'Sign up', type: 'submit', cssClass: 'btn btn-primary' }];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: passwordMatchValidator,
      } as AbstractControlOptions
    );
  }
}
