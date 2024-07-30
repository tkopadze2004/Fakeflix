import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

Injectable({ providedIn: 'root' });
export class ApiService {
  http: HttpClient = inject(HttpClient);
  post<T>(path: string, body: any): Observable<T> {
    return this.http.post<T>(`${path}`, body);
  }
}
