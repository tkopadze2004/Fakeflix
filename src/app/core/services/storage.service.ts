import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  setItem(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  clear() {
    localStorage.clear();
  }
}
