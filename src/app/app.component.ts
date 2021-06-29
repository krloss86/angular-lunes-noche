import { Component, OnInit } from '@angular/core';
import Dato, { x } from './datos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //3- forma
})
export class AppComponent implements OnInit {
  
  title = 'angular-lunes-noche';
  nombre: string = '';
  algo: any = {};
  dato: Dato = new Dato('',10);

  ngOnInit(): void {
    console.log('ngOnInit');

    let dato = new Dato('valorxyz', 100);

    console.log(dato.setAtributo('dato abc'));
    console.log(dato.setDato(10));

    this.nombre = 'carlos';

    this.algo.atrx = 'pepe';
    this.algo.atry = 200;
  }
}
