import { inject, Injectable } from '@angular/core';
import {
  LoginPayload,
  RegisterPayload,
} from '../core/interfaces/auth.interface';
import { tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../core/services/storage.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private readonly authService = inject(AuthService);
  private readonly storageService = inject(StorageService);
  private router = inject(Router);

  get isAuthenticated(): boolean {
    return !!this.token;
  }

  get token(): string {
    return this.storageService.getItem('token');
  }

  register(registerPayload: RegisterPayload) {
    return this.authService.register(registerPayload).pipe(
      tap((res) => {
        this.storageService.setItem('token', res.idToken);
        this.storageService.setItem('refreshToken', res.refreshToken);
        this.storageService.setItem('user', {
          email: res.email,
          id: res.localId,
        });
      })
    );
  }
  login(loginPayload: LoginPayload) {
    return this.authService.login(loginPayload).pipe(
      tap((res) => {
        this.storageService.setItem('token', res.idToken);
        this.storageService.setItem('refreshToken', res.refreshToken);
        this.storageService.setItem('user', {
          email: res.email,
          id: res.localId,
        });
      })
    );
  }

  logout() {
    this.storageService.clear();
    this.router.navigate(['/']);
  }
}
