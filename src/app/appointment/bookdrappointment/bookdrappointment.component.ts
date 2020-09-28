import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookdrappointment',
  templateUrl: './bookdrappointment.component.html',
  styleUrls: ['./bookdrappointment.component.css']
})
export class BookdrappointmentComponent implements OnInit {

  constructor() { }
  pageTitle = 'Find specialist';
  _filterSpecialist  = '';

  get filterSpecialist(): string {
    return this._filterSpecialist;
  }

  set filterSpecialist(value: string) {
    this._filterSpecialist = value;
  }



  ngOnInit() {
  }

}
