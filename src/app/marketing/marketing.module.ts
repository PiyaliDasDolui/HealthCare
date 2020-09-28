import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BuyMedicineComponent } from './buy-medicine/buy-medicine.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BuyMedicineComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BuyMedicineComponent
      }
    ])
  ]
})
export class MarketingModule { }
