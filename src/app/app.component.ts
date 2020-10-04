import { Component, OnChanges, OnInit } from '@angular/core';

import { CartService } from './marketing/cart.service';
import {  slideInAnimation } from './app.animation';
import { Router } from '@angular/router';
import { NotifyService } from './notification/notify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnChanges, OnInit {
  title = 'HealthCare';
  totalItemsCount = 0;
  constructor(private cartService: CartService,
              private router: Router,
              private notificationService: NotifyService) {}

  displayNotification() {
    if (this.notificationService.isDisplay) {
      this.router.navigate([{ outlets: { popup: null }}]);
      this.notificationService.isDisplay = false;
    } else {
      this.router.navigate([{ outlets: { popup: ['notification'] }}]);
      this.notificationService.isDisplay = true;
    }
    // this.router.navigate([{ outlets: { popup: ['messages'] } }]); // Works

  }
  ngOnChanges() {

  }

  ngOnInit() {
    this.cartService.sharedMessage.subscribe(message => this.totalItemsCount = +message);
  }

}
