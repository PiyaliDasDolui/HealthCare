import { Specialist } from './specialist';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialistData {
    public specialists: Specialist[] = [
    {
      id: 1,
      specialistName: 'ENT'
    },
    {
      id: 2,
      specialistName: 'CHILD'
    },
    {
      id: 3,
      specialistName: 'GYNO',
      }
  ];


}
