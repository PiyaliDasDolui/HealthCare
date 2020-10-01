import { Component, OnInit } from '@angular/core';

import { SpecialistData } from '../specialist-data';
import { Specialist } from '../specialist';
import { from } from 'rxjs';

@Component({
  selector: 'app-bookdrappointment',
  templateUrl: './bookdrappointment.component.html',
  styleUrls: ['./bookdrappointment.component.css']
})
export class BookdrappointmentComponent implements OnInit {

  constructor(
    private specialistData: SpecialistData
    ) { }
  pageTitle = 'Find specialist';
  _filterKeyword  = '';
  specialists: Specialist[] = [];
  filteredSpecialists: Specialist[] = [];

  get filterKeyword(): string {
    return this._filterKeyword;
  }

  set filterKeyword(value: string) {
    this._filterKeyword = value;
    this.filteredSpecialists = this.filterKeyword ? this.performFilter(value) : this.specialists;
  }

  performFilter(filterBy: string): Specialist[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.specialists.filter((specialist: Specialist) =>
      specialist.specialistName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {
    this.specialists = this.specialistData.specialists;
    this.filteredSpecialists = this.specialistData.specialists;
  }

}
