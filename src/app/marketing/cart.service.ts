import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalItemsCount = '0';
  private message = new BehaviorSubject(this.totalItemsCount);
  sharedMessage = this.message.asObservable();

  constructor() { }

  nextMessage(message: string) {
    this.message.next(message);
  }
}
