import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HealthCheckUpComponent } from './health-check-up/health-check-up.component';
import { HealthCheckPackagesComponent } from './health-check-packages/health-check-packages.component';


@NgModule({
  declarations: [
    HealthCheckUpComponent,
    HealthCheckPackagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HealthCheckUpComponent
      },
      {
        path: ':code',
        component: HealthCheckPackagesComponent
      }
    ])
  ]
})
export class CheckUpModule { }
