import { UtenteBean } from "./../../bean/utenteBean";
import { HttpServiceService } from "./../../services/http-service/http-service.service";
import { Component, OnInit } from "@angular/core";
import { ProdottoBean } from "src/app/bean/prodottoBean";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Router } from "@angular/router";

@Component({
  selector: "app-wish-list-component",
  templateUrl: "./wish-list-component.component.html",
  styleUrls: ["./wish-list-component.component.css"]
})
export class WishListComponentComponent implements OnInit {
  wishlist: ProdottoBean[] = [];
  currentUser: UtenteBean = JSON.parse(sessionStorage.getItem("currentUser"));

  constructor(
    private httpService: HttpServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getWishlist();
  }

  getWishlist() {
    this.httpService.getWishlist(this.currentUser.id).subscribe(wishlist => {
      this.wishlist = wishlist;
    });
  }

  goToProduct(id: string | number) {
    this.router.navigate(["/prodotto/" + id]);
  }
}
