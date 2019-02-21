import { HttpServiceService } from './../../services/http-service/http-service.service';
import { CategorieServiceService } from './../../services/categorie-service/categorie-service.service';
import { RouterModule, Router } from '@angular/router';
import { CategoryBean } from 'src/app/bean/CategoryBean';
import { CATEGORY1MOCK } from './../../mock/categoriaMock';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-categorie-component',
  templateUrl: './categorie-component.component.html',
  styleUrls: ['./categorie-component.component.css']
})
export class CategorieComponentComponent implements OnInit {

  fullCategories: CategoryBean[] = [];
  categories: CategoryBean[] = [];

  constructor(
    private router: Router,
    private route: RouterModule,
    private categoryService: CategorieServiceService,
    private httpService: HttpServiceService
    ) { 
  }

  ngOnInit() {
    this.getFullCategories();

    this.fullCategories.forEach(element => {
      if (element.parentId == null){
        this.categories.push(element);
      }
    });
  }

  
  getFullCategories(): void {
    this.categoryService.getCategories()
    .subscribe(fullCategories => this.fullCategories= fullCategories);
  }


  goToSottocategorie(id: number){
    this.router.navigate(["/sottocategorie/" + id]);
  }

}
