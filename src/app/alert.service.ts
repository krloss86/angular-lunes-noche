import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject = new Subject();
  private keepAterRouteChange = false;

  constructor(
    private router: Router
  ) {    
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        if(this.keepAterRouteChange) { 
          this.keepAterRouteChange = false;
        }else {
          this.clear();
        }
      }
    });    
  }

  clear(): void {
    this.subject.next();
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  sucess(message: string, keepAfterChange = false) : void  {
    this.keepAterRouteChange = keepAfterChange;
    this.subject.next(
      {
        type: 'success',
        text: message
      }
    );
  }

  error(message: string, keepAfterChange = false) : void  {
    this.keepAterRouteChange = keepAfterChange;
    this.subject.next(
      {
        type: 'error',
        text: message
      }
    );
  }

}
