import { HttpServiceService } from './../../services/http-service/http-service.service';
import { ProdottoBean } from "./../../bean/prodottoBean";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CategorieServiceService } from "src/app/services/categorie-service/categorie-service.service";
import _ from 'underscore'

@Component({
  selector: "app-lista-prodotti-component",
  templateUrl: "./lista-prodotti-component.component.html",
  styleUrls: ["./lista-prodotti-component.component.css"]
})
export class ListaProdottiComponentComponent implements OnInit {
  products: ProdottoBean[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpServiceService
  ) {}

  ngOnInit() {
    this.getProductList();
  }


  getProductList() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.httpService.getListaProdotti()
      .subscribe(products => {(this.products = products);
        this.products = _.filter(this.products,function(num){ return num.IdCategoria == id; } )
      });
  }


  goToProduct(id: number) {
    this.router.navigate(["/prodotto/" + id]);
  }
}
