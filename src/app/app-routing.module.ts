import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalkToDoctorComponent } from './diagonisis/talk-to-doctor/talk-to-doctor.component';
import { HealthDashboardComponent } from './health-dashboard/health-dashboard.component';
import { AuthGuard } from './user/auth.guard';
// import { HealthCheckUpComponent } from './health-check-up/health-check-up.component';
// import { BuyMedicineComponent } from './buy-medicine/buy-medicine.component';
// import { BookdrappointmentComponent } from './bookdrappointment/bookdrappointment.component';

const routes: Routes = [
  {
    path: '',
    component: HealthDashboardComponent
  },
  {
    path: 'healthcheckup',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./check-up/check-up.module').then(m => m.CheckUpModule)
  },
  {
    path: 'buymedicine',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./marketing/marketing.module').then(m => m.MarketingModule)
  },
  {
    path: 'bookdrappointment',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./appointment/appointment.module').then(m => m.AppointmentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
