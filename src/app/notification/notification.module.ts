import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyComponent } from './notify/notify.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../user/auth.guard';

@NgModule({
  declarations: [NotifyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'notification',
        component: NotifyComponent,
        outlet: 'popup',
        canActivate: [AuthGuard]
      }
    ])
  ]
})
export class NotificationModule { }
