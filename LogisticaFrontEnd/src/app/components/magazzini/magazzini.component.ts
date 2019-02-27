import { Component, OnInit } from '@angular/core';
import { Magazzino } from 'src/app/beans/magazzino';
import { MagazzinoService } from 'src/app/services/magazzino.service';

@Component({
  selector: 'app-magazzini',
  templateUrl: './magazzini.component.html',
  styleUrls: ['./magazzini.component.css']
})
export class MagazziniComponent implements OnInit {
  private magazzini: Magazzino[] = [];
  private magazzino: Magazzino = new Magazzino(2, "", "", 0, "", "", 0, 0, 0,[],[]);


  constructor(private magazzinoServices: MagazzinoService) {
    this.getMagazzino();
    this.getMagazzinoById(this.magazzino);
  }

  ngOnInit() {
  }
  getMagazzino() {
    this.magazzinoServices.getMagazzino()
      .subscribe(data => {
        this.magazzini = data["magazzini"];
        console.log(this.magazzini);
      });
  }
  getMagazzinoById(magazzino: Magazzino) {
    this.magazzinoServices.getById(magazzino)
      .subscribe(data => {
        console.log(data["magazzini"]);
      });
  }

}
