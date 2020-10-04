import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../notify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {

  constructor(private notificationService: NotifyService,
              private router: Router) { }

  get message(): string {
    return this.notificationService.message;
  }

  close(): void {
    this.router.navigate([{ outlets: { popup: null } }]);
    this.notificationService.isDisplay = false;
  }

  ngOnInit() {
  }

}
