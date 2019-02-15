import { RecensioneBean } from './../../bean/recensioneBean';
import { PRODUTTOREBEAN1MOCK } from './../../mock/produttoreMock';
import { ProduttoreBean } from './../../bean/produttoreBean';
import { ProdottoBean } from './../../bean/prodottoBean';
import { CategoryBean } from 'src/app/bean/CategoryBean';
import { CATEGORY1MOCK } from './../../mock/categoriaMock';
import { MessageService } from './../message-service/message.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import _ from 'underscore'
import { PRODOTTOMOCK } from 'src/app/mock/prodottoMock';
import { RECENSIONE1MOCK } from 'src/app/mock/recensioneBean';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {

  constructor(private messageService:MessageService) { }

  categoryFullData: CategoryBean[] = CATEGORY1MOCK;
  categoryFilteredData:  CategoryBean[] = [];
  productsFullData: ProdottoBean[] = PRODOTTOMOCK;
  productsFilteredData: ProdottoBean[] = [];
  produttoreFullData: ProduttoreBean[] = PRODUTTOREBEAN1MOCK
  produttoreFilteredData: ProduttoreBean[] = [];
  recensioneFullData: RecensioneBean[] = RECENSIONE1MOCK
  recensioneFilteredData: RecensioneBean[] = [];

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
    this.messageService.add(`CategorieServiceService: prodotto id=${categoryId}`);
    this.productsFilteredData = _.filter(this.productsFullData,function(num){ return num.IdCategoria == categoryId; } )
    return of(this.productsFilteredData);
  }

  getProduct(productId: number): Observable<ProdottoBean> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`CategorieServiceService: prodotto id=${productId}`);
    return of(this.productsFullData.find(product => product.id === productId));
  }

  getProduttore(produttoreId: number): Observable<ProduttoreBean>{
    this.messageService.add(`CategorieServiceService: prodotto id=${produttoreId}`);
    return of(this.produttoreFullData.find(produttore => produttore.id === produttoreId));
  }

  getRecensione(productId: number): Observable<RecensioneBean>{
    this.messageService.add(`CategorieServiceService: prodotto id=${productId}`);
    return of(this.recensioneFullData.find(recensione => recensione.idProdotto === productId));
  }

  getRecensioni(): Observable<RecensioneBean[]>{
    this.messageService.add(`CategorieServiceService: all Recensioni`);
    return of(this.recensioneFullData);
  }
}
