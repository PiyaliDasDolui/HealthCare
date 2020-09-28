import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HealthCheckUpComponent } from './health-check-up/health-check-up.component';


@NgModule({
  declarations: [
    HealthCheckUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HealthCheckUpComponent
      }
    ])
  ]
})
export class CheckUpModule { }
