import { DoctorData } from './doctor-data';
import { Doctor } from './doctor';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  doctors: BehaviorSubject<Doctor[]> = new BehaviorSubject([]);

  constructor(private doctorsData: DoctorData) {}
  getDoctorByCode(code: string): Observable<Doctor[]> {
    // tslint:disable-next-line: member-ordering

    code = code.toLocaleLowerCase();
    const allDoctor = this.doctorsData.Doctors;
    const docs = allDoctor.filter((doctor: Doctor) => doctor.code.toLocaleLowerCase().indexOf(code) !== -1 );
    this.doctors.next(docs);

    return this.doctors;
  }
}
