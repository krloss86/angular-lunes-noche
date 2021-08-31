import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InformacionCliente } from '../models/informacion-cliente';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ClienteService {
  private endPoint = '/assets/datos.json';
  constructor(private htppClient: HttpClient) { }

  search(nro:string): Observable<InformacionCliente> {
   return this.htppClient.get<InformacionCliente>(`${environment.clienteEndPoint}${this.endPoint}` ); 
  }
}
