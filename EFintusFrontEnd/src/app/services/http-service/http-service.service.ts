import { ProdottoBean } from 'src/app/bean/prodottoBean';
import { CategoryBean } from './../../bean/categoryBean';
import { MessageService } from './../message-service/message.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RecensioneBean } from 'src/app/bean/recensioneBean';
import { UtenteBean } from 'src/app/bean/utenteBean';
import _ from 'underscore'
import { ProduttoreBean } from 'src/app/bean/produttoreBean';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  categoryObservable : Observable<CategoryBean[]>;


  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService) { }

    private log(message: string) {
      this.messageService.add(`HTTPSERVICE: ${message}`);
    }
  
      //HTTP GET
    getCategorie (): Observable<CategoryBean[]> {
     return this.httpClient.get<CategoryBean[]>("http://localhost:3000/categoria");
    }

    getRecensioni (): Observable<RecensioneBean[]> {
      return this.httpClient.get<RecensioneBean[]>('http://localhost:3000/recensione');
     }
 
     getUtenti (): Observable<UtenteBean[]> {
      return this.httpClient.get<UtenteBean[]>('http://localhost:3000/utente');
     }

     getListaProdotti():  Observable<ProdottoBean[]> {
      return this.httpClient.get<ProdottoBean[]>('http://localhost:3000/prodotto');
     }

     getProdotto(id: number):  Observable<ProdottoBean> {
      return this.httpClient.get<ProdottoBean>('http://localhost:3000/prodotto/'+ id);
     }

     getProduttore(id: number): Observable<ProduttoreBean>{
      return this.httpClient.get<ProduttoreBean>('http://localhost:3000/produttore/'+ id);
     }
     
     //HTTP POST
    postCategories(){
      this.httpClient.post("http://127.0.0.1:3000/customers",
      {"name":  "Customer004",
      "email":  "customer004@email.com",
      "tel":  "0000252525"
      })
      .subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {
      console.log("Error", error);
      })
    }


   handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
             // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
             // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
             // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
    
  }
