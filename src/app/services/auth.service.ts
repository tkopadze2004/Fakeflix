import { Observable } from 'rxjs';
import {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
} from '../core/interfaces/auth.interface';
import { ApiService } from '../core/services/api.service';
import { environment } from '../../environments/environment.development';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService extends ApiService {
  private readonly firebaseApiKey = environment.firebaseApiKey;
  private readonly firebaseAuthUrl = environment.firebaseAuthUrl;

  register(params: RegisterPayload): Observable<AuthResponse> {
    return this.post<AuthResponse>(
      `${this.firebaseAuthUrl}signUp?key=${this.firebaseApiKey}`,
      params
    );
  }
  login(params: LoginPayload): Observable<AuthResponse> {
    return this.post<AuthResponse>(
      `${this.firebaseAuthUrl}signInWithPassword?key=${this.firebaseApiKey}`,
      { ...params, returnSecureToken: true }
    );
  }
}
