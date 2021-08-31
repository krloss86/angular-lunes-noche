import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './commons/components/alert/alert.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { EjemplosModule } from './ejemplos/ejemplos.module';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EjemplosModule,
    DashboardModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [
    //2-forma: defino los @Injectables
    //ContadorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
