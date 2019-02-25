import { HttpServiceService } from "./../../services/http-service/http-service.service";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import { ProdottoBean } from "src/app/bean/prodottoBean";

@Component({
  selector: "app-sidebar-component",
  templateUrl: "./sidebar-component.component.html",
  styleUrls: ["./sidebar-component.component.css"]
})
export class SidebarComponentComponent implements OnInit {
  arrayProdottiComprati: Array<ProdottoBean> = sessionStorage.getItem(
    "arrayProdottiComprati"
  )
    ? JSON.parse(sessionStorage.getItem("arrayProdottiComprati"))
    : [];
  prodotto: ProdottoBean;
  isCartAlertOpen: boolean = false;
  isWishlistAlertOpen: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpServiceService
  ) {}

  ngOnInit() {
    this.getProdotto();
  }

  getProdotto(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.httpService
      .getProdotto(id)
      .subscribe(prodotto => (this.prodotto = prodotto));
  }

  openAlert(oggetto: string) {
if (oggetto  == "wishlist") this.addToWishList();
if (oggetto  == "carrello") this.addToCart();
    }
  
  addToCart(): any {
    this.arrayProdottiComprati.push(this.prodotto);
    sessionStorage.setItem(
      "arrayProdottiComprati",
      JSON.stringify(this.arrayProdottiComprati)
    );
    alert("Prodotto aggiunto al carrello con successo")
    console.log(this.arrayProdottiComprati);
  }

  addToWishList(): any {
    if (sessionStorage.getItem("currentUser")) {
      this.httpService.addToWishlist(
        this.prodotto,
        JSON.parse(sessionStorage.getItem("currentUser")).id
      );
      this.isWishlistAlertOpen = true;
    } else this.openAlertWishlist();
  }

  openAlertWishlist() {
    if (confirm("Per aggiungere il prodotto alla wishlist devi aver effettuato l'acceso. Vuoi effettuarlo ora?")) {
      this.router.navigate(["/login"]);
    } else null;
  }
}
