import { Router, NavigationStart } from "@angular/router";
import { ProdottoBean } from "src/app/bean/prodottoBean";
import { HttpServiceService } from "./../../services/http-service/http-service.service";
import { Component, OnInit } from "@angular/core";
import { UtenteBean } from "src/app/bean/utenteBean";

@Component({
  selector: "app-acquisto-component",
  templateUrl: "./acquisto-component.component.html",
  styleUrls: ["./acquisto-component.component.css"]
})
export class AcquistoComponentComponent implements OnInit {
  currentUser: UtenteBean = JSON.parse(sessionStorage.getItem('currentUser'));
  metodoPagamento: string;
  prodottiDaComprare: ProdottoBean[] = JSON.parse(
    sessionStorage.getItem("arrayProdottiFiltrato")
  );
  prezzoTotale: number;

  constructor(private httpService: HttpServiceService, private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.prodottiDaComprare.length >= 1) {
          sessionStorage.setItem(
            "arrayProdottiFiltrato",
            JSON.stringify(this.prodottiDaComprare)
          );
        }
        console.log(this.prodottiDaComprare);
      }
    });
  }

  ngOnInit() {
    this.retrieveMetodoPagamento()
    this.calcoloTotale();
  }

  retrieveMetodoPagamento() {
    this.httpService
      .getMetodoPagamento(this.currentUser.id)
      .subscribe(metodoPagamento => {
        this.metodoPagamento = metodoPagamento;
      });
  }

  createUtente() {
    this.currentUser = {
      id: 1,
      nome: "mq",
      cognome: "rossomq",
      email: "mq@gmail.com",
      password: "1234",
      indirizzo: "via mq 1",
      citta: "MILANO",
      cap: "20341",
      stato: "ITALIA",
      telefono: "33241212",
      partitaIva: "1234561"
    };
    this.metodoPagamento = "Carta di credito";
  }

  calcoloTotale() {
    this.prezzoTotale = 0;
    this.prodottiDaComprare.forEach(element => {
      if (
        (element.quantita != undefined && element.quantita == 0) ||
        element.quantita == "0"
      ) {
        this.prodottiDaComprare = this.prodottiDaComprare.filter(
          obj => obj !== element
        );
      }
      this.prezzoTotale =
        this.prezzoTotale + element.prezzo * JSON.parse(element.quantita);
    });
  }

  acquista() {
this.httpService.acquistaProdotti(this.prodottiDaComprare, this.currentUser.id)
  }
}
