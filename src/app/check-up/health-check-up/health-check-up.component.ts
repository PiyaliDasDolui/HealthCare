import { Component, OnInit } from '@angular/core';
import { HealthCheckUpData } from '../health-check-up-data';

@Component({
  selector: 'app-health-check-up',
  templateUrl: './health-check-up.component.html',
  styleUrls: ['./health-check-up.component.css']
})
export class HealthCheckUpComponent implements OnInit {

  checkupData;
  constructor(private healthCheckUpdata: HealthCheckUpData) { }

  ngOnInit() {
    this.checkupData = this.healthCheckUpdata.checkUpData;
  }

}
