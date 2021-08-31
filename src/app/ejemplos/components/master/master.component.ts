import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  flag = true;

  nombres: string[] = [];
  
  constructor() { }

  ngOnInit(): void {
    for(let i=0;i<10;i++) {
      //agrega en una lista al final
      this.nombres.push(`soy ${i}`);
    }
  }

}
