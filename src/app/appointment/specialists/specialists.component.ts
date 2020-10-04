import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorData } from '../doctor-data';
import { DoctorResolved } from '../doctorList';

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

  bookappointment(): void {
      alert('Appointment Booked  Teporarily. Date time page design is coming soon');
  }

  ngOnInit(): void {
    const resolvedData: DoctorResolved = this.router.snapshot.data['resolvedData'];
    this.doctors = resolvedData.doctors;
  }

}
