import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  formulario = this.formBuilder.group(
    {
      email: ['', [Validators.email,Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      exampleRadios:['',Validators.required],
      pais:['',Validators.required],
      tc: [false, Validators.requiredTrue]
    }
  );;//ver porque no inicializa

  valorRadio = 'chau';
  paises = ['Bra','Arg','Par', 'Chi']; 

  constructor(private formBuilder: FormBuilder) {
    //this.createForm();
  }

  ngOnInit(): void {
  }

  /*createForm(): void {
    this.formulario = this.formBuilder.group(
      {
        email: ['', [Validators.email,Validators.required]],
        password: ['', [Validators.required, Validators.minLength(3)]],
        tc:[false,Validators.requiredTrue],
        exampleRadios:['',Validators.required],
        pais:['',Validators.required]
      }
    );
  }
  */
 
  onSubmit(): void {

    if(this.formulario.invalid) {
      console.log('formulario invalido');
    }else {
      alert('ok');
    }
  }
}
