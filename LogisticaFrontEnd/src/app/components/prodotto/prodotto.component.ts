import { Component, OnInit } from '@angular/core';
import { ProdottoService } from 'src/app/services/prodotto.service';
import { Prodotto } from 'src/app/beans/prodotto';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {
  private prodotto: Prodotto[]=[];
  constructor(private prodottoService: ProdottoService) { 
    this.getProdotto();
  }

  ngOnInit() {
  }
  getProdotto() {
    this.prodottoService.getProdotto()
      .subscribe(prodotto => this.prodotto = prodotto);
  }
}
