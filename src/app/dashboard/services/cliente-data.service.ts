import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InformacionCliente } from '../models/informacion-cliente';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ClienteDataService {

  public datosVacios = {
    saldos: {datosSaldos: []},
    equipo: {datosEquipo: []},
    cliente: {contactos: []},
    recomendaciones: { recomendaciones: []}
  };

  private subject= new BehaviorSubject<InformacionCliente>(this.datosVacios);
  private current  = this.subject.asObservable();

  constructor() { }

  getInformacionCliente(): Observable<InformacionCliente> {
    return this.current;
  }

  updateCliente(nuevoCliente: InformacionCliente) {
    this.subject.next(nuevoCliente);
  }

  clear(): void {
    this.subject.next(this.datosVacios);
  }
}
