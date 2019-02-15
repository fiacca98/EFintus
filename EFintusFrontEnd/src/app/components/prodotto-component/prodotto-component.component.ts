import { RecensioneBean } from './../../bean/recensioneBean';
import { ProduttoreBean } from './../../bean/produttoreBean';
import { ActivatedRoute } from "@angular/router";
import { ProdottoBean } from "./../../bean/prodottoBean";
import { MessageService } from "./../../services/message-service/message.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CategorieServiceService } from 'src/app/services/categorie-service/categorie-service.service';

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

  
  constructor(
    private categoryService: CategorieServiceService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProdotto();
    this.getProduttore();
    this.getRecensione()
    this.populateProductData();

  }

  getProdotto(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.categoryService
      .getProduct(id)
      .subscribe(prodotto => (this.prodotto = prodotto));
  }

  getProduttore():void {
    const id = this.prodotto.idProduttore;
    this.categoryService
      .getProduttore(id)
      .subscribe(produttore => (this.produttore = produttore));
  }

  getRecensione():void {
    const id = this.prodotto.id;
    this.categoryService
      .getRecensione(id)
      .subscribe(recensione => (this.recensione = recensione));
  }

  populateProductData(): void {
    this.nomeProdotto = this.prodotto.nome;
   this.prezzoProdotto = this.prodotto.prezzo;
   this.coloreProdotto = this.prodotto.colore;
   this.descrizioneProdotto = this.prodotto.descrizioneProdotto;
  }

}
