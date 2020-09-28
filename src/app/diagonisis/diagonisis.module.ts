import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TalkToDoctorComponent } from './talk-to-doctor/talk-to-doctor.component';
import { HealthProblemComponent } from './health-problem/health-problem.component';
import { SubmitProblemComponent } from './submit-problem/submit-problem.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TalkToDoctorComponent
      },
      {
        path: 'chooseProoblem',
        component: HealthProblemComponent,
      },
      {
        path: 'chooseProoblem/submitproblem',
        component: SubmitProblemComponent
      }
    ])
  ],
  declarations: [
    TalkToDoctorComponent,
    HealthProblemComponent,
    SubmitProblemComponent
  ],
})
export class DiagonisisModule { }
