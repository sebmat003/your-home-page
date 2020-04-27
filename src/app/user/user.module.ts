import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [UserComponent, ProfileComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
