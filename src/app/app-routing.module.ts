import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { ProfileServiceResolve } from './profile.service';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', 
    component: DashboardComponent, 
    resolve:
    {
      claveDeRetorno: ProfileServiceResolve    
    }    
  },
  {
    path: '**', component: NoEncontradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
