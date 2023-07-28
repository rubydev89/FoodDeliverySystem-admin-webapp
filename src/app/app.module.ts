import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './authentication/login/login.component';
import { SharedModule } from './shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantModule } from './restaurant/restaurant.module';
import { UserModule } from './user/user.module';
import { DriverModule } from './driver/driver.module';
import { OrderModule } from './order/order.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'login' , component: LoginComponent},
      {path: '' , redirectTo: 'login', pathMatch:'full'},
      {path: '**' , redirectTo: 'login', pathMatch:'full'}
    ]),
    AuthenticationModule,
    SharedModule,
    NgbModule,
    RestaurantModule,
    UserModule,
    DriverModule,
    OrderModule,
    ProfileModule
    //,NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }