import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MedicineData } from './medicine-data';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalItemsCount = '0';
  private message = new BehaviorSubject(this.totalItemsCount);
  sharedMessage = this.message.asObservable();
  medicines: Medicine[] = [];

  constructor() { }

  addMedicines(medicine: Medicine): void {
    this.medicines.push(medicine);
  }

  nextMessage(message: string) {
    this.message.next(message);
  }
}
