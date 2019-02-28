import { Component, OnInit, Input } from '@angular/core';
import { Lavoratore } from 'src/app/beans/lavoratore';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {

  @Input() obj : object[];
  private lavoratori : Lavoratore[];

  constructor() {
    console.log(this.obj);
    //this.getObject();
  }

  ngOnInit() {

  }

  getObject() {
    if(this.obj instanceof Lavoratore){
      this.lavoratori.push(this.obj);
    }
  }

}
