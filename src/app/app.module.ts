import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HealthDashboardComponent } from './health-dashboard/health-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthDashboardComponent,
    // HealthCheckUpComponent,
    // BuyMedicineComponent,
    // BookdrappointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
