import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DatosEquipoComponent } from './components/datos-equipo/datos-equipo.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecomendacionComponent } from './components/recomendacion/recomendacion.component';
import { SaldoComponent } from './components/saldo/saldo.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ClienteDataService } from './services/cliente-data.service';
import { ClienteService } from './services/cliente.service';
import { ProfileServiceResolve } from './services/profile.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from '../login/services/jwt-interceptor.service';

@NgModule({
  declarations: [
    ContactoComponent,
    DatosEquipoComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    RecomendacionComponent,
    SaldoComponent,
    TopbarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashBoardRoutingModule
  ],
  exports:[
    ContactoComponent,
    DatosEquipoComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    RecomendacionComponent,
    SaldoComponent,
    TopbarComponent,
  ],
  providers:[
    ClienteDataService,
    ClienteService,
    ProfileServiceResolve,
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true
    }
  ]
})
export class DashboardModule { }
