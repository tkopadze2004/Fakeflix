import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private tmdbApiKey = environment.tmdbApiKey;
  private apiUrl = environment.tmdbApiUrl;
  private http: HttpClient = inject(HttpClient);

  get<T>(path: string, params?: { [key: string]: string | number }): Observable<T> {
    const httpparams = new HttpParams({
      fromObject: { ...params, api_key: this.tmdbApiKey },
    });

    return this.http.get<T>(`${this.apiUrl}${path}`, {
      params: httpparams,
    });
  }

  post<T>(path: string, body: unknown): Observable<T> {
    return this.http.post<T>(`${path}`, body);
  }
}
