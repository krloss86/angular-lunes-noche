import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador2',
  templateUrl: './contador2.component.html',
  styleUrls: ['./contador2.component.css']  
})
export class Contador2Component implements OnInit {

  @Input() contadorHijo2?: number;

  //(message)="parentMethod($event)"

  @Output() message =  new EventEmitter<number>();

  contador?: number;

  //como usar el service
  constructor() { 
    //console.log(this.contadorService.obtenerValorActual());
  }
  
  ngOnInit(): void {
    this.contador = this.contadorHijo2;/// this.contadorService.obtenerValorActual();
  }

  sumar(): void{
    //usar a contadorSrevice
    //this.contadorService.incrementarContador();
    //this.contador = this.contadorService.obtenerValorActual();
    this.message.emit(10);
  }

  restar(): void{
    //usar a contadorSrevice
    //this.contadorService.decrementarContador();
    //this.contador = this.contadorService.obtenerValorActual();
    this.message.emit(-1);
  }


}
