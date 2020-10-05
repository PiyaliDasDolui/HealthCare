import { Component, OnInit } from '@angular/core';
import { CheckPackagesData } from '../check-packages-data';
import { CheckPackages } from '../check-packages';
import { ActivatedRoute } from '@angular/router';

@Component(
  {
    selector: 'app-health-check-packages',
    templateUrl: './health-check-packages.component.html',
    styleUrls: ['./health-check-packages.component.css']
  }
)
export class HealthCheckPackagesComponent implements OnInit{
  packages: CheckPackages[];
  constructor(private checkPackagesData: CheckPackagesData,
              private router: ActivatedRoute
    ) {}

    ngOnInit(): void {
      const code = this.router.snapshot.paramMap.get('code').toLocaleLowerCase();
      this.packages = this.checkPackagesData.data.filter((datas: CheckPackages) =>
          datas.code.toLocaleLowerCase().indexOf(code) !== -1);
    }
}
