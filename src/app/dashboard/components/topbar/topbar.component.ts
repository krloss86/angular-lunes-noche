import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../commons/services/alert.service';
import { Profile } from '../../models/profile';
import { ClienteDataService } from '../../services/cliente-data.service';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  
  constructor(
    private activatedRouter: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private clienteDataService: ClienteDataService,
    private clienteService: ClienteService,
    private alertService: AlertService
    ) { 
    }  
    //estructura del profile
    profile?: Profile;
    loading = false;
    submitted = false;
    searchForm = this.formBuilder.group(
        {
          numeroTelefono: ['', Validators.required],
        }  
    );

  ngOnInit(): void {
    const datosCargadosEnElResolve = this.activatedRouter.snapshot.data.claveDeRetorno;
    this.profile = datosCargadosEnElResolve;
  }

  get f() {
    return this.searchForm.controls;
  }

  resetSearch(): void {
    this.searchForm.reset();
    this.clienteDataService.clear();
  }

  executeSearch(): void {
    this.submitted = true;
    this.loading = true;

    if(this.searchForm.valid) {
      const nro = this.searchForm.controls.numeroTelefono.value;
      this.clienteService.search(nro).subscribe(
        data => {
          console.log(data);
          this.clienteDataService.updateCliente(data);
          this.loading = false;
        },
        error => {
          console.log(error);
          this.alertService.error('Error consultando datos de cliente, por favor reintente');
        }
      );
    }else {
      //crear un componente modal!!!!
      console.log('formulario invalido');
    }
  }
}
