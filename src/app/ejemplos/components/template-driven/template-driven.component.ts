import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  valorRadio = 'chau';
  paises = ['Bra','Arg','Par', 'Chi']; 
  
  constructor() { }

  ngOnInit(): void {
  }

  //metodo que obtiene desde el html el formulario
  submitForm(formulario: any) {
    console.log(formulario);
    //peticiones al servicios (backend)
  }
}
