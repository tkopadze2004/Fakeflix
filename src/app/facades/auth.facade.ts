import { inject, Injectable } from '@angular/core';
import {
  LoginPayload,
  RegisterPayload,
} from '../core/interfaces/auth.interface';
import { tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../core/services/storage.service';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private readonly authService = inject(AuthService);
  storageService = inject(StorageService);

  get isAuthenticated(): boolean {
    return !!this.token;
  }

  get token(): string {
    return this.storageService.getItem('token');
  }

  get refreshToken() {
    return this.storageService.getItem('refreshToken');
  }

  get user() {
    return this.storageService.getItem('user');
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
}
