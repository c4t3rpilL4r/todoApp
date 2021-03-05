import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setItem(key: string, value: any) {
    window.localStorage.setItem(key, value);
  }

  getItem(key: string) {
    const value = window.localStorage.getItem(key);

    return value;
  }

  remove(key: string) {
    window.localStorage.removeItem(key);
  }

  clear() {
    window.localStorage.clear();
  }
}
