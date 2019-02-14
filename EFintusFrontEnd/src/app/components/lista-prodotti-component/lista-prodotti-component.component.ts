import { ProdottoBean } from "./../../bean/prodottoBean";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CategorieServiceService } from "src/app/services/categorie-service/categorie-service.service";

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
    private categoryService: CategorieServiceService
  ) {}

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.categoryService
      .getProductsFromCategory(id)
      .subscribe(products => (this.products = products));
      console.log(this.products)

  }

  goToProduct(id: number) {
    this.router.navigate(["/prodotto/" + id]);
  }
}
