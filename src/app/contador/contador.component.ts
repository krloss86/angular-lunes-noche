import { Component, Input, OnInit } from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent implements OnInit {

  @Input() contadorHijo1?: number;

  contador?: number;
  valor: number = 0;

  //como usar el service
  constructor(private contadorService: ContadorService) { 
    //console.log(this.contadorService.obtenerValorActual());    
  }
  
  ngOnInit(): void {
    this.contador = this.contadorHijo1;
  }

  sumar(): void{
    this.contadorService.incrementarContador(this.valor);
    //usar a contadorSrevice
    //this.contadorService.incrementarContador();
    //this.contador = this.contadorService.obtenerValorActual();
  }

  restar(): void{
    this.contadorService.incrementarContador(this.valor);
    //usar a contadorSrevice
    //this.contadorService.decrementarContador();
    ///.contador = this.contadorService.obtenerValorActual();
  }


}
