import { HttpServiceService } from "./../../services/http-service/http-service.service";
import { CategorieServiceService } from "./../../services/categorie-service/categorie-service.service";
import { RouterModule, Router } from "@angular/router";
import { CategoryBean } from "src/app/bean/CategoryBean";
import { CATEGORY1MOCK } from "./../../mock/categoriaMock";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { RecensioneBean } from "src/app/bean/recensioneBean";

@Component({
  selector: "app-categorie-component",
  templateUrl: "./categorie-component.component.html",
  styleUrls: ["./categorie-component.component.css"]
})
export class CategorieComponentComponent implements OnInit {
  fullCategories: CategoryBean[] = [];

  constructor(
    private router: Router,
    private httpService: HttpServiceService
  ) {}

  ngOnInit() {
    this.getFullCategories();
  }

  getFullCategories(): void {
    this.httpService.getCategorie().subscribe(fullCategories => {
      this.fullCategories = fullCategories;
      this.filterCategories();
    });
  }

  filterCategories() {
    var tempCategories: CategoryBean[] = [];
    this.fullCategories.forEach(element => {
      if (element.parentId == null) {
        tempCategories.push(element);
      }
    });
    this.fullCategories = tempCategories;
  }

  goToSottocategorie(category :CategoryBean) {
    sessionStorage.setItem("parentCategory", category.nome);
    this.router.navigate(["/sottocategorie/" + category.id]);
  }
}
