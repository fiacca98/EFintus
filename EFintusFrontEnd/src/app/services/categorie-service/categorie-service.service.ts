import { ProdottoBean } from './../../bean/prodottoBean';
import { CategoryBean } from 'src/app/bean/CategoryBean';
import { CATEGORY1MOCK } from './../../mock/categoriaMock';
import { MessageService } from './../message-service/message.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import _ from 'underscore'
import { PRODOTTOMOCK } from 'src/app/mock/prodottoMock';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {

  constructor(private messageService:MessageService) { }

  categoryFullData: CategoryBean[] = CATEGORY1MOCK;
  categoryFilteredData:  CategoryBean[] = [];
  productsFullData: ProdottoBean[] = PRODOTTOMOCK;
  productsFilteredData: ProdottoBean[] = [];

  getCategories(): Observable<CategoryBean[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('CategorieServiceService: fetched category');
    return of(this.categoryFullData);
  }
 
  getCategory(id: number): Observable<CategoryBean> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`CategorieServiceService: category id=${id}`);
    return of(this.categoryFullData.find(category => category.id === id));
  }

  getCategoriesFromParentId(parentId: number): Observable<CategoryBean[]> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`CategorieServiceService: category id=${parentId}`);
    this.categoryFilteredData = _.filter(this.categoryFullData,function(num){ return num.parentId == parentId; } )
    return of(this.categoryFilteredData);
  }

  getProductsFromCategory(categoryId: number): Observable<ProdottoBean[]>{
    this.messageService.add(`CategorieServiceService: category id=${categoryId}`);
    this.productsFilteredData = _.filter(this.productsFullData,function(num){ return num.IdCategoria == categoryId; } )
    return of(this.productsFilteredData);
  }
}
