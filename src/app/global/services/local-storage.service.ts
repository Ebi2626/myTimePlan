import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }
}
