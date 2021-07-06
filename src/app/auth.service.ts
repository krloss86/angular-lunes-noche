import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`https://reqres.in/api/login`, { username, password })
      .pipe(
        map((user) => {
          //guarado en localStorage el token 
          let token = JSON.stringify(user);
          localStorage.setItem('currentUsre', user);
          return user;
        })
      )
  }

  logout(): void {
    //limpiamos los datos del local
    localStorage.removeItem('user');
  }
}
