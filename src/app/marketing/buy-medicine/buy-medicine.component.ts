import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineData } from '../medicine-data';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-buy-medicine',
  templateUrl: './buy-medicine.component.html',
  styleUrls: ['./buy-medicine.component.css']
})
export class BuyMedicineComponent implements OnInit {

  medicines: Medicine[] = [];
  filteredMedicines: Medicine[] = [];
  _filterby = '';
  itemCount = 0;
  constructor(private medicineData: MedicineData,
              private cartService: CartService
    ) { }

  get filterBy(): string {
    return this._filterby;
  }

  set filterBy(value: string) {
    this._filterby = value;
    if (this._filterby) {
      this.perfirmFilter(this._filterby);
    }
  }

  perfirmFilter(filterBy: string): void {
    filterBy = filterBy.toLocaleLowerCase();
    this.filteredMedicines = this.medicines.filter((medicine: Medicine) =>
        medicine.name.toLocaleLowerCase().indexOf(filterBy) !== -1
      );
  }

  addToCart(): void {
    this.cartService.totalItemsCount = (+this.cartService.totalItemsCount + 1).toString();
    this.itemCount = +this.cartService.totalItemsCount;
    this.cartService.nextMessage(this.itemCount.toString());
  }

  newMessage() {
  }

  ngOnInit() {
    this.medicines = this.medicineData.medicines;
    this.filteredMedicines = this.medicineData.medicines;
    this.cartService.sharedMessage.subscribe(message => this.itemCount = +message)
  }

}
