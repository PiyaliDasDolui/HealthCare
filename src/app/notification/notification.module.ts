import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyComponent } from './notify/notify.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotifyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'notification',
        component: NotifyComponent,
        outlet: 'popup'
      }
    ])
  ]
})
export class NotificationModule { }
