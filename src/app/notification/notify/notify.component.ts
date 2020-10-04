import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {

  constructor(private notificationService: NotifyService) { }

  get message(): string {
    return this.notificationService.message;
  }

  close(): void {

  }

  ngOnInit() {
  }

}
