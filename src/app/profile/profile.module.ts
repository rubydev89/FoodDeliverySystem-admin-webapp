import { AuthenticationGuard } from './../services/authentication.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';



@NgModule({
  declarations: [
    ProfileEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path:'admin/:id/profile', component:ProfileEditComponent, canActivate:[AuthenticationGuard]},
      {path:'admin/:id/edit', component:ProfileEditComponent, canActivate:[AuthenticationGuard]}
    ])
  ],
  providers: []
})
export class ProfileModule { }
