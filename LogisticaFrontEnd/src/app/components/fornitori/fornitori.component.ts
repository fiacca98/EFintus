import { Component, OnInit } from '@angular/core';
import { Fornitore } from 'src/app/beans/fornitore';
import { FornitoriService } from 'src/app/services/fornitori.service';

@Component({
  selector: 'app-fornitori',
  templateUrl: './fornitori.component.html',
  styleUrls: ['./fornitori.component.css']
})
export class FornitoriComponent implements OnInit {
  private fornitore: Fornitore[]=[];
  constructor(private fornitoreServices:FornitoriService) {
    this.getFornitore();
   }


  ngOnInit() {
  }
  getFornitore() {
    this.fornitoreServices.getFornitore()
      .subscribe(fornitore => this.fornitore = fornitore);
  }
}
