import { UtenteBean } from 'src/app/bean/utenteBean';
import { CategoryBean } from 'src/app/bean/CategoryBean';
import { HttpServiceService } from './../../services/http-service/http-service.service';
import { Component, OnInit } from '@angular/core';
import { RecensioneBean } from 'src/app/bean/recensioneBean';
import { Observable } from 'rxjs';

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
  }

  getRecensioni(): void {
    this.httpService.getRecensioni()
    .subscribe(recensioni => this.recensioni = recensioni);
    this.getUtenti();
  }

  getUtenti():void {
    this.httpService.getUtenti()
    .subscribe(utenti =>this.utenti = utenti);
  }

}
