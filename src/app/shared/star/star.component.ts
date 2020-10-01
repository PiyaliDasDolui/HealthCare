import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating = 2;
  starWidth = 30;
  constructor() { }

  ngOnChanges() {
    this.starWidth = this.rating * 75 / 5;
  }

}
