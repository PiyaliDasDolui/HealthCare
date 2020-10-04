import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  currentDate = new Date();
  message = 'this.currentDate.toLocaleDateString();';
  isDisplay = false;
  constructor() { }
}
