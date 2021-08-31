import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ProfileServiceResolve implements Resolve<any>{

  constructor(private httpClient: HttpClient) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile> {
    //consulto al servicio para obtener los datos de usuario logueado (profile)
    return this.httpClient.get<Profile>('https://reqres.in/api/users/2');
  }
}
