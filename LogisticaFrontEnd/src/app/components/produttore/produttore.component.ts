import { Component, OnInit } from '@angular/core';
import { Produttore } from 'src/app/beans/produttore';
import { ProduttoreService } from 'src/app/services/produttore.service';

@Component({
  selector: 'app-produttore',
  templateUrl: './produttore.component.html',
  styleUrls: ['./produttore.component.css']
})
export class ProduttoreComponent implements OnInit {
  private produttore:Produttore[]=[];
  constructor(private produttoreService:ProduttoreService) { 
    this.getProduttore();
  }

  ngOnInit() {
  }
  getProduttore(){
    this.produttoreService.getProduttore()
    .subscribe(produttore => this.produttore = produttore);
  }
}
