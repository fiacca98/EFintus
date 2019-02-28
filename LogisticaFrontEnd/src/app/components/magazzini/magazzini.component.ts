import { Component, OnInit } from '@angular/core';
import { Magazzino } from 'src/app/beans/magazzino';
import { MagazzinoService } from 'src/app/services/magazzino.service';
import { Lavoratore } from 'src/app/beans/lavoratore';

@Component({
  selector: 'app-magazzini',
  templateUrl: './magazzini.component.html',
  styleUrls: ['./magazzini.component.css']
})
export class MagazziniComponent implements OnInit {
  private magazzini: Magazzino[] = [];
  private magazzino: Magazzino = new Magazzino(2, "", "", 0, "", "", 0, 0, 0,[],[]);
  private lavoratori: Lavoratore[] = [];

  constructor(private magazzinoService: MagazzinoService) {
    this.getMagazzino();
  }

  ngOnInit() {
  }

  getMagazzino() {
    this.magazzinoService.getMagazzini()
      .subscribe(data => {
        this.magazzini = data["responseList"];
        console.log(this.magazzini);
      });
  }

  getDetail(id: number): void {
    this.magazzinoService.getById(this.magazzino).subscribe(data =>{
      this.lavoratori = data["responseList"];
    })
  }

  /*getMagazzinoById(magazzino: Magazzino) {
    this.magazzinoServices.getById(magazzino)
      .subscribe(data => {
        console.log(data["magazzini"]);
      });
  }*/

}
