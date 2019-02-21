import { HttpServiceService } from './../../services/http-service/http-service.service';
import { CategoryBean } from 'src/app/bean/CategoryBean';
import { CategorieServiceService } from './../../services/categorie-service/categorie-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterEvent, Router } from '@angular/router';
import _ from 'underscore'

@Component({
  selector: 'app-sotto-categorie-component',
  templateUrl: './sotto-categorie-component.component.html',
  styleUrls: ['./sotto-categorie-component.component.css']
})
export class SottoCategorieComponentComponent implements OnInit {

   categories: CategoryBean[] = [];
   titoloOffertaCategoria: string = "titoloOffertaCategoria (TODO MARKETING ? )"  ;
   parentCategory: string;

  constructor(  
    private httpService: HttpServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategorieServiceService,
) {

     }

  ngOnInit() {
    this.getCategories();
    this.parentCategory =  sessionStorage.getItem("parentCategory");
}


  getCategories(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.httpService.getCategorie()
      .subscribe(categories => {this.categories = categories;   
        this.categories = _.filter(this.categories,function(num){ return num.parentId == id; } );
    });
  }

  goToProductList(id: number){
    this.router.navigate(["/listaProdotti/" + id]);
  }


}
