import { CategoryBean } from 'src/app/bean/CategoryBean';
import { CATEGORY1MOCK } from './../../mock/categoriaMock';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-categorie-component',
  templateUrl: './categorie-component.component.html',
  styleUrls: ['./categorie-component.component.css']
})
export class CategorieComponentComponent implements OnInit {

  categories: CategoryBean[] = CATEGORY1MOCK;

  constructor() { }

  ngOnInit() {
  }

}
