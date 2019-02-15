import { CategoryBean } from './../../bean/categoryBean';
import { MessageService } from './../message-service/message.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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
  
    private categoryUrl = 'api/CATEGORYDB';  // URL to web api


    getCategories (): Observable<CategoryBean[]> {
     return this.httpClient.get<CategoryBean[]>("api/CATEGORYDB");
    }

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
