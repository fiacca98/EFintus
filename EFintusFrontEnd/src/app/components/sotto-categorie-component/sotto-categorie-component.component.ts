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

  category: CategoryBean;

  constructor(  
    
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategorieServiceService) {

     }

  ngOnInit() {
    this.getCategory()

}

getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id)
      .subscribe(category => this.category = category);
  }

}
