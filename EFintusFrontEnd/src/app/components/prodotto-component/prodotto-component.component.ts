import { HttpServiceService } from './../../services/http-service/http-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RecensioneBean } from './../../bean/recensioneBean';
import { ProduttoreBean } from './../../bean/produttoreBean';
import { ActivatedRoute } from "@angular/router";
import { ProdottoBean } from "./../../bean/prodottoBean";
import { MessageService } from "./../../services/message-service/message.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CategorieServiceService } from 'src/app/services/categorie-service/categorie-service.service';
import _ from 'underscore'

@Component({
  selector: "app-prodotto-component",
  templateUrl: "./prodotto-component.component.html",
  styleUrls: ["./prodotto-component.component.css"]
})
export class ProdottoComponentComponent implements OnInit {
  prodotto: ProdottoBean;
  nomeProdotto: string;
  produttore: ProduttoreBean;
  votoProdotto: string;
  prezzoProdotto: number;
  coloreProdotto: string;
  descrizioneProdotto: string;
  recensione: RecensioneBean;
  recensioneModificabile: Boolean = false;
  ratingClicked: number;
  itemIdRatingClicked: string;
  recensioni: RecensioneBean[];

  
  constructor(
    private categoryService: CategorieServiceService,
    private httpService: HttpServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //this.getProdotto();
    this.getProdotto()

  }

  getProdotto(){
  const id = +this.route.snapshot.paramMap.get("id");
  this.httpService.getProdotto(id).subscribe(prodotto => {(this.prodotto = prodotto);
  console.log(this.prodotto);
  this.getProduttore();
  this.getRecensione();
  this.populateProductData();
});
}

  getProduttore():void {
    const id = this.prodotto.idProduttore;
    this.httpService
      .getProduttore(id)
      .subscribe(produttore => (this.produttore = produttore));
  }


  //TODO
  getRecensione():void {
    const id = this.prodotto.id;
    this.categoryService
      .getRecensione(id)
      .subscribe(recensione => (this.recensione = recensione));
  }

  // getRecensione():void {
  //   const id = this.prodotto.id;
  //   this.httpService.getRecensioni()
  //     .subscribe(recensione => {(this.recensioni = recensione);
  //       this.recensioni = _.filter(this.recensioni,function(num){ return num.idProdotto == id; } );
  //       this.recensioni.forEach(element => {
  //         var 
  //         //FARE LA MEDIA DELLE RECENSIONI E PASSARLA AL PANNELLO LATERALE PER IL VOTO DEL PRODOTTO
  //       });
  //     });
  // }

  populateProductData(): void {
    this.nomeProdotto = this.prodotto.nome;
   this.prezzoProdotto = this.prodotto.prezzo;
   this.coloreProdotto = this.prodotto.colore;
   this.descrizioneProdotto = this.prodotto.descrizioneProdotto;
  }

}
