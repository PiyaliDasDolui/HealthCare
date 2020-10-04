import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HealthDashboardComponent } from './health-dashboard/health-dashboard.component';
import { UserModule } from './user/user.module';
import { ShoppingCartComponent } from './marketing/shopping-cart/shopping-cart.component';
import { NotificationModule } from './notification/notification.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    BrowserAnimationsModule,
    NotificationModule
  ],
  declarations: [
    AppComponent,
    HealthDashboardComponent,
    ShoppingCartComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
