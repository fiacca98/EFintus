import { Component, OnInit } from '@angular/core';
import { Lavoratore } from 'src/app/beans/lavoratore';

@Component({
  selector: 'app-lavoratore',
  templateUrl: './lavoratore.component.html',
  styleUrls: ['./lavoratore.component.css']
})
export class LavoratoreComponent implements OnInit {
  private lavoratore:Lavoratore[]=[];
  constructor() { 
  }

  ngOnInit() {
  }

}
