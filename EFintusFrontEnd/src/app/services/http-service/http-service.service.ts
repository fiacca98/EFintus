import { AlertService } from "./../../_services/alert.service";
import { ProdottoBean } from "src/app/bean/prodottoBean";
import { CategoryBean } from "./../../bean/categoryBean";
import { MessageService } from "./../message-service/message.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { RecensioneBean } from "src/app/bean/recensioneBean";
import { UtenteBean } from "src/app/bean/utenteBean";
import _ from "underscore";
import { ProduttoreBean } from "src/app/bean/produttoreBean";
import { Router, ActivatedRoute } from "@angular/router";
import { first } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpServiceService {
  categoryObservable: Observable<CategoryBean[]>;

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  private log(message: string) {
    this.messageService.add(`HTTPSERVICE: ${message}`);
  }

  //HTTP GET
  getCategorie(): Observable<CategoryBean[]> {
    return this.httpClient.get<CategoryBean[]>(
      "http://localhost:3000/categoria"
    );
  }

  getRecensioni(): Observable<RecensioneBean[]> {
    return this.httpClient.get<RecensioneBean[]>(
      "http://localhost:3000/recensione"
    );
  }

  getUtenti(): Observable<UtenteBean[]> {
    return this.httpClient.get<UtenteBean[]>("http://localhost:3000/utente");
  }

  getListaProdotti(): Observable<ProdottoBean[]> {
    return this.httpClient.get<ProdottoBean[]>(
      "http://localhost:3000/prodotto"
    );
  }

  getProdotto(id: number): Observable<ProdottoBean> {
    return this.httpClient.get<ProdottoBean>(
      "http://localhost:3000/prodotto/" + id
    );
  }

  getProduttore(id: number): Observable<ProduttoreBean> {
    return this.httpClient.get<ProduttoreBean>(
      "http://localhost:3000/produttore/" + id
    );
  }

  getUtente(id: number): Observable<UtenteBean> {
    return this.httpClient.get<UtenteBean>(
      "http://localhost:3000/utente/" + id
    );
  }

  getWishlist(idUtente: number): Observable<ProdottoBean[]> {
    return this.httpClient.get<ProdottoBean[]>(
      "http://localhost:3000/wishlist/" + idUtente
    );
  }
  //HTTP POST

  register(user: UtenteBean) {
    this.httpClient
      .post("http://localhost:3000/utente", user)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success("Registration successful", true);
          this.router.navigate(["/login"]);
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  login(email: string, password: string) {
    this.httpClient
      .post("http://localhost:3000/utente", {
        email: email,
        password: password
      })
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([
            this.route.snapshot.queryParams["returnUrl"] || "/"
          ]);
          this.alertService.success("Login successful", true);
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  modificaUtente(user: UtenteBean) {
    this.httpClient
      .post("http://localhost:3000/utente", user)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success("Registration successful", true);
          this.router.navigate(["/login"]);
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  modificaPagamento(any: any) {
    this.httpClient
      .post("http://localhost:3000/utente", any)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success("Registration successful", true);
          this.router.navigate(["/login"]);
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  addToWishlist(prodotto: ProdottoBean, idUtente: string | number) {
    this.httpClient
      .post("http://localhost:3000/wishlist", {prodotto: prodotto, idUtente: idUtente})
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success("Registration successful", true);
          this.router.navigate(["/login"]);
        },
        error => {
          this.alertService.error(error);
        }
      );
  }

  handleError<T>(operation = "operation", result?: T) {
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
