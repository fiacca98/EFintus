import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Magazzino } from '../beans/magazzino';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MagazzinoService {

  private url = "http://10.9.129.13:8080/EFintus2/rest/magazzino/"

  constructor(private http: HttpClient) { }

  getMagazzini(): Observable<Magazzino[]> {
    return this.http.get<Magazzino[]>(this.url + "getAll", httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getById(magazzino: Magazzino) : Observable<Magazzino> {
    return this.http.post<Magazzino>(this.url + "getById",magazzino,httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  getWorkers(magazzino: Magazzino) : Observable<Magazzino> {
    return this.http.post<Magazzino>(this.url + "getWorkers",magazzino,httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
