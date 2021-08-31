import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjemplosRoutingModule } from './ejemplos-routing.module';
import { Contador2Component } from './components/contador2/contador2.component';
import { Contador3Component } from './components/contador3/contador3.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ContadorPadreComponent } from './components/contador-padre/contador-padre.component';
import { DetailsComponent } from './components/details/details.component';
import { MasterComponent } from './components/master/master.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Contador2Component,
    Contador3Component,
    ContadorComponent,
    ContadorPadreComponent,
    DetailsComponent,
    MasterComponent,
    ReactiveformComponent,
    TemplateDrivenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EjemplosRoutingModule
  ]
})
export class EjemplosModule { }
