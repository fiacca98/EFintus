import { Component, OnInit } from '@angular/core';
import { ProdottoBean } from 'src/app/bean/prodottoBean';
import _ from "underscore";
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-carrello-component',
  templateUrl: './carrello-component.component.html',
  styleUrls: ['./carrello-component.component.css']
})
export class CarrelloComponentComponent implements OnInit {

  arrayProdottiComprati: ProdottoBean[] = sessionStorage.getItem("arrayProdottiComprati") ? JSON.parse(sessionStorage.getItem("arrayProdottiComprati")) : [];
  prezzoTotale: number = 0;
  arrayProdottiFiltrato: ProdottoBean[];
  quantità: {};
  arrayIsSetted: boolean = false;

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        sessionStorage.setItem("arrayProdottiFiltrato", JSON.stringify(this.arrayProdottiFiltrato));
        console.log(this.arrayProdottiFiltrato);
      }
    });
  }

  ngOnInit() {
    this.filtraArray()
    this.addQuantità()

  }

  calcoloTotale() {
    this.prezzoTotale = 0;
    this.arrayProdottiFiltrato.forEach(element => {
      this.prezzoTotale = this.prezzoTotale + (element.prezzo * JSON.parse(element.quantita));
    });
  }

  calcoloQuantità() {
    var counts = {};
    for (var i = 0; i < this.arrayProdottiComprati.length; i++)
      counts[this.arrayProdottiComprati[i].id] = (counts[this.arrayProdottiComprati[i].id] + 1) || 1;
    this.quantità = counts;
  }


  filtraArray(): boolean {
    if (sessionStorage.getItem("arrayProdottiFiltrato")) {
      this.arrayProdottiFiltrato = JSON.parse(sessionStorage.getItem("arrayProdottiFiltrato"));
      return this.arrayIsSetted = false;
    } else {
      this.arrayProdottiFiltrato = (this.arrayProdottiComprati.filter((thing, index, self) => index === self.findIndex((t) => (t.id === thing.id))));
      return this.arrayIsSetted = true;
    }
  }

  addQuantità() {
    if (this.arrayIsSetted == true) {
      this.calcoloQuantità();
      var tempArray = Object.entries(this.quantità);
      this.arrayProdottiFiltrato.forEach(prodotto => {
        tempArray.forEach(entry => {
          let key = entry[0];
          let value = entry[1];
          if (JSON.stringify(prodotto.id) == key) {
            prodotto.quantita = value
          }
        });
      });
      console.log(this.arrayProdottiFiltrato);
    }
    this.calcoloTotale()
  }

  compra() {
    //TODO
  }


}
