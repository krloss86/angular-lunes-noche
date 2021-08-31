import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptorService } from './services/error-interceptor.service';
//import { JwtInterceptorService } from './services/jwt-interceptor.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],exports:[
    LoginComponent
  ],providers:[
    AuthService,
    {
      provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true
    },
    /*{
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true
    }*/
  ]
})
export class LoginModule { }
