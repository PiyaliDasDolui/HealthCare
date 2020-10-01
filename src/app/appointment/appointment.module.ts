import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookdrappointmentComponent } from './bookdrappointment/bookdrappointment.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import { SpecialistDetailsComponent } from './specialist-details/specialist-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BookdrappointmentComponent,
    SpecialistsComponent,
    SpecialistDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: BookdrappointmentComponent
      },
      {
        path: ':code',
        component: SpecialistsComponent
      },
      {
        path: 'specialists/:id',
        component: SpecialistDetailsComponent
      }
    ])
  ]
})
export class AppointmentModule { }
