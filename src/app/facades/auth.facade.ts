import { inject, Injectable } from '@angular/core';
import { AuthPayload } from '../core/interfaces/auth-payload';
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

  register(payload: AuthPayload) {
    return this.authService.register(payload).pipe(
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
