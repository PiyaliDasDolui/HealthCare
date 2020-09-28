import { Component, OnInit } from '@angular/core';
import { PROBLEMS } from '../../mock-health-problems';
import { HealthProblems } from '../../health-problems';

@Component({
  selector: 'app-health-problem',
  templateUrl: './health-problem.component.html',
  styleUrls: ['./health-problem.component.css']
})
export class HealthProblemComponent implements OnInit {

  problems: HealthProblems[] = [];
  filteredProblems: HealthProblems[] = [];
  _filterProblem = '';

  get filterProblem(): string {
    return this._filterProblem;
  }

  set filterProblem(value: string) {
    this._filterProblem = value;
    this.filteredProblems = this.filterProblem ? this.performFilter(this.filterProblem) : this.problems;
  }

  performFilter(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.filteredProblems.filter((problem: HealthProblems) => problem.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
   }



  constructor() { }

  ngOnInit() {
    this.problems = PROBLEMS;
    this.filteredProblems = PROBLEMS;
  }

}
