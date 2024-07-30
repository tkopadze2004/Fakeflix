import { Observable } from 'rxjs';
import { AuthPayload, AuthResponse } from '../core/interfaces/auth-payload';
import { ApiService } from '../core/services/api.service';
import { environment } from '../../environments/environment.development';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService extends ApiService {
  firebaseApiKey = environment.firebaseApiKey;

  register(params: AuthPayload): Observable<AuthResponse> {
    return this.post<AuthResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.firebaseApiKey}`,
      params
    );
  }
}
