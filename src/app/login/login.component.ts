import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router 
     ) { 
    
  }

  loginForm = this.formBuilder.group(
    {
      username:['',Validators.required],
      password:['', Validators.required]
    }
  );

  loading = false;
  submitted = false;
  
  ngOnInit(): void {
  }

  onSubmit(): void {

    this.submitted = true;

    let username = this.loginForm.controls.username.value;
    let password = this.loginForm.controls.password.value;

    if(this.loginForm.valid) {
      this.authService.login(username, password)
        .subscribe(
          data => {
            //200
            //console.log(data);
            //this.alertService.sucess('Usuario y Password correctos!!!');
            this.router.navigate(['/home']);
          },
          error => {
            //!= 200
            console.log(error);
            this.alertService.error('Usuario y Password Invalidos!!!');
          }
        );
    }
  }

  get f() {
    return this.loginForm.controls;
  }
}
