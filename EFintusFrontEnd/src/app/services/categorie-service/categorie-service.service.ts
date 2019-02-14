import { CategoryBean } from 'src/app/bean/CategoryBean';
import { CATEGORY1MOCK } from './../../mock/categoriaMock';
import { MessageService } from './../message-service/message.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import _ from 'underscore'

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {

  constructor(private messageService:MessageService) { }

  categoryData: CategoryBean[] = CATEGORY1MOCK;

  getCategories(): Observable<CategoryBean[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('CategorieServiceService: fetched category');
    return of(this.categoryData);
  }
 
  getCategory(id: number): Observable<CategoryBean> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`CategorieServiceService: category id=${id}`);
    return of(this.categoryData.find(category => category.id === id));
  }

  getCategoriesFromParentId(parentId: number): Observable<CategoryBean[]> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`CategorieServiceService: category id=${parentId}`);
    this.categoryData = _.filter(this.categoryData,function(num){ return num.parentId == parentId; } )
    return of(this.categoryData);
  }
}
