import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BuyMedicineComponent } from './buy-medicine/buy-medicine.component';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CardDetailsComponent } from './card-details/card-details.component';

@NgModule({
  declarations: [
    BuyMedicineComponent,
    CardDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BuyMedicineComponent
      },
      {
        path: 'caartdetails',
        component: CardDetailsComponent
      }
    ])
  ]
})
export class MarketingModule { }
