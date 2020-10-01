import { Doctor } from './doctor';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorData {
    public Doctors: Doctor[] = [
    {
      id: 1,
      doctorname: 'Debrup Chakladar',
      doctorContact: '1234567890',
      experience: 2,
      code: 'Child',
      fees: 300,
      rating: 3.2
    },
    {
      id: 2,
      doctorname: 'Rana Chatterjee',
      doctorContact: '1234567890',
      experience: 2,
      code: 'ENT',
      fees: 300,
      rating: 4
    },
    {
      id: 3,
      doctorname: 'Sheuli Mukhurjee',
      doctorContact: '1234567890',
      experience: 2,
      code: 'Gyno',
      fees: 300,
      rating: 4.3
    },
    {
      id: 4,
      doctorname: 'Amitabha De',
      doctorContact: '1234567890',
      experience: 2,
      code: 'ENT',
      fees: 300,
      rating: 2.3
    },
    {
      id: 5,
      doctorname: 'Sumit Maity',
      doctorContact: '1234567890',
      experience: 2,
      code: 'Child',
      fees: 300,
      rating: 4.6
    },
    {
      id: 6,
      doctorname: 'Dolon Biswas',
      doctorContact: '1234567890',
      experience: 2,
      code: 'Gyno',
      fees: 300,
      rating: 3.5
    }
  ];


}
