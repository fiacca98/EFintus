import { UtenteBean } from 'src/app/bean/utenteBean';
import { CategoryBean } from 'src/app/bean/CategoryBean';
import { HttpServiceService } from './../../services/http-service/http-service.service';
import { Component, OnInit } from '@angular/core';
import { RecensioneBean } from 'src/app/bean/recensioneBean';
import { Observable } from 'rxjs';
import _ from 'underscore'

@Component({
  selector: 'recensione-component',
  templateUrl: './recensione-component.component.html',
  styleUrls: ['./recensione-component.component.css']
})
export class RecensioneComponentComponent implements OnInit {

recensioni: RecensioneBean[];
utenti: UtenteBean[];
  nomeUtente: any;

  constructor(
    private httpService: HttpServiceService
  ) { }

  ngOnInit() {
    this.getRecensioni();
    this.getUtenti()
  }

  getRecensioni(): void {
    const id = sessionStorage.getItem("idProdotto") //this.prodotto.id;
    sessionStorage.removeItem("idProdotto");
    this.httpService.getRecensioni().subscribe(recensione => {
      this.recensioni = recensione;
      this.recensioni = _.filter(this.recensioni, function(num) {
        return num.idProdotto == id;
      });
    });
  }

  getUtenti():void {
    this.httpService.getUtenti()
    .subscribe(utenti =>this.utenti = utenti);
  }

}
