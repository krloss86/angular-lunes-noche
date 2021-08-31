import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileServiceResolve } from "./services/profile.service";
import { HomeComponent } from "./components/home/home.component";
import { HomeGuardService } from "./services/home-guard.service";
import { CanExitResolveService } from "./services/can-exit-resolve.service";

const routes: Routes = [    
    {
      path: 'home', 
      component: HomeComponent, 
      resolve:
      {
        claveDeRetorno: ProfileServiceResolve    
      },
      canActivate: [HomeGuardService],
      canDeactivate:[CanExitResolveService]
    }   
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashBoardRoutingModule { }
  