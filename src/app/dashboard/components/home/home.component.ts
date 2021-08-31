import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../login/services/auth.service';
import { InformacionCliente } from '../../models/informacion-cliente';
import { CanComponentDeactivate } from '../../services/can-exit-resolve.service';
import { ClienteDataService } from '../../services/cliente-data.service';
//declarar la funcion
declare function initJsFromTs(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, CanComponentDeactivate{

  guardoDatos: boolean = false;
  informacionCliente?: InformacionCliente;

  constructor(
    private authService: AuthService,
    private router: Router,
    private clienteDataService: ClienteDataService) { 
      this.clienteDataService.getInformacionCliente().subscribe(
        data => {
          //debugger;
          this.informacionCliente = data
        },
        error => {
          console.log(error);
        }
      );
  }

  ngOnInit(): void {
    //cargar el js que controla los efectos de menu
    initJsFromTs();
  }

  executeLogout(): void {
    // this.authService.logout();
    this.router.navigate(['/login']);
  }

  canDeactivate(): Observable<boolean> | boolean {
    // debugger;
    if(!this.guardoDatos) {
      const respuesta = confirm('¿Hay cambios sin guardar, confirma que quiere perderlos?');
      if(respuesta) {
        this.authService.logout();
      }
      return respuesta;
    }
    return true;
  } 
}
