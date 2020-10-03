import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  medicines: Medicine[] = [];
  title = 'Product to buy';
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.medicines = this.cartService.medicines;
  }

}
