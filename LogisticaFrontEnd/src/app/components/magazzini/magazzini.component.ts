import { Component, OnInit } from '@angular/core';
import { Magazzino } from 'src/app/beans/magazzino';
import { MagazzinoService } from 'src/app/services/magazzino.service';

@Component({
  selector: 'app-magazzini',
  templateUrl: './magazzini.component.html',
  styleUrls: ['./magazzini.component.css']
})
export class MagazziniComponent implements OnInit {
  private magazzini: Magazzino[]=[];
  constructor(private magazzinoServices:MagazzinoService) {
    this.getMagazzino();
   }

  ngOnInit() {
  }
  getMagazzino() {
    this.magazzinoServices.getMagazzino()
      .subscribe(magazzini => this.magazzini = magazzini);
  }
}
