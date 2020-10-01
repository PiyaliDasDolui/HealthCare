import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-buy-medicine',
  templateUrl: './buy-medicine.component.html',
  styleUrls: ['./buy-medicine.component.css']
})
export class BuyMedicineComponent implements OnInit {

  medicines: Medicine[] = [];
  filteredMedicines: Medicine[] = [];

  constructor() { }

  ngOnInit() {

  }

}
