import { CategoryBean } from 'src/app/bean/CategoryBean';
import { CATEGORY1MOCK } from './../../mock/categoriaMock';
import { MessageService } from './../message-service/message.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {

  constructor(private messageService:MessageService) { }

  getCategories(): Observable<CategoryBean[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('CategorieServiceService: fetched category');
    return of(CATEGORY1MOCK);
  }
 
  getCategory(id: number): Observable<CategoryBean> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`CategorieServiceService: category id=${id}`);
    return of(CATEGORY1MOCK.find(category => category.id === id));
  }
}
