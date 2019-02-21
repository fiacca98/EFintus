import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import { ProdottoBean } from "src/app/bean/prodottoBean";
import { CategorieServiceService } from "src/app/services/categorie-service/categorie-service.service";

@Component({
  selector: "app-sidebar-component",
  templateUrl: "./sidebar-component.component.html",
  styleUrls: ["./sidebar-component.component.css"]
})
export class SidebarComponentComponent implements OnInit {
  prodotto: ProdottoBean;
  isCartAlertOpen: boolean = false;
  isWishlistAlertOpen: boolean = false;
  constructor(
    private categoryService: CategorieServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProdotto();
  }

  getProdotto(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.categoryService
      .getProduct(id)
      .subscribe(prodotto => (this.prodotto = prodotto));
  }

  openAlert(oggetto: string) {
    switch (oggetto) {
      case "wishlist":
        this.isWishlistAlertOpen = true;
        this.addToCart();
      case "carrello":
        this.isCartAlertOpen = true;
        this.addToWishList();
    }
  }
  addToCart(): any {
    "TODO";
  }
  addToWishList(): any {
    "TODO";
  }
}
