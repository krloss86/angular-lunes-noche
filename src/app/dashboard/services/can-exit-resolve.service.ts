import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

//defino una interfaz propia para que los componentes que quieran, lo usen
export interface CanComponentDeactivate {
  canDeactivate: () => boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;
}

@Injectable({
  providedIn: 'root'
})
export class CanExitResolveService implements CanDeactivate<CanComponentDeactivate>{

  constructor() { }
  
  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    debugger;
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
