import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ContadorService {

  //creamos el valor inicial del quien emite informacion
  subjet = new BehaviorSubject<number>(10);
  observable = this.subjet.asObservable();

  //valorActual: number = 0;

  constructor() { 
    //tomar del localStorage el valor del contador
    let valorEnSessionStorage = localStorage.getItem('contador');

    //siempre son string
    if(valorEnSessionStorage) {
      //this.valorActual = parseInt(valorEnSessionStorage);
    }else {
      //this.valorActual = 10;
    }

    //localStorage.setItem('contador', ''+this.valorActual);
    
    //console.log(this.valorActual);
  }

  incrementarContador(valor: number): void {
    this.subjet.next(valor);
  }

  decrementarContador(valor: number): void {
    //this.valorActual--;
    this.subjet.next(valor);
  }

  obtenerValorActual(): number {
    //return this.valorActual;
    return this.subjet.value;
  }

  getCurrent() : Observable<number> {
    return this.observable;
  }
}
