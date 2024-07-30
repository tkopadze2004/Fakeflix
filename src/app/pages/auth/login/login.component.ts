import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthFormComponent } from '../../../shared/auth-form/auth-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, AuthFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  formFields = [
    { name: 'email', type: 'email', placeholder: 'E-mail' },
    { name: 'password', type: 'password', placeholder: 'Password' },
  ];
  buttons = [
    { text: 'Sign in', type: 'submit', cssClass: 'btn btn-primary' },
    {
      text: 'Sign in with Google',
      type: 'button',
      cssClass: 'btn btn-google',
      imgSrc: '/images/google.png',
    },
    {
      text: 'Sign in anonymously',
      type: 'button',
      cssClass: 'btn btn-anonymous',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
        ],
      ],
    });
  }
}
