import { APP_STORAGE } from './core.module';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyStorageService {

  constructor(@Inject(APP_STORAGE) private storage) { }

  saveQuote(): void {
    this.storage.setItem('quote', 'Jak to jest być skrybą, dobrze?');
  }
}
