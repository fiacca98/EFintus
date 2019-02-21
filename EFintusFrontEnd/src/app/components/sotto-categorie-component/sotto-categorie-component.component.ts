import { CategoryBean } from 'src/app/bean/CategoryBean';
import { CategorieServiceService } from './../../services/categorie-service/categorie-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-sotto-categorie-component',
  templateUrl: './sotto-categorie-component.component.html',
  styleUrls: ['./sotto-categorie-component.component.css']
})
export class SottoCategorieComponentComponent implements OnInit {

   parentCategory: CategoryBean;
   categories: CategoryBean[] = [];
   titoloOffertaCategoria: string;
   
  constructor(  
    
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategorieServiceService,
) {

     }

  ngOnInit() {
    this.getCategory()
    this.getCategories()

}

getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id)
      .subscribe(category => this.parentCategory = category);
      this.titoloOffertaCategoria = this.parentCategory.nome
  }

  getCategories(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategoriesFromParentId(id)
      .subscribe(categories => this.categories = categories);
      console.log(this.categories)
  }


  goToProductList(id: number){
    this.router.navigate(["/listaProdotti/" + id]);
  }

}
