import { Injectable } from '@angular/core';
import { CheckPackages } from './check-packages';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckPackagesData {
  data: CheckPackages[] = [
    {
      code: 'dbt',
      name: 'Diabetic Profile - B',
      charges: 2900,
      timing: '7:30 AM - 9.30 AM'
    },
    {
      code: 'dbt',
      name: 'Diabetic Profile - A',
      charges: 2900,
      timing: '7:30 AM - 9.30 AM'
    },
    {
      code: 'dbt',
      name: 'Diabetic Profile - C',
      charges: 2900,
      timing: '7:30 AM - 9.30 AM'
    },
    {
      code: 'dbt',
      name: 'Diabetic Profile - M',
      charges: 2900,
      timing: '7:30 AM - 9.30 AM'
    }
  ];
}
