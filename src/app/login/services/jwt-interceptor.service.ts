import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   // debugger;
    const userLogged = localStorage.getItem('currentUser');
    //const userLogged = JSON.parse(userLoggedStr);
    if(userLogged) {
        req = req.clone(
          {
            setHeaders:{
              Autorization: `Bearer ${userLogged}`,
              Token2Aux: 'blablabla'
            }
          }
        )
    }

    return next.handle(req);
  }
}
