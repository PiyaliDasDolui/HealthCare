import { Component, OnChanges, OnInit } from '@angular/core';

import { CartService } from './marketing/cart.service';
import {  slideInAnimation } from './app.animation';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnChanges, OnInit{
  title = 'HealthCare';
  totalItemsCount = 0;
  constructor(private cartService: CartService) {}

  ngOnChanges() {

  }

  ngOnInit(){
    this.cartService.sharedMessage.subscribe(message => this.totalItemsCount = +message);
  }

}
