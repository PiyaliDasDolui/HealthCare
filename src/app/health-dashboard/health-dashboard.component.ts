import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-dashboard',
  templateUrl: './health-dashboard.component.html',
  styleUrls: ['./health-dashboard.component.css']
})
export class HealthDashboardComponent implements OnInit {
  pageTitle = 'Welcome';
  constructor() { }

  ngOnInit() {
  }

}
