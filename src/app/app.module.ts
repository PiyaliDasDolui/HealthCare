import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HealthDashboardComponent } from './health-dashboard/health-dashboard.component';
import { UserModule } from './user/user.module';
import { ShoppingCartComponent } from './marketing/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthDashboardComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
