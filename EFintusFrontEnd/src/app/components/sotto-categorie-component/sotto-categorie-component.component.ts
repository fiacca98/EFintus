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

  // category: CategoryBean;
  categories: CategoryBean[] = [];

  constructor(  
    
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategorieServiceService,
) {

     }

  ngOnInit() {
    this.getCategories()

}

// getCategory(): void {
//     const id = +this.route.snapshot.paramMap.get('id');
//     this.categoryService.getCategory(id)
//       .subscribe(category => this.category = category);
//       console.log(this.category)
//   }

  getCategories(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategoriesFromParentId(id)
      .subscribe(categories => this.categories = categories);
      console.log(this.categories)
  }


  showDetail(id: number){
    this.router.navigate(["/sottocategorie/" + id]);
  }

}
