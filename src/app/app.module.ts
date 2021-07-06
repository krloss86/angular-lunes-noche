import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ContadorComponent } from './contador/contador.component';
import { Contador2Component } from './contador2/contador2.component';
import { Contador3Component } from './contador3/contador3.component';
import { ContadorPadreComponent } from './contador-padre/contador-padre.component';
import { ContadorService } from './contador.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DatosEquipoComponent } from './datos-equipo/datos-equipo.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecomendacionComponent } from './recomendacion/recomendacion.component';
import { SaldoComponent } from './saldo/saldo.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DetailsComponent,
    LoginComponent,
    TemplateDrivenComponent,
    ReactiveformComponent,
    ContadorComponent,
    Contador2Component,
    Contador3Component,
    ContadorPadreComponent,
    DashboardComponent,
    ContactoComponent,
    DatosEquipoComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    RecomendacionComponent,
    SaldoComponent,
    TopbarComponent,
    AlertComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    //2-forma: defino los @Injectables
    //ContadorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
