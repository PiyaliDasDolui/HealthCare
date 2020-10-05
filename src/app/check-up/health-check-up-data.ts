import { HealthCheckUp } from './health-check-up';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HealthCheckUpData {
  checkUpData: HealthCheckUp[] = [
    {
      code: 'dbt',
      name: 'Diabeties'
    },
    {
      code: 'crd',
      name: 'Cardiac'
    },
    {
      code: 'dbt',
      name: 'Diabeties'
    },
    {
      code: 'dbt',
      name: 'Diabeties'
    }
  ];
}
