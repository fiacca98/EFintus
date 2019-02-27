import { UtenteBean } from './../../bean/utenteBean';
import { HttpServiceService } from './../../services/http-service/http-service.service';
import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/bean/marketingBean';
import { ProdottoBean } from 'src/app/bean/prodottoBean';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  currentUser: UtenteBean;
  users: UtenteBean[] = [];
  currentEvent: Evento;
  prodottiScontati: ProdottoBean[];
    

  constructor(private httpService: HttpServiceService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.getEvento()
    this.recuperaProdottiScontati();
  }

  recuperaProdottiScontati(){
    this.httpService.getProdottiScontati().subscribe(prodottiScontati => {
      this.prodottiScontati = prodottiScontati;
    });
  }

  getEvento(){
    this.httpService.getEvento().subscribe(evento => {
      this.currentEvent = evento;
    });
  }

}