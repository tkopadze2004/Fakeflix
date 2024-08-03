import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthFormComponent } from '../../../shared/auth-form/auth-form.component';
import { LoginPayload } from '../../../core/interfaces/auth.interface';
import { AuthFacade } from '../../../facades/auth.facade';
import { catchError, delay, Subject, takeUntil, tap, throwError } from 'rxjs';
import { loginButtons, loginFormFields } from '../../../core/utils/auth.utils';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, AuthFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly authFacade = inject(AuthFacade);
  public loginForm!: FormGroup;
  private router = inject(Router);
  private sub$ = new Subject();
  public errorMessage: string | null = null;
  public successMessagge: string | null = null;
  public formFields = loginFormFields;
  public buttons = loginButtons;
  private fb = inject(FormBuilder);

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

  handleFormSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }
    this.errorMessage = null;
    this.successMessagge = null;
    const payload = this.loginForm.value as LoginPayload as {
      email: string;
      password: string;
    };

    this.authFacade
      .login(payload)
      .pipe(
        takeUntil(this.sub$),
        catchError(({ error }) => {
          this.errorMessage = error.error.message;
          return throwError(() => error.error.message);
        }),
        tap(() => {
          this.successMessagge = 'Login Successful!';
        }),
        delay(2000)
      )
      .subscribe(() => {
        this.router.navigate(['/browse']);
      });
  }
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
