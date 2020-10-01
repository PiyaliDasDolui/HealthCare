import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorData } from '../doctor-data';

@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.css']
})
export class SpecialistsComponent implements OnInit {
  test;
  doctors: Doctor[] = [];

  constructor(
    private router: ActivatedRoute,
    private doctorsData: DoctorData
    ) { }

    doctorBySpeciality( code: string ) {
      code = code.toLocaleLowerCase();
      const allDoctor = this.doctorsData.Doctors;
      this.doctors = allDoctor.filter((doctor: Doctor) => doctor.code.toLocaleLowerCase().indexOf(code) !== -1 )
    }

  ngOnInit() {
    const flag = this.router.snapshot.paramMap.get('code');
    this.doctorBySpeciality(flag);
  }

}
