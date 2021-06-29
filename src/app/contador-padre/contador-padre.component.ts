import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-contador-padre',
  templateUrl: './contador-padre.component.html',
  styleUrls: ['./contador-padre.component.css'],
  providers:[ContadorService]
})
export class ContadorPadreComponent implements OnInit {

  valorContador1?: number;
  valorContador2?: number;

  constructor(private contadorService: ContadorService) { }

  ngOnInit(): void {
    //this.valorContador1 = this.contadorService.obtenerValorActual();
    this.contadorService.getCurrent().subscribe(
      data =>{
        this.valorContador1 = data
        this.valorContador2 = data
      }
    );
    //this.valorContador2 = this.contadorService.obtenerValorActual();
  }

  sumar(valor: number): void{
    //usar a contadorSrevice
    //this.contadorService.incrementarContador();
    this.contadorService.incrementarContador(valor);
  }

  restar(valor: number): void{
    //usar a contadorSrevice
    this.contadorService.decrementarContador(valor);  
  }

  parentMethod(nuevoContador: number): void {
    //this.contadorService.incrementarContador();
    this.valorContador1 = this.contadorService.obtenerValorActual();
    this.valorContador2 = this.contadorService.obtenerValorActual();
  }
}
